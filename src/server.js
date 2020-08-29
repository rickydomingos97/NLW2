const express = require('express')
const server = express()

server.use(express.static("public"))

.get("/", (req, res) => {
    return res.sendFile(__dirname + "/views/index.html")
})
.get("/study", (req, res) => {
    return res.send("Pagina Study! seja bem vindo")
})

.listen(5500)
