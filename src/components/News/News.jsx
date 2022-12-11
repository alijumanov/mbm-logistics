import React from 'react';
import './Scss/News.scss';
import Slider from 'react-slick';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { Skeleton } from '@mui/material';
import { dataNews, fetchNewsData } from '../../api/Api';
import { CalendarToday, Visibility } from '@mui/icons-material';

const News = ({ english, russian, uzbek, dark, main, getId }) => {

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

    // data of news

    const { isLoading, data } = useQuery('header-slider', fetchNewsData);

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
                {main && dataNews.slice(0, 1).map((data) => (
                    <div key={data.id} className="col-12 main-new">
                        <div className="body">
                            <div className="col-5 img">
                                <img src={data.image} alt="img" />
                            </div>
                            <div className="col-7 texts">
                                <div className="actual">
                                    <div className="stamp">Actual new</div>
                                    <div className="view"><Visibility className='icon' /> 16.5 k views</div>
                                    <div className="date"><CalendarToday className='icon' /> {data.date}</div>
                                </div>
                                <h3 className="name">{uzbek && data.name_uz}{russian && data.name_ru}{english && data.name_en}</h3>
                                <p className="desc">{uzbek && data.description_uz.slice(0, 330)}{russian && data.description_ru.slice(0, 330)}{english && data.description_en.slice(0, 330)}...</p>
                                <Link to={`/news/${data.id}`} className="explore">batafsil o'qish</Link>
                            </div>
                        </div>
                    </div>
                ))}
                <h2 className="all-news">Barcha yangiliklarimiz</h2>
                <Slider {...settings} className='carousel'>
                    {dataNews.map((data) => (
                        getId != data.id &&
                        <div key={data.id} className="new">
                            <div className="body">
                                <img src={data.image} alt="img" className='news-img' />
                                <h3 className="name">{uzbek && data.name_uz.slice(0, 15)}{russian && data.name_ru.slice(0, 15)}{english && data.name_en.slice(0, 15)}...</h3>
                                <p className="desc">{uzbek && data.description_uz.slice(0, 50)}{russian && data.description_ru.slice(0, 50)}{english && data.description_en.slice(0, 50)}...</p>
                                <Link to={`/news/${data.id}`} className="explore">batafsil o'qish</Link>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default News;