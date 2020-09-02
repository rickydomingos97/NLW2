const proffys = [{
        name: "Diego Fernandes",
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
        whatsapp: "8999876677",
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências.Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
        subject: "Química",
        cost: "20",
        weekday: [0],
        time_from: [720],
        time_to: [1220]
    },

    {
        name: "Danielle Evangelista",
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
        whatsapp: "8999876677",
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências.Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
        subject: "Química",
        cost: "20",
        weekday: [1],
        time_from: [720],
        time_to: [1220]
    }
]

// com o caminho dos aeqwuivos ja foi indicado no nunjucks, podemos remover o __dirname + o caminho e apenas pedir para renderizar o arquivo na function logo abaixo:
// BEFORE: return res.render(__dirname + "/views/index.html")
// AFTER: 
function pageLanding(req, res) {
    return res.render("index.html")
}

function pageStudy(req, res) {
    return res.render("study.html")
}

function pageGiveClasses(req, res) {
    return res.render("give-classes.html")
}


// importando o express
const express = require('express')
const server = express() // esse server nos retorna um objeto
//importando o nunjucks
const nunjucks = require('nunjucks')
// configurar nnjucks
// dizer ao nunjucks onde estao os arquivos html
// enviar um objeto com algumas configurações do servidor express
// em seguida ele vai saber o que tem de fazer com o server 
nunjucks.configure('src/views', {
    express: server,
    noCache: true, // nao guardar arqeuivos na memoria agora pois estamos editando ainda
})

server
    // configurar arquivos  estáticos (css scripts, images)
    .use(express.static("public"))
    // rotas da aplicação
    .get("/", pageLanding)
    .get("/study", pageStudy)
    .get("/give-classes", pageGiveClasses)

    .listen(5500)