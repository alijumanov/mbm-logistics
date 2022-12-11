import React, { useState } from 'react';
import './Scss/HomeAbout.scss';
import { Link } from 'react-router-dom';
import Img from "../../assets/images/about.jpg";

const HomeAbout = () => {

    // video

    const [showVideo, setShowVideo] = useState(false);

    return (
        <>
            <div className={`HomeAbout main`}>
                <img src={Img} alt="back" className='back-img' />
                <div className="wrapper">
                    <h1 className="home-title">MBM логистика компанияси хакида</h1>
                    <p className="text">Logistics is generally the detailed organization and implementation of a complex operation. In a general business sense, logistics manages the flow of goods between the point of origin and the point of consumption to meet the requirements of customers or corporations. The resources managed in logistics may include tangible goods such as materials, equipment, and supplies, as well as food and other consumable items.</p>
                    <div className="btns">
                        <button className='video-btn explore' onClick={() => setShowVideo(true)}><i className="fa fa-play"></i> Батафсил видео</button>
                        <Link to="/about" className='explore'>Копрок малумот</Link>
                    </div>
                </div>
            </div>
            {showVideo &&
                <div className="media">
                    <div className="contrast" onClick={() => setShowVideo(false)}></div>
                    <div className="video col-6">
                        <iframe src="https://www.youtube.com/embed/ztguVLSQagI" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                </div>
            }
        </>
    );
};

export default HomeAbout;