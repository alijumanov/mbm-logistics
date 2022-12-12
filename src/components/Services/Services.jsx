import React from 'react';
import './Scss/Services.scss';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { Skeleton } from '@mui/material';
import { dataServices, fetchServicesData } from '../../api/Api';

const Services = ({ english, russian, uzbek, mandarin, dark }) => {

    // data of services

    const { isLoading, data } = useQuery('header-slider', fetchServicesData);

    // skeleton loading

    if (isLoading) {
        return (
            <div className="Services main">
                <div className="wrapper">
                    <div className="cards">
                        {[1, 2, 3, 4, 5, 6].map((data, index) => (
                            <div key={index} className="col-4 service">
                                <div className={`body ${!dark && "light-body"}`}>
                                    <div className="img">
                                        <div className="services-img">
                                            <Skeleton variant='rounded' sx={{ bgcolor: 'grey.800' }} width="100%" height="15vw" />
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        <h2><Skeleton variant='text' sx={{ bgcolor: 'grey.800' }} width="90%" /></h2>
                                        <p>
                                            <Skeleton variant='text' sx={{ bgcolor: 'grey.800' }} width="100%" />
                                            <Skeleton variant='text' sx={{ bgcolor: 'grey.800' }} width="100%" />
                                            <Skeleton variant='text' sx={{ bgcolor: 'grey.800' }} width="100%" />
                                            <Skeleton variant='text' sx={{ bgcolor: 'grey.800' }} width="60%" />
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className='Services main'>
            <div className="wrapper">
                <div className="cards col-12">
                    {dataServices.map((data) => (
                        <div key={data.id} className="col-4 service">
                            <Link to={`/services/${data.id}`} className={`body ${!dark && "light-body"}`}>
                                <div className="img">
                                    <img src={data.image} alt="img" className='services-img' />
                                </div>
                                <div className="texts">
                                    <h5 className="name">{uzbek && data.name_uz}{russian && data.name_ru}{english && data.name_en}{mandarin && data.name_mn}</h5>
                                    <p className="desc">{uzbek && data.description_uz.slice(0, 130)}{russian && data.description_ru.slice(0, 130)}{english && data.description_en.slice(0, 130)}{mandarin && data.description_mn.slice(0, 130)}...</p>
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