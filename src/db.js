//Importando o mysql
const mysql = require('mysql')

//Criando conexao com o banco de dados
const connection = mysql.createConnection({
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    password:process.env.DB_PASS,
    database:process.env.DB_NAME
})

connection.connect((error) =>{
    //Se ocorrer algum erro ele lança a exception
    if(error) throw error;

    //Se conexao com sucesso 
    console.log(`Conectado ao DB: ${process.env.DB_NAME}`)
})


module.exports = connection