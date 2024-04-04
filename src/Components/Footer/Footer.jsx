import React from 'react'
import './Footer.css'
import logo from '../../images/logo.png'
import { Link as Anchor } from "react-router-dom";
import { productos } from '../productos'
import { contacto } from '../contacto'
export default function Footer() {

    return (
        <div className='foter'>


            <div className='contact-footer'>

                <div className='deColumnsText'>
                    <Anchor to={`/`}>
                        <img src={logo} alt="logo" />
                    </Anchor>
                    <div class="redes-sociales">
                        <a href="#"><i class='fa fa-facebook'></i></a>
                        <a href="#"><i class='fa fa-instagram'></i></a>
                        <a href="#"> <i class='fa fa-linkedin'></i></a>
                        <a href="#"> <i class='fa fa-whatsapp'></i></a>
                    </div>
                </div>
                <div className='deColumnsText'>
                    <h3>Contactanos</h3>
                    {
                        contacto?.map(item => (
                            <>
                                <Anchor href={`tel:${item?.telefono}`}>
                                    {item?.telefono}
                                </Anchor>
                                <Anchor href={`mailto:${item?.email}`}>
                                    {item?.email}
                                </Anchor>


                            </>
                        ))
                    }

                </div>
                <div className='deColumnsText'>
                    <h3>Horarios De Atención</h3>
                    {
                        contacto?.map(item => (

                            <Anchor >
                                {item?.horario}
                            </Anchor>



                        ))
                    }
                </div>
                <div className='deColumnsText'>
                    <h3>Visitanos</h3>
                    {
                        contacto?.map(item => (

                            <Anchor >
                                {item?.direccion}
                            </Anchor>



                        ))
                    }

                </div>
            </div>

            <div className='Copyright'>
                <p>Copyright © 2024 Usados Cenoa</p>

            </div>



        </div>
    )
}
