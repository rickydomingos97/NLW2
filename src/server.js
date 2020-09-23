// importando o express
const express = require('express')
const server = express() // esse server nos retorna um objeto
const { pageLanding, pageStudy, pageGiveClasses, saveClasses } = require('./pages') // added for give-classes.html form
//importando o nunjucks
// TEMPLATE ENGINE:
const nunjucks = require('nunjucks')
// configurar nnjucks
// dizer ao nunjucks onde estao os arquivos html
// enviar um objeto com algumas configurações do servidor express
// em seguida ele vai saber o que tem de fazer com o server 
nunjucks.configure('src/views', {
    express: server,
    noCache: true, // nao guardar arquivos na memoria agora pois estamos editando ainda
})
// BEGIN AND SERVER SET UP: 
server
    // receber os dados do req.body
    .use(express.urlencoded({ extended: true }))
    // configurar arquivos  estáticos (css scripts, images)
    .use(express.static("public"))
    // rotas da aplicação
    .get("/", pageLanding)
    .get("/study", pageStudy)
    .get("/give-classes", pageGiveClasses)
    .post("/save-classes", saveClasses)// rota da give-classes.html
    // SERVER STARTER:
    .listen(5500)