import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { productos } from "../productos";
import './Detail.css'
import Modal from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faAngleDoubleRight, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import whatsappIcon from '../../images/wpp.png';
import { Link, useNavigate, useLocation } from "react-router-dom";
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import TilteSection from '../TilteSection/TilteSection'
export default function Detail() {
    const navigate = useNavigate();

    const swiperRef = useRef(null);
    SwiperCore.use([Navigation, Pagination, Autoplay]);
    const { id } = useParams();
    const [producto, setProducto] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalImage, setModalImage] = useState("");

    useEffect(() => {
        const inmueble = productos.find((e) => e.id === parseInt(id));
        setProducto(inmueble);
    }, [id, productos]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!producto) {
        return <div>Cargando...</div>;
    }



    function handleCompartirClick() {
        if (navigator.share) {
            navigator.share({
                title: document.title,
                text: 'Echa un vistazo a este producto',
                url: window.location.href,
            })
                .then(() => console.log('Contenido compartido correctamente'))
                .catch((error) => console.error('Error al compartir:', error));
        } else {
            console.error('La API de compartir no está disponible en este navegador.');
        }
    }

    const handleWhatsappMessage = () => {
        const phoneNumber = '3875683101';
        const title = encodeURIComponent(producto?.titulo?.replace(/\s+/g, '-'));


        const message = `Hola, quisiera más información sobre\n ${title}\n`;

        const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

        window.open(whatsappUrl, '_blank');
    };

    const goBack = () => {
        navigate(-1);
    };

    return (
        <div className="detail">


            <div className="deFlexDetail">
                <button className="back" onClick={goBack}> <FontAwesomeIcon icon={faArrowLeft} /> </button>
                <button className="share" onClick={handleCompartirClick}> <FontAwesomeIcon icon={faExternalLinkAlt} /> </button>
            </div>
            <div className="detail-contain">
                <SwiperSlide id={"swiperDetail"} >
                    <Swiper
                        effect={'coverflow'}
                        grabCursor={true}
                        loop={true}
                        slidesPerView={'auto'}
                        coverflowEffect={{ rotate: 0, stretch: 0, depth: 100, modifier: 2.5 }}
                        navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
                        autoplay={{ delay: 3000 }} // Cambia el valor de 'delay' según tus preferencias
                        pagination={{ clickable: true, }}
                        onSwiper={(swiper) => {
                            console.log(swiper);
                            swiperRef.current = swiper;
                        }}

                    >



                        {
                            producto.img ?
                                (
                                    <SwiperSlide  >
                                        <img
                                            src={producto.img}
                                            alt={producto.titulo}
                                            className="img"
                                            onClick={() => {
                                                setModalImage(producto.img);
                                                setIsModalOpen(true);
                                            }}
                                        />
                                    </SwiperSlide>
                                ) : (
                                    <>
                                    </>
                                )
                        }

                        {
                            producto.img2 ?
                                (
                                    <SwiperSlide  >
                                        <img
                                            src={producto.img2}
                                            alt={producto.titulo}
                                            className="img"
                                            onClick={() => {
                                                setModalImage(producto.img2);
                                                setIsModalOpen(true);
                                            }}
                                        />
                                    </SwiperSlide>
                                ) : (
                                    <>
                                    </>
                                )
                        }
                        {
                            producto.img3 ?
                                (
                                    <SwiperSlide  >
                                        <img
                                            src={producto.img3}
                                            alt={producto.titulo}
                                            className="img"
                                            onClick={() => {
                                                setModalImage(producto.img3);
                                                setIsModalOpen(true);
                                            }}
                                        />
                                    </SwiperSlide>
                                ) : (
                                    <>
                                    </>
                                )
                        }
                        {
                            producto.img4 ?
                                (
                                    <SwiperSlide  >
                                        <img
                                            src={producto.img4}
                                            alt={producto.titulo}
                                            className="img"
                                            onClick={() => {
                                                setModalImage(producto.img4);
                                                setIsModalOpen(true);
                                            }}
                                        />
                                    </SwiperSlide>
                                ) : (
                                    <>
                                    </>
                                )
                        }

                    </Swiper>

                    <div className="imgsDetail">

                        {
                            producto.img ?
                                (

                                    <img
                                        src={producto.img}
                                        alt={producto.titulo}
                                        className="img"
                                        onClick={() => {
                                            setModalImage(producto.img);
                                            setIsModalOpen(true);
                                        }}
                                    />

                                ) : (
                                    <>
                                    </>
                                )
                        }

                        {
                            producto.img2 ?
                                (

                                    <img
                                        src={producto.img2}
                                        alt={producto.titulo}
                                        className="img"
                                        onClick={() => {
                                            setModalImage(producto.img2);
                                            setIsModalOpen(true);
                                        }}
                                    />

                                ) : (
                                    <>
                                    </>
                                )
                        }
                        {
                            producto.img3 ?
                                (

                                    <img
                                        src={producto.img3}
                                        alt={producto.titulo}
                                        className="img"
                                        onClick={() => {
                                            setModalImage(producto.img3);
                                            setIsModalOpen(true);
                                        }}
                                    />

                                ) : (
                                    <>
                                    </>
                                )
                        }
                        {
                            producto.img4 ?
                                (

                                    <img
                                        src={producto.img4}
                                        alt={producto.titulo}
                                        className="img"
                                        onClick={() => {
                                            setModalImage(producto.img4);
                                            setIsModalOpen(true);
                                        }}
                                    />

                                ) : (
                                    <>
                                    </>
                                )
                        }
                    </div>

                </SwiperSlide>

                <div className="textDetail">

                    <h2 className="title">{producto.titulo}</h2>

                    <hr />
                    <p>{producto.categoria}</p>
                    <table>

                        <tr>
                            <td className="desc">Empresa</td>
                            <td>{producto.empresa}</td>
                        </tr>
                        <tr>
                            <td className="desc">Estado</td>
                            <td>{producto.estado}</td>
                        </tr>
                        <tr>
                            <td className="desc">Marca</td>
                            <td>{producto.marca}</td>
                        </tr>
                        <tr>
                            <td className="desc">Modelo</td>
                            <td>{producto.modelo}</td>
                        </tr>
                        <tr>
                            <td className="desc">Año</td>
                            <td>{producto.año}</td>
                        </tr>
                        <tr>
                            <td className="desc">Kilometraje</td>
                            <td>{producto.KM}</td>
                        </tr>
                        <tr>
                            <td className="desc">Usado Certificado</td>
                            <td>{producto.usado_Certificado}</td>
                        </tr>
                    </table>

                    <button className="wpp" onClick={handleWhatsappMessage}>
                        Consultar
                        <img src={whatsappIcon} alt="whatsappIcon" />
                    </button>

                </div>
            </div>

            <Modal
                open={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                center
                classNames={{
                    modal: 'custom-modal',
                }}
            >
                <img src={modalImage} alt={producto.titulo} />
            </Modal>
            <TilteSection title="PRODUCTOS RELACIONADOS" more="Ver más" link="tienda-de-usados" />
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                slidesPerView={'auto'}
                id={"swiper_container_scroll"}
            >

                {
                    productos?.filter(item => item?.categoria === producto?.categoria).map((item) => (
                        <SwiperSlide id={"swiperCardScroll"} >
                            <Link className='cardScroll' to={`/producto/${item.id}/${item.titulo.replace(/\s+/g, '-')}`}>

                                <Swiper
                                    effect={'coverflow'}
                                    grabCursor={true}
                                    loop={true}
                                    slidesPerView={'auto'}
                                    coverflowEffect={{ rotate: 0, stretch: 0, depth: 100, modifier: 2.5 }}
                                    navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
                                    autoplay={{ delay: 3000 }} // Cambia el valor de 'delay' según tus preferencias
                                    pagination={{ clickable: true, }}
                                    onSwiper={(swiper) => {
                                        console.log(swiper);
                                        swiperRef.current = swiper;
                                    }}

                                >
                                    {
                                        item.img ?
                                            (
                                                <SwiperSlide  >
                                                    <img src={item.img} alt="imagen" />
                                                </SwiperSlide>
                                            ) : (
                                                <>
                                                </>
                                            )
                                    }

                                    {
                                        item.img2 ?
                                            (
                                                <SwiperSlide  >
                                                    <img src={item.img2} alt="imagen" />
                                                </SwiperSlide>
                                            ) : (
                                                <>
                                                </>
                                            )
                                    }
                                    {
                                        item.img3 ?
                                            (
                                                <SwiperSlide  >
                                                    <img src={item.img3} alt="imagen" />
                                                </SwiperSlide>
                                            ) : (
                                                <>
                                                </>
                                            )
                                    }

                                    {
                                        item.img4 ?
                                            (
                                                <SwiperSlide  >
                                                    <img src={item.img4} alt="imagen" />
                                                </SwiperSlide>
                                            ) : (
                                                <>
                                                </>
                                            )
                                    }


                                </Swiper>

                                <div className='cardText'>
                                    <h3>{item.titulo}</h3>
                                    <div className='deFlexIconCategori'>
                                        <h4>{item.categoria}</h4>
                                        <FontAwesomeIcon icon={faAngleDoubleRight} className='iconView' />
                                    </div>
                                </div>
                            </Link>
                        </SwiperSlide>

                    ))
                }
            </Swiper>

        </div>
    );
}
