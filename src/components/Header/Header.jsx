import React from 'react';
import './Scss/Header.scss';
import Slider from 'react-slick';
import { useQuery } from 'react-query';
import { Skeleton } from '@mui/material';
import { East } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import { fetchHeaderSliderData } from '../../api/Api';
import Notification from '../../assets/images/notification.png';

const Header = ({ english, russian, uzbek, mandarin, changeScrollServices }) => {

    // slider settings

    const settings = {
        dots: true,
        speed: 2000,
        // autoplay: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        cssEase: "linear",
        autoplaySpeed: 6000,
        pauseOnHover: false
    };

    // i18next

    const {t} = useTranslation();

    // data of header-slider

    const { isLoading, data } = useQuery('header-slider', fetchHeaderSliderData);

    // skeleton loading

    if (isLoading) {
        return (
            <div className="Header main">
                <div className="carousel">
                    <div className="slide-carousel">
                        <div className="wrapper">
                            <h1 className='home-title'>
                                <Skeleton variant='text' sx={{ bgcolor: 'grey.800' }} width="70%" />
                                <Skeleton variant='text' sx={{ bgcolor: 'grey.800' }} width="50%" />
                            </h1>
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
                                <a href={item.link} className='explore'>{t("p1btn")} <East className='arrow' /></a>
                                <a href="#contacts" className="explore">{t("p1btn2")} <East className='arrow res-arrow' /></a>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
            <div className="home-bottom col-12">
                <div className="notification" onClick={changeScrollServices}><img src={Notification} alt="bell" className='bell' /> {t("marketing")}</div>
            </div>
        </div>
    );
};

export default Header;