import React, { useState } from 'react';
import './Scss/Comments.scss';
import Slider from 'react-slick';
import { useQuery } from 'react-query';
import { Skeleton } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { fetchCommentsData } from '../../api/Api';

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

    // i18next

    const { t } = useTranslation();

    // data of services

    const { isLoading, data } = useQuery('comments', fetchCommentsData);

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
                <h1 className="title">{t("otziv")}</h1>
                <Slider {...settings} className='carousel'>
                    {data?.data.map((item, index) => (
                        <div key={item.id} className="comment">
                            <div className="body">
                                <img src={item.image} alt="img" className='comment-img' />
                                <div className="top">
                                    <h3 className="name">{uzbek && item.author_uz}{russian && item.author_ru}{english && item.author_en}{mandarin && item.author_mn}</h3>
                                    <h3 className="name">{item.author}</h3>
                                    <div className="date">{item.date}</div>
                                </div>
                                <p className='desc'>{uzbek && item.comment_uz?.slice(0, 120)}{russian && item.comment_ru?.slice(0, 120)}{english && item.comment_en?.slice(0, 120)}{mandarin && item.comment_mn?.slice(0, 120)}...</p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Comments;