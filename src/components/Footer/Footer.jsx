import React from 'react';
import './Scss/Footer.scss';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo.png';

const Footer = ({ dark }) => {
    return (
        <div className={`Footer ${!dark && "light-footer"}`}>
            <div className="wrapper">
                <div className="footer-tools">
                    <div className="col-3 tool texts">
                        <Link to="/" onClick={() => window.scrollTo(0, 0)}>
                            <img src={Logo} alt="logo" />
                        </Link>
                        <p className="text">Quo is the most easier way for transaction with your friends and family, No matter where are you. An exceptional way for make your life one step easier.</p>
                        <div className="icons">
                            <a href="https://www.facebook.com/libronic.uz" target="blank">
                                <i className="fa fa-brands fa-facebook"></i>
                            </a>
                            <a href="https://www.instagram.com/libronic.uz" target="blank">
                                <i className="fa fa-brands fa-instagram"></i>
                            </a>
                            <a href="http://t.me/libronicuz" target="blank">
                                <i className="fa fa-brands fa-telegram"></i>
                            </a>
                        </div>
                    </div>
                    <div className="col-3 tool">
                        <ul>
                            <li className='title-footer'>Company</li>
                            <li className="link"><a href='/#categories' className='nav-link p-0'>About Us</a></li>
                            <li className="link"><a href='/#categories' className='nav-link p-0'>About Us</a></li>
                            <li className="link"><a href='/#services' className='nav-link p-0'>About Us</a></li>
                            <li className="link"><a href='/#comments' className='nav-link p-0'>Terms of Usage</a></li>
                        </ul>
                    </div>
                    <div className="col-3 tool">
                        <ul>
                            <li className='title-footer'>Terms</li>
                            <li className="link"><a href='/#about' className='nav-link p-0'>Terms of Usage</a></li>
                            <li className="link"><a href='/#ceocomp' className='nav-link p-0'>Terms of Usage</a></li>
                            <li className="link"><a href='/#comments' className='nav-link p-0'>Terms of Usage</a></li>
                            <li className="link"><a href='/#comments' className='nav-link p-0'>Terms of Usage</a></li>
                        </ul>
                    </div>
                    <div className="col-3 tool">
                        <ul>
                            <li className='title-footer'>Contact</li>
                            <li className="link"><a href='/#calculator' className='nav-link p-0'>84/E/2  West</a></li>
                            <li className="link"><a href='/#blogs' className='nav-link p-0'>84/E/2  West</a></li>
                            <li className="link"><a href='/#location' className='nav-link p-0'>84/E/2  West</a></li>
                            <li className="link"><a href='/#comments' className='nav-link p-0'>Terms of Usage</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;