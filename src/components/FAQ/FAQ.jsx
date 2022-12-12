import React, { useState } from 'react';
import './Scss/FAQ.scss';
import { useQuery } from 'react-query';
import { Skeleton } from '@mui/material';
import { Add } from '@mui/icons-material';
import { dataFaqs, fetchFaqsData } from '../../api/Api';

const FAQ = ({ english, russian, uzbek, mandarin, dark }) => {

    const [activeIndex, setActiveIndex] = useState(null);

    // data of services

    const { isLoading, data } = useQuery('header-slider', fetchFaqsData);

    // skeleton loading

    if (isLoading) {
        return (
            <div className={`FAQ main ${!dark && "light-faq"}`}>
                <div className="wrapper">
                    <h1 className='col-9'>
                        <Skeleton variant='text' sx={{ bgcolor: 'grey.800' }} width="100%" />
                    </h1>
                    <div className="col-10 questions">
                        {[1, 2, 3, 4, 5].map((data, index) => (
                            <div key={index} className="col-12 question">
                                <div className="basic">
                                    <h2 className="col-8 m-0">
                                        <Skeleton variant='text' sx={{ bgcolor: 'grey.700' }} width="100%" />
                                    </h2>
                                    <div className="open-close" ><Add className={`icon`} /></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className={`FAQ main ${!dark && "light-faq"}`}>
            <div className="wrapper">
                <h1 className="title">Энг коп бериладиган саволлар</h1>
                <div className="col-10 questions">
                    {dataFaqs.map((data) => (
                        <div key={data.id} className="col-12 question">
                            <div className="basic">
                                <h4 className="name">{uzbek && data.name_uz}{russian && data.name_ru}{english && data.name_en}{mandarin && data.name_mn}</h4>
                                <div className="open-close" onClick={() => activeIndex != dataFaqs.indexOf(data) ? setActiveIndex(dataFaqs.indexOf(data)) : setActiveIndex(null)}><Add className={`icon ${activeIndex == dataFaqs.indexOf(data) && "active-icon"}`} /></div>
                            </div>
                            <div className={`desc ${activeIndex == dataFaqs.indexOf(data) && "active-desc"}`}>{uzbek && data.description_uz}{russian && data.description_ru}{english && data.description_en}{mandarin && data.description_mn}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FAQ;