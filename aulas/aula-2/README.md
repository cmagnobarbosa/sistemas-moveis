# Aula 2: Estados, Permissão e Localização Atual

Este material serve como apoio para condução da aula. A versão voltada diretamente aos alunos está em `README_aluno.md`.

## Objetivo da aula

Modelar os estados da aplicação, solicitar a permissão de localização e buscar a posição atual do dispositivo.

## Abordagem da aula

O foco aqui é aprender implementando: cada estado criado deve produzir uma mudança perceptível na interface. O aluno não estuda estado de forma abstrata; ele vê o efeito prático de cada decisão na tela.

Ao final desta aula, o aluno deverá conseguir:

- identificar os estados necessários da tela
- usar `useState` e `useEffect`
- solicitar permissão ao abrir o app
- obter e exibir a localização atual

## Conteúdos trabalhados

- gerenciamento de estado
- inicialização com `useEffect`
- integração com `expo-location`
- feedback de carregamento e erro

## Conceitos breves

- estado é a informação que pode mudar ao longo da execução do app
- `useEffect` permite executar ações quando o componente entra em cena
- programação assíncrona é necessária quando o app depende de respostas do sistema
- permissões fazem parte do fluxo funcional, não são um detalhe secundário

## Arquivos de referência

- `app/index.tsx`
- `hooks/useLocationManager.ts`

## Estados principais

Os alunos devem reconhecer e implementar:

- localização atual
- histórico
- mensagem de erro
- status da permissão
- status de rastreamento
- estado de carregamento

## Mão na massa

Sequência sugerida para a implementação:

1. criar os estados principais no hook
2. disparar a solicitação de permissão ao abrir a tela
3. refletir o status da permissão na interface
4. buscar a localização atual quando a permissão for concedida
5. mostrar loading, sucesso ou erro conforme o retorno real

## Fluxo funcional da aula

### 1. Solicitar permissão

Ao iniciar a aplicação, a permissão de localização deve ser solicitada automaticamente.

### 2. Tratar resposta

Se a permissão for concedida:

- atualizar o status para permitido
- buscar a localização atual

Se a permissão for negada:

- atualizar o status para negado
- exibir mensagem de erro
- impedir ações dependentes da localização

### 3. Obter localização atual

Depois da permissão, o app deve:

- iniciar o carregamento
- chamar a API de localização
- armazenar latitude, longitude e precisão
- exibir os dados na tela

## Pontos de aprendizagem

- chamada assíncrona com `async/await`
- sincronização entre estado e interface
- exibição condicional de conteúdo
- tratamento de ausência temporária de dados

## Exercício sugerido

Peça para os alunos implementarem:

1. o estado de permissão
2. o estado de localização atual
3. a mensagem de erro
4. a indicação visual de carregamento

## Entrega esperada da aula

Ao final da aula, o aluno deve ter:

- solicitação de permissão funcionando
- status de permissão aparecendo na tela
- localização atual sendo exibida quando disponível

## Próxima aula

Na Aula 3, o foco será implementar o rastreamento contínuo e construir o histórico das leituras.
