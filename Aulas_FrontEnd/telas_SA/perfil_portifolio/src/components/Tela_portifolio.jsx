import { useState } from 'react'
import DropdownButton from './DropdownButton'
import './Tela_portifolio.css'

function Tela_portifolio() {

  const [openProfile, setOpenProfile] = useState(false)
  return (
    <div className='container_telaPortifolio'>
      <div className="container_infosUsuario">
        <img src="./img1.png" alt="" />
        <img onClick={() => setOpenProfile((prev) => !prev)} className='logoSkillNetVerde' src="./logo_SkillNetVerde.svg" alt="" />
          <div className="infosUsuario">
            <div className="img_local">
              <img src="./gato1.jpg" alt="" className="imgUsuario" />
              <img className='iconLocal' src="./icon_localizacao.svg" alt="" />
              <p className='localizacaoUsu'>Florianópolis-SC</p>
            </div>
            <div className="restoInfos">
              <p className="nomeUsu">Gato Porradeiro da Silva</p><br />
                <div className="iconsContato">
                  <img src="./icon_wpp.svg" alt="" />
                  <img src="./icon_linkedin.svg" alt="" />
                  <img src="./icon_mail.svg" alt="" />
                  <button className='shareButton'>share</button>
                  <img className='icon_share' src="./icon_share.svg" alt="" />
                  <button className='contrateButton'>contrate</button>
                </div>
              <p className='experience'>Experiencia: </p>
              <div className="expecialidadesUsu">
                <p>box</p>
                <p>jiu-jitsu</p>
                <p>tráfico</p>
              </div>
            </div>
          </div>
      </div>

      <div className="partePortifolio">
        <p className='txtPortifolio'>Portifólio</p>
      </div>
      {
        openProfile && <DropdownButton />
      }
      
    </div>
  )
}

export default Tela_portifolio
