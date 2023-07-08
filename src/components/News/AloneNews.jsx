import React from 'react';
import News from './News';
import './Scss/AloneNews.scss';
import { useQuery } from 'react-query';
import Contacts from '../Contacts/Contacts';
import { fetchNewsData } from '../../api/Api';
import { useTranslation } from 'react-i18next';
import { Link, useParams } from 'react-router-dom';

const AloneNews = ({ english, russian, uzbek, mandarin, changeModal, dark }) => {

    const { id } = useParams();

    // data of news

    const { isLoading, data } = useQuery('news', fetchNewsData);

    // i18next

    const { t } = useTranslation();

    return (
        <div className={`AloneNews main ${!dark && "light-alonenews"}`} style={{ backgroundColor: `${dark ? "#1A1A1A" : "#F2F2F2"}` }}>
            <div className="wrapper top-wrapper">
                <h1 className="title">{t("news")}</h1>
                <div className="links">
                    <Link className='link' to="/">{t("link1")} &#62;</Link>
                    <a className='link' href="#">{t("link4")}</a>
                </div>
            </div>
            {data?.data.filter((c) => c.id == id).map((data) => (
                <div key={data.id}>
                    <div className="col-12 imgs">
                        <img src={data.image} alt="backImg" className='back-img' />
                    </div>
                    <div className="wrapper" style={{ paddingBottom: "10px" }}>
                        <h1 className="title">{uzbek && data.name_uz}{russian && data.name_ru}{english && data.name_en}{mandarin && data.name_mn}</h1>
                        <p className="text">{uzbek && data.description_uz}{russian && data.description_ru}{english && data.description_en}{mandarin && data.description_mn}</p>
                    </div>
                    <News getId={id} english={english} uzbek={uzbek} russian={russian} mandarin={mandarin} dark={dark} main={false} />
                </div>
            ))}
            <div style={{ backgroundColor: `${dark ? "black" : "#F2F2F2"}` }}>
                <Contacts changeModal={changeModal} dark={dark} english={english} uzbek={uzbek} russian={russian} mandarin={mandarin} />
            </div>
        </div>
    );
};

export default AloneNews;