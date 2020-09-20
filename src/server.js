// SERVER:
// importando o express
const express = require('express')
const server = express() // esse server nos retorna um objeto

const {pageLanding, pageStudy, pageGiveClasses } = require('./pages')
//importando o nunjucks
// TEMPLATE ENGINE:
const nunjucks = require('nunjucks')
// configurar nnjucks
// dizer ao nunjucks onde estao os arquivos html
// enviar um objeto com algumas configurações do servidor express
// em seguida ele vai saber o que tem de fazer com o server 
nunjucks.configure('src/views', {
    express: server,
    noCache: true, // nao guardar arqeuivos na memoria agora pois estamos editando ainda
})


// BEGIN AND SERVER SET UP: 

server
    // configurar arquivos  estáticos (css scripts, images)
    .use(express.static("public"))
    // rotas da aplicação
    .get("/", pageLanding)
    .get("/study", pageStudy)
    .get("/give-classes", pageGiveClasses)

// SERVER STARTER:
    .listen(5500)