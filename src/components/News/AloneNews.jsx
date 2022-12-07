import React from 'react';
import News from './News';
import './Scss/AloneNews.scss';
import { dataNews } from '../../api/Api';
import Contacts from '../Contacts/Contacts';
import { Link, useParams } from 'react-router-dom';

const AloneNews = ({ english, russian, uzbek, changeModal, dark }) => {

    const { id } = useParams();

    return (
        <div className={`AloneNews main ${!dark && "light-alonenews"}`} style={{ backgroundColor: `${dark ? "#1A1A1A" : "#F2F2F2"}` }}>
            <div className="wrapper top-wrapper">
                <h1 className="title">Logistika Yangiliklari</h1>
                <div className="links">
                    <Link className='link' to="/">Home &#62;</Link>
                    <a className='link' href="#">News</a>
                </div>
            </div>
            {dataNews.filter((c) => c.id == id).map((data) => (
                <div key={data.id}>
                    <div className="col-12 imgs">
                        <img src={data.image} alt="backImg" className='back-img' />
                    </div>
                    <div className="wrapper" style={{paddingBottom: "10px"}}>
                        <h1 className="title">{uzbek && data.name_uz}{russian && data.name_ru}{english && data.name_en}</h1>
                        <p className="text">{uzbek && data.description_uz}{russian && data.description_ru}{english && data.description_en}</p>
                    </div>
                    <News getId={id} english={english} uzbek={uzbek} russian={russian} dark={dark} main={false} />
                </div>
            ))}
            <div style={{ backgroundColor: `${dark ? "black" : "#F2F2F2"}` }}>
                <Contacts changeModal={changeModal} dark={dark} />
            </div>
        </div>
    );
};

export default AloneNews;