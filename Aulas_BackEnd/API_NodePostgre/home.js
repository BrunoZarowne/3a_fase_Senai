require("dotenv").config(); //carrega as  variáveis do arquivo env

const port = process.env.PORT; //armazena o numero da porta

const express = require("express");
const app = express();

app.get("/", (req,res) =>{
    res.json({
        message:"Amongus"
    })
})

app.listen(port)
console.log("BackEnd rodando")