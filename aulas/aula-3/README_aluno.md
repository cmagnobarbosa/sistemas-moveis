# Aula 3: Guia do Aluno

## O que você vai construir

Nesta aula, voce vai transformar o app em algo que acompanha mudancas de localizacao ao longo do tempo.

O foco agora e:

- iniciar o rastreamento continuo
- parar o rastreamento corretamente
- guardar as ultimas localizacoes
- mostrar esse historico na tela

## Ideia central

Aprender fazendo, nesta aula, significa observar eventos reais acontecendo. Quando o rastreamento estiver ativo, cada nova leitura deve provocar uma mudanca visivel na interface.

## Resultado esperado

Ao final da aula, sua aplicacao deve:

- iniciar o rastreamento por botao
- exibir quando o rastreamento estiver ativo
- atualizar a localizacao automaticamente
- registrar as ultimas leituras em uma lista
- parar o monitoramento quando o usuario pedir

## Conceitos rapidos

- rastreamento continuo: atualizacao automatica da posicao ao longo do tempo
- assinatura: ligacao ativa com um evento do sistema
- `useRef`: forma de guardar um valor persistente entre renderizacoes
- cleanup: encerramento correto de um recurso que foi iniciado

## Arquivos que você vai usar

- `hooks/useLocationManager.ts`
- `app/index.tsx`

## Passo a passo sugerido

1. abra `hooks/useLocationManager.ts`
2. implemente a funcao de iniciar rastreamento
3. use `watchPositionAsync` para observar novas posicoes
4. salve a assinatura em uma ref
5. atualize a localizacao atual a cada nova leitura
6. adicione cada leitura ao historico
7. limite o historico aos 5 registros mais recentes
8. implemente a funcao para parar o rastreamento
9. conecte os botoes da interface

## Pontos para observar

Enquanto testa, repare se:

- o status muda para ativo
- a interface recebe novas localizacoes
- o historico cresce corretamente
- o rastreamento realmente para quando solicitado

## Checklist

Antes de encerrar a aula, confira se voce conseguiu:

- iniciar rastreamento por botao
- interromper a assinatura ativa
- atualizar a interface com novas leituras
- renderizar o historico com `map`
- manter o limite de 5 registros

## Dicas

- teste o fluxo completo, nao apenas as funcoes isoladas
- valide se o botao de parar realmente impede novas atualizacoes
- mantenha a logica no hook e a exibicao no componente
- observe se o historico mais novo aparece primeiro

## Desafio opcional

Se terminar antes, experimente:

- exibir melhor o horario de cada registro
- destacar visualmente o estado ativo do rastreamento
- ajustar o texto do historico quando nao houver dados

## Entrega da aula

Ao final, voce deve mostrar um app capaz de monitorar a localizacao continuamente e exibir um historico resumido das leituras.

## Próxima etapa

Na Aula 4, voce vai revisar erros, organizacao do codigo e validacao final da aplicacao.
