import React from 'react';
import './Scss/Header.scss';
import Slider from 'react-slick';
import { East } from '@mui/icons-material';
import { dataSlider } from '../../api/Api';
import Notification from '../../assets/images/notification.png';

const Header = ({ english, russian, uzbek }) => {

    const settings = {
        dots: true,
        speed: 2000,
        autoplay: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        cssEase: "linear",
        autoplaySpeed: 6000,
        pauseOnHover: false
    };

    return (
        <div className='Header main'>
            <Slider {...settings} className="carousel">
                {dataSlider.map((data) => (
                    <div key={data.id} className='slide-carousel'>
                        <img src={data.image} alt="back" className='back-img' />
                        <div className="wrapper">
                            <h1 className="home-title">{uzbek && data.name_uz}{russian && data.name_ru}{english && data.name_en}</h1>
                            <p className="texts">{uzbek && data.description_uz}{russian && data.description_ru}{english && data.description_en}</p>
                            <p className="texts">{uzbek && data.description1_uz}{russian && data.description1_ru}{english && data.description1_en}</p>
                            <div className="col-12 btns">
                                <a href={data.link} className='explore'>Btafsil tanishish <East className='arrow' /></a>
                                <a href="#contacts" className="explore">Aloqaga chiqish</a>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
            <div className="home-bottom col-12">
                <div className="notification"><img src={Notification} alt="bell" className='bell' /> Birinchi buyurtma uchun 10% chegirmaga ega bo`ling</div>
            </div>
        </div>
    );
};

export default Header;