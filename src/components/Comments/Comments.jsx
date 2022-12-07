import React, { useState } from 'react';
import './Scss/Comments.scss';
import Slider from 'react-slick';
import { dataComments } from '../../api/Api';

const Comments = ({ english, russian, uzbek, dark }) => {

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

    return (
        <div className={`Comments main ${!dark && "light-comments"}`}>
            <div className="wrapper">
                <h1 className="title">Fikr va mulohazalar</h1>
                <Slider {...settings} className='carousel'>
                    {dataComments.map((data, index) => (
                        <div key={data.id} className="comment">
                            <div className="body">
                                <img src={data.image} alt="img" />
                                <div className="top">
                                    <h3 className="name">{uzbek && data.name_uz}{russian && data.name_ru}{english && data.name_en}</h3>
                                    <div className="date">{data.date}</div>
                                </div>
                                <p className='desc'>{uzbek && data.description_uz.slice(0, 120)}{russian && data.description_ru.slice(0, 120)}{english && data.description_en.slice(0, 120)}...</p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Comments;