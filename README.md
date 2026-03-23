# Tutorial Pedagógico: App de Localização com Expo e React Native

## Visão geral

Este projeto foi desenvolvido como base para aprendizagem de desenvolvimento mobile com **Expo** e **React Native**.

O objetivo é orientar os alunos na construção de uma aplicação que:

- solicite permissão de localização
- obtenha a localização atual do dispositivo
- exiba latitude, longitude e precisão
- permita iniciar e parar o rastreamento contínuo
- mantenha um histórico das últimas localizações
- apresente feedback visual de status e erro

Ao final da atividade, os alunos deverão ser capazes de recriar uma aplicação equivalente à implementada neste repositório.

## Objetivos de aprendizagem

Ao concluir esta prática, o aluno deverá conseguir:

- estruturar uma tela com React Native
- utilizar `useState`, `useEffect` e `useRef`
- trabalhar com permissões do dispositivo
- integrar a biblioteca `expo-location`
- tratar estados de carregamento, sucesso e erro
- organizar regras de negócio em um hook customizado
- renderizar listas com histórico de dados

## Tecnologias utilizadas

- Expo
- React Native
- TypeScript
- Expo Router
- expo-location

## O que a aplicação faz

A aplicação possui uma tela principal chamada `Localiza Mobile` com os seguintes blocos:

- status do aplicativo
- localização atual
- ações do usuário
- histórico das últimas localizações

O comportamento principal está em `app/index.tsx`.

## Fluxo funcional da aplicação

### 1. Abertura do app

Ao iniciar a aplicação, a permissão de localização é solicitada automaticamente.

### 2. Permissão concedida

Quando o usuário permite o acesso à localização, o app:

- altera o status para permitido
- busca a localização atual
- exibe latitude, longitude e precisão

### 3. Permissão negada

Se a permissão for negada, o app:

- informa que a permissão foi negada
- bloqueia ações que dependem da localização

### 4. Atualização manual

O botão `Atualizar localização` realiza uma nova leitura da posição atual.

### 5. Rastreamento contínuo

O botão `Iniciar rastreamento` passa a observar mudanças de posição com base em:

- intervalo de tempo de 5 segundos
- deslocamento mínimo de 10 metros

### 6. Encerramento do rastreamento

O botão `Parar rastreamento` remove a assinatura ativa e encerra o monitoramento.

### 7. Histórico

Cada nova leitura é adicionada ao histórico, limitado aos 5 registros mais recentes.

## Estrutura esperada de aprendizagem

Este projeto pode ser trabalhado em etapas. A recomendação é que o aluno implemente um recurso por vez.

## Etapa 1: Entender o problema

Antes de programar, discuta com os alunos:

- por que um app precisa pedir permissão?
- qual a diferença entre localização atual e rastreamento?
- quais dados devem ser exibidos ao usuário?
- o que deve acontecer se houver erro?

## Etapa 2: Preparar o ambiente

Instale as dependências:

```bash
npm install
```

Inicie o projeto:

```bash
npm start
```

Também é possível usar:

```bash
npx expo start
```

## Etapa 3: Construir a interface base

Oriente os alunos a montar uma tela com:

- título
- subtítulo
- card de status
- card de localização atual
- card de ações
- card de histórico

Nesta etapa, o foco está na composição visual com:

- `SafeAreaView` de `react-native-safe-area-context`
- `ScrollView`
- `View`
- `Text`
- `TouchableOpacity`

## Etapa 4: Definir os estados

Os alunos devem identificar os estados necessários para controlar a aplicação:

- localização atual
- histórico
- mensagem de erro
- status da permissão
- status de rastreamento
- estado de carregamento

Essa etapa é importante para mostrar que a interface depende diretamente dos estados da aplicação.

## Etapa 5: Organizar a lógica em um hook customizado

O projeto centraliza a lógica de localização em um hook chamado `useLocationManager`, disponível em `hooks/useLocationManager.ts`.

Essa decisão é importante para ensinar separação entre:

- lógica da aplicação
- integração com API nativa
- renderização da interface

## Etapa 6: Solicitar permissão de localização

O próximo passo é implementar a solicitação de permissão ao abrir a tela.

