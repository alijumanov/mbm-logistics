import React from 'react';
import './Scss/Header.scss';
import Slider from 'react-slick';
import { useQuery } from 'react-query';
import { Skeleton } from '@mui/material';
import { East } from '@mui/icons-material';
import Notification from '../../assets/images/notification.png';
import { dataSlider, fetchHeaderSliderData } from '../../api/Api';

const Header = ({ english, russian, uzbek, mandarin }) => {

    // slider settings

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

    // data of header-slider

    const { isLoading, data } = useQuery('header-slider', fetchHeaderSliderData);

    // skeleton loading

    if (isLoading) {
        return (
            <div className="Header main">
                <div className="carousel">
                    <div className="slide-carousel">
                        <div className="wrapper">
                            <h1 className='home-title'><Skeleton variant='text' sx={{ bgcolor: 'grey.800' }} width="70%" /></h1>
                            <p className="texts">
                                <Skeleton variant='text' sx={{ bgcolor: 'grey.800' }} />
                                <Skeleton variant='text' sx={{ bgcolor: 'grey.800' }} />
                                <Skeleton variant='text' sx={{ bgcolor: 'grey.800' }} width="60%" />
                            </p>
                            <p className="texts">
                                <Skeleton variant='text' sx={{ bgcolor: 'grey.800' }} />
                                <Skeleton variant='text' sx={{ bgcolor: 'grey.800' }} />
                                <Skeleton variant='text' sx={{ bgcolor: 'grey.800' }} width="60%" />
                            </p>
                            <div className="col-12 btns">
                                <Skeleton variant='rounded' sx={{ bgcolor: 'grey.800' }} width="30%" height="4vw" />
                                <Skeleton variant='rounded' sx={{ bgcolor: 'grey.800' }} width="30%" height="4vw" className='mx-4' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="home-bottom col-12">
                    <Skeleton variant='rounded' sx={{ bgcolor: 'grey.800' }} width="50%" height="4vw" />
                </div>
            </div>
        )
    }

    return (
        <div className='Header main'>
            <Slider {...settings} className="carousel">
                {data?.data.map((item) => (
                    <div key={item.id} className='slide-carousel'>
                        <img src={item.image} alt="back" className='back-img' />
                        <div className="wrapper">
                            <h1 className="home-title">{uzbek && item.name_uz}{russian && item.name_ru}{english && item.name_en}{mandarin && item.name_mn}</h1>
                            <p className="texts">{uzbek && item.description_uz}{russian && item.description_ru}{english && item.description_en}{mandarin && item.description_mn}</p>
                            {/* <p className="texts">{uzbek && item.description1_uz}{russian && item.description1_ru}{english && item.description1_en}{mandarin && item.description1_mn}</p> */}
                            <div className="col-12 btns">
                                <a href={item.link} className='explore'>Btafsil tanishish <East className='arrow' /></a>
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