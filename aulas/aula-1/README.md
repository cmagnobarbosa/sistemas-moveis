# Aula 1: Estrutura Visual e Contexto do Projeto

Este material serve como apoio para condução da aula. A versão voltada diretamente aos alunos está em `README_aluno.md`.

## Objetivo da aula

Apresentar o problema que a aplicação resolve, preparar o ambiente e construir a interface inicial da tela principal.

## Abordagem da aula

Esta aula segue a lógica de `learning by doing`: o aluno entende o problema enquanto constrói a primeira versão visível da interface. A ideia não é explicar todos os conceitos antes, mas introduzi-los no momento em que eles se tornam necessários.

Ao final desta aula, o aluno deverá conseguir:

- explicar o propósito do app
- executar o projeto com Expo
- identificar os blocos visuais da tela
- montar a estrutura base da interface

## Conteúdos trabalhados

- visão geral do projeto
- execução do app com Expo
- composição visual com React Native
- organização inicial da tela em seções

## Visão pedagógica

- priorize resultado visual rápido para aumentar entendimento do problema
- introduza conceitos curtos junto com a prática, sem abrir uma frente teórica longa
- use a tela final como referência, mas permita que cada aluno monte sua própria versão inicial
- trate esta aula como base estrutural, não como etapa de lógica de negócio

## Conceitos breves

- interface é a parte visível com a qual o usuário interage
- componente é um bloco reutilizável da tela
- layout é a forma como os elementos são organizados visualmente
- começar pela interface ajuda o aluno a enxergar rapidamente resultado prático

## Arquivos de referência

- `app/index.tsx`
- `app/_layout.tsx`

## Resultado esperado ao fim da aula

O aluno deve sair com uma tela organizada em blocos visuais, com título, subtítulo, cards e botões posicionados, mesmo que ainda sem regras de negócio completas.

## Preparação do ambiente

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

## Problema proposto

O app `Localiza Mobile` deve:

- solicitar permissão de localização
- mostrar a localização atual do dispositivo
- permitir atualização manual
- iniciar e parar rastreamento
- manter um histórico resumido das leituras

## Estrutura visual esperada

Oriente os alunos a montar uma tela com:

- título
- subtítulo
- card de status
- card de localização atual
- card de ações
- card de histórico

## Componentes sugeridos

Nesta aula, o foco está em montar a interface com:

- `SafeAreaView` de `react-native-safe-area-context`
- `ScrollView`
- `View`
- `Text`
- `TouchableOpacity`

## Mão na massa

Sequência sugerida para a implementação:

1. executar o projeto e observar a tela atual
2. criar o título e o subtítulo
3. separar a tela em cards
4. inserir rótulos e botões mesmo sem funcionalidade completa
5. ajustar espaçamento, hierarquia visual e legibilidade

## Estratégia de condução

Uma sequência simples para conduzir a aula:

1. apresentar rapidamente o objetivo do aplicativo
2. executar o projeto e mostrar a estrutura do arquivo `app/index.tsx`
3. pedir que os alunos reproduzam a organização visual principal
4. circular pela turma corrigindo estrutura, nomenclatura e composição
5. fechar a aula com comparação entre versões produzidas

## Discussão em sala

Antes de programar, discuta:

- por que apps pedem permissão?
- qual a diferença entre localização atual e rastreamento contínuo?
- quais informações são relevantes para o usuário?
- como a interface deve reagir quando ainda não há dados?

## Entrega esperada da aula

Ao final da aula, o aluno deve ter:

- o projeto rodando no Expo
- a tela principal estruturada visualmente
- os blocos principais visíveis, mesmo sem lógica completa

## Próxima aula

Na Aula 2, o foco será modelar os estados da aplicação e iniciar a solicitação de permissão de localização.
