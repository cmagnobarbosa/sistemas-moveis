# Aula 2: Guia do Aluno

## O que você vai construir

Nesta aula, voce vai fazer a interface reagir a estados reais da aplicacao.

O foco agora e:

- pedir permissao de localizacao
- mostrar o status dessa permissao
- buscar a localizacao atual
- exibir loading, erro ou sucesso na tela

## Ideia central

Nesta etapa, aprender fazendo significa observar como cada estado muda a interface. Sempre que voce criar ou atualizar um estado, pergunte: o que o usuario deve ver agora?

## Resultado esperado

Ao final da aula, sua aplicacao deve:

- solicitar permissao ao abrir
- informar se a permissao foi concedida ou negada
- buscar a localizacao atual quando permitido
- mostrar latitude, longitude e precisao quando houver dados

## Conceitos rapidos

- estado: informacao que muda com o uso do app
- `useEffect`: executa uma acao em momentos importantes do ciclo do componente
- assíncrono: algo que depende de uma resposta futura, como a permissao do sistema
- feedback visual: resposta da interface para mostrar o que esta acontecendo

## Arquivos que você vai usar

- `hooks/useLocationManager.ts`
- `app/index.tsx`

## Passo a passo sugerido

1. abra `hooks/useLocationManager.ts`
2. crie os estados principais da aula
3. implemente a solicitacao de permissao ao abrir a tela
4. atualize o status da permissao conforme a resposta do sistema
5. chame a busca da localizacao atual quando a permissao for concedida
6. exiba os dados na interface em `app/index.tsx`
7. adicione mensagens para loading e erro

## Estados desta aula

Voce vai trabalhar principalmente com:

- status da permissao
- localizacao atual
- mensagem de erro
- estado de carregamento

## Checklist

Antes de encerrar a aula, confira se voce conseguiu:

- usar `useState` para controlar a interface
- usar `useEffect` para iniciar a solicitacao de permissao
- mostrar um texto de status para a permissao
- exibir a localizacao atual quando ela estiver disponivel
- tratar pelo menos um caso de erro ou ausencia de dados

## Dicas

- implemente um estado por vez
- teste a interface sempre que fizer uma mudanca pequena
- se a permissao for negada, observe se o app continua compreensivel
- evite misturar toda a logica dentro do componente visual

## Desafio opcional

Se terminar antes, experimente:

- melhorar a mensagem de erro para o usuario
- mostrar um texto diferente enquanto a permissao estiver sendo verificada
- ajustar a exibicao da precisao da localizacao

## Entrega da aula

Ao final, voce deve apresentar uma tela que reage ao fluxo de permissao e exibe a localizacao atual quando o acesso for concedido.

## Próxima etapa

Na Aula 3, voce vai implementar rastreamento continuo e montar o historico das leituras.
