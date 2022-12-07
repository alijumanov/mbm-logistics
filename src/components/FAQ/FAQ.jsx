import React, { useState } from 'react';
import './Scss/FAQ.scss';
import { dataFaqs } from '../../api/Api';
import { Add } from '@mui/icons-material';

const FAQ = ({ english, russian, uzbek, dark }) => {

    const [activeIndex, setActiveIndex] = useState(null);

    return (
        <div className={`FAQ main ${!dark && "light-faq"}`}>
            <div className="wrapper">
                <h1 className="title">Энг коп бериладиган саволлар</h1>
                <div className="col-10 questions">
                    {dataFaqs.map((data) => (
                        <div key={data.id} className="col-12 question">
                            <div className="basic">
                                <h4 className="name">{uzbek && data.name_uz}{russian && data.name_ru}{english && data.name_en}</h4>
                                <div className="open-close" onClick={() => activeIndex != dataFaqs.indexOf(data) ? setActiveIndex(dataFaqs.indexOf(data)) : setActiveIndex(null)}><Add className={`icon ${activeIndex == dataFaqs.indexOf(data) && "active-icon"}`} /></div>
                            </div>
                            <div className={`desc ${activeIndex == dataFaqs.indexOf(data) && "active-desc"}`}>{uzbek && data.description_uz}{russian && data.description_ru}{english && data.description_en}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FAQ;