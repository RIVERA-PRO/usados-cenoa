import React from 'react'
import logo from '../../images/logo.png'
import './IconSection.css'
export default function IconSection() {
    return (
        <div className='IconSection'>
            <hr />
            <img src={logo} alt="katana logo" />
            <hr />
        </div>
    )
}
