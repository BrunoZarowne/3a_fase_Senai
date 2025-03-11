import './CardMaterial.css'

function CardMaterial(props) {
    const {nome, quantidade, unidade} = props.material
  return (
    <div className='container-card'>
        <br />
        <h3>Nome: {nome}</h3>
        <p>Qtd: {quantidade} {unidade}</p>
        <br />

    </div>
  )
}

export default CardMaterial
