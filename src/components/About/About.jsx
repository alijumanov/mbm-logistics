import React, { useState } from 'react';
import './Scss/About.scss';
import { Link } from 'react-router-dom';
import Contacts from '../Contacts/Contacts';
import Play from '../../assets/images/play.png';
import Img1 from '../../assets/images/partner1.png';
import Img2 from '../../assets/images/partner2.png';
import Img3 from '../../assets/images/partner3.png';
import Img4 from '../../assets/images/partner4.png';
import Infografics from '../Infografics/Infografics';
import BackImg1 from '../../assets/images/about2.jpg';
import BackImg from '../../assets/images/header-back.jpg';

const About = ({ english, russian, uzbek, changeModal, dark }) => {

    const dataPartners = [
        { id: 1, image: Img1, name_uz: "Plan baby", name_en: "Plan baby", name_ru: "Plan baby", description_uz: "O'zbekistondagi eng katta dori ishlab chiqarubchi", description_ru: "Ozbekistondagi eng katta dori ishlab chiqarubchi", description_en: "O'zbekistondagi eng katta dori ishlab chiqarubchi" },
        { id: 2, image: Img2, name_uz: "Plan baby", name_en: "Plan baby", name_ru: "Plan baby", description_uz: "Ozbekistondagi eng katta dori ishlab chiqarubchi", description_ru: "Ozbekistondagi eng katta dori ishlab chiqarubchi", description_en: "Ozbekistondagi eng katta dori ishlab chiqarubchi" },
        { id: 3, image: Img3, name_uz: "Plan baby", name_en: "Plan baby", name_ru: "Plan baby", description_uz: "Ozbekistondagi eng katta dori ishlab chiqarubchi", description_ru: "Ozbekistondagi eng katta dori ishlab chiqarubchi", description_en: "Ozbekistondagi eng katta dori ishlab chiqarubchi" },
        { id: 4, image: Img4, name_uz: "Plan baby", name_en: "Plan baby", name_ru: "Plan baby", description_uz: "Ozbekistondagi eng katta dori ishlab chiqarubchi", description_ru: "Ozbekistondagi eng katta dori ishlab chiqarubchi", description_en: "Ozbekistondagi eng katta dori ishlab chiqarubchi" },
        { id: 5, image: Img1, name_uz: "Plan baby", name_en: "Plan baby", name_ru: "Plan baby", description_uz: "Ozbekistondagi eng katta dori ishlab chiqarubchi", description_ru: "Ozbekistondagi eng katta dori ishlab chiqarubchi", description_en: "Ozbekistondagi eng katta dori ishlab chiqarubchi" },
        { id: 6, image: Img2, name_uz: "Plan baby", name_en: "Plan baby", name_ru: "Plan baby", description_uz: "Ozbekistondagi eng katta dori ishlab chiqarubchi", description_ru: "Ozbekistondagi eng katta dori ishlab chiqarubchi", description_en: "Ozbekistondagi eng katta dori ishlab chiqarubchi" },
        { id: 7, image: Img3, name_uz: "Plan baby", name_en: "Plan baby", name_ru: "Plan baby", description_uz: "Ozbekistondagi eng katta dori ishlab chiqarubchi", description_ru: "Ozbekistondagi eng katta dori ishlab chiqarubchi", description_en: "Ozbekistondagi eng katta dori ishlab chiqarubchi" },
        { id: 8, image: Img4, name_uz: "Plan baby", name_en: "Plan baby", name_ru: "Plan baby", description_uz: "Ozbekistondagi eng katta dori ishlab chiqarubchi", description_ru: "Ozbekistondagi eng katta dori ishlab chiqarubchi", description_en: "Ozbekistondagi eng katta dori ishlab chiqarubchi" },
        { id: 9, image: Img1, name_uz: "Plan baby", name_en: "Plan baby", name_ru: "Plan baby", description_uz: "Ozbekistondagi eng katta dori ishlab chiqarubchi", description_ru: "Ozbekistondagi eng katta dori ishlab chiqarubchi", description_en: "Ozbekistondagi eng katta dori ishlab chiqarubchi" },
        { id: 10, image: Img2, name_uz: "Plan baby", name_en: "Plan baby", name_ru: "Plan baby", description_uz: "Ozbekistondagi eng katta dori ishlab chiqarubchi", description_ru: "Ozbekistondagi eng katta dori ishlab chiqarubchi", description_en: "Ozbekistondagi eng katta dori ishlab chiqarubchi" },
        { id: 11, image: Img3, name_uz: "Plan baby", name_en: "Plan baby", name_ru: "Plan baby", description_uz: "Ozbekistondagi eng katta dori ishlab chiqarubchi", description_ru: "Ozbekistondagi eng katta dori ishlab chiqarubchi", description_en: "Ozbekistondagi eng katta dori ishlab chiqarubchi" },
        { id: 12, image: Img4, name_uz: "Plan baby", name_en: "Plan baby", name_ru: "Plan baby", description_uz: "Ozbekistondagi eng katta dori ishlab chiqarubchi", description_ru: "Ozbekistondagi eng katta dori ishlab chiqarubchi", description_en: "Ozbekistondagi eng katta dori ishlab chiqarubchi" }
    ];

    // video

    const [showVideo, setShowVideo] = useState(false);

    return (
        <>
            <div className={`About main ${!dark && "light-about"}`} style={{ backgroundColor: `${dark ? "#1A1A1A" : "#F2F2F2"}` }}>
                <div className="wrapper top-wrapper" style={{ backgroundColor: `${dark ? "#1A1A1A" : "#F2F2F2"}` }}>
                    <h1 className="title">About MBM logistics</h1>
                    <div className="links">
                        <Link className='link' to="/">Home &#62;</Link>
                        <a className='link' href="#">About us</a>
                    </div>
                </div>
                {/* <div className="col-12 imgs">
                </div> */}
                <img src={BackImg} alt="backImg" className='fixed-img' />
                <div className="wrapper middle-page" style={{ backgroundColor: `${dark ? "#1A1A1A" : "#F2F2F2"}`, paddingBottom: "10px" }}>
                    <p className="text">
                        доставка до склада получателя после таможни в РФ (уточнять)
                        Ставки на генеральные, неопасные грузы. Ставки на опасные грузы уточняйте у наших специалистов.
                        Китайская экономика растет ударными темпами, что напрямую отражается на объемах транспортировки грузов из Китая в Россию и наоборот. Оборот взаимной торговли между РФ и КНР только за 1 квартал 2018 года увеличился почти на 30% - до $31 млрд. Китайский импорт в РФ подрос более чем на 20% и достиг почти $14 млрд. В свою очередь, российский экспорт в Поднебесную увеличился почти на треть - до $17 млрд. Налицо опережающие темпы роста, а также преимущественный профицит торгового баланса России.
                    </p>
                </div>
                <div style={{ backgroundColor: `${dark ? "#1A1A1A" : "#F2F2F2"}` }} className="main">
                    <Infografics dark={dark} />
                </div>
                <div className="wrapper" style={{ backgroundColor: `${dark ? "#1A1A1A" : "#F2F2F2"}` }} >
                    <h1 className="about-title">Бизга ишонч билдирган корхоналар</h1>
                    <div className="partners">
                        {dataPartners.map((data) => (
                            <div key={data.id} className="col-3 partner">
                                <div className="body">
                                    <div className="img">
                                        <img src={data.image} alt="img" />
                                    </div>
                                    <div className="texts">
                                        <h3 className="name">{uzbek && data.name_uz}{russian && data.name_ru}{english && data.name_en}</h3>
                                        <p className="desc">{uzbek && data.description_uz.slice(0, 45)}{russian && data.description_ru.slice(0, 45)}{english && data.description_en.slice(0, 45)}...</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="col-12 imgs">
                    <img src={BackImg1} alt="backImg" className='back-img' />
                    <img src={Play} alt="play" className='play-button' onClick={() => setShowVideo(true)} />
                </div>
                <div style={{ backgroundColor: `${dark ? "#1A1A1A" : "#F2F2F2"}` }} className="main">
                    <div className="wrapper" style={{ backgroundColor: dark ? "rgba(255, 255, 255, 0.061)" : "rgba(0, 0, 0, 0.057)" }}>
                        <p className="text">
                            доставка до склада получателя после таможни в РФ (уточнять)
                            Ставки на генеральные, неопасные грузы. Ставки на опасные грузы уточняйте у наших специалистов.
                            Китайская экономика растет ударными темпами, что напрямую отражается на объемах транспортировки грузов из Китая в Россию и наоборот. Оборот взаимной торговли между РФ и КНР только за 1 квартал 2018 года увеличился почти на 30% - до $31 млрд. Китайский импорт в РФ подрос более чем на 20% и достиг почти $14 млрд. В свою очередь, российский экспорт в Поднебесную увеличился почти на треть - до $17 млрд. Налицо опережающие темпы роста, а также преимущественный профицит торгового баланса России.
                        </p>
                    </div>
                    <Contacts changeModal={changeModal} dark={dark} />
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

export default About;