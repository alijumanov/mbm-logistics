import React from 'react';
import './Scss/Advantages.scss';
import { useTranslation } from 'react-i18next';
import Img from '../../assets/images/advantage.jpg';
import { GppGoodRounded, VerifiedRounded, Visibility } from '@mui/icons-material';

const Advantages = ({ dark, changeContactModal }) => {

    const { t } = useTranslation();

    return (
        <div className={`Advantages main ${!dark && "light-advantages"}`}>
            <div className="wrapper">
                <div className="col-7 img">
                    <img src={Img} alt="img" />
                </div>
                <div className="col-5 texts">
                    <p>{t("adv1")}</p>
                    <div className="icons">
                        <div className="col-4 tool">
                            <div className="body">
                                <VerifiedRounded className='icon' />
                                <p>{t("icon1")}</p>
                            </div>
                        </div>
                        <div className="col-4 tool">
                            <div className="body">
                                <GppGoodRounded className='icon' />
                                <p>{t("icon2")}</p>
                            </div>
                        </div>
                        <div className="col-4 tool">
                            <div className="body">
                                <Visibility className='icon' />
                                <p>{t("icon3")}</p>
                            </div>
                        </div>
                    </div>
                    <p>{t("adv2")}</p>
                    <div className="explore">
                        <div className="order" onClick={() => changeContactModal()}>{t("buybtn")}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Advantages;