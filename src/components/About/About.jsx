import React, { useState } from 'react';
import './Scss/About.scss';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import Contacts from '../Contacts/Contacts';
import { useTranslation } from 'react-i18next';
import Play from '../../assets/images/play.png';
import { fetchPartnersData } from '../../api/Api';
import Infografics from '../Infografics/Infografics';
import BackImg from '../../assets/images/about1.jpg';
import BackImg1 from '../../assets/images/about2.jpg';

const About = ({ english, russian, uzbek, mandarin, changeModal, dark, partnersPage }) => {

    // data of services

    const { isLoading, data } = useQuery('partners', fetchPartnersData);

    // video

    const [showVideo, setShowVideo] = useState(false);

    // i18next

    const { t } = useTranslation();

    return (
        <>
            <div className={`About main ${!dark && "light-about"}`} style={{ backgroundColor: `${dark ? "#1A1A1A" : "#F2F2F2"}` }}>
                <div className="wrapper top-wrapper" style={{ backgroundColor: `${dark ? "#1A1A1A" : "#F2F2F2"}` }}>
                    <h1 className="title">{t("about")}</h1>
                    <div className="links">
                        <Link className='link' to="/">{t("link1")} &#62;</Link>
                        <a className='link' href="#">{t("link2")}</a>
                    </div>
                </div>
                {/* <img src={BackImg} alt="backImg" className='fixed-img' /> */}
                <div className="col-12 imgs">
                    <img src={BackImg} alt="backImg" className='back-img' />
                </div>
                <div className="wrapper middle-page" style={{ backgroundColor: `${dark ? "#1A1A1A" : "#F2F2F2"}`, paddingBottom: "10px" }}>
                    <p className="text">{t("abouttext1")}</p>
                </div>
                <div style={{ backgroundColor: `${dark ? "#1A1A1A" : "#F2F2F2"}` }} className="main">
                    <Infografics dark={dark} english={english} uzbek={uzbek} russian={russian} mandarin={mandarin} />
                </div>
                {/* <div className="wrapper" ref={partnersPage} style={{ backgroundColor: `${dark ? "#1A1A1A" : "#F2F2F2"}` }} >
                    <h1 className="about-title">{t("partners")}</h1>
                    <div className="partners">
                        {data?.data.map((data) => (
                            <div key={data.id} className="col-3 partner">
                                <div className="body">
                                    <div className="img">
                                        <img src={data.image} alt="img" />
                                    </div>
                                    <div className="texts">
                                        <h3 className="name">{uzbek && data.name_uz}{russian && data.name_ru}{english && data.name_en}{mandarin && data.name_mn}</h3>
                                        <p className="desc">{uzbek && data.description_uz?.slice(0, 45)}{russian && data.description_ru?.slice(0, 45)}{english && data.description_en?.slice(0, 45)}{mandarin && data.description_mn?.slice(0, 45)}...</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div> */}
                <div className="col-12 imgs">
                    <img src={BackImg1} alt="backImg" className='back-img' />
                    <img src={Play} alt="play" className='play-button' onClick={() => setShowVideo(true)} />
                </div>
                <div style={{ backgroundColor: `${dark ? "#1A1A1A" : "#F2F2F2"}` }} className="main">
                    <div className="wrapper" style={{ backgroundColor: dark ? "rgba(255, 255, 255, 0.061)" : "rgba(0, 0, 0, 0.057)" }}>
                        <p className="text">{t("abouttext2")}</p>
                    </div>
                    <Contacts changeModal={changeModal} dark={dark} english={english} uzbek={uzbek} russian={russian} mandarin={mandarin} />
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

export default About;