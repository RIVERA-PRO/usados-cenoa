import React from 'react'
import './About.css'

import { Link as Anchor, } from "react-router-dom";
import Banner from '../../images/about.png'
export default function About() {
    return (
        <div className='abouContain'>
            <div className='imgAbout'>
                <img src={Banner} alt="Grupo Cenoa Usados" />
            </div>
            <div className='aboutText'>

                <h1 className='titles'>LÍDERES EN EL RUBRO AUTOMOTRIZ </h1>
                <h2>USADOS CENOA.
                    ES UNA EMPRESA DE GRUPO CENOA.</h2>
                <p>
                    Bienvenido a Usados Cenoa, donde el conocimiento por la industria automotriz y el compromiso con nuestros clientes se fusionan para brindarle la mejor experiencia en el norte argentino.</p>
                <Anchor to={`/`} className='btn'>
                    Contactar
                </Anchor>
            </div>
        </div>
    )
}
