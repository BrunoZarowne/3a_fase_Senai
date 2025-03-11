import { useEffect, useState } from 'react'
import './Materiais.css'
import CardMaterial from '../components/CardMaterial'

export default function Materiais() {
    const [materiais, setMateriais] = useState([])
    const [inputNome, setInputNome] = useState('')
    const [inputQuantidade, setInputQuantidade] = useState('')
    const [inputUnidade, setInputUnidade] = useState('')

    function cadastrarMaterial() {
        const m = {
            id: Date.now(),
            nome: inputNome,
            quantidade: Number(inputQuantidade),
            unidade: inputUnidade,

        }
        setMateriais([...materiais, m])

        
    }

    useEffect(() =>
        console.log(materiais)
        , [materiais])

  return (
    <div className='container-materiais'>
        <h1>Materiais</h1><br />
        <div className='formMateriais'>
            <h2>Cadastro de materiais</h2><br />
            <div className="inputContainer">
                <label>Nome</label>
                <input type="text"
                    value={inputNome}
                    onChange={() => setInputNome(event.target.value)}
                />
            </div><br />
            <div className="inputContainer">
                <label>Quantidade</label>
                <input type="text"
                    value={inputQuantidade}
                    onChange={() => setInputQuantidade(event.target.value)}
                />
            </div><br />
            <div className="inputContainer">
                <label>Unidade</label>
                <input type="text"
                    value={inputUnidade}
                    onChange={() => setInputUnidade(event.target.value)}
                />
            </div><br />
            <button onClick={cadastrarMaterial}>Cadastrar</button>
        </div><br />
        <div className="cardsMateriais">
            <h2>Estoque</h2><br />
            <div className="cards">
                {materiais.map((m) => (
                    <CardMaterial key={m.id} material={m}/>
                ))}
            </div>
        </div>
    </div>
  )
}