Pontos de aprendizagem:

- uso de `useEffect` para inicialização
- chamada assíncrona
- atualização de estado após resposta do sistema

## Etapa 7: Obter a localização atual

Após a permissão ser concedida, o app deve buscar a posição atual do dispositivo.

Nesta etapa, os alunos devem aprender a:

- iniciar carregamento
- chamar a API de localização
- armazenar coordenadas
- tratar possíveis falhas

## Etapa 8: Exibir os dados ao usuário

Depois da leitura da posição, a interface deve mostrar:

- latitude
- longitude
- precisão

Se ainda não houver dados, a tela deve exibir uma mensagem de placeholder.

## Etapa 9: Implementar rastreamento contínuo

O rastreamento contínuo permite que a posição seja atualizada automaticamente.

Conceitos trabalhados:

- assinatura de observação
- callback de atualização
- monitoramento por tempo e distância

## Etapa 10: Parar o rastreamento

O aluno deve aprender que não basta iniciar o monitoramento. Também é necessário:

- remover a assinatura
- impedir múltiplas observações simultâneas
- atualizar o estado visual do app

## Etapa 11: Criar o histórico

Cada nova localização deve ser adicionada a uma lista.

Com essa parte, os alunos praticam:

- manipulação de arrays
- atualização imutável de estado
- limitação de itens exibidos
- renderização com `map`

## Etapa 12: Tratar erros e estados especiais

O app precisa comunicar bem situações como:

- permissão negada
- erro ao obter localização
- erro ao iniciar rastreamento
- ausência temporária de dados

Esse é um ponto importante de usabilidade e robustez.

## Sugestão de sequência para aulas

### Aula 1

- apresentar o problema
- explorar a interface desejada
- criar a estrutura visual da tela

### Aula 2

- modelar estados
- solicitar permissão
- obter localização atual

### Aula 3

- implementar rastreamento contínuo
- parar rastreamento corretamente
- atualizar histórico

### Aula 4

- tratar erros
- revisar organização do código
- validar o comportamento final

## Materiais por aula

### Aula 1

- Guia do professor: [aulas/aula-1/README.md](./aulas/aula-1/README.md)
- Guia do aluno: [aulas/aula-1/README_aluno.md](./aulas/aula-1/README_aluno.md)

### Aula 2

- Guia do professor: [aulas/aula-2/README.md](./aulas/aula-2/README.md)
- Guia do aluno: [aulas/aula-2/README_aluno.md](./aulas/aula-2/README_aluno.md)

### Aula 3

- Guia do professor: [aulas/aula-3/README.md](./aulas/aula-3/README.md)
- Guia do aluno: [aulas/aula-3/README_aluno.md](./aulas/aula-3/README_aluno.md)

### Aula 4

- Guia do professor: [aulas/aula-4/README.md](./aulas/aula-4/README.md)
- Guia do aluno: [aulas/aula-4/README_aluno.md](./aulas/aula-4/README_aluno.md)

## Proposta de atividade prática

Os alunos deverão construir uma aplicação que atenda aos seguintes requisitos:

1. Solicitar permissão de localização ao abrir o app.
2. Exibir o status da permissão.
3. Mostrar a localização atual do dispositivo.
4. Atualizar a localização manualmente por botão.
5. Iniciar o rastreamento contínuo.
6. Permitir parar o rastreamento.
7. Armazenar e exibir as 5 últimas localizações.
8. Exibir mensagens de erro quando necessário.

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

## Organização da navegação

O arquivo `app/_layout.tsx` utiliza o componente `Tabs` do **Expo Router**, focado atualmente apenas na tela `index`.

Para expandir o projeto em sala de aula, isso pode ser usado como ponto de partida para discutir:

- criação de novas rotas e abas (ex: uma aba `explore.tsx` para o Histórico)
- consistência entre rotas e arquivos
- manutenção de navegação em apps com Expo Router

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

## Entrega esperada do aluno

Ao final, o aluno deve entregar um app que:

- rode no Expo
- peça permissão de localização
- mostre a localização atual
- permita iniciar e parar rastreamento
- mantenha histórico das últimas leituras
- apresente mensagens claras para o usuário
