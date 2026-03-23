# Aula 4: Tratamento de Erros, Organização e Validação Final

Este material serve como apoio para condução da aula. A versão voltada diretamente aos alunos está em `README_aluno.md`.

## Objetivo da aula

Revisar a robustez da aplicação, consolidar a separação entre interface e lógica e validar o comportamento final do projeto.

## Abordagem da aula

O encerramento também segue `learning by doing`: em vez de apenas discutir boas práticas, o aluno valida o app, encontra falhas reais, interpreta o fluxo e faz pequenos refinamentos com base no que testou.

Ao final desta aula, o aluno deverá conseguir:

- tratar falhas comuns do fluxo de localização
- explicar a função do hook `useLocationManager`
- revisar o comportamento da aplicação de ponta a ponta
- validar a qualidade básica do projeto com lint

## Conteúdos trabalhados

- tratamento de erros e estados especiais
- organização da lógica em hook customizado
- revisão de usabilidade
- validação final do projeto

## Conceitos breves

- robustez é a capacidade do app de continuar compreensível mesmo quando algo falha
- separação de responsabilidades facilita manutenção e leitura
- validar não é só testar se funciona, mas verificar se o comportamento faz sentido para o usuário
- revisão final consolida aprendizagem porque obriga o aluno a explicar o que construiu

## Arquivos de referência

- `hooks/useLocationManager.ts`
- `app/index.tsx`
- `app/_layout.tsx`

## Situações que o app precisa comunicar bem

- permissão negada
- erro ao obter localização
- erro ao iniciar rastreamento
- ausência temporária de dados

## Mão na massa

Sequência sugerida para a implementação:

1. testar os principais fluxos da aplicação
2. forçar cenários de erro e observar a resposta da interface
3. revisar o hook e identificar responsabilidades centrais
4. ajustar mensagens, nomes e organização do código
5. executar o lint e fazer a validação final

## Organização do código

Nesta etapa, discuta com os alunos a separação entre:

- lógica da aplicação
- integração com API nativa
- renderização da interface

Mostre que o hook `useLocationManager` centraliza regras de negócio e simplifica o componente visual principal.

## Checklist de validação

Verifique se a aplicação:

- solicita permissão ao abrir
- mostra o status da permissão
- obtém a localização atual
- atualiza a localização por botão
- inicia e para o rastreamento
- mantém histórico das últimas leituras
- exibe mensagens de erro quando necessário

## Comandos úteis

Executar o projeto:

```bash
npm start
```

Executar lint:

```bash
npm run lint
```

Abrir no Android:

```bash
npm run android
```

Abrir na Web:

```bash
npm run web
```

## Critérios de avaliação

Sugestão de critérios para correção:

- funcionamento da solicitação de permissão
- exibição correta da localização atual
- implementação correta do rastreamento
- remoção correta da assinatura ao parar
- histórico funcionando adequadamente
- clareza da interface
- organização do código

## Desafios extras

Após concluir a versão principal, os alunos podem evoluir o projeto com:

- tela separada para histórico
- integração com mapa
- persistência local dos registros
- exibição de data completa do histórico
- melhorias visuais na interface

## Encerramento

Ao final desta aula, o aluno deve entregar um app que:

- rode no Expo
- peça permissão de localização
- mostre a localização atual
- permita iniciar e parar rastreamento
- mantenha histórico das últimas leituras
- apresente mensagens claras para o usuário
