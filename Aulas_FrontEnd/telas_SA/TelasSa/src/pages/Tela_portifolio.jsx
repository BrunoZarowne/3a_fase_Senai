import { useState } from 'react'
import './Tela_portifolio.css'
import DropdownButton from '../components/DropdownButton'
import CarouselPortifolio from '../components/CarouselPortifolio'

function Tela_portifolio() {

    const [openProfile, setOpenProfile] = useState(false)


  return (
    <div className='container_telaPortifolio'>
    <div className='container_telaSuperiorUsu'>
      <div className="container_infosUsuario">
        <img className='imgFundo' src="./img1.png" alt="" />
        <p className='txtPortifolio'>Portifólio</p>
        <div className="barra1"></div>
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
                  <button className='bttcont1' onClick={() => alert('a')}>
                    <img src="./icon_wpp.svg" alt="" />
                  </button>
                  <button className='bttcont2' onClick={() => alert('a')}>
                    <img src="./icon_linkedin.svg" alt="" />  
                  </button>
                  <button className='bttcont3' onClick={() => alert('a')}>
                    <img src="./icon_mail.svg" alt="" />
                  </button>
                  <button className='shareButton' onClick={() => alert('a')}>
                    share
                    <img className='icon_share' src="./icon_share.svg" alt="" />
                  </button>
                  <button className='contrateButton' onClick={() => alert('a')}>contrate</button>
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

      {/* <div className="partePortifolio">
        <p className='txtPortifolio'>Portifólio</p>
        <div className="barra1"></div>
      </div> */}

        {
          openProfile && <DropdownButton />
        }
    </div>

      <CarouselPortifolio />

    <div className='infosPortifolio'>
        <label className='txtDescPortfolio'>Portifólio1</label>
        <div className="descricaoPortifolio">
          <p>Olá, sou [Seu Nome], [sua profissão] com [x] anos de experiência em [área de atuação]. Sou apaixonado por transformar 
            ideias em soluções criativas e inovadoras. Ao longo da minha carreira, sempre busquei superar expectativas, oferecendo 
            resultados de alta qualidade e personalizados para cada projeto.</p>
        </div>
    </div>

    <div className="imgFinalPagina">
      <button>
        <img className='img1' src="https://blog-static.petlove.com.br/wp-content/uploads/2021/10/gato-sumiu-Petlove.jpg" alt="" />
      </button>
      <button>
        <img className='img2' src="https://i.pinimg.com/736x/be/67/20/be6720a9737812145f56d565533cacca.jpg" alt="" />
      </button>
      <button>
        <img className='img3' src="https://conteudo.imguol.com.br/c/noticias/c8/2020/11/05/mulher-segura-gatinho-filhote-gato-celular-smartphone-1604580767340_v2_3x4.jpg" alt="" />
      </button>
    </div>
    
  </div>
  )
}

export default Tela_portifolio
