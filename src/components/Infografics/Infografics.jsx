import React, { useEffect, useState } from 'react';
import './Scss/Infografics.scss';
import Slider from 'react-slick';
import CountUp from 'react-countup';
import Img from '../../assets/images/infografic.png';

const Infografics = ({ dark }) => {

    const [number1, setNumber1] = useState(0);
    const [number2, setNumber2] = useState(0);
    const [number3, setNumber3] = useState(0);
    const [number4, setNumber4] = useState(0);

    const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                window.addEventListener("scroll", () => {
                    if (window.scrollY - entry.target.offsetTop > -window.innerHeight) {
                        setNumber1(1000)
                        setNumber2(300)
                        setNumber3(600)
                        setNumber4(150)
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
        { id: 0, number: number1, text: "Етказилган юклар сони", description: "We1 coordinate all shipments through a large network of licensed Auto Shipping Carriers nationwide. All Carriers are legally required to be fully licensed, insured and with USDOT credentials. coordinate all shipments through a large network of licensed Auto Shipping Carriers nationwide. All Carriers are legally required to be fully licensed, insured and with USDOT credentials." },
        { id: 1, number: number2, text: "Етказилган юклар сони", description: "We2 coordinate all shipments through a large network of licensed Auto Shipping Carriers nationwide. All Carriers are legally required to be fully licensed, insured and with USDOT credentials. coordinate all shipments through a large network of licensed Auto Shipping Carriers nationwide. All Carriers are legally required to be fully licensed, insured and with USDOT credentials." },
        { id: 2, number: number3, text: "Етказилган юклар сони", description: "We3 coordinate all shipments through a large network of licensed Auto Shipping Carriers nationwide. All Carriers are legally required to be fully licensed, insured and with USDOT credentials. coordinate all shipments through a large network of licensed Auto Shipping Carriers nationwide. All Carriers are legally required to be fully licensed, insured and with USDOT credentials." },
        { id: 3, number: number4, text: "Етказилган юклар сони", description: "We4 coordinate all shipments through a large network of licensed Auto Shipping Carriers nationwide. All Carriers are legally required to be fully licensed, insured and with USDOT credentials. coordinate all shipments through a large network of licensed Auto Shipping Carriers nationwide. All Carriers are legally required to be fully licensed, insured and with USDOT credentials." }
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

    return (
        <div className={`Infografics main ${!dark && "light-infografics"}`} id='infografics'>
            <div className="title">Мы в числах</div>
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
                                <p className={`text ${data.id != activeId && "d-none"}`}>{data.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <Slider {...settings} className='carousel'>
                    {dataNumbers.map((data) => (
                        <p key={data.id} className="desc">{data.description}</p>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Infografics;