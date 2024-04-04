import React, { useState, useEffect, useRef } from 'react';
import './Productos.css';
import { productos } from '../productos';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import 'swiper/swiper-bundle.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';

export default function Productos() {
    const swiperRef = useRef(null);
    SwiperCore.use([Navigation, Pagination, Autoplay]);
    const [selectedBrand, setSelectedBrand] = useState('');
    const [selectedModel, setSelectedModel] = useState('');
    const categoriasUnicas = [...new Set(productos.map(item => item.categoria))];
    const marcasUnicas = [...new Set(productos.map(item => item.marca))];
    const modelosUnicos = [...new Set(productos.map(item => item.modelo))];

    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [propertiesToShow, setPropertiesToShow] = useState(9);
    const propertiesPerLoad = 9;

    const handleCategoryChange = (category) => {
        setSelectedCategory(category === selectedCategory ? '' : category);
    };

    const isCategorySelected = (category) => {
        return category === selectedCategory ? 'selected' : '';
    };


    const filtered = productos.filter((item) => {
        const matchesSearch = item.titulo.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = !selectedCategory || item.categoria === selectedCategory;
        const matchesBrand = !selectedBrand || item.marca === selectedBrand;
        const matchesModel = !selectedModel || item.modelo === selectedModel;

        return matchesSearch && matchesCategory && matchesBrand && matchesModel;
    });


    const noResults = filtered.length === 0;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const handleBrandChange = (brand) => {
        setSelectedBrand(brand === selectedBrand ? '' : brand);
    };

    const handleModelChange = (model) => {
        setSelectedModel(model === selectedModel ? '' : model);
    };
    // Función para verificar si una marca está seleccionada
    const isBrandSelected = (brand) => {
        return brand === selectedBrand ? 'selected' : '';
    };

    // Función para verificar si un modelo está seleccionado
    const isModelSelected = (model) => {
        return model === selectedModel ? 'selected' : '';
    };

    return (
        <div className='propiedadesContain'>
            <div className='gridContain'>
                <div className='filtered'>
                    <fieldset className='inputFiltro'>
                        <FontAwesomeIcon icon={faSearch} className="search-icon" />
                        <input
                            type="text"
                            placeholder="Buscar..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="input"
                        />
                    </fieldset>

                    <div className='filtross'>
                        <h3>Categorias</h3>
                        {categoriasUnicas.map((category) => (
                            <label key={category} className={`deFlexInput ${isCategorySelected(category)}`} id='categoria'>
                                <input
                                    type="checkbox"
                                    value={category}
                                    checked={category === selectedCategory}
                                    onChange={() => handleCategoryChange(category)}
                                />
                                {category}
                            </label>
                        ))}

                    </div>

                    <div className='filtross'>
                        <h3>Marcas</h3>
                        {marcasUnicas.map((brand) => (
                            <label key={brand} className={`deFlexInput ${isBrandSelected(brand)}`} id='categoria'>
                                <input
                                    type="checkbox"
                                    value={brand}
                                    checked={brand === selectedBrand}
                                    onChange={() => handleBrandChange(brand)}
                                />
                                {brand}
                            </label>
                        ))}
                    </div>


                    <div className='filtross'>
                        <h3>Modelos</h3>
                        {modelosUnicos.map((model) => (
                            <label key={model} className={`deFlexInput ${isModelSelected(model)}`} id='categoria'>
                                <input
                                    type="checkbox"
                                    value={model}
                                    checked={model === selectedModel}
                                    onChange={() => handleModelChange(model)}
                                />
                                {model}
                            </label>
                        ))}
                    </div>

                </div>
                <div className='cardsContain'>
                    {noResults ? (

                        <p className='noresult'>No hay resultados</p>

                    ) : (
                        filtered.slice(0, propertiesToShow).map((item) => (
                            <Link className='card' to={`/producto/${item.id}/${item.titulo.replace(/\s+/g, '-')}`}>

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
                                    id={"swiper_container_scroll"}
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
                        ))
                    )}

                </div>

            </div>
            {propertiesToShow < filtered.length && (
                <div className='moreBtn'>
                    <button onClick={() => setPropertiesToShow(propertiesToShow + propertiesPerLoad)}>
                        Mostrar más...
                    </button>
                </div>
            )}
        </div>
    );
}
