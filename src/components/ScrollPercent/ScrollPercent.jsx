import React, { useEffect, useState } from 'react';
import './Scss/ScrollPercent.scss';
import { ArrowUpwardRounded } from '@mui/icons-material';

const ScrollPercent = ({ dark }) => {

    const [scrollValue, setScrollValue] = useState(0)

    useEffect(() => {
        document.addEventListener("scroll", () => {
            let pos = document.documentElement.scrollTop
            let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
            setScrollValue(Math.round((pos * 100) / calcHeight))
        })
    }, [])

    function scrollToTop() {
        document.documentElement.scrollTop = 0
    }

    return (
        <div onClick={() => scrollToTop()} className={`ScrollPercent ${scrollValue == 0 && "bottom"}`} style={{ background: `${dark ? `conic-gradient(black ${scrollValue}%, #76A6EF ${scrollValue}%)` : `conic-gradient(#76A6EF ${scrollValue}%, black ${scrollValue}%)`}` }}>
            <ArrowUpwardRounded className='arrow-up' />
        </div>
    );
};

export default ScrollPercent;