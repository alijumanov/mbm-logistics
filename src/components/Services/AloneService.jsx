import React from 'react';
import './Scss/AloneService.scss';
import { useQuery } from 'react-query';
import Contacts from '../Contacts/Contacts';
import { useTranslation } from 'react-i18next';
import Info1 from '../../assets/images/info1.png';
import Info2 from '../../assets/images/info2.png';
import Info3 from '../../assets/images/info3.png';
import { Link, useParams } from 'react-router-dom';
import { fetchOneServiceData } from '../../api/Api';

const AloneService = ({ english, russian, uzbek, mandarin, dark, changeModal, changeContactModal }) => {

    const { id } = useParams();

    // data of one-service

    const { isLoading, data } = useQuery('one-service', fetchOneServiceData);

    // i18next

    const { t } = useTranslation();

    return (
        <div className={`AloneService main ${!dark && "light-aloneservices"}`} style={{ backgroundColor: `${dark ? "#1A1A1A" : "#F2F2F2"}` }}>
            {data?.data?.filter((c) => c.id == id)?.map((item) => (
                <div key={item?.id} className="wrapper top-wrapper">
                    <h1 className="title">{uzbek && item?.name_uz}{russian && item?.name_ru}{english && item?.name_en}{mandarin && item?.name_mn}</h1>
                    <div className="links">
                        <Link className='link' to="/">{t("link1")} &#62;</Link>
                        <a className='link' href="#">{t("link3")}</a>
                    </div>
                    <p className="desc">{uzbek && item?.description_uz}{russian && item?.description_ru}{english && item?.description_en}{mandarin && item?.description_mn}</p>
                    <div className="info-cards">
                        <div className="col-4 info">
                            <div className="body">
                                <div className="img">
                                    <img src={Info1} alt="img" />
                                </div>
                                <div className="texts">
                                    <h3 className="name">{t("doc1")}</h3>
                                    <p className="text">{t("doctxt1")}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-4 info">
                            <div className="body">
                                <div className="img">
                                    <img src={Info2} alt="img" />
                                </div>
                                <div className="texts">
                                    <h3 className="name">{t("doc2")}</h3>
                                    <p className="text">{t("doctxt2")}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-4 info">
                            <div className="body">
                                <div className="img">
                                    <img src={Info3} alt="img" />
                                </div>
                                <div className="texts">
                                    <h3 className="name">{t("doc3")}</h3>
                                    <p className="text">{t("doctxt3")}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <p className="desc">{t("newstext")}</p> */}
                    <div className="buy-btn">
                        <button onClick={changeContactModal}>{t("buybtn")}</button>
                    </div>
                </div>
            ))}
            {data?.data?.filter((c) => c.id == id)?.map((item) => (
                item?.image2 &&
                <div className="col-12 back-img">
                    <img key={item?.id} src={item?.image2} alt="img" />
                </div>
            ))}
            <div className="wrapper">
                <p className="desc">{t("newstext2")}</p>
            </div>
            <div style={{ backgroundColor: `${dark ? "black" : "#F2F2F2"}` }}>
                <Contacts changeModal={changeModal} dark={dark} english={english} uzbek={uzbek} russian={russian} mandarin={mandarin} />
            </div>
        </div>
    );
};

export default AloneService;