import React from 'react';
import './Scss/Loader.scss';
import CountUp from 'react-countup';
import Truck from '../../assets/images/animationtruck.png';

const Loader = () => {
    return (
        <div className='Loader'>
            <div className="truck">
                <img src={Truck} alt="truck" />
            </div>
            <div className="count">
                <CountUp start={0} end={100} duration={10} /> %
            </div>
        </div>
    );
};

export default Loader;