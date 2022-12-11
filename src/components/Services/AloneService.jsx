import React from 'react';
import './Scss/AloneService.scss';
import Contacts from '../Contacts/Contacts';
import { dataServices } from '../../api/Api';
import Info1 from '../../assets/images/info1.png';
import Info2 from '../../assets/images/info2.png';
import Info3 from '../../assets/images/info3.png';
import { Link, useParams } from 'react-router-dom';
import BackImg from '../../assets/images/service.jpg';

const AloneService = ({ english, russian, uzbek, dark, changeModal }) => {

    const { id } = useParams();

    return (
        <div className={`AloneService main ${!dark && "light-aloneservices"}`} style={{ backgroundColor: `${dark ? "#1A1A1A" : "#F2F2F2"}` }}>
            {dataServices.filter((c) => c.id == id).map((data) => (
                <div key={data.id} className="wrapper top-wrapper">
                    <h1 className="title">{uzbek && data.name_uz}{russian && data.name_ru}{english && data.name_en}</h1>
                    <div className="links">
                        <Link className='link' to="/">Home &#62;</Link>
                        <a className='link' href="#">About us</a>
                    </div>
                    <p className="desc">{uzbek && data.description_uz}{russian && data.description_ru}{english && data.description_en}</p>
                    <div className="info-cards">
                        <div className="col-4 info">
                            <div className="body">
                                <div className="img">
                                    <img src={Info1} alt="img" />
                                </div>
                                <div className="texts">
                                    <h3 className="name">Hujjatlarni rasmiylashtirish</h3>
                                    <p className="text">trucklar uchun hujjatlarni biz kompaniyamiz da rasmiylashtiriladi va muammolarsiz hal boaldiFounded in 1909 in the Port of Antwerp, Ahlers operates in 3 regions (Europe, CIS, Asia) helping customers to drive future growth </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-4 info">
                            <div className="body">
                                <div className="img">
                                    <img src={Info2} alt="img" />
                                </div>
                                <div className="texts">
                                    <h3 className="name">Yuklash yukni tushirish hizmati</h3>
                                    <p className="text">trucklar uchun hujjatlarni biz kompaniyamiz da rasmiylashtiriladi va muammolarsiz hal boaldiFounded in 1909 in the Port of Antwerp, Ahlers operates in 3 regions (Europe, CIS, Asia) helping customers to drive future growth </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-4 info">
                            <div className="body">
                                <div className="img">
                                    <img src={Info3} alt="img" />
                                </div>
                                <div className="texts">
                                    <h3 className="name">Yukni sug`urtalsh</h3>
                                    <p className="text">trucklar uchun hujjatlarni biz kompaniyamiz da rasmiylashtiriladi va muammolarsiz hal boaldiFounded in 1909 in the Port of Antwerp, Ahlers operates in 3 regions (Europe, CIS, Asia) helping customers to drive future growth </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className="desc">Bizning kompaniyamizda 10t 15t va 25t lik trucklar mavjud va ularning soni 20 dan ortiq. орт в РФ подрос более чем на 20% и достиг почти $14 млрд. Biz logistikamizda bularni taklif qilamiz: </p>
                </div>
            ))}
            <div className="col-12 back-img">
                <img src={BackImg} alt="img" />
            </div>
            <div className="wrapper">
                <p className="desc">
                    Ставки не включают:
                    - доставка до склада получателя после таможни в РФ (уточнять)
                    Ставки на генеральные, неопасные грузы. Ставки на опасные грузы уточняйте у наших специалистов.
                    Китайская экономика растет ударными темпами, что напрямую отражается на объемах транспортировки грузов из Китая в Россию и наоборот. Оборот взаимной торговли между РФ и КНР только за 1 квартал 2018 года увеличился почти на 30% - до $31 млрд. Китайский импорт в РФ подрос более чем на 20% и достиг почти $14 млрд. В свою очередь, российский экспорт в Поднебесную увеличился почти на треть - до $17 млрд. Налицо опережающие темпы роста, а также преимущественный профицит торгового баланса России.
                </p>
            </div>
            <div style={{ backgroundColor: `${dark ? "black" : "#F2F2F2"}` }}>
                <Contacts changeModal={changeModal} dark={dark} />
            </div>
        </div>
    );
};

export default AloneService;