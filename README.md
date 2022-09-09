Este projeto contém os requisitos realizados por _[Anna Beatriz Garcia Trajano de Sá](www.linkedin.com/in/anna-beatriz-trajano-de-sá)_ enquanto estudava na [Trybe](https://www.betrybe.com/) :rocket:

# Project Commerce - MongoDB 

Nesse projeto, trabalhei com o banco de dados commerce, que contém dados do cardápio do McDonald's, como ingredientes, 
valores nutricionais e dados fictícios de vendas. Para isso, apliquei conceitos e queries ( find(), update(), insert() ) do MongoDB

## Banco de Dados - Commerce

Produtos
:-------------------------:|
![Screeshot](./images/img.png)  |

---

## Instalação do projeto localmente:
 
Após cada um dos passos, haverá um exemplo do comando a ser digitado para fazer o que está sendo pedido, caso tenha dificuldades e o exemplo não seja suficiente, não hesite em me contatar em _annagarcia@id.uff.br_ 

1. Abra o terminal e crie um diretório no local de sua preferência com o comando **mkdir**:
```javascript
  mkdir projetos
```

2. Entre no diretório que acabou de criar e depois clone o projeto:
```javascript
  cd projetos
  git clone git@github.com:annatrajano/project-mongodb-commerce.git
```

3. Acesse o diretório do projeto e depois utilize o comando **npm i** para instalar todas as dependências necessárias:
```javascript
  cd project-mongodb-commerce
  npm i
```
<details>
<summary>
    <strong>🐳 Como usar o Docker para este projeto</strong>
  </summary><br>

  - Para quem não possui o MongoDB instalado e está utilizando o docker, é necessário executar os testes localmente usando os seguintes passos:

  1. Acesse o terminal na raiz da pasta do projeto;
  2. Crie um container com um volume apontando para a pasta do projeto `docker run -d --name=nomeDoContainer -v "$PWD:/app" -p 27017:27017 mongo:5.0`;
  3. Com o container em execução, acesse o terminal do container `docker exec -it nomeDoContainer bash`;
  4. No terminal do container, acesse o diretório `/app` mapeado no volume conforme o passo 2;
  > Para restaurar o banco de dados é necessário que você esteja dentro do diretório `/app`. Para mais detalhes, veja o tópico: "♻️ Restaurando o banco de dados `commerce`".
  5. Por fim, execute o script de testes do projeto: `./scripts/evaluate.sh`.
  Se por algum motivo a execução do container for finalizada, basta iniciá-lo novamente com o comando `docker start nomeDoContainer` e seguir a partir do passo 3.

</details>

<details>
  <summary>
    <strong>♻️ Restaurando o banco de dados `commerce`</strong>
  </summary><br>

  > ⚠️ **Aviso:** Caso esteja utilizando Docker, certifique-se que tenha seguido os passos do tópico: "🐳 Como usar o Docker para este projeto", pois eles são determinantes para que siga as orientações abaixo.

  1. Abra o terminal e conecte-se à sua instância local do **MongoDB**. Se você receber uma mensagem de erro como **_Connection refused_**, tente reiniciar sua instância [seguindo as orientações desse link](https://app.betrybe.com/course/d396e5a2-d5c9-4f3a-b723-1a1d3ea06b3d).

  2. Quando sua instância estiver no ar e você estiver conectado a ela, digite `exit`. Com isso, você voltará ao terminal para iniciar a importação dos dados.

  3. Na raiz do diretório do projeto, execute o seguinte comando para restaurar a base de dados `commerce`:

  ```sh
  DBNAME=commerce ./scripts/resetdb.sh assets/produtos
  ```

  - A execução desse script criará um banco de dados chamado `commerce` e importará os dados para a coleção `produtos`.
 </details>

## Habilidades Desenvolvidas

Neste projeto, desenvolvi as seguintes habilidades:

 - Alterar documentos utilizando métodos de update com operadores simples;
 - Alterar documentos utilizando operadores complexos e modificadores;
 - Construir queries e expressões complexas utilizando índices textuais e expressões regulares.

 
 ## Referências
 
 [Documentação Oficial - MongoDB](https://www.mongodb.com/docs/)<br>
 [Conventional Commits](https://gist.github.com/qoomon/5dfcdf8eec66a051ecd85625518cfd13)<br>

 
 ## Escopo do Projeto

### 1 - Retorne a quantidade de documentos inseridos na coleção `produtos`

- Para isso, escreva a query no arquivo `desafio1.js`

### 2 - Ordene a coleção `produtos` pela quantidade de lanches vendidos em ordem crescente, mostrando apenas o `nome` e a quantidade de lanches `vendidos`

- Para isso, escreva a query no arquivo `desafio2.js`

### 3 - Retorne o lanche mais vendido, mostrando apenas o `nome` e a quantidade do lanche mais vendido

- Para isso, escreva a query no arquivo `desafio3.js`

### 4 - Retorne os lanches que tiveram vendas maiores que `50` e menores que `100`, mostrando apenas o nome e a quantidade de lanches `vendidos` em ordem crescente

- Para isso, escreva a query no arquivo `desafio4.js`

### 5 - Retorne o `nome`, as `curtidas` e `vendidos` dos lanches que tiveram quantidade de `curtidas` igual a `36` ou tenham a quantidade de vendas igual a `85`

- Para isso, escreva a query no arquivo `desafio5.js`

### 6 - Retorne o `nome` e as `curtidas` dos lanches que tiveram curtidas maiores que `10` e menores que `100`

- Para isso, escreva a query no arquivo `desafio6.js`

### 7 - Retorne o `nome` e `vendidos` dos lanches que tenham sido `vendidos` com uma quantidade diferente de `50` e em que o campo `tags` não exista

- Para isso, escreva a query no arquivo `desafio7.js`

### 8 - Delete os lanches com menos de `50` `curtidas` e retorne o `nome` dos lanches que restaram no banco

- Para isso, escreva a query no arquivo `desafio8.js`

### 9 - Retorne o `nome` de todos os lanches que possuam `calorias` abaixo de `500`

- Para isso, escreva a query no arquivo `desafio9.js`.

### 10 - Retorne o `nome` de todos os lanches que tenham o percentual de `proteínas` maior ou igual a `30` e menor ou igual a `40`

- Para isso, escreva a query no arquivo `desafio10.js`

### 11 - Retorne o `nome` do produto, a quantidade de `curtidas` e quantos itens foram `vendidos` dos produtos que não sejam iguais a `Big Mac` e `McChicken`

- Para isso, escreva a query no arquivo `desafio11.js`

### 12 - Adicione `ketchup` aos `ingredientes` para todos os sanduíches menos o `McChicken`, garantindo que não haja duplicidade nos `ingredientes`

Para isso, escreva no arquivo `desafio12.js` duas queries, **nesta ordem**:

1. Crie uma query que adicione `ketchup` aos `ingredientes` para todos os sanduíches menos o `McChicken`, garantindo que não haja duplicidade nos `ingredientes`.

2. Crie uma query que retorne o `nome` e `ingredientes` de todos os documentos.

### 13 - Inclua o campo `criadoPor` em todos os documentos, colocando `Ronald McDonald` no valor desse campo

Para isso, escreva no arquivo `desafio13.js` duas queries, **nesta ordem**:

1. Crie uma query que adicione o campo `criadoPor` em todos os documentos, colocando `"Ronald McDonald"` no valor desse campo.

2. Crie uma query que retorne o `nome` e `criadoPor` de todos os produtos.

### 14 - Crie uma query que retorne todos os lanches que possuem *picles* em seus ingredientes e mostre apenas os `3` primeiros itens contidos no array `valoresNutricionais`

- Para isso, escreva a query no arquivo `desafio14.js`
- Sua query deve retornar apenas os campos `nome`, `ingredientes` e `valoresNutricionais`.

👀**De olho na dica**: para realizar esse requisito, explore a implementação do `$slice`através do conteúdo [desse link](https://app.betrybe.com/course/back-end/introducao-ao-mongodb/updates-complexos-arrays/e58a3ec0-3a24-4d96-97f1-bfeec6d1b253/conteudos/bc2f5c46-bbeb-4fff-9d79-cebb2c00769b/operador-push/6943fddb-86aa-498c-b675-429487b9bcf3?use_case=side_bar) 

### 15 - Adicione o campo `avaliacao` em todos os documentos da coleção e efetue alterações nesse campo

Para isso, escreva no arquivo `desafio15.js` quatro queries, **nesta ordem**:

1. Crie uma query que inclua o campo `avaliacao` do tipo `NumberInt`, com o valor `0` em todos os documentos da coleção.

2. Crie uma query que incremente o valor do campo `avaliacao` em `5` em todos os sanduíches de carne do tipo `bovino`. 
👀**De olho na dica**: utilize como filtro o campo `tags`.

3. Crie uma query que incremente o valor do campo `avaliacao` em `3` em todos os sanduíches de `ave`.

4. Crie uma query que retorne o `nome` e `avaliacao` de todos os sanduíches.

### 16 - Adicione o campo `ultimaModificacao` com a data corrente somente no sanduíche `Big Mac`

Para isso, escreva no arquivo `desafio16.js` duas queries, **nesta ordem**:

1. Crie uma query que inclua somente ao sanduíche `Big Mac` o campo `ultimaModificacao` com a data corrente. Para a data corrente faça uso do tipo `date` ou `timestamp`.

2. Crie uma query que retorne o `nome` de todos os documentos em que o campo `ultimaModificacao` existe.

### 17 - Retorne a quantidade total de produtos em uma nova coleção chamada `resumoProdutos`

Para isso, escreva no arquivo `desafio17.js` duas queries, **nesta ordem**:

1. Crie uma query que insira na coleção `resumoProdutos` um documento com os campos: `franquia` com o valor `McDonalds` e `totalProdutos` com o valor sendo a quantidade total de produtos registrados na coleção `produtos`.

2. Crie uma query que retorne os campos `franquia` e o `totalProdutos` da coleção `resumoProdutos`, resultantes da primeira query.

### 18 - Inclua `bacon` no final da lista de `ingredientes` dos sanduíches `Big Mac` e `Quarteirão com Queijo`

Para isso, escreva no arquivo `desafio18.js` duas queries, **nesta ordem**:

1. Crie uma query que faça a inclusão de `bacon` no final da lista de `ingredientes` dos sanduíches `Big Mac` e `Quarteirão com Queijo`.

2. Crie uma query que retorne o `nome` e `ingredientes` de todos os documentos.

### 19 - Remova o item `cebola` de todos os sanduíches

Para isso, escreva no arquivo `desafio19.js` duas queries, **nesta ordem**:

1. Crie uma query que faça a remoção do item `cebola` em todos os sanduíches.

2. Crie uma query que retorne o `nome` e `ingredientes` de todos os documentos.

### 20 - Remova o primeiro `ingrediente` do sanduíche `Quarteirão com Queijo`

Para isso, escreva no arquivo `desafio20.js` duas queries, **nesta ordem**:

1. Crie uma query que faça a remoção do **primeiro** `ingrediente` no sanduíche `Quarteirão com Queijo`.

2. Crie uma query que retorne o `nome` e `ingredientes` de todos os documentos.

### 21 - Remova o último `ingrediente` do sanduíche `Cheddar McMelt`

Para isso, escreva no arquivo `desafio21.js` duas queries, **nesta ordem**:

1. Crie uma query que faça a remoção do **último** `ingrediente` no sanduíche `Cheddar McMelt`.

2. Crie uma query que retorne o `nome` e `ingredientes` de todos os documentos.

### 22 - Adicione a quantidade de vendas dos sanduíches por dia da semana

Para isso, escreva no arquivo `desafio22.js` quatro queries, **nesta ordem**:

1. Crie uma query que inclua um campo `vendasPorDia` em todos os sanduíches. O valor deste campo deverá ser um _array_ com sete posições. Cada uma delas representará um dia da semana, e cada posição iniciará em `0`. O _array_ deve seguir a estrutura do exemplo abaixo:
  ```json
  "vendasPorDia": [0, 0, 0, 0, 0, 0, 0]
  ```

> O primeiro item desse _array_ representa as vendas no **domingo**, o segundo item representa as vendas na **segunda-feira**, e assim sucessivamente até chegar ao último item, que representa as vendas no **sábado**.

2. Crie uma query que incremente as vendas de `Big Mac` às **quartas-feiras** em `60`.

3. Crie uma query que incremente as vendas de todos os sanduíches de carne do tipo `bovino` aos **sábados** em `120`.

4. Crie uma query que retorne o `nome` e `vendasPorDia` de todos os documentos.

### 23 - Insira os valores `combo` e `tasty` no _array_ `tags` de todos os sanduíches e aproveite para deixar os valores em ordem alfabética ascendente (A a Z)

Para isso, escreva no arquivo `desafio23.js` duas queries, **nesta ordem**:

1. Crie uma query que faça tanto a inserção dos valores `combo` e `tasty` no _array_ `tags` de todos os sanduíches. Ordene os valores de `tags` em ordem alfabética ascendente.

2. Crie uma query que retorne o `nome` e `tags` de todos os documentos.

### 24 - Ordene em todos os documentos os valores do _array_ `valoresNutricionais` pelo campo `percentual` de forma decrescente

Para isso, escreva no arquivo `desafio24.js` duas queries, **nesta ordem**:

1. Crie uma query que faça em todos os documentos a ordenação dos valores do _array_ `valoresNutricionais` pelo campo `percentual` de forma decrescente. 
👀**De olho na dica**: mesmo sem adicionar nenhum novo valor, para essa operação é necessário utilizar também o modificador `$each`.

2. Crie uma query que retorne o `nome` e `valoresNutricionais` de todos os documentos.

### 25 - Adicione o valor `muito sódio` ao final do _array_ `tags` nos produtos em que o `percentual` de `sódio` seja maior ou igual a `40`

Para isso, escreva no arquivo `desafio25.js` duas queries, **nesta ordem**:

1. Crie uma query que faça a adição do valor `muito sódio` ao final do _array_ `tags` nos produtos em que o `percentual` de `sódio` seja maior ou igual a `40`.

2. Crie uma query que retorne o `nome` e `tags` de todos os documentos.

### 26 - Adicione o valor `contém sódio` ao final do _array_ `tags` nos produtos em que o `percentual` de `sódio` seja maior do que `20` e menor do que `40`

Para isso, escreva no arquivo `desafio26.js` duas queries, **nesta ordem**:

1. Crie uma query que faça a adição do valor `contém sódio` ao final do _array_ `tags` nos produtos em que o `percentual` de `sódio` seja maior do que `20` e menor do que `40`.

2. Crie uma query que retorne o `nome` e `tags` de todos os documentos.

### 27 - Conte quantos produtos contém `Mc` no nome, sem considerar letras maiúsculas ou minúsculas

- Para isso, escreva a query no arquivo `desafio27.js`

### 28 - Conte quantos produtos têm `4` ingredientes

- Para isso, escreva a query no arquivo `desafio28.js`

### 29 - Renomeie o campo `descricao` para `descricaoSite` em todos os documentos

Para isso, escreva no arquivo `desafio29.js` duas queries, **nesta ordem**:

1. Crie uma query que faça a renomeação do campo `descricao` para `descricaoSite` em todos os documentos.

2. Crie uma query que retorne o `nome` e `descricaoSite` de todos os documentos.

### 30 - Remova o campo `curtidas` do item `Big Mac`

Para isso, escreva no arquivo `desafio30.js` duas queries, **nesta ordem**:

1. Crie uma query que faça a remoção do campo `curtidas` do item `Big Mac`.

2. Crie uma query que retorne o `nome` para todos os documentos e `curtidas` (exceto para `Big Mac`).

### 31 - Retorne o `nome` dos sanduíches em que o número de `curtidas` é maior que o número de sanduíches `vendidos`

- Para isso, escreva a query no arquivo `desafio31.js`

### 32 - Retorne o `nome` e a quantidade de vendas (`vendidos`) dos sanduíches em que o número de vendas é múltiplo de `5`

- Para isso, escreva a query no arquivo `desafio32.js`
