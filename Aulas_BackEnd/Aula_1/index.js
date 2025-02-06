const express = require("express") // importar/requerer o express
const app = express(); // criar uma aplicação web utilizando o framework express

var veiculos = [];

app.get('/veiculos', (req, res) => { // vai fazer a requisição pro array "veiculo" usando o "req" e vai dar uma resposta usando o "res"
    res.json(veiculos);

})

app.get('/veiculos/:placa', (req, res) => {
    const {placa} = req.params; //importar parametros da url:"veiculos"
    const veiculo = veiculos.find(v => v.place === placa); // procurar uma placa comparando com cada uma até achar a certa por conta do "==="
    if(veiculo) {
        res.json(veiculo);
    }else{
        res.status(404).json({message:'veiculo não cadastrado'})
    }

})

app.post('/veiculos', (req, res) => {
    const {placa, marca, modelo, ano} = req.body
    const veiculo = {placa, marca, modelo ,ano};
    veiculos.push(veiculo);
    res.status(201).json({message:'Veiculo cadastrado com sucesso'})
})

app.put