import React from 'react';
import './Scss/Footer.scss';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Logo from '../../assets/images/logo1.png';

const Footer = ({ dark, changeScrollServices, changeScrollFaq, changeScrollNews, changeScrollAbout, changeScrollCalculator, changeScrollComments, changeScrollAdvantage, changeScrollInfographics }) => {

    const { t } = useTranslation();

    return (
        <div className={`Footer ${!dark && "light-footer"}`}>
            <div className="wrapper">
                <div className="footer-tools">
                    <div className="col-3 tool texts">
                        <Link to="/" onClick={() => window.scrollTo(0, 0)}>
                            <img src={Logo} alt="logo" />
                        </Link>
                        <p className="text">{t("foottxt")}</p>
                        {/* <div className="icons">
                            <a href="https://www.facebook.com/MBM-logistix-107730185430954" target="blank">
                                <i className="fa fa-brands fa-facebook"></i>
                            </a>
                            <a href="https://www.instagram.com/mbm_logistix/" target="blank">
                                <i className="fa fa-brands fa-instagram"></i>
                            </a>
                            <a href="https://t.me/mirazizs" target="blank">
                                <i className="fa fa-brands fa-telegram"></i>
                            </a>
                        </div> */}
                    </div>
                    <div className="col-3 tool">
                        <ul>
                            <li className='title-footer'>{t("foot1")}</li>
                            <li className="link"><Link to="/" onClick={changeScrollAbout} className='nav-link p-0'>{t("foot2")}</Link></li>
                            <li className="link"><Link to="/" className='nav-link p-0' onClick={changeScrollInfographics}>{t("foot3")}</Link></li>
                            <li className="link"><Link to="/" className='nav-link p-0' onClick={changeScrollAdvantage}>{t("foot4")}</Link></li>
                            <li className="link"><Link to="/" className='nav-link p-0' onClick={changeScrollServices}>{t("foot5")}</Link></li>
                        </ul>
                    </div>
                    <div className="col-3 tool">
                        <ul>
                            <li className='title-footer'>{t("foot6")}</li>
                            <li className="link"><Link to="/" className='nav-link p-0' onClick={changeScrollNews}>{t("foot7")}</Link></li>
                            <li className="link"><Link to="/" className='nav-link p-0' onClick={changeScrollCalculator}>{t("foot8")}</Link></li>
                            <li className="link"><Link to="/" className='nav-link p-0' onClick={changeScrollFaq}>{t("foot9")}</Link></li>
                            <li className="link"><Link to="/" className='nav-link p-0' onClick={changeScrollComments}>{t("foot10")}</Link></li>
                        </ul>
                    </div>
                    <div className="col-3 tool">
                        <ul>
                            <li className='title-footer'>{t("foot11")}</li>
                            <li className="link"><a href='/#contacts' className='nav-link p-0'>{t("foot12")}</a></li>
                            <li className="link"><a href='mailto:info@mbm.uz' className='nav-link p-0'>info@mbm.uz</a></li>
                            <li className="link"><a href='tel:+99899-088-00-88' className='nav-link p-0'>+99899 088 00 88</a></li>
                            <li className="link"><a href='https://www.google.com/maps/search/%D0%A3%D0%B7%D0%B1%D0%B5%D0%BA%D0%B8%D1%81%D1%82%D0%B0%D0%BD,+%D0%A2%D0%B0%D1%88%D0%BA%D0%B5%D0%BD%D1%82,+%D0%90%D0%9B%D0%9C%D0%90%D0%97%D0%90%D0%A0%D0%A1%D0%9A%D0%98%D0%99+%D0%A0%D0%90%D0%99%D0%9E%D0%9D,+%D0%BC-%D0%B2+%D0%9A%D0%90%D0%A0%D0%90%D0%9A%D0%90%D0%9C%D0%AB%D0%A8-2%2F4,+11/@41.3672797,69.2071831,17z/data=!3m1!4b1' target="blank" className='nav-link p-0'>{t("foot13")}</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;