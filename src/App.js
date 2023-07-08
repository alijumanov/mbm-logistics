import './App.scss';
import { useRef, useState } from 'react';
import Modal from './components/Modal/Modal';
import About from './components/About/About';
import { useTranslation } from 'react-i18next';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Loader from './components/Loader/Loader';
import HeaderRouter from './routes/HeaderRouter';
import AloneNews from './components/News/AloneNews';
import OneService from './components/Services/OneService';
import AloneService from './components/Services/AloneService';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ContactModal from './components/ContactModal/ContactModal';
import ScrollPercent from './components/ScrollPercent/ScrollPercent';

function App() {

  // languages

  const { i18n } = useTranslation()

  const [russian, setRussian] = useState(localStorage.getItem('i18nextLng') ? localStorage.getItem('i18nextLng') == "ru" ? true : false : false);
  const [english, setEnglish] = useState(localStorage.getItem('i18nextLng') ? localStorage.getItem('i18nextLng') == "en" ? true : false : false);
  const [uzbek, setUzbek] = useState(localStorage.getItem('i18nextLng') ? localStorage.getItem('i18nextLng') == "uz" ? true : false : false);
  const [mandarin, setMandarin] = useState(localStorage.getItem('i18nextLng') ? localStorage.getItem('i18nextLng') == "zh" ? true : false : false);
  const [langTitle, setLangTitle] = useState(localStorage.getItem('i18nextLng') ? localStorage.getItem('i18nextLng').toUpperCase() : "");

  function changeUzbek(item) {
    setUzbek(item)
    setEnglish(!item)
    setRussian(!item)
    setMandarin(!item)
    i18n.changeLanguage("uz")
    setLangTitle(localStorage.getItem('i18nextLng').toUpperCase())
  };

  function changeRussian(item) {
    setUzbek(!item)
    setRussian(item)
    setEnglish(!item)
    setMandarin(!item)
    i18n.changeLanguage("ru")
    setLangTitle(localStorage.getItem('i18nextLng').toUpperCase())
  };

  function changeEnglish(item) {
    setUzbek(!item)
    setEnglish(item)
    setRussian(!item)
    setMandarin(!item)
    i18n.changeLanguage("en")
    setLangTitle(localStorage.getItem('i18nextLng').toUpperCase())
  };

  function changeMandarin(item) {
    setUzbek(!item)
    setEnglish(!item)
    setRussian(!item)
    setMandarin(item)
    i18n.changeLanguage("zh")
    setLangTitle(localStorage.getItem('i18nextLng').toUpperCase())
  };

  // modal

  const [showModal, setShowModal] = useState(false);

  function changeModal() {
    setShowModal(!showModal)
  };

  // contact modal

  const [showContactModal, setShowContactModal] = useState(false);

  function changeContactModal() {
    setShowContactModal(!showContactModal)
  };

  // dark-light

  const [dark, setDark] = useState(true);

  // react-query

  const queryClient = new QueryClient();

  // FAQ active element

  const [activeIndex, setActiveIndex] = useState(null);

  // navbar scrolling pages

  const faqPage = useRef();
  const newsPage = useRef();
  const aboutPage = useRef();
  const servicePage = useRef();
  const partnersPage = useRef();
  const commentsPage = useRef();
  const calculatorPage = useRef();
  const advantagesPage = useRef();
  const infographicsPage = useRef();

  function changeScrollFaq() {
    setTimeout(() => {
      window.scrollTo(0, faqPage.current.offsetTop)
    }, 100);
  };

  function changeScrollNews() {
    setTimeout(() => {
      window.scrollTo(0, newsPage.current.offsetTop)
    }, 100);
  };

  function changeScrollAbout() {
    setTimeout(() => {
      window.scrollTo(0, aboutPage.current.offsetTop)
    }, 100);
  };

  function changeScrollServices() {
    setTimeout(() => {
      window.scrollTo(0, servicePage.current.offsetTop)
    }, 100);
  };

  function changeScrollCalculator() {
    setTimeout(() => {
      window.scrollTo(0, calculatorPage.current.offsetTop)
    }, 100);
  };

  function changeScrollPartners() {
    setTimeout(() => {
      window.scrollTo(0, partnersPage.current.offsetTop)
    }, 100);
  };

  function changeScrollComments() {
    setTimeout(() => {
      window.scrollTo(0, commentsPage.current.offsetTop)
    }, 100);
  };

  function changeScrollAdvantage() {
    setTimeout(() => {
      window.scrollTo(0, advantagesPage.current.offsetTop)
    }, 100);
  };

  function changeScrollInfographics() {
    setTimeout(() => {
      window.scrollTo(0, infographicsPage.current.offsetTop)
    }, 100);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Loader />
        <ScrollToTop />
        <Navbar dark={dark} setDark={setDark} changeUzbek={changeUzbek} changeEnglish={changeEnglish} changeRussian={changeRussian} changeMandarin={changeMandarin} langTitle={langTitle} english={english} uzbek={uzbek} russian={russian} mandarin={mandarin} activeIndex={activeIndex} setActiveIndex={setActiveIndex} changeScrollFaq={changeScrollFaq} changeScrollNews={changeScrollNews} changeScrollAbout={changeScrollAbout} changeScrollServices={changeScrollServices} changeScrollCalculator={changeScrollCalculator} changeScrollPartners={changeScrollPartners} />
        <Routes>
          <Route exact path='/' element={<HeaderRouter dark={dark} english={english} uzbek={uzbek} russian={russian} mandarin={mandarin} changeModal={changeModal} changeContactModal={changeContactModal} activeIndex={activeIndex} setActiveIndex={setActiveIndex} faqPage={faqPage} newsPage={newsPage} aboutPage={aboutPage} servicePage={servicePage} calculatorPage={calculatorPage} commentsPage={commentsPage} advantagesPage={advantagesPage} infographicsPage={advantagesPage} changeScrollServices={changeScrollServices} />} />
          <Route path='/aboutus' element={<About dark={dark} english={english} uzbek={uzbek} russian={russian} mandarin={mandarin} changeModal={changeModal} partnersPage={partnersPage} />} />
          <Route path='/services/:id' element={<OneService dark={dark} english={english} uzbek={uzbek} russian={russian} mandarin={mandarin} changeModal={changeModal} />} />
          <Route path='/aloneservice/:id' element={<AloneService dark={dark} english={english} uzbek={uzbek} russian={russian} mandarin={mandarin} changeModal={changeModal} changeContactModal={changeContactModal} />} />
          <Route path='/news/:id' element={<AloneNews dark={dark} english={english} uzbek={uzbek} russian={russian} mandarin={mandarin} changeModal={changeModal} />} />
        </Routes>
        <ScrollPercent dark={dark} />
        <Footer dark={dark} changeScrollFaq={changeScrollFaq} changeScrollNews={changeScrollNews} changeScrollAbout={changeScrollAbout} changeScrollServices={changeScrollServices} changeScrollCalculator={changeScrollCalculator} changeScrollComments={changeScrollComments} changeScrollAdvantage={changeScrollAdvantage} changeScrollInfographics={changeScrollInfographics} />
        {showModal &&
          <Modal uzbek={uzbek} russian={russian} english={english} mandarin={mandarin} changeModal={changeModal} />
        }
        {showContactModal &&
          <ContactModal changeContactModal={changeContactModal} changeModal={changeModal} />
        }
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
