import React from 'react';
import './Scss/News.scss';
import Slider from 'react-slick';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { Skeleton } from '@mui/material';
import { fetchNewsData } from '../../api/Api';
import { useTranslation } from 'react-i18next';
import { CalendarToday, Visibility } from '@mui/icons-material';

const News = ({ english, russian, uzbek, mandarin, dark, main, getId }) => {

    const settings = {
        dots: true,
        speed: 500,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
        ]
    };

    // i18next

    const { t } = useTranslation();

    // data of news

    const { isLoading, data } = useQuery('news', fetchNewsData);

    // skeleton loading

    if (isLoading) {
        return (
            <div className={`News main ${!dark && "light-news"}`}>
                <div className="wrapper">
                    <div className="col-12 main-new">
                        <div className="body">
                            <div className="col-5 img">
                                <Skeleton variant='rectangular' sx={{ bgcolor: 'grey.800' }} width="100%" height="15vw" />
                            </div>
                            <div className="col-7 texts">
                                <h1 className="col-12">
                                    <Skeleton variant='text' sx={{ bgcolor: 'grey.800' }} width="100%" />
                                </h1>
                                <p className="col-12">
                                    <Skeleton variant='text' sx={{ bgcolor: 'grey.800' }} width="100%" />
                                    <Skeleton variant='text' sx={{ bgcolor: 'grey.800' }} width="100%" />
                                    <Skeleton variant='text' sx={{ bgcolor: 'grey.800' }} width="100%" />
                                    <Skeleton variant='text' sx={{ bgcolor: 'grey.800' }} width="100%" />
                                    <Skeleton variant='text' sx={{ bgcolor: 'grey.800' }} width="80%" />
                                </p>
                            </div>
                        </div>
                    </div>
                    <Slider {...settings} className="carousel">
                        {[1, 2, 3, 4].map((data, index) => (
                            <div key={index} className="new">
                                <div className="body">
                                    <div className='news-img'>
                                        <Skeleton variant='rectangular' sx={{ bgcolor: 'grey.800' }} width="100%" height="22vw" />
                                    </div>
                                    <h1 className="col-12 mt-3"><Skeleton variant='text' sx={{ bgcolor: 'grey.800' }} width="100%" /></h1>
                                    <p className="col-12">
                                        <Skeleton variant='text' sx={{ bgcolor: 'grey.800' }} width="100%" />
                                        <Skeleton variant='text' sx={{ bgcolor: 'grey.800' }} width="80%" />
                                    </p>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        )
    }

    return (
        <div className={`News main ${!dark && "light-news"}`}>
            <div className="wrapper" style={{ paddingTop: !main && "0px" }}>
                {main && data?.data.slice(0, 1).map((item) => (
                    <div key={item.id} className="col-12 main-new">
                        <div className="body">
                            <div className="col-5 img">
                                <img src={item.image} alt="img" />
                            </div>
                            <div className="col-7 texts">
                                <div className="actual">
                                    <div className="stamp">{t("newsact")}</div>
                                    <div className="view"><Visibility className='icon' />32 {t("newsview")}</div>
                                    <div className="date"><CalendarToday className='icon' /> {item.date}</div>
                                </div>
                                <h3 className="name">{uzbek && item.name_uz}{russian && item.name_ru}{english && item.name_en}{mandarin && item.name_mn}</h3>
                                <p className="desc">{uzbek && item.description_uz?.slice(0, 330)}{russian && item.description_ru?.slice(0, 330)}{english && item.description_en?.slice(0, 330)}{mandarin && item.description_mn?.slice(0, 330)}...</p>
                                <Link to={`/news/${item.id}`} className="explore">{t("newsbtn")}</Link>
                            </div>
                        </div>
                    </div>
                ))}
                <h2 className="all-news">{t("newsall")}</h2>
                <Slider {...settings} className='carousel'>
                    {data?.data.map((item) => (
                        // getId != item.id &&
                        <div key={item.id} className="new">
                            <Link to={`/news/${item.id}`} className="body">
                                <img src={item.image} alt="img" className='news-img' />
                                <h3 className="name">{uzbek && item.name_uz?.slice(0, 15)}{russian && item.name_ru?.slice(0, 15)}{english && item.name_en?.slice(0, 15)}{mandarin && item.name_mn?.slice(0, 15)}...</h3>
                                <p className="desc">{uzbek && item.description_uz?.slice(0, 50)}{russian && item.description_ru?.slice(0, 50)}{english && item.description_en?.slice(0, 50)}{mandarin && item.description_mn?.slice(0, 50)}...</p>
                                <div className="explore">{t("newsbtn")}</div>
                            </Link>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default News;