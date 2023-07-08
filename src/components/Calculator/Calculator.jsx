import React, { useState } from 'react';
import './Scss/Calculator.scss';
import { useTranslation } from 'react-i18next';
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

    // i18next

    const { t } = useTranslation();

    return (
        <div className={`Calculator main ${!dark && "light-calculator"}`}>
            <div className="wrapper">
                <div className="title">{t("cal")}</div>
                <div className="forms col-12">
                    <div className="desc-res">
                        <h1 className="title">{t("calname")}</h1>
                        <p>{t("caldes")}</p>
                    </div>
                    <div className="col-9 inputs">
                        <div className="col-6 forms-control">
                            <input style={{ border: invalidPlaceFrom && `solid 1px red` }} type="text" value={placeFromValue} onChange={(e) => changePlaceFrom(e.target.value)} placeholder={`${t("w1")} *`} />
                        </div>
                        <div className="col-6 forms-control">
                            <input style={{ border: invalidPlaceTo && `solid 1px red` }} type="text" value={placeToValue} onChange={(e) => changePlaceTo(e.target.value)} placeholder={`${t("w2")}`} />
                        </div>
                        <div className="col-6 forms-control">
                            <input style={{ border: invalidFormat && `solid 1px red` }} type="number" value={formatValue} onChange={(e) => changeFormat(e.target.value)} placeholder={`${t("w3")}`} />
                        </div>
                        <div className="col-6 forms-control">
                            <input style={{ border: invalidWeight && `solid 1px red` }} type="number" value={weightValue} onChange={(e) => changeWeight(e.target.value)} placeholder={`${t("w4")}`} />
                        </div>
                        <div className="col-6 forms-control">
                            <input style={{ border: invalidName && `solid 1px red` }} type="text" value={nameValue} onChange={(e) => changeName(e.target.value)} placeholder={`${t("w5")}`} />
                        </div>
                        <div className="col-6 forms-control">
                            <input style={{ border: invalidNumber && `solid 1px red` }} type="number" value={numberValue} onChange={(e) => changeNumber(e.target.value)} placeholder={`${t("w6")}`} />
                        </div>
                        <div className="col-12 forms-control">
                            <textarea style={{ border: invalidText && `solid 1px red` }} rows="6" value={textValue} onChange={(e) => changeText(e.target.value)} placeholder={`${t("w7")}`}></textarea>
                        </div>
                        <div className="button col-12">
                            <button onClick={() => sendMessage()}>{t("send")}</button>
                        </div>
                    </div>
                    <div className="texts col-3">
                        <div className="desc">
                            <h1 className="title">{t("calname")}</h1>
                            <p>{t("caldes")}</p>
                        </div>
                        <div className="col-12">
                            <p className={`invalid`} style={{ color: invalid ? "#E70000" : "transparent" }}>{t("w8")}</p>
                            <button onClick={() => sendMessage()}>{t("send")}</button>
                        </div>
                    </div>
                </div>
                <div className="cards col-12">
                    <div className="info col-6">
                        <div className="body">
                            <h5 className='name'>{t("card1")}</h5>
                            <p className="desc">{t("card2")}</p>
                        </div>
                    </div>
                    <div className="info col-6">
                        <div className="body">
                            <h5 className='name'>{t("card3")}</h5>
                            <p className="desc">{t("card4")}</p>
                        </div>
                    </div>
                    <div className="info col-6">
                        <div className="body">
                            <h5 className='name'>{t("card5")}</h5>
                            <p className="desc">{t("card6")}</p>
                        </div>
                    </div>
                    <div className="info col-6">
                        <div className="body">
                            <h5 className='name'>{t("card7")}</h5>
                            <p className="desc">{t("card8")}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="animation-area col-12">
                <img src={Truck} alt="truck" className='truck' />
                <div className="card1 animation-card col-2">
                    <h5 className='name'>{t("card1")}</h5>
                    <p className="desc">{t("card2")}</p>
                </div>
                <div className="card2 animation-card col-2">
                    <h5 className='name'>{t("card3")}</h5>
                    <p className="desc">{t("card4")}</p>
                </div>
                <div className="card3 animation-card col-2">
                    <h5 className='name'>{t("card5")}</h5>
                    <p className="desc">{t("card6")}</p>
                </div>
                <div className="card4 animation-card col-2">
                    <h5 className='name'>{t("card7")}</h5>
                    <p className="desc">{t("card8")}</p>
                </div>
            </div>
        </div>
    );
};

export default Calculator;