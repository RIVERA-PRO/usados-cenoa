import React from 'react'
import UsadosForm from '../../Components/UsadosForm/UsadosForm'
import './Contacto.css'
import { Link as Anchor, } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, } from '@fortawesome/free-solid-svg-icons';
import CardsUsados from '../../Components/CardsUsados/CardsUsados';
export default function Contacto() {
    return (
        <div className='contact'>

            <div className='bg2'>
                <Anchor to={`/`}>
                    <FontAwesomeIcon icon={faHome} /> Inicio
                </Anchor>
                |
                <Anchor to=''>
                    Compramos tu usado
                </Anchor>
            </div>
            <UsadosForm />
            <CardsUsados />
        </div>
    )
}
