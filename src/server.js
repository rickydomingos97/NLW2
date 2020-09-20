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