const Database = require('./database/db.js')

const { subjects, weekdays, getSubject } = require('./utils/format.js')

function pageLanding(req, res) {
    return res.render("index.html")
}
// renderizando objeto dentro do render: passando objetos para dentro da function
function pageStudy(req, res) {
    const filters = req.query

    const query = `
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffy_id)
        WHERE EXISTS (
            SELECT class_schedule.*
            FROM class_schedule
            WHERE class_schedule.class_id = classes.id
            AND class_schedule.weekday = ${filters.weekdays}
            AND class_schedule.time_from <= ${filters.time_from}
            AND class_schedule.time_to > ${filters.time_to}
        )
    
    `

    return res.render("study.html", { proffys, filters, subjects, weekdays })
}

function pageGiveClasses(req, res) {
    const data = req.query
       
    // if exist data:
    const isNotEmpty = Object.keys(data).length > 0
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

module.exports = {
    pageLanding,
    pageStudy,
    pageGiveClasses
}