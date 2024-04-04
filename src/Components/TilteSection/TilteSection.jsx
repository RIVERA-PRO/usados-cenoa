import React from 'react'
import './TilteSection.css'
import { Link as Anchor, useNavigate, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
export default function TilteSection({ title, more, link }) {
    return (
        <div className='titleSection'>

            <h2>  {title}</h2>

            <Anchor to={`/${link}`} >
                {more}    <FontAwesomeIcon icon={faAngleDoubleRight} className='iconMore' />
            </Anchor>
        </div>
    )
}
