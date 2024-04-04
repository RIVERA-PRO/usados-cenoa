import React, { useState, useEffect } from 'react'
import './Navbar.css'
import Modal from 'react-modal';
import { Link as Anchor, useNavigate, useLocation } from "react-router-dom";
import InputSearch from '../InputSerach/InputSearchs'
import logo from '../../images/logo.png'
import logobg from '../../images/logobg.png'
import fondo from '../../images/banner1.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCube, faUsers, faEnvelope } from '@fortawesome/free-solid-svg-icons'; // Importa los iconos que necesites
export default function Navbar() {

    const [isOpen, setIsOpen] = useState(false)
    const handleCloseModal = () => {
        setIsOpen(false);
    };
    return (
        <header>
            <nav >





                <Anchor to={`/`} className='logo'>
                    <img src={logo} alt="logo" />
                </Anchor>
                <div className='enlaces'>
                    <Anchor to={`/`} >Inico</Anchor>
                    <Anchor to={`/tienda-de-usados`} >Nuestros Usados</Anchor>
                    <Anchor to={`/compramos-tu-usado`} >Compramos tu usado</Anchor>
                    <Anchor to={`/quienes-somos`} > ¿Quienes somos?</Anchor>
                    <Anchor to={`https://grupocenoa.com.ar/`} target='blank' > Grupo Cenoa</Anchor>
                </div>

                <div className='deFLexNav'>
                    <InputSearch />
                    <div className={`nav_toggle  ${isOpen && "open"}`} onClick={() => setIsOpen(!isOpen)}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <Modal
                    isOpen={isOpen}
                    onRequestClose={() => setIsOpen(false)}
                    className="modalNav"
                    overlayClassName="overlay"
                >
                    <div className="modalNav-content">
                        <div className='fondo'>
                            <img src={fondo} alt={`imagen`} />

                        </div>

                        <img src={logobg} alt="logo" className='logoBg' />
                        <div className='enlaces2'>
                            <Anchor to={`/`} onClick={handleCloseModal}>
                                <FontAwesomeIcon icon={faHome} /> Inicio
                            </Anchor>
                            <Anchor to={`/tienda-de-usados`} onClick={handleCloseModal}>
                                <FontAwesomeIcon icon={faCube} /> Nuestros Usados
                            </Anchor>
                            <Anchor to={`/compramos-tu-usado`} onClick={handleCloseModal}>
                                <FontAwesomeIcon icon={faEnvelope} /> Compramos tu usado
                            </Anchor>
                            <Anchor to={`/quienes-somos`} onClick={handleCloseModal}>
                                <FontAwesomeIcon icon={faUsers} /> ¿Quienes somos?
                            </Anchor>

                        </div>

                    </div>
                </Modal>

            </nav>
        </header>
    );
}
