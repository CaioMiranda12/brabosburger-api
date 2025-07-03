<h1>API Brabos Burger</h1>

Este projeto simula uma hamburgueria online, oferecendo login, organização por categorias e um sistema intuitivo de pedidos

## ℹ️ Sobre o Projeto

Um site de hamburgueria com login, categorias para fácil navegação e ofertas do dia em destaque. Permite selecionar itens e enviá-los ao carrinho de forma simples e eficiente. Foi desenvolvido com as seguintes tecnologias:

- Linguagem: JavaScript
- Framework: NodeJS
- Banco de Dados: PostgreSQL e MongoDB

## 🛠️ Ferramentas Utilizadas

### Back-End: 
Node.js, Express, CORS, Docker, Sequelize, Mongoose, Bcrypt, JsonWebToken, Multer, Yup.
<br><br>

## 📚 Rotas da API

```

# 🔐 USERS

POST     /users                 # Cadastrar novo usuário

# 🔐 SESSION

POST     /session                 # Login (Retorna token JWT)

# 🍔 PRODUCTS

GET     /products          # Listar todos as produtos do sistema (requer token)
POST    /products          # Criar novo produto (requer token)
PUT     /products/:id      # Atualizar produto (requer token)

# 🌟 CATEGORIES

GET     /categories          # Listar todas as categorias do sistema (requer token)
POST    /categories          # Criar nova categoria (requer token)
PATCH   /categories/:id      # Atualizar categoria (requer token)

# ℹ️ ORDERS

GET     /orders             # Visualizar todos os pedidos (requer token)
POST    /orders             # Criar novo pedido (requer token)
PUT     /orders/:id         # Atualizar status do pedido (requer token)
```


