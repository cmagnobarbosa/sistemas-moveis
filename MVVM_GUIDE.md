# Guia de Refatoração para Arquitetura MVVM

Este guia explica o processo e os conceitos aplicados durante a refatoração do `primeiroApp` para o padrão de arquitetura **MVVM (Model-View-ViewModel)**. O objetivo foi melhorar a clareza do código, permitindo maior reutilização e testabilidade.

---

## O que é MVVM?

O MVVM é um padrão de arquitetura de software desenhado para separar a interface do usuário (View) da lógica de negócios e estado (Model). Ele introduz uma camada intermediária chamada **ViewModel**, responsável por converter e preparar dados do Model de uma forma simplificada para a View exibir, ao mesmo tempo gerenciando interações complexas do usuário.

A arquitetura organiza o código nestas três responsabilidades distintas:

1. **Model (e Services)**: A camada de dados e lógica de base. Ela acessa bases de dados, arquivos locais, ou sensores nativos utilizando bibliotecas externas. Ela expõe essas capacidades de forma "limpa" por meio de funções puras ou objetos tipados. No contexto deste projeto, essa camada desconhece qualquer dependência do React.
2. **ViewModel**: O coração da aplicação. Uma ViewModel recebe requisições da tela e traduz isso para o Modelo apropriado. Ao processar dados do Modelo de volta para a visualização, a ViewModel atua aplicando formatações de estados locais, carregamentos e tratativas de erros. Em um projeto React, costumamos implementar isso como _Custom Hooks_.
3. **View**: Tudo que você enxerga visualmente na tela (nossos arquivos `.tsx` ou componentes React Native). Uma View é "burra", sua única responsabilidade é exibir dados que recebeu da ViewModel de forma estilizada e repassar interações como cliques e toques que o usuário realizar de volta.

---

## Estrutura Anterior vs. Atual

A estrutura original tinha um hook `useLocationManager`, que além de ser um _hook_ (um estado de view-model), acessava e configurava diretamente o pacote nativo `expo-location`. Isso o transformava num híbrido não coeso e quebrava o princípio da responsabilidade única.

### Estrutura Antiga
- **`app/index.tsx`**: View com lógica mesclada e dependente de comportamentos de erro mistos.
- **`hooks/useLocationManager.ts`**: Era o "Faz-tudo". Lidava desde as configurações da API do celular via pacote externo até orquestrar estados de carregamento do botão em React.

### Nova Estrutura (MVVM)
Fizemos a divisão criando uma camada `src` para conter a nova escalabilidade.
```text
/src
 ├── models/ (Tipagem Pura e Limpa)
 │    └── LocationModel.ts
 │
 ├── services/ (Delega chamadas base do Expo Location)
 │    └── LocationService.ts
 │
 └── viewmodels/ (O novo cérebro UI usando Hooks)
      └── useLocationViewModel.ts
```

---

## O Processo Realizado

O projeto seguiu a seguinte série de etapas de isolamento:

1. **Criação do Model (`LocationModel.ts`)**
   Criamos interfaces isoladas TypeScript tais como `Coordinate` e `LocationHistoryItem`.
   *(Benefício: Desvincular tipos do `expo-location` das outras partes da sua visualização.)*

2. **Criação do Service (`LocationService.ts`)**
   Movemos toda chamadas como `Location.requestForegroundPermissionsAsync` e `Location.watchPositionAsync` para métodos estáticos. Nenhuma importação relacionada ao `react` existe aqui.
   *(Benefício: Se um dia formos trocar o SDK Expo ou quisermos criar testes unitários para a api de mapa nativo sem renderizar a UI, isso ocorrerá em 1 só arquivo isolado.)*

3. **Geração do ViewModel (`useLocationViewModel.ts`)**
   Pegamos a "casca" do antigo `useLocationManager.ts` - incluindo todos os `useState`, `useRef`, lidando com estados de botões (`isLoading`, `permissionStatus`...) e convertendo retornos crus contínuos do `LocationService` em arrays com um histórico formatado para a tela.
   *(Benefício: Essa camada pega os tipos limpos já expostos e faz a "ponte" entre a tela visual e API, de maneira previsível).*

4. **Conexão da View (`app/index.tsx`)**
   A importação mudou levemente em nossa index original. A chamada para uso do gerenciador foi renomeada para consumir o *import* de `useLocationViewModel()`. Não fomos forçados a refazer a *layout* já que ambas ViewModels conversam pelas mesmas saídas `loc.location`, `loc.startTracking` já definidas antes.

---

## Benefícios Ganhos

- **Isolamento de Falhas**: Se os dados quebrarem visualmente, o problema estará na `app/index.tsx`. Se o estado do botão for inconsistente com o clique, o defeito estará no `useLocationViewModel.ts`. Se as coordenadas do aparelho sumirem, a alteração se repara no `LocationService.ts`.
- **Previsibilidade Técnica**: Padronização para desenvolvedores fluírem mais rapidamente entre projetos com diretórios descritivos.
- **Testabilidade**: Cada módulo agora pode receber testes unitários desacoplados das dependências React de front-end.
