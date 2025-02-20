// função de conexão com o banco

async function connect() {
    const{Pool} = require("pg"); //estrátegia de conexão
    const poll = new Pool({ // declarando a variável
        connectionString: process.env.CONNECTION_STRING // ler dados da conexão com o banco
    }) 
    const cliente = await pool.connect(); // retornar o resultado
    console.log("criou o pool de conexão")
}