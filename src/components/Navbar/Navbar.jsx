import React, { useState } from 'react';
import './Scss/Navbar.scss';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Logo from '../../assets/images/logo1.png';
import { fetchFaqsData, fetchNewsData, fetchOneServiceData, fetchServicesData } from '../../api/Api';
import { Close, Menu, ModeNight, Phone, WbSunnyRounded } from '@mui/icons-material';

const Navbar = ({ changeUzbek, changeEnglish, changeRussian, changeMandarin, langTitle, dark, setDark, uzbek, russian, english, mandarin, activeIndex, setActiveIndex, changeScrollServices, changeScrollFaq, changeScrollNews, changeScrollAbout, changeScrollCalculator, changeScrollPartners }) => {

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

    function closeNavbar() {
        setShowNavbar(false)
    }

    // sevices data

    const servicesData = useQuery('services', fetchServicesData);

    // alone-service data

    const aloneServiceData = useQuery('one-service', fetchOneServiceData);

    // sevices data

    const newsData = useQuery('news', fetchNewsData);

    // sevices data

    const faqsData = useQuery('faqs', fetchFaqsData);

    // scrolls

    function getFaqsOpen(item) {
        if (activeIndex != faqsData.data?.data.indexOf(item)) {
            setActiveIndex(faqsData.data?.data.indexOf(item))
        } else {
            setActiveIndex(null)
        }
        changeScrollFaq();
    };

    // i18next

    const { t } = useTranslation();

    return (
        <div className={`Navbar ${!dark && "light-navbar"}`}>
            <nav className='navbar navbar-expand'>
                <Link to="/" className='logo' onClick={() => window.scrollTo(0, 0)}>
                    <img src={Logo} alt="logo" />
                </Link>
                <ul className={`navbar-nav ${showNavbar && "show-navbar"}`}>
                    <div className="nav-item" onClick={closeNavbar}>
                        <Link to="/" className='link' onClick={changeScrollServices}>{t('h1')}</Link>
                        <div className="hover-link">
                            <ul className="link-bar">
                                {servicesData.data?.data.map((item) => (
                                    <li key={item.id}>
                                        <Link to={`/services/${item.id}`} className='link1'>{uzbek && item.name_uz}{russian && item.name_ru}{english && item.name_en}{mandarin && item.name_mn}</Link>
                                        <div className="hover-link1">
                                            <ul className="link-bar">
                                                {aloneServiceData.data?.data.filter((c) => c.category == item.id).map((post) => (
                                                    <li key={post.id}>
                                                        <Link to={`/aloneservice/${post.id}`} className='link1'>{uzbek && post.name_uz}{russian && post.name_ru}{english && post.name_en}{mandarin && post.name_mn}</Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <li className="nav-item" onClick={closeNavbar}>
                        <Link to="/" className='link' onClick={changeScrollCalculator}>{t('h2')}</Link>
                    </li>
                    <li className="nav-item" onClick={closeNavbar}>
                        <Link to="/" className='link' onClick={changeScrollAbout}>{t('h3')}</Link>
                        <div className="hover-link">
                            <ul className="link-bar">
                                <li>
                                    <Link to="/aboutus" className='link1'>{t('h6')}</Link>
                                </li>
                                <li>
                                    <Link to="/" className='link1' onClick={changeScrollAbout}>{t('h7')}</Link>
                                </li>
                                <li>
                                    <Link to="/aboutus" className='link1' onClick={changeScrollPartners}>{t('h8')}</Link>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="nav-item" onClick={closeNavbar}>
                        <Link to="/" className='link' onClick={changeScrollNews}>{t('h4')}</Link>
                        <div className="hover-link">
                            <ul className="link-bar">
                                {newsData.data?.data.slice(newsData.data?.data.length - 4, newsData.data?.data.length).map((item) => (
                                    <li key={item.id}>
                                        <Link to={`/news/${item.id}`} className='link1'>{uzbek && item.name_uz}{russian && item.name_ru}{english && item.name_en}{mandarin && item.name_mn}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </li>
                    <li className="nav-item" onClick={closeNavbar}>
                        <Link to="/" className='link' onClick={changeScrollFaq}>{t('h5')}</Link>
                        <div className="hover-link">
                            <ul className="link-bar">
                                {faqsData.data?.data.map((item) => (
                                    <li key={item.id} onClick={() => getFaqsOpen(item)}>
                                        <Link to="/" className='link1'>{uzbek && item.question_uz}{russian && item.question_ru}{english && item.question_en}{mandarin && item.question_mn}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </li>
                    <li className="nav-item res-call-button">
                        <a href="tel:+99899-088-00-88" className='call-button'>
                            <Phone className='call-icon' /> +99899 088 00 88
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
                <a href="tel:+99899-088-00-88" className='call-button res-none'>
                    <Phone className='call-icon' /> +99899 088 00 88
                </a>
                <Menu className='bar-icon' onClick={() => setShowNavbar(!showNavbar)} />
            </nav>
        </div>
    );
};

export default Navbar;