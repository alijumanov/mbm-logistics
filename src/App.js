import './App.scss';
import { useState } from 'react';
import Modal from './components/Modal/Modal';
import About from './components/About/About';
import { useTranslation } from 'react-i18next';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Loader from './components/Loader/Loader';
import HeaderRouter from './routes/HeaderRouter';
import AloneNews from './components/News/AloneNews';
import AloneService from './components/Services/AloneService';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ContactModal from './components/ContactModal/ContactModal';
import ScrollPercent from './components/ScrollPercent/ScrollPercent';

function App() {

  // languages

  const { i18n } = useTranslation()

  const [english, setEnglish] = useState(localStorage.getItem('i18nextLng') ? localStorage.getItem('i18nextLng') == "en" ? true : false : false);
  const [russian, setRussian] = useState(localStorage.getItem('i18nextLng') ? localStorage.getItem('i18nextLng') == "ru" ? true : false : false);
  const [uzbek, setUzbek] = useState(localStorage.getItem('i18nextLng') ? localStorage.getItem('i18nextLng') == "uz" ? true : false : false);
  const [langTitle, setLangTitle] = useState(localStorage.getItem('i18nextLng') ? localStorage.getItem('i18nextLng').toUpperCase() : "");

  function changeUzbek(item) {
    setUzbek(item)
    setEnglish(!item)
    setRussian(!item)
    i18n.changeLanguage("uz")
    setLangTitle(localStorage.getItem('i18nextLng').toUpperCase())
  };

  function changeRussian(item) {
    setUzbek(!item)
    setRussian(item)
    setEnglish(!item)
    i18n.changeLanguage("ru")
    setLangTitle(localStorage.getItem('i18nextLng').toUpperCase())
  };

  function changeEnglish(item) {
    setUzbek(!item)
    setEnglish(item)
    setRussian(!item)
    i18n.changeLanguage("en")
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

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        {/* <Loader /> */}
        <ScrollToTop />
        <Navbar dark={dark} setDark={setDark} changeUzbek={changeUzbek} changeEnglish={changeEnglish} changeRussian={changeRussian} langTitle={langTitle} />
        <Routes>
          <Route exact path='/' element={<HeaderRouter dark={dark} english={english} uzbek={uzbek} russian={russian} changeModal={changeModal} changeContactModal={changeContactModal} />} />
          <Route path='/aboutus' element={<About dark={dark} english={english} uzbek={uzbek} russian={russian} changeModal={changeModal} />} />
          <Route path='/services/:id' element={<AloneService dark={dark} english={english} uzbek={uzbek} russian={russian} changeModal={changeModal} />} />
          <Route path='/news/:id' element={<AloneNews dark={dark} english={english} uzbek={uzbek} russian={russian} changeModal={changeModal} />} />
        </Routes>
        <ScrollPercent dark={dark} />
        <Footer dark={dark} />
        {showModal &&
          <Modal uzbek={uzbek} russian={russian} english={english} changeModal={changeModal} />
        }
        {showContactModal &&
          <ContactModal changeContactModal={changeContactModal} changeModal={changeModal} />
        }
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
