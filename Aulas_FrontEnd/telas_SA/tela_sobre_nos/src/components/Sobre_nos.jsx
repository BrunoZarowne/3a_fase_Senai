import React from 'react'
import './Sobre_nos.css'
import Header from './Header'

function Sobre_nos() {
  return (
    <div className='containerSobreNos'>

      <div className='contBlocoUm'>
        <label className='txtSNTitulo'>Sobre Nós</label>
        <p className='txtSN'>A SkillNet é uma startup para freelancers e empresas 
          formada por quatro estudantes do SENAI, 
          especializados em design, programação, marketing 
          digital e produção de conteúdo. Oferecemos 
          soluções criativas e acessíveis para empresas e 
          empreendedores, garantindo entregas de qualidade 
          para diversos tipos de projetos.
        </p>
      </div>
      <br /><br />
      <div className='contBlocoDois'>
        <label className='textObjetivo'>Objetivos e Propósitos</label>
        <div className='barra1'></div>

        <div className='ObjetoPropositoUm'>
          <img className='imgObjetoUm' src="./img_obj1.png" alt="" />
            <div className='textosObjetoUm'>
              <label>Oferecer soluções criativas e acessíveis</label>
              <p>Proporcionar soluções inovadoras e acessíveis para empresas e empreendedores.</p>
                <div className='bola1'></div>
                  <br />
                <label>Garantir entregas de qualidade</label>
                <p>Assegurar a qualidade nas entregas de diversos tipos de projetos.</p>
              <div className='bola2'></div>
            </div>
            <div className='barra2'></div>
        </div>

        <div className='ObjetoPropositoDois'>
          <div className='textObjetoDois'>
            <label>Simplificar a experiência do usuário</label>
            <p>Criar uma interface organizada e eficiente, eliminando dificuldades na navegação.</p>
            <div className='bola3'></div>
            <br />
            <br />
            <label>Facilitar a busca por freelancers</label>
            <p>Tornar a busca por freelancers rápida e prática, permitindo que o usuário encontre exatamente o que precisa com poucos cliques.</p>
            <div className='bola4'></div>
          </div>
          <div className="barra3"></div>
          <img src="./img_obj2.png" alt="" />
        </div>

        <br /><br /><br /><br />

        <div className="containerEquipe">
          <label className='textEquipe'>Equipe</label>
          <div className="barra4"></div>
          <br /><br /><br />
            <div className="containerCards">
              <div className="cardBruno">
                <img src="./img_perf1.png" alt="" /><br />
                <label className='nomeBruno'>Bruno Willian Zarowne</label>
                <p>Fez uns bagui ai</p>
                <a href="https://github.com/BrunoZarowne"><img src="./github.svg" alt="icone do github" /></a>
                <a href="https://www.linkedin.com/in/bruno-willian-zarowne-41851a1a7/"><img src="./linkedin.svg" alt="icone do linkedin" /></a>
                <a href="https://www.instagram.com/zarownebrunowillian?igsh=MWdoa2RjeDUyMDB2cw=="><img src="./instagram.svg" alt="icone do instagram" /></a>
              </div>
              <div className="cardMaria">
                <img src="./img_perf2.png" alt="" /><br />
                <label className="nomeMaria">Maria Eduarda Klin de Carvalho</label>
                <p>Fez uns bagui ai</p>
                <a href="https://github.com/deluxxe01"><img src="./github.svg" alt="icone do github" /></a>
                <a href="https://www.linkedin.com/in/maria-eduarda-klin-de-carvalho-1647a1307/"><img src="./linkedin.svg" alt="icone do linkedin" /></a>
                <a href="https://www.instagram.com/dudaklin_?igsh=MTlvMGdva3hyaTJ4dQ=="><img src="./instagram.svg" alt="icone do instagram" /></a>
              </div>
              <div className="cardCaio">
                <img src="./img_perf3.png" alt="" /><br />
                <label className="nomeCaio">Caio Lorram Valente</label>
                <p>Fez uns bagui ai</p>
                <a href="https://github.com/caiolorramvalente"><img src="./github.svg" alt="icone do github" /></a>
                <a href="https://www.linkedin.com/in/caio-lorram-valente-52523334b/"><img src="./linkedin.svg" alt="icone do linkedin" /></a>
                <a href=""><img src="./instagram.svg" alt="icone do instagram" /></a>
              </div>
              <div className="cardVithor">
                <img src="./img_perf4.png" alt="" /><br />
                <label className="nomeVithor">Vithor Lorram Valente</label>
                <p>Fez uns bagui ai</p>
                <a href="https://github.com/vithorLorramValente7"><img src="./github.svg" alt="icone do github" /></a>
                <a href="https://www.linkedin.com/in/vithor-lorram-valente-617593313/"><img src="./linkedin.svg" alt="icone do linkedin" /></a>
                <a href="https://www.instagram.com/vithor_lorram_valente?igsh=a2d1MHFyenRmMGN6"><img src="./instagram.svg" alt="icone do instagram" /></a>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Sobre_nos
