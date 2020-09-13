// DATA:

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
    },

    {
        name: "Mayk Brito",
        avatar: "https://avatars2.githubusercontent.com/u/6643122?s=460&u=1e9e1f04b76fb5374e6a041f5e41dce83f3b5d92&v=4",
        whatsapp: "8999876677",
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências.Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
        subject: "Química",
        cost: "20",
        weekday: [1],
        time_from: [720],
        time_to: [1220]
    }
]

const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química",                          
]

const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",            
]
// com o caminho dos arquivos ja foi indicado no nunjucks, podemos remover o __dirname + o caminho e apenas pedir para renderizar o arquivo na function logo abaixo:
// BEFORE: return res.render(__dirname + "/views/index.html")
// AFTER: 

// FUNCTIONS:

function getSubject (subjectNumber) {
    // o -1 foi criado para poder selecionar o numero do array do subject corretamente.
    const position  = +subjectNumber - 1
    return subjects[position]
}

function pageLanding(req, res) {
    return res.render("index.html")
}
// renderizando objeto dentro do render:
//passando objetos para dentro da function
function pageStudy(req, res) {
    const filters = req.query
    return res.render("study.html", { proffys, filters, subjects, weekdays
    })
}
function pageGiveClasses(req, res) {
    const data = req.query
    
    const isNotEmpty = Object.keys(data).length > 0
    // if exist data:
    if (isNotEmpty) {

        data.subject = getSubject(data.subject)
        
        // add data to proffys array list
        proffys.push(data)
        // if all of data is ok, you will get redirection to study page with this command:
        return res.redirect("/study")//you will be redirected to study page
    }
    // if not exist any data, to show the page
    return res.render("give-classes.html", {subjects, weekdays})
}

// SERVER:

// importando o express
const express = require('express')
const server = express() // esse server nos retorna um objeto
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