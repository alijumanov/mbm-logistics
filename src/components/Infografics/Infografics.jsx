import React, { useEffect, useState } from 'react';
import './Scss/Infografics.scss';
import Slider from 'react-slick';
import CountUp from 'react-countup';
import { useTranslation } from 'react-i18next';
import Img from '../../assets/images/infografic.png';

const Infografics = ({ dark, english, russian, uzbek, mandarin }) => {

    const [number1, setNumber1] = useState(0);
    const [number2, setNumber2] = useState(0);
    const [number3, setNumber3] = useState(0);
    const [number4, setNumber4] = useState(0);

    const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                window.addEventListener("scroll", () => {
                    if (window.scrollY - entry.target.offsetTop > -window.innerHeight) {
                        setNumber1(100)
                        setNumber2(100)
                        setNumber3(300)
                        setNumber4(30)
                    } else if (window.scrollY - entry.target.offsetTop < 0) {
                        setNumber1(0)
                        setNumber2(0)
                        setNumber3(0)
                        setNumber4(0)
                    }
                })
            })
        }
    );

    useEffect(() => {
        const infografics = document.getElementById("infografics");
        observer.observe(infografics);
    }, []);

    let dataNumbers = [
        { id: 0, number: number1, text_uz: "Yillik loyihalar soni", text_ru: "Количество проектов за год", text_en: "Number of projects per year", text_mn: "每年的项目数量", description_uz: "Biz bir yil ichida juda ko'p logistik xizmatlarni amalga oshiramiz. Ushbu raqamlar doirasida biz etkazib beramiz: havo yuklari, temir yo'l yuklari, yuk mashinalari yuklari va boshqalar", description_ru: "Мы выполним столько перевозок за год. Внутри этих чисал мы доставим путем: Воздушные перевоки, Железнодорожные перевозки, перевозки с фурой и так далее", description_en: "We will carry out so many shipments in a year. Within these numbers, we will deliver by: Air Freight, Rail Freight, Truck Freight and so on", description_mn: "我们将在一年内进行如此多的发货。在这些数量内，我们将通过以下方式交付：空运、铁路货运、卡车货运等" },
        { id: 1, number: number2, text_uz: "Mamlakatlarga kirish", text_ru: "Доступ к стран", text_en: "Access to countries", text_mn: "进入国家", description_uz: "Biz qariyb barcha dunyo mamlakatlari bilan hamkorlik asosida ishlaymiz va sizning yukingizni istalgan joydan olib kelamiz yoki yetkazib beramiz", description_ru: "Мы работаем в сотрудничестве практически со всеми странами мира и можем забрать или доставить ваш груз из любой точки мира.", description_en: "We work in cooperation with almost all countries of the world and we can pick up or deliver your cargo from anywhere", description_mn: "我們與世界上幾乎所有國家都有合作，我們可以從任何地方提取或交付您的貨物" },
        { id: 2, number: number3, text_uz: "Mamnun mijozlar", text_ru: "Довольных клиентов", text_en: "Satisfied customers", text_mn: "满意的客户", description_uz: "Bizning xizmatimizdan foydalangan mijozlarimiz soni bundanda ortiq. Siz ham ularning biriga aylaning", description_ru: "Количество клиентов, воспользовавшихся нашими услугами, намного больше. Стань одним из них", description_en: "The number of clients who have used our service is more than that. Become one of them", description_mn: "使用我們服務的客戶數量不止於此。 成為其中一員" },
        { id: 3, number: number4, text_uz: "Mutaxassislar", text_ru: "Специалистов", text_en: "Specialists", text_mn: "专家", description_uz: "Bizda o’z sohasaning mutaxassislaridan tashkil topgan jamoa bo’lib sizning yukingizni tez va xavfsiz yetkazib berishga kafolat beramiz", description_ru: "У нас есть команда профессионалов своего дела, и мы гарантируем быструю и безопасную доставку вашего груза", description_en: "We have a team of experts in our field, and we guarantee fast and safe delivery of your cargo", description_mn: "我們擁有該領域的專家團隊，我們保證快速安全地交付您的貨物" }
    ];

    const [activeId, setActiveId] = useState(0);

    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        slidesToShow: 1,
        speed: 2000,
        pauseOnHover: false,
        slidesToScroll: 1,
        autoplaySpeed: 5000,
        cssEase: "linear",
        beforeChange: (current, next) => setActiveId(next),
    };

    // i18next

    const { t } = useTranslation();

    return (
        <div className={`Infografics main ${!dark && "light-infografics"}`} id='infografics'>
            <div className="title">{t("infographic")}</div>
            <div className="wrapper">
                <img src={Img} alt="truck" className='side-truck' />
                <div className="rectangle"></div>
                <div className="numbers">
                    {dataNumbers.map((data) => (
                        <div key={data.id} className="number col-3">
                            <div className="body" onClick={() => setActiveId(data.id)}>
                                <h1 className={`count ${activeId == data.id && "active"}`}>
                                    <CountUp start={0} end={data.number} duration={4} />
                                </h1>
                                <p className={`text ${data.id != activeId && "d-none"}`}>{uzbek && data.text_uz}{russian && data.text_ru}{english && data.text_en}{mandarin && data.text_mn}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <Slider {...settings} className='carousel'>
                    {dataNumbers.map((data) => (
                        <p key={data.id} className="desc">{uzbek && data.description_uz}{russian && data.description_ru}{english && data.description_en}{mandarin && data.description_mn}</p>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Infografics;