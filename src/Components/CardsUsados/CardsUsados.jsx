import React from 'react'
import './CardsUsados.css'
import img8 from '../../images/08.png'
import img7 from '../../images/07.png'
import img6 from '../../images/06.png'
export default function CardsUsados() {
    return (
        <div className='CardsUsados'>
            <div className='cardUsados'>
                <img src={img8} alt="Usados cenoa" />
                <h3>COMUNICATE CON NOSOTROS</h3>
                <p>Completá el formulario con tus datos y un asesor se comunicará a la brevedad.</p>
            </div>
            <div className='cardUsados'>
                <img src={img7} alt="Usados cenoa" />
                <h3>SOLICITÁ TURNO PARA TU PERITAJE</h3>
                <p>Coordina un día y fecha para realizar revision de la unidad.
                    ¡Son 64 puntos de control!</p>
            </div>
            <div className='cardUsados'>
                <img src={img6} alt="Usados cenoa" />
                <h3>¡LA FORMA MÁS FÁCIL DE VENDER TU AUTO!</h3>
                <p>i aceptas nuestra oferta y contas con toda la documentación, nuestros gestores avanzan con el tramite y el pago se hace en aprox. 72hs

                </p>
            </div>
        </div>
    )
}
