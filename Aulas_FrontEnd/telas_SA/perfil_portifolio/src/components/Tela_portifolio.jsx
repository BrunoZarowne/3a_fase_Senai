import DropdownButton from './DropdownButton'
import './Tela_portifolio.css'

function Tela_portifolio() {
  return (
    <div className='container_telaPortifolio'>
      <div className="container_infosUsuario">
        <img src="./img1.png" alt="" />
        <img className='logoSkillNetVerde' src="./logo_SkillNetVerde.svg" alt="" />
        <div className="infosUsuario">

        </div>
      </div>
      <DropdownButton />
    </div>
  )
}

export default Tela_portifolio
