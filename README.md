# Nome do Projeto
FrontEnd foodExplorer



## Status do projeto
Finalizado

### Pré-requisitos
### 🎲 Rodando o Back End (servidor)

```bash
# Clone este repositório
$ git clone <https://github.com/GustavoMolino59/Web-foodExplorer>

# Acesse a pasta do projeto no terminal/cmd
$ cd nlw1

# Vá para a pasta Web-foodExplorer
$ cd Web-foodExplorer

# Instale as dependências
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ npm run dev

# O servidor front será iniciado em uma porta qualquer. Acesse a porta que o terminal fornece
Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/). 
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)
```
## Tecnologias Utilizadas
- HTML
- [ReactJS] (https://react.dev/)
- [StyledComponents] (https://styled-components.com/)
- [Vite] (https://vitejs.dev/)
- [Axios] (https://axios-http.com/ptbr/)


## Organização
O sistema é organizado de forma componentizada. Cada item que se repete e/ou é utilizado em mais de uma página se tornou um componente distinto. De modo que foram criados os seugintes componentes:
- button: Representa os botões utilizados
- buttonText: Representa os botôes em forma de texto utilizados
- dropdown: Representa componenente de escolha dropdown utilizado no historico do admin e na edição e criação de um prato
- footer: Representa o rodapé da página
- Header: Representa o topo da página, que se mantem atualizado com o número de pedidos atuais
- Input: representa todos os campos de input disponiveis nas pages
- Logotipo: O Logo da marca foodExplorer, utilizado em signIn, SignUp e no header
- meal: Representa um card de prato, com foto preço e possibilidade de realizar o pedido
- mealitem: Representa as tags que aparecem na criação e edição dos pratos
- sidemenu: menu lateral, utilizado nas versões mobile
- swiper: carrosel que consomem meals na home
- tags: representa as tags nos detalhes da meal
- textArea: representa as áreas de texto grande, especialmente nas descrições dos textos


Cada page foi criada individualmente também, consumindo os componentes, dos quais foram criadas as seguintes pages:
- 404: Pagina que não existe
- details: Detalhes de uma respectiva refeição via params (/details/:id)
- edit: exclusivo para o admin, para editar uma refeição existente via params(/edit/:id)
- Favorites: pagina que contem as refeições favoritas de cada usuário (/favorites)
- historic: O historico de pedidos de cada usuário. Para o admin aparecem todos os pedidos existentes e ele pode mudar os status. Para o Usuário comum ele apenas pode visualizar o status atual de suas ordens(/historic)
- Home: Pagina principal da área logada, que contem todas as refeições dividadas em carroseis (/)
- New: Pagina de criação de uma nova refeição (/new)
- Payment: Exclusiva para usuários comuns, apresentando os detalhes da ordem atual e simulando um pagamento
- SignIn: Area de login
- SignUp: Area de cadastro

O front-end faz o controle, baseado na role do admin, das funcionalidades disponíveis. O Admin pode adicionar, editar e remover pratos e organizar os pedidos de modo que eles fiquem abertos, pendentes ou entregues. Enquanto que o usuário comum pode ver os detalhes do pedido e realizar o pedido. São separados por rotas distintas 

Realizamos no front-end a validação da autenticação do usuário usando a função SignIn e o método getValidated para garantir que nenhum usuário tente acessar o portal sem as devidas credenciais. A password não é passada para o frontEnd e o token é passado via Cookie

O front-end apresenta design responsivo, criado no sistema mobile first, de modo que os elementos se adaptam corretamente às dimensões da tela. Os sistemas de pagamento são simulados, tanto no front quanto no back, sem implementação real de nenhum tipo de pagamento.

### Autor
---
Feito por Gustavo Molino 👋🏽 Entre em contato!

[![Linkedin Badge](https://img.shields.io/badge/-GustavoMolino-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/gustavo-molino/)](https://www.linkedin.com/in/gustavo-molino/)

[![Gmail Badge](https://img.shields.io/badge/-tgmarinho@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:g247144@dac.unicamp.br)](mailto:g247144@dac.unicamp.br)



