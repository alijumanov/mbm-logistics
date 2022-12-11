import React from 'react';
import './Scss/Advantages.scss';
import Img from '../../assets/images/advantage.jpg';
import { GppGoodRounded, VerifiedRounded, Visibility } from '@mui/icons-material';

const Advantages = ({ dark, changeContactModal }) => {
    return (
        <div className={`Advantages main ${!dark && "light-advantages"}`}>
            <div className="wrapper">
                <div className="col-7 img">
                    <img src={Img} alt="img" />
                </div>
                <div className="col-5 texts">
                    <p>ozingizga kerakli logistika turini tanlang, massani kiriting , yetkazib berish muddatini kiriting.Bizning mutaxasislar sizga 24 soat ichida aloqaga chiqishadi va bepul konsultatsiya berishadiozingizga kerakli logistika turini tanlang, massani kiriting , yetkazib berish muddatini kiriting.Bizning mutaxasislar sizga 24 soat ichida aloqaga chiqishadi va bepul konsultatsiya berishadiozingizga kerakli logistika turini tanlang, massani kiriting , yetkazib berish muddatini kiriting.Bizning mutaxasislar sizga 24 soat ichida aloqaga chiqishadi va bepul konsultatsiya berishadi</p>
                    <div className="icons">
                        <div className="col-4 tool">
                            <div className="body">
                                <VerifiedRounded className='icon' />
                                <p>Hujjatlar</p>
                            </div>
                        </div>
                        <div className="col-4 tool">
                            <div className="body">
                                <GppGoodRounded className='icon' />
                                <p>Straxovka qilish</p>
                            </div>
                        </div>
                        <div className="col-4 tool">
                            <div className="body">
                                <Visibility className='icon' />
                                <p>Yetkazib berilgan yuklar</p>
                            </div>
                        </div>
                    </div>
                    <p>ozingizga kerakli logistika turini tanlang, massani kiriting , yetkazib berish muddatini kiriting.Bizning mutaxasislar sizga 24 soat ichida aloqaga chiqishadi va bepul konsultatsiya berishadiozingizga</p>
                    <div className="order" onClick={() => changeContactModal()}>buyurtma berish</div>
                </div>
            </div>
        </div>
    );
};

export default Advantages;