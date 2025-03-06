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
      <br />
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
            <br />
            <br />
            <label>Facilitar a busca por freelancers</label>
            <p>Tornar a busca por freelancers rápida e prática, permitindo que o usuário encontre exatamente o que precisa com poucos cliques.</p>
          </div>
          <img src="./img_obj2.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Sobre_nos
