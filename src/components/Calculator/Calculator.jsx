import React, { useState } from 'react';
import './Scss/Calculator.scss';
import Truck from '../../assets/images/animationtruck.png';

const Calculator = ({ changeModal, dark }) => {

    // input values

    const [textValue, setTextValue] = useState("");
    const [nameValue, setNameValue] = useState("");
    const [numberValue, setNumberValue] = useState("");
    const [weightValue, setWeightValue] = useState("");
    const [formatValue, setFormattValue] = useState("");
    const [placeToValue, setPlaceToValue] = useState("");
    const [placeFromValue, setPlaceFromValue] = useState("");

    // invalid input states

    const [invalid, setInvalid] = useState(false);
    const [invalidText, setInvalidText] = useState(false);
    const [invalidName, setInvalidName] = useState(false);
    const [invalidNumber, setInvalidNumber] = useState(false);
    const [invalidWeight, setInvalidWeight] = useState(false);
    const [invalidFormat, setInvalidFormat] = useState(false);
    const [invalidPlaceTo, setInvalidPlaceTo] = useState(false);
    const [invalidPlaceFrom, setInvalidPlaceFrom] = useState(false);

    // change values and invalids functions

    function changePlaceFrom(item) {
        setInvalid(false);
        setPlaceFromValue(item);
        setInvalidPlaceFrom(false);
    };

    function changePlaceTo(item) {
        setInvalid(false);
        setPlaceToValue(item);
        setInvalidPlaceTo(false);
    };

    function changeFormat(item) {
        setInvalid(false);
        setFormattValue(item);
        setInvalidFormat(false);
    };

    function changeWeight(item) {
        setInvalid(false);
        setWeightValue(item);
        setInvalidWeight(false);
    };

    function changeNumber(item) {
        setInvalid(false);
        setNumberValue(item);
        setInvalidNumber(false);
    };

    function changeName(item) {
        setInvalid(false);
        setNameValue(item);
        setInvalidName(false);
    };

    function changeText(item) {
        setInvalid(false);
        setTextValue(item);
        setInvalidText(false);
    };

    // send message to telegram bot

    let bot = {
        TOKEN: "5759414038:AAEnpIYROI6boixbE-CuaEX2Z2XIDY6myLY",
        chatID: "-1001830247961",
        message: `%0AQayerdan: ${placeFromValue}; %0AQayerga: ${placeToValue}; %0AHajmi: ${formatValue}; %0AOg'irligi: ${weightValue}; %0AIsmi: ${nameValue}; %0ATelefon raqami: ${numberValue}; %0AXabar: ${textValue}`
    };

    function sendMessage() {
        if (placeFromValue === "") {
            setInvalidPlaceFrom(true)
            setInvalid(true)
        } else if (placeToValue === "") {
            setInvalidPlaceTo(true)
            setInvalid(true)
        } else if (formatValue === "") {
            setInvalidFormat(true)
            setInvalid(true)
        } else if (weightValue === "") {
            setInvalidWeight(true)
            setInvalid(true)
        } else if (nameValue === "") {
            setInvalidName(true)
            setInvalid(true)
        } else if (numberValue === "") {
            setInvalidNumber(true)
            setInvalid(true)
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
            setWeightValue("");
            setNumberValue("");
            setPlaceToValue("");
            setFormattValue("");
            setPlaceFromValue("");
        }
    };

    return (
        <div className={`Calculator main ${!dark && "light-calculator"}`}>
            <div className="wrapper">
                <div className="title">Юкингизни хисобланг</div>
                <div className="forms col-12">
                    <div className="desc-res">
                        <h1 className="title">Qanday ishlaydi?</h1>
                        <p>ozingizga kerakli logistika turini tanlang, massani kiriting , yetkazib berish muddatini kiriting.Bizning mutaxasislar sizga 24 soat ichida aloqaga chiqishadi va bepul konsultatsiya berishadi</p>
                    </div>
                    <div className="col-9 inputs">
                        <div className="col-6 forms-control">
                            <input style={{ border: invalidPlaceFrom && `solid 1px red` }} type="text" value={placeFromValue} onChange={(e) => changePlaceFrom(e.target.value)} placeholder='qayerdan? *' />
                        </div>
                        <div className="col-6 forms-control">
                            <input style={{ border: invalidPlaceTo && `solid 1px red` }} type="text" value={placeToValue} onChange={(e) => changePlaceTo(e.target.value)} placeholder='qayerga?' />
                        </div>
                        <div className="col-6 forms-control">
                            <input style={{ border: invalidFormat && `solid 1px red` }} type="number" value={formatValue} onChange={(e) => changeFormat(e.target.value)} placeholder='hajmi' />
                        </div>
                        <div className="col-6 forms-control">
                            <input style={{ border: invalidWeight && `solid 1px red` }} type="number" value={weightValue} onChange={(e) => changeWeight(e.target.value)} placeholder='og`irligi' />
                        </div>
                        <div className="col-6 forms-control">
                            <input style={{ border: invalidName && `solid 1px red` }} type="text" value={nameValue} onChange={(e) => changeName(e.target.value)} placeholder='ismingiz' />
                        </div>
                        <div className="col-6 forms-control">
                            <input style={{ border: invalidNumber && `solid 1px red` }} type="number" value={numberValue} onChange={(e) => changeNumber(e.target.value)} placeholder='raqamingiz' />
                        </div>
                        <div className="col-12 forms-control">
                            <textarea style={{ border: invalidText && `solid 1px red` }} rows="6" value={textValue} onChange={(e) => changeText(e.target.value)} placeholder='qoshimcha malumotlar'></textarea>
                        </div>
                        <div className="button col-12">
                            <button onClick={() => sendMessage()}>yuborish</button>
                        </div>
                    </div>
                    <div className="texts col-3">
                        <div className="desc">
                            <h1 className="title">Qanday ishlaydi?</h1>
                            <p>ozingizga kerakli logistika turini tanlang, massani kiriting , yetkazib berish muddatini kiriting.Bizning mutaxasislar sizga 24 soat ichida aloqaga chiqishadi va bepul konsultatsiya berishadi</p>
                        </div>
                        <div className="col-12">
                            <p className={`invalid`} style={{color: invalid ? "#E70000" : "transparent"}}>siz hali ma'lumotarni kiritmadingiz!</p>
                            <button onClick={() => sendMessage()}>yuborish</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="animation-area col-12">
                <img src={Truck} alt="truck" className='truck' />
                <div className="card1 animation-card col-2">
                    <h5 className='name'>Car delivery</h5>
                    <p className="desc">машиналарни етказиш / ташиши хизмати</p>
                </div>
                <div className="card2 animation-card col-2">
                    <h5 className='name'>Car delivery</h5>
                    <p className="desc">машиналарни етказиш / ташиши хизмати</p>
                </div>
                <div className="card3 animation-card col-2">
                    <h5 className='name'>Car delivery</h5>
                    <p className="desc">машиналарни етказиш / ташиши хизмати</p>
                </div>
                <div className="card4 animation-card col-2">
                    <h5 className='name'>Car delivery</h5>
                    <p className="desc">машиналарни етказиш / ташиши хизмати</p>
                </div>
            </div>
        </div>
    );
};

export default Calculator;