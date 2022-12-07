import React, { useState } from 'react';
import './Scss/Contacts.scss';
import Img1 from '../../assets/images/serv3.png';
import Img from '../../assets/images/contact.png';

const Contacts = ({ changeModal, dark }) => {

    // input values

    const [textValue, setTextValue] = useState("");
    const [nameValue, setNameValue] = useState("");
    const [numberValue, setNumberValue] = useState("");

    // invalid input states

    const [invalidText, setInvalidText] = useState(false);
    const [invalidName, setInvalidName] = useState(false);
    const [invalidNumber, setInvalidNumber] = useState(false);

    // change values and invalids functions

    function changeNumber(item) {
        setNumberValue(item);
        setInvalidNumber(false);
    };

    function changeName(item) {
        setNameValue(item);
        setInvalidName(false);
    };

    function changeText(item) {
        setTextValue(item);
        setInvalidText(false);
    };

    // send message to telegram bot

    let bot = {
        TOKEN: "5759414038:AAEnpIYROI6boixbE-CuaEX2Z2XIDY6myLY",
        chatID: "-1001830247961",
        message: `%0AIsmi: ${nameValue}; %0ATelefon raqami: ${numberValue}; %0AXabar: ${textValue}`
    };

    function sendMessage() {
        if (nameValue === "") {
            setInvalidName(true)
        } else if (numberValue === "") {
            setInvalidNumber(true)
        } else {
            fetch(`https://api.telegram.org/bot${bot.TOKEN}/sendMessage?chat_id=${bot.chatID}&text=${bot.message} `, {
                method: "GET"
            })
                .then(success => {
                    console.log('send message')
                }, error => {
                    console.log(error)
                })

            changeModal();
            setNameValue("");
            setTextValue("");
            setNumberValue("");
        }
    };

    return (
        <div className={`Contacts main ${!dark && "light-contacts"}`} id="contacts" >
            <div className="wrapper">
                <div className="col-5 forms">
                    <h1 className="title">Anything to talk?</h1>
                    <div className="col-12 forms-control">
                        <input style={{ border: invalidName && `solid 1px red` }} type="text" value={nameValue} onChange={(e) => changeName(e.target.value)} placeholder='ismingiz' />
                    </div>
                    <div className="col-12 forms-control">
                        <input style={{ border: invalidNumber && `solid 1px red` }} type="number" value={numberValue} onChange={(e) => changeNumber(e.target.value)} placeholder='raqamingiz' />
                    </div>
                    <div className="col-12 forms-control">
                        <textarea style={{ border: invalidText && `solid 1px red` }} rows="6" value={textValue} onChange={(e) => changeText(e.target.value)} placeholder='qoshimcha malumotlar'></textarea>
                    </div>
                    <div className="button col-12">
                        <button onClick={() => sendMessage()}>yuborish</button>
                    </div>
                    <div className="col-12 social">
                        <a href="#" className='icon'>
                            <i className="fa-brands fa-facebook"></i>
                        </a>
                        <a href="#" className='icon'>
                            <i className="fa-brands fa-twitter"></i>
                        </a>
                        <a href="#" className='icon'>
                            <i className="fa-brands fa-instagram"></i>
                        </a>
                        <a href="#" className='icon'>
                            <i className="fa-brands fa-telegram"></i>
                        </a>
                        <a href="#" className='icon location'>
                            <i className="fa-solid fa-location-dot"></i>
                            manzilimiz
                        </a>
                    </div>
                </div>
                <div className="col-7 img">
                    <img src={Img} alt="img" />
                    <div className="animation-card col-6">
                        <div className="header">
                            <img src={Img1} alt="img" /> Konteyner izlash ximati
                        </div>
                        <div className="body">
                            <b>Biz sizga ozimiz Konteyner topamiz</b>
                            <p>Bizning kompaniya 3 kun ichida straxovkani xal qiladi</p>
                        </div>
                        <div className="bottom">MBM logistics</div>
                    </div>
                    <div className="animation-card col-6">
                        <div className="header">
                            <img src={Img1} alt="img" /> Konteyner izlash ximati
                        </div>
                        <div className="body">
                            <b>Biz sizga ozimiz Konteyner topamiz</b>
                            <p>Bizning kompaniya 3 kun ichida straxovkani xal qiladi</p>
                        </div>
                        <div className="bottom">MBM logistics</div>
                    </div>
                    <div className="animation-card col-6">
                        <div className="header">
                            <img src={Img1} alt="img" /> Konteyner izlash ximati
                        </div>
                        <div className="body">
                            <b>Biz sizga ozimiz Konteyner topamiz</b>
                            <p>Bizning kompaniya 3 kun ichida straxovkani xal qiladi</p>
                        </div>
                        <div className="bottom">MBM logistics</div>
                    </div>
                    <div className="animation-card col-6">
                        <div className="header">
                            <img src={Img1} alt="img" /> Konteyner izlash ximati
                        </div>
                        <div className="body">
                            <b>Biz sizga ozimiz Konteyner topamiz</b>
                            <p>Bizning kompaniya 3 kun ichida straxovkani xal qiladi</p>
                        </div>
                        <div className="bottom">MBM logistics</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contacts;