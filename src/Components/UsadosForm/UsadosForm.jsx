import React, { useState } from 'react';
import './UsadosForm.css';
import logo from '../../images/logo.png';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        province: '',
        phone: '',
        vehicle: '' // Nuevo campo para el vehículo
    });

    const provinces = ['Buenos Aires', 'Catamarca', 'Chaco', 'Chubut', 'Córdoba', 'Corrientes', 'Entre Ríos', 'Formosa', 'Jujuy', 'La Pampa', 'La Rioja', 'Mendoza', 'Misiones', 'Neuquén', 'Río Negro', 'Salta', 'San Juan', 'San Luis', 'Santa Cruz', 'Santa Fe', 'Santiago del Estero', 'Tierra del Fuego', 'Tucumán'];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes manejar la lógica de envío del formulario
        console.log(formData);
        // Reiniciar el estado del formulario después del envío
        setFormData({
            name: '',
            email: '',
            message: '',
            province: '',
            phone: '',
            vehicle: '' // Reiniciar también el campo del vehículo
        });
    };

    return (
        <div className='usadosContain'>
            <div className='textForm'>
                <h1 >¿QUERÉS VENDER
                    TU USADO?</h1>
                <h2>LO PERITAMOS + LO COTIZAMOS =
                    TE LO COMPRAMOS</h2>
            </div>
            <div className='formContain'>
                <form onSubmit={handleSubmit} className='form'>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder='Nombre'
                    />
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder='Email'
                        required
                    />

                    <select
                        id="province"
                        name="province"
                        value={formData.province}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Seleccionar Provincia</option>
                        {provinces.map((province, index) => (
                            <option key={index} value={province}>{province}</option>
                        ))}
                    </select>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder='Teléfono'
                        required
                    />
                    <input
                        type="text"
                        id="vehicle"
                        name="vehicle"
                        value={formData.vehicle}
                        onChange={handleChange}
                        placeholder='Vehículo de interés' // Placeholder para el vehículo
                        required
                    />
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder='Consulta'
                        required
                    ></textarea>
                    <button type="submit" className='btn'>Enviar</button>
                </form>
            </div>


        </div>
    );
}
