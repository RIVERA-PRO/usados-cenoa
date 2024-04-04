import React from 'react'
import './Nosotros.css'
import About from '../../Components/About/About'
import { Link as Anchor, } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, } from '@fortawesome/free-solid-svg-icons';
import IconSection from '../../Components/IconSection/IconSection';
import Galery2 from '../../Components/Galery2/Galery2';
export default function Nosotros() {
    return (
        <div>
            <div className='bg'>
                <Anchor to={`/`}>
                    <FontAwesomeIcon icon={faHome} /> Inicio
                </Anchor>
                |
                <Anchor to=''>
                    ¿Quienes somos?
                </Anchor>
            </div>
            <IconSection />
            <About />
            <Galery2 />
        </div>
    )
}
