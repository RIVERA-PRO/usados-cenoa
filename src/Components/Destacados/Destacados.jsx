import React from 'react';
import './Destacados.css';
import icon from '../../images/icon.PNG'
export default function Destacados() {
    return (
        <div className='DestacadosContain'>
            <strong className='subtitles'>NOS DESTACAMOS POR SER</strong>
            <h2 className='titles'>LÍDERES EN VENTA DE AUTOS USADOS</h2>
            <div className='cardsDestacados'>
                <div className='cardDestacados'>
                    <img src={icon} alt="Usados Cenoa" />
                    <h3>Garantía</h3>
                    <p>Ofrecemos una sólida garantía que respalda cada uno de nuestros vehículos, brindando tranquilidad y confianza a nuestros clientes en cada compra.</p>
                </div>
                <div className='cardDestacados'>
                    <img src={icon} alt="Usados Cenoa" />
                    <h3> Variedad</h3>
                    <p>Descubra una amplia gama de opciones en nuestro concesionario, para satisfacer todos los gustos y necesidades de nuestros clientes.</p>
                </div>
                <div className='cardDestacados'>
                    <img src={icon} alt="Usados Cenoa" />
                    <h3>Trayectoria</h3>
                    <p>Con una destacada trayectoria en el mercado automotriz, nos enorgullece ser su socio confiable a lo largo de 20 años.</p>
                </div>
            </div>
        </div>
    );
}
