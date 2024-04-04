import React from 'react'
import Header from '../Pages/Header/Header'
import Footer from '../Components/Footer/Footer'
import Hero from '../Components/Hero/Hero'
import ProductosHome from '../Components/ProductosHome/ProductosHome'
import TilteSection from '../Components/TilteSection/TilteSection'
import Galery from '../Components/Galery/Galery'
import BtnWhatsapp from '../Components/BtnWhatsapp/BtnWhatsapp'
import Scocial from '../Components/Social/Social'
import Destacados from '../Components/Destacados/Destacados'
import Contact from '../Components/Contact/Contact'
export default function IndexLayout() {
    return (
        <div>
            <Header />

            <div className='espacio'>

            </div>
            <Hero />
            <TilteSection title="Usados destacados Cenoa" more="Ver más" link="tienda-de-usados" />
            <ProductosHome />
            <TilteSection title="Galeria de Imagenes" more="Ver más" link="tienda-de-usados" />
            <Galery />
            <Destacados />
            <Scocial />
            <h1 className='titles'>COMUNICATE CON NOSOTROS</h1>
            <Contact />
            <Footer />
            <BtnWhatsapp />
        </div>
    )
}
