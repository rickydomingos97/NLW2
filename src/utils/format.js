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

function convertHoursToMinutes(time) {
    const [hour, minutes] = time.split(":")
    return Number((hour * 60) + minutes)
}
module.exports = {
    subjects,
    weekdays,
    getSubject,
    convertHoursToMinutes
}