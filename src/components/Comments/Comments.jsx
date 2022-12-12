import React, { useState } from 'react';
import './Scss/Comments.scss';
import Slider from 'react-slick';
import { dataComments, fetchCommentsData } from '../../api/Api';
import { useQuery } from 'react-query';
import { Skeleton } from '@mui/material';

const Comments = ({ english, russian, uzbek, mandarin, dark }) => {

    const settings = {
        dots: false,
        centerMode: true,
        infinite: true,
        centerPadding: "25%",
        slidesToShow: 1,
        speed: 1000,
        pauseOnHover: false,
        slidesToScroll: 1,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    centerPadding: "17%",
                }
            },
            {
                breakpoint: 600,
                settings: {
                    centerPadding: "0",
                }
            }
        ]
    };

    // data of services

    const { isLoading, data } = useQuery('header-slider', fetchCommentsData);

    // skeleton loading

    if (isLoading) {
        return (
            <div className={`Comments main ${!dark && "light-comments"}`}>
                <div className="wrapper">
                    <h1 className="col-12 d-flex justify-content-center">
                        <Skeleton variant='text' sx={{ bgcolor: 'grey.800' }} width="70%" />
                    </h1>
                    <Slider {...settings} className='carousel'>
                        {[1, 2, 3, 4, 5].map((data, index) => (
                            <div key={index} className="comment">
                                <div className="body">
                                    <Skeleton variant='circular' sx={{ bgcolor: 'grey.800' }} width="100%" height="100%" className='comment-img' />
                                    <div className="top">
                                        <h3 className="name col-7">
                                            <Skeleton variant='text' sx={{ bgcolor: 'grey.800' }} width="100%" />
                                        </h3>
                                        <div className="col-4">
                                            <Skeleton variant='rounded' sx={{ bgcolor: 'grey.800' }} width="100%" />
                                        </div>
                                    </div>
                                    <p className='desc'>
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
        <div className={`Comments main ${!dark && "light-comments"}`}>
            <div className="wrapper">
                <h1 className="title">Fikr va mulohazalar</h1>
                <Slider {...settings} className='carousel'>
                    {dataComments.map((data, index) => (
                        <div key={data.id} className="comment">
                            <div className="body">
                                <img src={data.image} alt="img" className='comment-img' />
                                <div className="top">
                                    <h3 className="name">{uzbek && data.name_uz}{russian && data.name_ru}{english && data.name_en}{mandarin && data.name_mn}</h3>
                                    <div className="date">{data.date}</div>
                                </div>
                                <p className='desc'>{uzbek && data.description_uz.slice(0, 120)}{russian && data.description_ru.slice(0, 120)}{english && data.description_en.slice(0, 120)}{mandarin && data.description_mn.slice(0, 120)}...</p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Comments;