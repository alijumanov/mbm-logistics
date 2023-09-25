import React from 'react';
import './Scss/OneService.scss';
import { useQuery } from 'react-query';
import Contacts from '../Contacts/Contacts';
import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { fetchOneServiceData, fetchServicesData } from '../../api/Api';

const OneService = ({ english, russian, uzbek, mandarin, dark, changeModal }) => {

    const { id } = useParams();

    // data of services

    const { isLoading, data } = useQuery('services', fetchServicesData);

    // data of one-service

    const aloneService = useQuery('one-service', fetchOneServiceData);

    // i18next

    const { t } = useTranslation();

    return (
        <div className={`OneService main ${!dark && "light-oneService"}`} style={{ backgroundColor: `${dark ? "#1A1A1A" : "#F2F2F2"}` }}>
            {data?.data?.filter((c) => c.id == id)?.map((item) => (
                <div key={item?.id} className="wrapper main-wrapper">
                    <h1 className="title">{uzbek && item?.name_uz}{russian && item?.name_ru}{english && item?.name_en}{mandarin && item?.name_mn}</h1>
                    <div className="links">
                        <Link className='link' to="/">{t("link1")} &#62;</Link>
                        <a className='link' href="#">{t("link3")}</a>
                    </div>
                    <p className="desc">{uzbek && item?.description_uz}{russian && item?.description_ru}{english && item?.description_en}{mandarin && item?.description_mn}</p>
                    <h1 className="title other">{t("other-serv")}</h1>
                    <div className="cards">
                        {aloneService.data?.data.filter((j) => j.category == item?.id).map((post) => (
                            <Link to={`/aloneservice/${post.id}`} key={post.id} className="service">
                                <img src={post.image1} alt="img" className='serv-img' />
                                <p className="name">{uzbek && post.name_uz}{russian && post.name_ru}{english && post.name_en}{mandarin && post.name_mn}</p>
                            </Link>
                        ))}
                    </div>
                    {/* <p className="desc">{t("newstext")}</p> */}
                </div>
            ))}
            <Contacts changeModal={changeModal} dark={dark} english={english} uzbek={uzbek} russian={russian} mandarin={mandarin} />
        </div>
    );
};

export default OneService;