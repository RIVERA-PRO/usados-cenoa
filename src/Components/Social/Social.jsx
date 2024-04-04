import React, { useEffect, useState, useRef } from 'react';
import './Social.css'
import { Link as Anchor } from 'react-router-dom';
import { contacto } from '../contacto'
import IconSection from '../../Components/IconSection/IconSection';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
export default function Social() {
    const [contactos, setContactos] = useState([]);

    return (
        <div className='socialContain'>
            <IconSection />
            <h2>Síguenos en nuestras redes sociales</h2>

            <div className='socialIcons'>
                {
                    contacto?.map(item => (
                        <>
                            <Anchor to={item.instagram} target="_blank"><i className='fa fa-instagram'></i></Anchor>
                            <Anchor to={`tel:${item.telefono}`} target="_blank"><i className='fa fa-whatsapp'></i></Anchor>
                            <Anchor to={item.facebook} target="_blank"><i className='fa fa-facebook'></i></Anchor>
                            <Anchor to={`mailto:${item.email}`} target="_blank"><FontAwesomeIcon icon={faEnvelope} /> </Anchor>
                        </>
                    ))
                }

            </div>
        </div>
    )
}
