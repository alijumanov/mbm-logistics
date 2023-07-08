import React from 'react';
import './Scss/FAQ.scss';
import { useQuery } from 'react-query';
import { Skeleton } from '@mui/material';
import { Add } from '@mui/icons-material';
import { fetchFaqsData } from '../../api/Api';
import { useTranslation } from 'react-i18next';

const FAQ = ({ english, russian, uzbek, mandarin, dark, activeIndex, setActiveIndex }) => {

    // i18next

    const { t } = useTranslation();

    // data of services

    const { isLoading, data } = useQuery('faqs', fetchFaqsData);

    const dataFaqs = data?.data;

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
                <h1 className="title">{t("faq")}</h1>
                <div className="col-10 questions">
                    {dataFaqs.map((item) => (
                        <div key={item.id} className="col-12 question">
                            <div className="basic">
                                <h4 className="name">{uzbek && item.question_uz}{russian && item.question_ru}{english && item.question_en}{mandarin && item.question_mn}</h4>
                                <div className="open-close" onClick={() => activeIndex != dataFaqs.indexOf(item) ? setActiveIndex(dataFaqs.indexOf(item)) : setActiveIndex(null)}><Add className={`icon ${activeIndex == dataFaqs.indexOf(item) && "active-icon"}`} /></div>
                            </div>
                            <p className={`desc ${activeIndex == dataFaqs.indexOf(item) && "active-desc"}`} >{uzbek && item.answer_uz}{russian && item.answer_ru}{english && item.answer_en}{mandarin && item.answer_mn}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div >
    );
};

export default FAQ;