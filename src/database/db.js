//Importando o modulo sqlite
const Database = require('sqlite-async')

//O db é um objeto. e sendo assim tem funcionalidades
// aqui a function esta em memoria e so sera executada quando abrir o Database
function execute(db){
// criar as tabelas do banco de dados.
// return foi colocado para preparar para a exportação do db
    return db.exec(`
        CREATE TABLE IF NOT EXISTS proffys (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            avatar TEXT,
            whatsapp TEXT,
            bio TEXT
        );

        CREATE TABLE IF NOT EXISTS classes (
             id INTEGER PRIMARY KEY AUTOINCREMENT,
             subject TEXT,
             cost TEXT,
             proffy_id INTEGER  
        );

        CREATE TABLE IF NOT EXISTS class_schedule (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            class_id INTEGER,
            weekday INTEGER,
            time_from INTEGER,
            time_to INTEGER
        );
    `)
}
//Abrindo o banco de dados concatenando com o caminho da pasta
// incluindo o then() para que o JS pare aqui antes de continuar a rodar o codigo.
// o module.exports vai exportar o database
module.exports = Database.open(__dirname + '/database.sqlite').then(execute)