# Aula 1: Guia do Aluno

## O que você vai construir

Nesta aula, você vai montar a estrutura visual inicial do app `Localiza Mobile`.

O foco ainda nao e fazer a localizacao funcionar. O objetivo e deixar a tela organizada e pronta para receber a logica nas proximas aulas.

## Ideia central

Nesta aula, vamos aprender fazendo. Em vez de estudar todos os conceitos antes, voce vai construir a tela e entender cada parte enquanto implementa.

## Resultado esperado

Ao final da aula, sua tela deve ter:

- um titulo
- um subtitulo
- um card de status
- um card de localizacao atual
- um card de acoes
- um card de historico

Nao se preocupe se os botoes ainda nao fizerem tudo. Nesta etapa, o mais importante e a estrutura visual.

## Conceitos rapidos

- interface: o que o usuario ve e usa
- componente: um bloco da tela, como `View`, `Text` ou `ScrollView`
- layout: a forma como os elementos ficam distribuidos na tela
- learning by doing: aprender construindo e observando o resultado

## Arquivos que voce vai usar

- `app/index.tsx`
- `app/_layout.tsx`

## Preparacao

Se ainda nao fez isso, instale as dependencias:

```bash
npm install
```

Inicie o projeto:

```bash
npm start
```

Se preferir, tambem pode usar:

```bash
npx expo start
```

## Componentes desta aula

Voce vai trabalhar principalmente com:

- `SafeAreaView` de `react-native-safe-area-context`
- `ScrollView`
- `View`
- `Text`
- `TouchableOpacity`

## Passo a passo sugerido

1. abra o arquivo `app/index.tsx`
2. execute o projeto e observe o que aparece na tela
3. crie o titulo `Localiza Mobile`
4. adicione um subtitulo curto explicando o objetivo do app
5. organize a tela em cards
6. crie os titulos dos cards: `Status do aplicativo`, `Localizacao atual`, `Acoes` e `Ultimas localizacoes`
7. adicione textos e botoes de exemplo para simular a interface final
8. ajuste espacamento, tamanho de fonte e alinhamento

## Checklist

Antes de encerrar a aula, confira se voce conseguiu:

- rodar o app no Expo
- encontrar e editar `app/index.tsx`
- montar os blocos principais da interface
- usar pelo menos `SafeAreaView`, `ScrollView`, `View` e `Text`
- deixar a tela legivel e organizada

## Dicas

- faca uma parte pequena por vez e teste logo em seguida
- compare a estrutura da sua tela com o objetivo da aula
- se algo nao funcionar, volte ao ultimo ponto em que a tela estava correta
- nao tente resolver a logica de localizacao agora

## Desafio opcional

Se terminar antes, experimente:

- mudar cores dos cards
- ajustar o tamanho do titulo
- reorganizar botoes para melhorar a leitura

## Entrega da aula

Ao final, voce deve mostrar uma tela inicial organizada, com a estrutura principal pronta para receber a logica nas proximas aulas.

## Proxima etapa

Na Aula 2, voce vai trabalhar com estados, permissao de localizacao e exibicao da posicao atual.
