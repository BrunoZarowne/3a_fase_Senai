//comando pra chamar o express
const bodyParser = require("body-parser")
const express = require("express")

//inicializar o app

const app = express()
const PORT = 3000

app.use(bodyParser.json())

let tarefas = [
    {id: 1, descricao:"estudar NodeJs"},
    {id: 2, descricao:"editar videos"}
]

//puxar os itens

app.get('/tarefas', (req,res) => {  
    res.json({tarefas})
})


// adicionar um item

app.post('/tarefas', (req,res) =>{
    const {descricao} = res.body
    if (!descricao) {
        return res.status(400).json({error: 'abluble'})
    }

    const novaTarefa = {
        id: tarefas.length + 1,
        descricao: descricao
    }
    tarefas.push(novaTarefa)
    res.status(201).json(novaTarefa)

})

// para deletar uma tarefa

app.delete('    /tarefas/:id', (req,res) =>{
    const {id} = req.params
    const index = tarefas.findIndex(t => t.id === parseInt(id))

    if (index === -1) {
        return res.status(404).json({ error: 'Tarefa não encontrada'})
    }
    tarefas.splice(index, 1)
    res.status(204).send()
})

// Alterar uma tarefa existente

app.put('/tarefas/:id', (req, res) => {
    const {id} = req.params
    const {descricao} = req.body

    const tarefaIndex = tarefas.findIndex(t => t.id === parseInt(id))

    if (tarefaIndex === -1) {
        return res.status(404).json({error: 'Tarefa não encontrada'})
    }

    if (!descricao) {
        return res.status(400).json({error: 'Descrição é obrigatória'})
    }

    tarefas[tarefaIndex].descricao = descricao

    res.status(200).json(tarefas[tarefaIndex])  // Retorna a tarefa atualizada
})

app.listen(PORT, () =>{
    console.log('Servidor rodando na porta ${PORT}')
})