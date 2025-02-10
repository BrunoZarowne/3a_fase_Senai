// function BoasVindas(props) {
function BoasVindas({nome, mensagem}) {
  return (
    <div className="container-boasvindas">
      <p>Olá, {nome}!</p>
      {mensagem}
      <button onClick={() => console.log({props})}>Log</button>
    </div>
  )
}

export default BoasVindas
