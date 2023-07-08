import React, { useState } from 'react';
import './Scss/HomeAbout.scss';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Img from "../../assets/images/about.jpg";

const HomeAbout = () => {

    // video

    const [showVideo, setShowVideo] = useState(false);

    // i18next

    const { t } = useTranslation();

    return (
        <>
            <div className={`HomeAbout main`}>
                <img src={Img} alt="back" className='back-img' />
                <div className="wrapper">
                    <h1 className="home-title">{t("about")}</h1>
                    <p className="text">{t("abouttext1")}</p>
                    <div className="btns">
                        <button className='video-btn explore' onClick={() => setShowVideo(true)}><i className="fa fa-play"></i> {t("vid")}</button>
                        <Link to="/aboutus" className='explore'>{t("aboutbtn")}</Link>
                    </div>
                </div>
            </div>
            {showVideo &&
                <div className="media">
                    <div className="contrast" onClick={() => setShowVideo(false)}></div>
                    <div className="video col-6">
                        <iframe src="https://www.youtube.com/embed/NSpA-Hwdr_M" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                </div>
            }
        </>
    );
};

export default HomeAbout;