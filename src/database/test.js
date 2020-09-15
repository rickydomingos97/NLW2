// puxa o db da pasta database
const Database = require('./db.js')
const createProffy = require('./createProffy')

// usando um aarrow function =>
// o then vai receber o (db) passando pra arrow function vindo do arquivo db do then(db)
Database.then((db) => {
// inserir dados

    proffyValue = {
        name: "Diego Fernandes",
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
        whatsapp: "8999876677",
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências.Mais de 200.000 pessoas já passaram por uma das minhas explosões."
    }
    // o classes nao pode ser usado aqui por ser uma palavra reservada por isso classValue
    classValue = {
        subject: "Química",
        cost: "20"
    // o proffy id virá do banco de dados
    }

    // pode receber mais de um eschedule por isso tem de ser um array com [ ] e com os obejtos dentro do { }
    classSchedule = [
    // class_id virá pelo DB , após cadastrarmos a class
        {
            weekday: 1,
            time_from: 720,
            time_to: 1220
        },
        {
            weekday: 1,
            time_from: 720,
            time_to: 1220
        }
    ]

    //createProffy(db, {proffyValue, classValue, classScheduleValue})
    // consultar dados inseridos


})