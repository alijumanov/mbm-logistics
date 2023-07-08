import React from 'react';
import FAQ from '../components/FAQ/FAQ';
import News from '../components/News/News';
import Header from '../components/Header/Header';
import HomeAbout from '../components/About/HomeAbout';
import Contacts from '../components/Contacts/Contacts';
import Services from '../components/Services/Services';
import Comments from '../components/Comments/Comments';
import Calculator from '../components/Calculator/Calculator';
import Advantages from '../components/Advantages/Advantages';
import Infografics from '../components/Infografics/Infografics';

const HeaderRouter = ({ english, russian, uzbek, mandarin, changeModal, dark, changeContactModal, activeIndex, setActiveIndex, servicePage, faqPage, newsPage, aboutPage, calculatorPage, commentsPage, advantagesPage, infographicsPage, changeScrollServices }) => {
    return (
        <div style={{ backgroundColor: `${dark ? "#1A1A1A" : "#F2F2F2"}` }}>
            <Header english={english} uzbek={uzbek} russian={russian} mandarin={mandarin} changeScrollServices={changeScrollServices} />
            <div ref={servicePage}>
                <Services english={english} uzbek={uzbek} russian={russian} mandarin={mandarin} dark={dark} />
            </div>
            <div ref={calculatorPage}>
                <Calculator changeModal={changeModal} dark={dark} />
            </div>
            <div ref={newsPage}>
                <News getId={1} english={english} uzbek={uzbek} russian={russian} mandarin={mandarin} dark={dark} main={true} />
            </div>
            <div ref={infographicsPage}>
                <Infografics dark={dark} english={english} uzbek={uzbek} russian={russian} mandarin={mandarin} main={true} />
            </div>
            <div ref={faqPage}>
                <FAQ english={english} uzbek={uzbek} russian={russian} mandarin={mandarin} dark={dark} activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
            </div>
            <div ref={aboutPage}>
                <HomeAbout />
            </div>
            <div ref={advantagesPage}>
                <Advantages dark={dark} changeContactModal={changeContactModal} />
            </div>
            <div ref={commentsPage}>
                <Comments english={english} uzbek={uzbek} russian={russian} mandarin={mandarin} dark={dark} />
            </div>
            <Contacts changeModal={changeModal} dark={dark} english={english} uzbek={uzbek} russian={russian} mandarin={mandarin} />
        </div>
    );
};

export default HeaderRouter;