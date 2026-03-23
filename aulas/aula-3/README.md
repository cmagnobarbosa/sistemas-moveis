# Aula 3: Rastreamento Contínuo e Histórico

Este material serve como apoio para condução da aula. A versão voltada diretamente aos alunos está em `README_aluno.md`.

## Objetivo da aula

Implementar o monitoramento contínuo da localização, permitir interromper o rastreamento e armazenar as últimas leituras.

## Abordagem da aula

Nesta aula, o aluno aprende observando comportamento em tempo real. O valor pedagógico está em iniciar o rastreamento, ver a interface mudar, alimentar o histórico e corrigir problemas de fluxo durante a prática.

Ao final desta aula, o aluno deverá conseguir:

- iniciar rastreamento com `watchPositionAsync`
- parar o rastreamento corretamente
- evitar múltiplas assinaturas simultâneas
- manter um histórico limitado de localizações

## Conteúdos trabalhados

- assinaturas de localização
- uso de `useRef` para armazenar subscription
- atualização contínua de estado
- renderização de listas com `map`

## Conceitos breves

- rastreamento contínuo é diferente de uma consulta pontual
- assinatura representa uma escuta ativa de eventos do sistema
- `useRef` ajuda a guardar valores persistentes sem causar nova renderização
- histórico é uma forma simples de transformar eventos em dados visíveis

## Arquivos de referência

- `hooks/useLocationManager.ts`
- `app/index.tsx`

## Fluxo funcional da aula

### 1. Iniciar rastreamento

O botão `Iniciar rastreamento` deve observar mudanças de posição com base em:

- intervalo de 5 segundos
- deslocamento mínimo de 10 metros

### 2. Atualizar interface

Enquanto o rastreamento estiver ativo, o app deve:

- atualizar a localização visível
- exibir o status como ativo
- registrar cada nova leitura no histórico

### 3. Parar rastreamento

O botão `Parar rastreamento` deve:

- remover a assinatura ativa
- impedir novas atualizações
- alterar o estado visual para inativo

### 4. Montar histórico

Cada nova leitura deve ser adicionada a uma lista com:

- latitude
- longitude
- horário do registro

O histórico deve ser limitado aos 5 registros mais recentes.

## Mão na massa

Sequência sugerida para a implementação:

1. adicionar o botão de iniciar rastreamento
2. criar a assinatura com `watchPositionAsync`
3. atualizar estado e interface a cada nova posição
4. salvar cada leitura no histórico
5. implementar o botão de parar rastreamento e validar o cleanup

## Pontos de aprendizagem

- diferença entre obter localização atual e observar mudanças contínuas
- importância do cleanup
- atualização imutável de arrays
- renderização de itens dinâmicos na interface

## Exercício sugerido

Peça para os alunos implementarem:

1. o botão de iniciar rastreamento
2. o botão de parar rastreamento
3. o histórico limitado a 5 registros
4. a exibição do horário de cada leitura

## Entrega esperada da aula

Ao final da aula, o aluno deve ter:

- rastreamento contínuo funcional
- parada correta do monitoramento
- histórico de localizações visível na interface

## Próxima aula

Na Aula 4, o foco será robustez, tratamento de erros, revisão de arquitetura e validação final da aplicação.
