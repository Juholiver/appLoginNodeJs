# API de Login

Esta é uma API simples para gerenciamento de usuários, permitindo operações de CRUD (Criar, Ler, Atualizar, Deletar).

## Tecnologias Utilizadas

-   [Node.js](https://nodejs.org/)
-   [Express](https://expressjs.com/)
-   [Mongoose](https://mongoosejs.com/)
-   [MongoDB](https://www.mongodb.com/)
-   [Dotenv](https://www.npmjs.com/package/dotenv)
-   [Cors](https://www.npmjs.com/package/cors)

## Pré-requisitos

-   Node.js instalado
-   MongoDB instalado e rodando
-   Um arquivo `.env` na raiz do projeto com a variável de ambiente `MONGO_URI` contendo a string de conexão com o MongoDB.

## Instalação

1.  Clone o repositório:
    ```bash
    git clone https://github.com/Juholiver/appLoginNodeJs
    ```
2.  Navegue até o diretório do projeto:
    ```bash
    cd apiLogin
    ```
3.  Instale as dependências:
    ```bash
    npm install
    ```
4.  Crie um arquivo `.env` na raiz do projeto e adicione a sua string de conexão do MongoDB:
    ```
    MONGO_URI=mongodb+srv://<user>:<password>@<cluster-url>/<database-name>?retryWrites=true&w=majority
    ```
    Caso não tenha uma conta, você pode criar uma gratuitamente no [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).

## Como Rodar a Aplicação

1.  Inicie o servidor:
    ```bash
    npm start
    ```
2.  O servidor estará rodando na porta 3000 (ou na porta definida na variável de ambiente `PORT`).

## Como Rodar em Modo de Desenvolvimento

1.  Inicie o servidor em modo de desenvolvimento (reinicia automaticamente ao salvar alterações):
    ```bash
    npm run dev
    ```

## Endpoints da API

-   `POST /cadastro`: Cria um novo usuário.
-   `GET /usuarios`: Retorna todos os usuários.
-   `PUT /usuarios/:id`: Atualiza um usuário existente.
-   `DELETE /usuarios/:id`: Deleta um usuário existente.

---

## Testando a API

Você pode usar ferramentas como o [ReqBin](https://reqbin.com/) ou a extensão [Thunder Client](https://marketplace.visualstudio.com/items?itemName=rangav.vscode-thunder-client) para o Visual Studio Code para testar os endpoints.

**URL Base:** `http://localhost:3000`

### 1. Criar Usuário (`POST /cadastro`)

-   **Método:** `POST`
-   **URL:** `http://localhost:3000/cadastro`
-   **Headers:** `Content-Type: application/json`
-   **Corpo da Requisição (Body):**
    ```json
    {
      "name": "Seu Nome",
      "email": "seuemail@exemplo.com",
      "password": "sua_senha"
    }
    ```
-   **Como fazer no ReqBin/Thunder Client:**
    1.  Selecione o método `POST`.
    2.  Insira a URL.
    3.  Vá para a aba "Body" ou "Corpo" e cole o JSON acima.
    4.  Envie a requisição. Você deverá receber uma resposta com o usuário criado e um status `201 Created`.

### 2. Listar Usuários (`GET /usuarios`)

-   **Método:** `GET`
-   **URL:** `http://localhost:3000/usuarios`
-   **Como fazer no ReqBin/Thunder Client:**
    1.  Selecione o método `GET`.
    2.  Insira a URL.
    3.  Envie a requisição. Você receberá uma lista com todos os usuários cadastrados. **Anote o `_id` de um usuário para usar nos próximos testes.**

### 3. Atualizar Usuário (`PUT /usuarios/:id`)

-   **Método:** `PUT`
-   **URL:** `http://localhost:3000/usuarios/COLE_O_ID_DO_USUARIO_AQUI`
-   **Headers:** `Content-Type: application/json`
-   **Corpo da Requisição (Body):**
    ```json
    {
      "name": "Novo Nome"
    }
    ```
-   **Como fazer no ReqBin/Thunder Client:**
    1.  Substitua `:id` na URL pelo `_id` do usuário que você deseja atualizar.
    2.  Selecione o método `PUT`.
    3.  Vá para a aba "Body" e insira o dado que deseja alterar.
    4.  Envie a requisição. A resposta mostrará o usuário com os dados atualizados.

### 4. Deletar Usuário (`DELETE /usuarios/:id`)

-   **Método:** `DELETE`
-   **URL:** `http://localhost:3000/usuarios/COLE_O_ID_DO_USUARIO_AQUI`
-   **Como fazer no ReqBin/Thunder Client:**
    1.  Substitua `:id` na URL pelo `_id` do usuário que você deseja deletar.
    2.  Selecione o método `DELETE`.
    3.  Envie a requisição. Você receberá uma mensagem de sucesso confirmando que o usuário foi deletado.
