# NLW2
Super Classes from Next Week Level 2 2020 by Rocketseat
Developed and created by Rocketseat
Proffy project for teaching and learning classes on-line

# INSTRUCTIONS:

install node: from node.org
start our project: install npm init -y;
Dependencies: express.
to install express: npm install express.
to create the server.js file
    input the require('express') on server.js file
    insert:
        required('express')().listen(5500)
    to run: node src/server.js

para rodar um servidor que nao precisa ficar ligando e desligando a cada nova sessão:
    npm install nodemon -D
-D significa: rodar somente em modo de desenvolvimento!

    Type:
    npm run dev
    to reload server automatically on application

# LINUX tips!
(Eu clonei o arquivo no github pra rodar no linux e tive de deletar os arquivos nodemon dentro da pasta node.modules e reinstalar o nodemon antes de rodar o server.)

# nunjucks
Instalando uma Template Engine:
npm install nunjucks
    Configurar o servidor para usar o nunjucks!

# sqlite
// Sqlite install:

    On src folder. To create DATABASE folder.
        Next: to create db.js file.
        Open terminal and insert: "npm install sqlite-async"

    Na pasta source, criar uma pasta chamada: database,
        dentro da pasta criar um arquivo chamado db.js,
        abrir o terminal e rodar o comando "npm install sqlite-async"

// TO INSTALL SQLITE PLUGIN TO VSCODE for check the sqlite database on VSCODE.
    INSTALAR O PLUGIN SQLITE para VSCODE para visualizar o database do sqlite



