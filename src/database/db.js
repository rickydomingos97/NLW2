//Importando o modulo sqlite
const Database = require('sqlite-async')
//Abrindo o banco de dados concatenando com o caminho da pasta
// incluindo o then() para que o JS pare aqui antes de continuar a rodar o codigo.
Database.open(__dirname + '/database.sqlite').then(execute)
//O db é um objeto. e sendo assim tem funcionalidades
function execute(db){
// criar as tabelas do banco de dados.
    db.exec(`
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