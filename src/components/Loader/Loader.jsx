import React, { useEffect, useState } from 'react';
import './Scss/Loader.scss';
import CountUp from 'react-countup';
import { useTranslation } from 'react-i18next';

const Loader = () => {

    const [perValue, setPervalue] = useState(0);
    const [loader, setLoader] = useState(sessionStorage.getItem("loader") ? false : true);

    useEffect(() => {
        setInterval(() => {
            setPervalue((c) => c < 120 ? c + 1 : 119)
        }, 130);
    }, []);

    useEffect(() => {
        setTimeout(() => {
            setLoader(false)
            sessionStorage.setItem("loader", "false")
        }, 4000);
    }, []);

    const { t } = useTranslation();

    return (
        <div className='Loader'>
            {/* <div className="percents">
                <div className="circle-per"></div>
                <div className="circle-per1" style={{ background: `conic-gradient(#4D8CE9 ${perValue}%, #1A1A1A ${perValue}%)` }}></div>
                <div className="first-per">
                    <div className='num'>
                        <CountUp start={0} end={100} duration={7} /> %
                    </div>
                </div>
                <div className="second-per">
                    <div className='num'>
                        <CountUp start={0} end={100} duration={7} /> %
                    </div>
                </div>
            </div> */}
            {loader ?
                <h1 className="load-text">{t("load-txt")}</h1>
                :
                <div className="loading">
                <div className="guns">
                    <div className="gilza"></div>
                    <div className="gilza"></div>
                </div>
                <div className="guns c1">
                    <div className="gilza"></div>
                    <div className="gilza"></div>
                </div>
                <div className="guns c2">
                    <div className="gilza"></div>
                    <div className="gilza"></div>
                </div>
                <div className="guns c3">
                    <div className="gilza"></div>
                    <div className="gilza"></div>
                </div>
                <div className="guns c4">
                    <div className="gilza"></div>
                    <div className="gilza"></div>
                </div>
                <div className="guns c5">
                    <div className="gilza"></div>
                    <div className="gilza"></div>
                </div>
                <div className="guns c6">
                    <div className="gilza"></div>
                    <div className="gilza"></div>
                </div>
                <div className="guns c7">
                    <div className="gilza"></div>
                    <div className="gilza"></div>
                </div>
            </div>
            }
        </div>
    );
};

export default Loader;