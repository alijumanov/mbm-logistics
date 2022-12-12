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

const HeaderRouter = ({ english, russian, uzbek, mandarin, changeModal, dark, changeContactModal }) => {
    return (
        <div style={{ backgroundColor: `${dark ? "#1A1A1A" : "#F2F2F2"}` }}>
            <Header english={english} uzbek={uzbek} russian={russian} mandarin={mandarin} />
            <Services english={english} uzbek={uzbek} russian={russian} mandarin={mandarin} dark={dark} />
            <Calculator changeModal={changeModal} dark={dark} />
            <News getId={1} english={english} uzbek={uzbek} russian={russian} mandarin={mandarin} dark={dark} main={true} />
            <Infografics dark={dark} />
            <FAQ english={english} uzbek={uzbek} russian={russian} mandarin={mandarin} dark={dark} />
            <HomeAbout />
            <Advantages dark={dark} changeContactModal={changeContactModal} />
            <Comments english={english} uzbek={uzbek} russian={russian} mandarin={mandarin} dark={dark} />
            <Contacts changeModal={changeModal} dark={dark} />
        </div>
    );
};

export default HeaderRouter;