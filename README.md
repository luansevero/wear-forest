# Wear Forest

## Instruções para iniciar o projeto

1. **Acesse a pasta do projeto**  
   Pelo terminal, navegue até o diretório do projeto:
   ```bash
   cd /wear-forest
2. **Instale as dependências**  
   Execute o comando abaixo para instalar as dependências necessárias:
   ```bash
   npm i
3. **Configure o arquivo `.env`**  
   Crie ou edite o arquivo `.env` com as seguintes variáveis de ambiente:
   ```env
   VITE_SERVER_URL= // Rota do backend
   VITE_EMAIL_CONTACT= // Email utilizado para o checkout
4. **Rodar o projeto**  
   Para iniciar o servidor de desenvolvimento, execute o comando:
   ```bash
   npm run dev
## Rotas

- **Rota `/`**  
  Página inicial do projeto, onde é possível visualizar os produtos e colocar os mesmo no carrinho.

- **Rota `/cart`**  
  Página do carrinho de compras, onde o usuário pode visualizar e editar os itens no carrinho e fazer o checkout ( todo o checkout esta olhando para o localStorage ).

- **Rota `/cart/order`**  
  Rota privada que só pode ser acessada após a conclusão de um carrinho.  
  Uma vez que o carrinho é finalizado, não é mais possível acessar esta rota até que um novo carrinho seja criado e finalizado.