import React from 'react';
import './Scss/Services.scss';
import { Link } from 'react-router-dom';
import { dataServices } from '../../api/Api';

const Services = ({ english, russian, uzbek, dark }) => {

    return (
        <div className='Services main'>
            <div className="wrapper">
                <div className="cards col-12">
                    {dataServices.map((data) => (
                        <div key={data.id} className="col-4 service">
                            <Link to={`/services/${data.id}`} className={`body ${!dark && "light-body"}`}>
                                <div className="img">
                                    <img src={data.image} alt="img" />
                                </div>
                                <div className="texts">
                                    <h5 className="name">{uzbek && data.name_uz}{russian && data.name_ru}{english && data.name_en}</h5>
                                    <p className="desc">{uzbek && data.description_uz.slice(0, 130)}{russian && data.description_ru.slice(0, 130)}{english && data.description_en.slice(0, 130)}...</p>
                                    <div className="explore">batafsil</div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;