const Database = require('./db.js')
const createProffy = require('./createProffy')


Database.then(async (db) => {
    // inserir dados
    proffyValue = {
        name: "Diego Fernandes",
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
        whatsapp: "8999876677",
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências.Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
    }

    classValue = {
        subject: "Química",
        cost: "20",
        // o proffy_id virá do banco de dados
    }

    classScheduleValue = [
        // class_id virá pelo bando de dados, após cadastrarmos a class
        {
            weekday: 1,
            time_from: 720,
            time_to: 1220
        },
        {
            weekday: 0,
            time_from: 520,
            time_to: 1220
        }
    ]
    
   // await createProffy(db, {proffyValue, classValue, classScheduleValue})

    // Consultar os dados inseridos

    // todos os proffys
    const selectProffys = await db.all("SELECT * FROM proffys")
    // console.log(selectProffys)

    // consultar as classes  de um determinado professor
    // e trazer junto os dados do professor
    const selectedClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffy_id)
        WHERE classes.proffy_id = 1;
    `)
    console.log(selectedClassesAndProffys)

})