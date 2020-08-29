require('express')()
.get("/", (req, res) => {
    return res.send("Hi from NLW")
})
.get("/study", (req, res) => {
    return res.send("Pagina Study! seja bem vindo")
})
.listen(5500)
