# Aula 4: Guia do Aluno

## O que você vai construir

Nesta aula, voce vai revisar o aplicativo completo para deixa-lo mais claro, mais organizado e mais confiavel.

O foco agora e:

- testar o comportamento real do app
- tratar erros e estados especiais
- revisar a organizacao do codigo
- validar a versao final

## Ideia central

Aprender fazendo, nesta etapa, significa testar o que foi construido, encontrar falhas reais e melhorar a aplicacao com base nesses testes.

## Resultado esperado

Ao final da aula, sua aplicacao deve:

- responder de forma clara quando algo der errado
- manter a interface compreensivel mesmo sem dados
- ter a logica principal organizada no hook
- passar por uma revisao final de funcionamento

## Conceitos rapidos

- robustez: capacidade do app de continuar claro mesmo quando algo falha
- separacao de responsabilidades: cada parte do codigo cuida de uma funcao especifica
- validacao: conferencia do comportamento final da aplicacao
- usabilidade: facilidade com que o usuario entende e usa a interface

## Arquivos que você vai usar

- `hooks/useLocationManager.ts`
- `app/index.tsx`
- `app/_layout.tsx`

## Passo a passo sugerido

1. teste a permissao de localizacao
2. teste a busca da localizacao atual
3. teste iniciar e parar o rastreamento
4. observe o comportamento do historico
5. force cenarios de erro e veja se a interface continua compreensivel
6. revise nomes, mensagens e organizacao do codigo
7. execute o lint para verificar a base do projeto

## Checklist

Antes de encerrar a aula, confira se voce conseguiu:

- identificar erros ou comportamentos confusos
- melhorar mensagens para o usuario
- explicar o papel do hook `useLocationManager`
- validar o fluxo principal da aplicacao
- rodar `npm run lint`

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

## Dicas

- teste como usuario, nao apenas como programador
- observe se os textos realmente ajudam quem esta usando o app
- quando encontrar um problema, tente explicar por que ele acontece
- prefira pequenas melhorias com impacto claro

## Desafio opcional

Se terminar antes, experimente:

- reorganizar melhor mensagens e estados visuais
- pensar em uma tela separada para historico
- planejar uma evolucao com mapa ou persistencia local

## Entrega da aula

Ao final, voce deve apresentar um app funcional, organizado e validado, com mensagens claras e fluxo principal consistente.

## Encerramento

Se voce concluiu esta etapa, ja tem uma versao completa do projeto, pronta para demonstracao e para evolucoes futuras.
