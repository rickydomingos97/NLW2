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

function pageLanding(req, res) {
    return res.render(__dirname + "/views/index.html")
}

function pageStudy (req, res) {
    return res.render(__dirname + "/views/study.html")
}

function pageGiveClasses (req, res) {
    return res.render(__dirname + "/views/give-classes.html")
}


// importando o express
const express = require('express')
const server = express()
//importando o nunjucks
const nunjucks = require('nunjucks')
// configurar nnjucks
// dizer ao nunjucks onde estao os arquivos html
// enviar um objeto com algumas configurações do servidor express
// em seguida ele vai saber o que tem de fazer com o server 
nunjucks.configure('src/views' {
    express: server,
    noCache: true, // Não guardar na memoria alguns arquivos para manter a aplicação mais rapida! para termos a versao mais atualizada da aplicação naquele momento
})

server
// configurar arquivos  estáticos (css scripts, images)
    .use(express.static("public"))
// rotas da aplicação
    .get("/", pageLanding)
    .get("/study", pageStudy)
    .get("/give-classes",)

    .listen(5500)