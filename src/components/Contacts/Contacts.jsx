import React, { useState } from 'react';
import './Scss/Contacts.scss';
import { useTranslation } from 'react-i18next';
import Img1 from '../../assets/images/con1.png';
import Img2 from '../../assets/images/con2.png';
import Img3 from '../../assets/images/con3.png';
import Img4 from '../../assets/images/con4.png';
import Img from '../../assets/images/contact.jpg';

const Contacts = ({ changeModal, dark, english, russian, uzbek, mandarin }) => {

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

    // i18next

    const { t } = useTranslation();

    return (
        <div className={`Contacts main ${!dark && "light-contacts"}`} id="contacts" >
            <div className="wrapper">
                <div className="col-5 forms">
                    <h1 className="title">{t("sms")}</h1>
                    <div className="col-12 forms-control">
                        <input style={{ border: invalidName && `solid 1px red` }} type="text" value={nameValue} onChange={(e) => changeName(e.target.value)} placeholder={`${t("w5")}`} />
                    </div>
                    <div className="col-12 forms-control">
                        <input style={{ border: invalidNumber && `solid 1px red` }} type="number" value={numberValue} onChange={(e) => changeNumber(e.target.value)} placeholder={`${t("w6")}`} />
                    </div>
                    <div className="col-12 forms-control">
                        <textarea style={{ border: invalidText && `solid 1px red` }} rows="6" value={textValue} onChange={(e) => changeText(e.target.value)} placeholder={`${t("w7")}`}></textarea>
                    </div>
                    <div className="button col-12">
                        <button onClick={() => sendMessage()}>{t("send")}</button>
                    </div>
                    <div className="col-12 social">
                        <a href="https://www.facebook.com/MBM-logistix-107730185430954" target="blank" className='icon'>
                            <i className="fa-brands fa-facebook"></i>
                        </a>
                        <a href="https://www.instagram.com/mbm_logistix/" target="blank" className='icon'>
                            <i className="fa-brands fa-instagram"></i>
                        </a>
                        <a href="https://t.me/mirazizs" target="blank" className='icon'>
                            <i className="fa-brands fa-telegram"></i>
                        </a>
                        <a href="https://www.google.com/maps/search/%D0%A3%D0%B7%D0%B1%D0%B5%D0%BA%D0%B8%D1%81%D1%82%D0%B0%D0%BD,+%D0%A2%D0%B0%D1%88%D0%BA%D0%B5%D0%BD%D1%82,+%D0%90%D0%9B%D0%9C%D0%90%D0%97%D0%90%D0%A0%D0%A1%D0%9A%D0%98%D0%99+%D0%A0%D0%90%D0%99%D0%9E%D0%9D,+%D0%BC-%D0%B2+%D0%9A%D0%90%D0%A0%D0%90%D0%9A%D0%90%D0%9C%D0%AB%D0%A8-2%2F4,+11/@41.3672797,69.2071831,17z/data=!3m1!4b1" target="blank" className='icon location'>
                            <i className="fa-solid fa-location-dot"></i>
                            {t("loc")}
                        </a>
                    </div>
                </div>
                <div className="col-7 img">
                    <img src={Img} alt="img" />
                    <div className="animation-card col-6">
                        <div className="header">
                            <img src={Img1} alt="img" /> {uzbek && "Temir yo'l transporti haqida nima deyish mumkin?"}{russian && "Что относится к железнодорожному транспорту?"}{english && "What about rail transport?"}{mandarin && "鐵路運輸呢？"}
                        </div>
                        <div className="body">
                            {/* <b>Biz sizga ozimiz Konteyner topamiz{uzbek && ""}{russian && ""}{english && ""}{mandarin && ""}</b> */}
                            <p>
                                {uzbek && "Temir yo'l harakat tarkibining alohida ob'ektlari - lokomotivlar, vagonlar, vagonlar, elektr va dizel poyezdlari (yoki ularning uchastkalari), temir yo'l avtobuslari, motorli lokomotivlar, vagonlar, temir yo'l yo'lidagi yo'l mashinalari."}
                                {russian && "Отдельными объектами железнодорожного подвижного состава являются локомотивы, вагоны, автомотрисы, электро- и дизель-поезда (или их секции), рельсовые автобусы, мотовозы, дрезины, путевые машины на железнодорожном ходу."}
                                {english && "Separate objects of railway rolling stock are locomotives, wagons, railcars, electric and diesel trains (or their sections), rail buses, motor locomotives, railcars, track machines on a railway track."}
                                {mandarin && "Separate objects of railway rolling stock are locomotives, wagons, railcars, electric and diesel trains (or their sections), rail buses, motor locomotives, railcars, track machines on a railway track."}
                            </p>
                        </div>
                        <div className="bottom">MBM Logistics</div>
                    </div>
                    <div className="animation-card col-6">
                        <div className="header">
                            <img src={Img2} alt="img" /> {uzbek && "Xalqaro havo transporti nimani anglatadi?"}{russian && "Что значит Международная авиаперевозка?"}{english && "What does international air transportation mean?"}{mandarin && "國際空運是什麼意思？"}
                        </div>
                        <div className="body">
                            {/* <b>Biz sizga ozimiz Konteyner topamiz{uzbek && ""}{russian && ""}{english && ""}{mandarin && ""}{uzbek && ""}{russian && ""}{english && ""}{mandarin && ""}</b> */}
                            <p>
                                {uzbek && "Xalqaro tashish - bu yuklarni bir mamlakatdan boshqasiga havo kemalari orqali etkazib berish. Xalqaro tashish Varshava konventsiyasi tomonidan tasdiqlangan qoidalar va qoidalarga qat'iy muvofiq amalga oshiriladi."}
                                {russian && "Международная перевозка – это доставка грузов воздушными судами из одной страны в другую. Международные транспортировки выполняются в строгом соответствии с нормами и правилами, утвержденными Варшавской конвенцией."}
                                {english && "International transportation is the delivery of goods by aircraft from one country to another. International transportation is carried out in strict accordance with the rules and regulations approved by the Warsaw Convention."}
                                {mandarin && "國際運輸是用飛機將貨物從一個國家運送到另一個國家。 國際運輸嚴格按照華沙公約批准的規章制度進行。"}
                            </p>
                        </div>
                        <div className="bottom">MBM Logistics</div>
                    </div>
                    <div className="animation-card col-6">
                        <div className="header">
                            <img src={Img3} alt="img" /> {uzbek && "Dengiz transportining qanday turlari mavjud?"}{russian && "Какие виды морского транспорта?"}{english && "What are the types of maritime transport?"}{mandarin && "海上運輸的種類有哪些？"}
                        </div>
                        <div className="body">
                            {/* <b>Biz sizga ozimiz Konteyner topamiz{uzbek && ""}{russian && ""}{english && ""}{mandarin && ""}</b> */}
                            <p>
                                {uzbek && "Dengiz transportini tashkil etishning ikkita asosiy shakli mavjud - dunyo flot birliklarining yarmini tashkil etuvchi layner va tramp kemalari tasodifiy, o'tuvchi yuklarni bepul tashish bilan shug'ullanadi."}
                                {russian && "Существуют две основные формы организации морских перевозок — линейные суда и трамповые суда, которые составляют половину единиц мирового флота, занимаются свободной перевозкой случайных, попутных грузов."}
                                {english && "There are two main forms of organization of maritime transport - liner ships and tramp ships, which make up half of the world's fleet units, are engaged in the free transportation of random, passing cargo."}
                                {mandarin && "海上運輸主要有兩種組織形式——班輪船和不定期船，它們佔世界船隊的一半，從事隨意、過往貨物的自由運輸。"}
                            </p>
                        </div>
                        <div className="bottom">MBM Logistics</div>
                    </div>
                    <div className="animation-card col-6">
                        <div className="header">
                            <img src={Img4} alt="img" /> {uzbek && "Yuk mashinasida nimani tashish mumkin?"}{russian && "Что можно перевозить на фуре?"}{english && "What can be transported on a truck?"}{mandarin && "卡車可以運輸什麼？"}
                        </div>
                        <div className="body">
                            {/* <b>Biz sizga ozimiz Konteyner topamiz{uzbek && ""}{russian && ""}{english && ""}{mandarin && ""}</b> */}
                            <p>
                                {uzbek && "Standartlarga har qanday maishiy va ofis jihozlari, turli xil va maqsadlardagi qurilish materiallari, mebellar, oziq-ovqat mahsulotlari, transport vositalari va boshqalar kiradi. Yuk mashinalari katta yoki og'ir yuklarni tashish uchun ishlatiladi."}
                                {russian && "К стандартным можно отнести любую бытовую и офисную технику, стройматериалы различного рода и назначения, мебель, пищевые продукты, автотранспорт и многое другое. Чтобы доставить груз крупногабаритный или тяжеловесный используются фуры."}
                                {english && "The standard ones include any household and office equipment, building materials of various kinds and purposes, furniture, food products, vehicles and much more. Trucks are used to deliver bulky or heavy cargo."}
                                {mandarin && "標準產品包括任何家用和辦公設備、各種類型和用途的建築材料、家具、食品、車輛等等。 卡車用於運送大件或重型貨物。"}
                            </p>
                        </div>
                        <div className="bottom">MBM Logistics</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contacts;