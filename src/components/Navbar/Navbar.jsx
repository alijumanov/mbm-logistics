import React, { useState } from 'react';
import './Scss/Navbar.scss';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo.png';
import { Close, Menu, ModeNight, Phone, WbSunnyRounded } from '@mui/icons-material';

const Navbar = ({ changeUzbek, changeEnglish, changeRussian, changeMandarin, langTitle, dark, setDark }) => {

    // languages

    const [language, setLanguage] = useState(false);

    function changeHandleUzbek() {
        changeUzbek(true)
        setLanguage(!language)
    };

    function changeHandleEnglish() {
        changeEnglish(true)
        setLanguage(!language)
    };

    function changeHandleRussian() {
        changeRussian(true)
        setLanguage(!language)
    };

    function changeHandleMandarin() {
        changeMandarin(true)
        setLanguage(!language)
    };

    // show navbar-nav

    const [showNavbar, setShowNavbar] = useState(false);

    return (
        <div className={`Navbar ${!dark && "light-navbar"}`}>
            <nav className='navbar navbar-expand'>
                <Link to="/" className='logo' onClick={() => window.scrollTo(0, 0)}>
                    <img src={Logo} alt="logo" />
                </Link>
                <ul className={`navbar-nav ${showNavbar && "show-navbar"}`}>
                    <div className="nav-item">
                        <Link to="/aboutus" className='link'>Biz haqimizda</Link>
                        {/* <div className="hover-link">
                            <ul className="link-bar">
                                <li>
                                    <Link to="/" className='link1'>Бирга ишлаган корхоналар</Link>
                                </li>
                                <li>
                                    <Link to="/" className='link1'>Бирга ишлаган</Link>
                                </li>
                                <li>
                                    <Link to="/" className='link1'>Бирга ишлаган корхоналар</Link>
                                </li>
                                <li>
                                    <Link to="/" className='link1'>Бирга ишлаган корхоналар</Link>
                                </li>
                            </ul>
                        </div> */}
                    </div>
                    <li className="nav-item">
                        <Link to="/" className='link'>Отзывы</Link>
                        <div className="hover-link">
                            <ul className="link-bar">
                                <li>
                                    <Link to="/" className='link1'>Бирга</Link>
                                </li>
                                <li>
                                    <Link to="/" className='link1'>Бирга ишлаган</Link>
                                </li>
                                <li>
                                    <Link to="/" className='link1'>Бирга ишлаган</Link>
                                </li>
                                <li>
                                    <Link to="/" className='link1'>Бирга ишлаган</Link>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="nav-item">
                        <Link to="/" className='link'>Команда</Link>
                        <div className="hover-link">
                            <ul className="link-bar">
                                <li>
                                    <Link to="/" className='link1'>Бирга ишлаган корхоналар</Link>
                                </li>
                                <li>
                                    <Link to="/" className='link1'>Бирга ишлаган</Link>
                                </li>
                                <li>
                                    <Link to="/" className='link1'>Бирга ишлаган корхоналар</Link>
                                </li>
                                <li>
                                    <Link to="/" className='link1'>Бирга ишлаган корхоналар</Link>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="nav-item">
                        <Link to="/" className='link'>Сотрудничество</Link>
                        <div className="hover-link">
                            <ul className="link-bar">
                                <li>
                                    <Link to="/" className='link1'>Бирга ишлаган корхоналар</Link>
                                </li>
                                <li>
                                    <Link to="/" className='link1'>Бирга ишлаган</Link>
                                </li>
                                <li>
                                    <Link to="/" className='link1'>Бирга ишлаган корхоналар</Link>
                                </li>
                                <li>
                                    <Link to="/" className='link1'>Бирга ишлаган корхоналар</Link>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="nav-item">
                        <Link to="/" className='link'>Калькулятор</Link>
                        <div className="hover-link">
                            <ul className="link-bar">
                                <li>
                                    <Link to="/" className='link1'>Бирга ишлаган корхоналар</Link>
                                </li>
                                <li>
                                    <Link to="/" className='link1'>Бирга ишлаган</Link>
                                </li>
                                <li>
                                    <Link to="/" className='link1'>Бирга ишлаган корхоналар</Link>
                                </li>
                                <li>
                                    <Link to="/" className='link1'>Бирга ишлаган корхоналар</Link>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="nav-item res-call-button">
                        <a href="tel:+99898-157-00-89" className='call-button'>
                            <Phone className='call-icon' /> +998 98 157 00 89
                        </a>
                    </li>
                    <Close className='close-icon' onClick={() => setShowNavbar(!showNavbar)} />
                </ul>
                <div className="language">
                    <input type="checkbox" id="language" checked={language} onChange={() => setLanguage(!language)} />
                    <label htmlFor='language'>{langTitle} <i className="fa fa-caret-down"></i></label>
                    <ul className={`language-menu ${!language && "d-none"}`}>
                        <li onClick={() => changeHandleUzbek()}><div className='lang-link'>UZ</div></li>
                        <li onClick={() => changeHandleEnglish()}><div className='lang-link'>EN</div></li>
                        <li onClick={() => changeHandleRussian()}><div className='lang-link'>RU</div></li>
                        <li onClick={() => changeHandleMandarin()}><div className='lang-link'>ZH</div></li>
                    </ul>
                    <div className={`contrast-0 ${!language && "d-none"}`} onClick={() => setLanguage(!language)}></div>
                </div>
                <div className="dark-light" onClick={() => setDark(!dark)}>
                    {dark ?
                        <WbSunnyRounded className='icon sun' />
                        :
                        <ModeNight className='icon moon' />
                    }
                </div>
                <a href="tel:+99898-157-00-89" className='call-button res-none'>
                    <Phone className='call-icon' /> +998 98 157 00 89
                </a>
                <Menu className='bar-icon' onClick={() => setShowNavbar(!showNavbar)} />
            </nav>
        </div>
    );
};

export default Navbar;