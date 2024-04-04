import React, { useState, } from "react";
import './Galery2.css';
import Galery1 from '../../images/galeri.PNG';
import Galery2 from '../../images/galeri2.PNG';
import Galery3 from '../../images/galeri3.PNG';

import logo from '../../images/logo2.png';
import Modal from 'react-responsive-modal';
export default function Galery() {
    const images = [Galery1, Galery2, Galery3, Galery1, Galery2, Galery3];
    const [modalImage, setModalImage] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    return (
        <div className='galery2Contain'>
            {images.map((image, index) => (
                <div className='cardGalery' key={index} onClick={() => {
                    setModalImage(image);
                    setIsModalOpen(true);
                }}>
                    <div className='imageContainer'>
                        <img src={image} alt={`imagen-${index}`} />
                        <img src={logo} alt="katana" className='katanalogo' />
                    </div>
                </div>
            ))}
            <Modal
                open={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                center
                classNames={{
                    modal: 'custom-modal',
                }}
            >
                <img src={modalImage} alt='imagen katana' />
            </Modal>
        </div>
    );
}
