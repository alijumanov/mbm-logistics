import axios from 'axios';
import NewImg from '../assets/images/news.png';
import ServImg1 from '../assets/images/serv1.png';
import ServImg2 from '../assets/images/serv2.png';
import ServImg3 from '../assets/images/serv3.png';
import ServImg4 from '../assets/images/serv4.png';
import ServImg5 from '../assets/images/serv5.png';
import ServImg6 from '../assets/images/serv6.png';
import CommentImg1 from '../assets/images/comment1.png';
import CommentImg2 from '../assets/images/comment2.png';
import HeaderBackImg from '../assets/images/header-back.jpg';
import { COMMENTS_DATA_URL, FAQ_DATA_URL, HEADER_SLIDER_URL, NEWS_DATA_URL, SERVICES_DATA_URL } from './ApiLink';

// header slider API

export const fetchHeaderSliderData = () => {
    return axios.get(HEADER_SLIDER_URL)
}

export const dataSlider = [
    { id: 1, link: "https://mbm.com", image: HeaderBackImg, name_uz: "Бутун дуне бойлаб логистика хизматлари", name_ru: "Бутун дуне бойлаб логистика хизматлари", name_en: "Бутун дуне бойлаб логистика хизматлари", description_uz: "Таможенное оформление от 5000 рублей (не включает НДС)", description_ru: "Таможенное оформление от 5000 рублей (не включает НДС)", description_en: "Таможенное оформление от 5000 рублей (не включает НДС)", description1_uz: "Ответственность КВАТРО Логистик за доставку грузов (застрахована на 500 000 евро)", description1_ru: "Ответственность КВАТРО Логистик за доставку грузов (застрахована на 500 000 евро)", description1_en: "Ответственность КВАТРО Логистик за доставку грузов (застрахована на 500 000 евро)" },
    { id: 2, link: "https://mbm.com", image: HeaderBackImg, name_uz: "Бутун дуне бойлаб логистика хизматлари", name_ru: "Бутун дуне бойлаб логистика хизматлари", name_en: "Бутун дуне бойлаб логистика хизматлари", description_uz: "Таможенное оформление от 5000 рублей (не включает НДС)", description_ru: "Таможенное оформление от 5000 рублей (не включает НДС)", description_en: "Таможенное оформление от 5000 рублей (не включает НДС)", description1_uz: "Ответственность КВАТРО Логистик за доставку грузов (застрахована на 500 000 евро)", description1_ru: "Ответственность КВАТРО Логистик за доставку грузов (застрахована на 500 000 евро)", description1_en: "Ответственность КВАТРО Логистик за доставку грузов (застрахована на 500 000 евро)" },
    { id: 3, link: "https://mbm.com", image: HeaderBackImg, name_uz: "Бутун дуне бойлаб логистика хизматлари", name_ru: "Бутун дуне бойлаб логистика хизматлари", name_en: "Бутун дуне бойлаб логистика хизматлари", description_uz: "Таможенное оформление от 5000 рублей (не включает НДС)", description_ru: "Таможенное оформление от 5000 рублей (не включает НДС)", description_en: "Таможенное оформление от 5000 рублей (не включает НДС)", description1_uz: "Ответственность КВАТРО Логистик за доставку грузов (застрахована на 500 000 евро)", description1_ru: "Ответственность КВАТРО Логистик за доставку грузов (застрахована на 500 000 евро)", description1_en: "Ответственность КВАТРО Логистик за доставку грузов (застрахована на 500 000 евро)" },
    { id: 4, link: "https://mbm.com", image: HeaderBackImg, name_uz: "Бутун дуне бойлаб логистика хизматлари", name_ru: "Бутун дуне бойлаб логистика хизматлари", name_en: "Бутун дуне бойлаб логистика хизматлари", description_uz: "Таможенное оформление от 5000 рублей (не включает НДС)", description_ru: "Таможенное оформление от 5000 рублей (не включает НДС)", description_en: "Таможенное оформление от 5000 рублей (не включает НДС)", description1_uz: "Ответственность КВАТРО Логистик за доставку грузов (застрахована на 500 000 евро)", description1_ru: "Ответственность КВАТРО Логистик за доставку грузов (застрахована на 500 000 евро)", description1_en: "Ответственность КВАТРО Логистик за доставку грузов (застрахована на 500 000 евро)" }
];

// services API

export const fetchServicesData = () => {
    return axios.get(SERVICES_DATA_URL)
}

export const dataServices = [
    { id: 1, image: ServImg1, name_uz: "Truckda yetkazish", name_ru: "Truckda yetkazish", name_en: "Truckda yetkazish", description_uz: "Founded in 1909 in the Port of Antwerp, Ahlers operates in 3 regions (Europe, CIS, Asia) helping customers to drive future growth in complex markets, Ahlers is a family-owned company, 3rd generation", description_ru: "Founded in 1909 in the Port of Antwerp, Ahlers operates in 3 regions (Europe, CIS, Asia) helping customers to drive future growth in complex markets, Ahlers is a family-owned company, 3rd generation", description_en: "Founded in 1909 in the Port of Antwerp, Ahlers operates in 3 regions (Europe, CIS, Asia) helping customers to drive future growth in complex markets, Ahlers is a family-owned company, 3rd generation" },
    { id: 2, image: ServImg2, name_uz: "Truckda yetkazish", name_ru: "Truckda yetkazish", name_en: "Truckda yetkazish", description_uz: "Founded in 1909 in the Port of Antwerp, Ahlers operates in 3 regions (Europe, CIS, Asia) helping customers to drive future growth in complex markets, Ahlers is a family-owned company, 3rd generation", description_ru: "Founded in 1909 in the Port of Antwerp, Ahlers operates in 3 regions (Europe, CIS, Asia) helping customers to drive future growth in complex markets, Ahlers is a family-owned company, 3rd generation", description_en: "Founded in 1909 in the Port of Antwerp, Ahlers operates in 3 regions (Europe, CIS, Asia) helping customers to drive future growth in complex markets, Ahlers is a family-owned company, 3rd generation" },
    { id: 3, image: ServImg3, name_uz: "Truckda yetkazish", name_ru: "Truckda yetkazish", name_en: "Truckda yetkazish", description_uz: "Founded in 1909 in the Port of Antwerp, Ahlers operates in 3 regions (Europe, CIS, Asia) helping customers to drive future growth in complex markets, Ahlers is a family-owned company, 3rd generation", description_ru: "Founded in 1909 in the Port of Antwerp, Ahlers operates in 3 regions (Europe, CIS, Asia) helping customers to drive future growth in complex markets, Ahlers is a family-owned company, 3rd generation", description_en: "Founded in 1909 in the Port of Antwerp, Ahlers operates in 3 regions (Europe, CIS, Asia) helping customers to drive future growth in complex markets, Ahlers is a family-owned company, 3rd generation" },
    { id: 4, image: ServImg4, name_uz: "Truckda yetkazish", name_ru: "Truckda yetkazish", name_en: "Truckda yetkazish", description_uz: "Founded in 1909 in the Port of Antwerp, Ahlers operates in 3 regions (Europe, CIS, Asia) helping customers to drive future growth in complex markets, Ahlers is a family-owned company, 3rd generation", description_ru: "Founded in 1909 in the Port of Antwerp, Ahlers operates in 3 regions (Europe, CIS, Asia) helping customers to drive future growth in complex markets, Ahlers is a family-owned company, 3rd generation", description_en: "Founded in 1909 in the Port of Antwerp, Ahlers operates in 3 regions (Europe, CIS, Asia) helping customers to drive future growth in complex markets, Ahlers is a family-owned company, 3rd generation" },
    { id: 5, image: ServImg5, name_uz: "Truckda yetkazish", name_ru: "Truckda yetkazish", name_en: "Truckda yetkazish", description_uz: "Founded in 1909 in the Port of Antwerp, Ahlers operates in 3 regions (Europe, CIS, Asia) helping customers to drive future growth in complex markets, Ahlers is a family-owned company, 3rd generation", description_ru: "Founded in 1909 in the Port of Antwerp, Ahlers operates in 3 regions (Europe, CIS, Asia) helping customers to drive future growth in complex markets, Ahlers is a family-owned company, 3rd generation", description_en: "Founded in 1909 in the Port of Antwerp, Ahlers operates in 3 regions (Europe, CIS, Asia) helping customers to drive future growth in complex markets, Ahlers is a family-owned company, 3rd generation" },
    { id: 6, image: ServImg6, name_uz: "Truckda yetkazish", name_ru: "Truckda yetkazish", name_en: "Truckda yetkazish", description_uz: "Founded in 1909 in the Port of Antwerp, Ahlers operates in 3 regions (Europe, CIS, Asia) helping customers to drive future growth in complex markets, Ahlers is a family-owned company, 3rd generation", description_ru: "Founded in 1909 in the Port of Antwerp, Ahlers operates in 3 regions (Europe, CIS, Asia) helping customers to drive future growth in complex markets, Ahlers is a family-owned company, 3rd generation", description_en: "Founded in 1909 in the Port of Antwerp, Ahlers operates in 3 regions (Europe, CIS, Asia) helping customers to drive future growth in complex markets, Ahlers is a family-owned company, 3rd generation" }
];

// news API

export const fetchNewsData = () => {
    return axios.get(NEWS_DATA_URL)
}

export const dataNews = [
    { id: 1, date: "05.11.2022", image: NewImg, name_uz: "MBM Yangi skladi ochilishi bolib otdi", name_ru: "MBM Yangi skladi ochilishi bolib otdi", name_en: "MBM Yangi skladi ochilishi bolib otdi", description_uz: "Founded in 1909 in the Port of Antwerp, Ahlers operates in 3 regions (Europe, CIS, Asia) helping customers to drive future growth in complex markets, Ahlers is a family-owned company, 3rd generation Founded in 1909 in the Port of Antwerp, Ahlers operates in 3 regions (Europe, CIS, Asia) helping customers to drive future growth in complex", description_ru: "Founded in 1909 in the Port of Antwerp, Ahlers operates in 3 regions (Europe, CIS, Asia) helping customers to drive future growth in complex markets, Ahlers is a family-owned company, 3rd generation Founded in 1909 in the Port of Antwerp, Ahlers operates in 3 regions (Europe, CIS, Asia) helping customers to drive future growth in complex", description_en: "Founded in 1909 in the Port of Antwerp, Ahlers operates in 3 regions (Europe, CIS, Asia) helping customers to drive future growth in complex markets, Ahlers is a family-owned company, 3rd generation Founded in 1909 in the Port of Antwerp, Ahlers operates in 3 regions (Europe, CIS, Asia) helping customers to drive future growth in complex" },
    { id: 2, date: "05.11.2022", image: NewImg, name_uz: "MBM Yangi skladi ochilishi bolib otdi", name_ru: "MBM Yangi skladi ochilishi bolib otdi", name_en: "MBM Yangi skladi ochilishi bolib otdi", description_uz: "Founded in 1909 in the Port of Antwerp, Ahlers operates in 3 regions (Europe, CIS, Asia) helping customers to drive future growth in complex markets, Ahlers is a family-owned company, 3rd generation Founded in 1909 in the Port of Antwerp, Ahlers operates in 3 regions (Europe, CIS, Asia) helping customers to drive future growth in complex", description_ru: "Founded in 1909 in the Port of Antwerp, Ahlers operates in 3 regions (Europe, CIS, Asia) helping customers to drive future growth in complex markets, Ahlers is a family-owned company, 3rd generation Founded in 1909 in the Port of Antwerp, Ahlers operates in 3 regions (Europe, CIS, Asia) helping customers to drive future growth in complex", description_en: "Founded in 1909 in the Port of Antwerp, Ahlers operates in 3 regions (Europe, CIS, Asia) helping customers to drive future growth in complex markets, Ahlers is a family-owned company, 3rd generation Founded in 1909 in the Port of Antwerp, Ahlers operates in 3 regions (Europe, CIS, Asia) helping customers to drive future growth in complex" },
    { id: 3, date: "05.11.2022", image: NewImg, name_uz: "MBM Yangi skladi ochilishi bolib otdi", name_ru: "MBM Yangi skladi ochilishi bolib otdi", name_en: "MBM Yangi skladi ochilishi bolib otdi", description_uz: "Founded in 1909 in the Port of Antwerp, Ahlers operates in 3 regions (Europe, CIS, Asia) helping customers to drive future growth in complex markets, Ahlers is a family-owned company, 3rd generation Founded in 1909 in the Port of Antwerp, Ahlers operates in 3 regions (Europe, CIS, Asia) helping customers to drive future growth in complex", description_ru: "Founded in 1909 in the Port of Antwerp, Ahlers operates in 3 regions (Europe, CIS, Asia) helping customers to drive future growth in complex markets, Ahlers is a family-owned company, 3rd generation Founded in 1909 in the Port of Antwerp, Ahlers operates in 3 regions (Europe, CIS, Asia) helping customers to drive future growth in complex", description_en: "Founded in 1909 in the Port of Antwerp, Ahlers operates in 3 regions (Europe, CIS, Asia) helping customers to drive future growth in complex markets, Ahlers is a family-owned company, 3rd generation Founded in 1909 in the Port of Antwerp, Ahlers operates in 3 regions (Europe, CIS, Asia) helping customers to drive future growth in complex" },
    { id: 4, date: "05.11.2022", image: NewImg, name_uz: "MBM Yangi skladi ochilishi bolib otdi", name_ru: "MBM Yangi skladi ochilishi bolib otdi", name_en: "MBM Yangi skladi ochilishi bolib otdi", description_uz: "Founded in 1909 in the Port of Antwerp, Ahlers operates in 3 regions (Europe, CIS, Asia) helping customers to drive future growth in complex markets, Ahlers is a family-owned company, 3rd generation Founded in 1909 in the Port of Antwerp, Ahlers operates in 3 regions (Europe, CIS, Asia) helping customers to drive future growth in complex", description_ru: "Founded in 1909 in the Port of Antwerp, Ahlers operates in 3 regions (Europe, CIS, Asia) helping customers to drive future growth in complex markets, Ahlers is a family-owned company, 3rd generation Founded in 1909 in the Port of Antwerp, Ahlers operates in 3 regions (Europe, CIS, Asia) helping customers to drive future growth in complex", description_en: "Founded in 1909 in the Port of Antwerp, Ahlers operates in 3 regions (Europe, CIS, Asia) helping customers to drive future growth in complex markets, Ahlers is a family-owned company, 3rd generation Founded in 1909 in the Port of Antwerp, Ahlers operates in 3 regions (Europe, CIS, Asia) helping customers to drive future growth in complex" },
    { id: 5, date: "05.11.2022", image: NewImg, name_uz: "MBM Yangi skladi ochilishi bolib otdi", name_ru: "MBM Yangi skladi ochilishi bolib otdi", name_en: "MBM Yangi skladi ochilishi bolib otdi", description_uz: "Founded in 1909 in the Port of Antwerp, Ahlers operates in 3 regions (Europe, CIS, Asia) helping customers to drive future growth in complex markets, Ahlers is a family-owned company, 3rd generation Founded in 1909 in the Port of Antwerp, Ahlers operates in 3 regions (Europe, CIS, Asia) helping customers to drive future growth in complex", description_ru: "Founded in 1909 in the Port of Antwerp, Ahlers operates in 3 regions (Europe, CIS, Asia) helping customers to drive future growth in complex markets, Ahlers is a family-owned company, 3rd generation Founded in 1909 in the Port of Antwerp, Ahlers operates in 3 regions (Europe, CIS, Asia) helping customers to drive future growth in complex", description_en: "Founded in 1909 in the Port of Antwerp, Ahlers operates in 3 regions (Europe, CIS, Asia) helping customers to drive future growth in complex markets, Ahlers is a family-owned company, 3rd generation Founded in 1909 in the Port of Antwerp, Ahlers operates in 3 regions (Europe, CIS, Asia) helping customers to drive future growth in complex" },
    { id: 6, date: "05.11.2022", image: NewImg, name_uz: "MBM Yangi skladi ochilishi bolib otdi", name_ru: "MBM Yangi skladi ochilishi bolib otdi", name_en: "MBM Yangi skladi ochilishi bolib otdi", description_uz: "Founded in 1909 in the Port of Antwerp, Ahlers operates in 3 regions (Europe, CIS, Asia) helping customers to drive future growth in complex markets, Ahlers is a family-owned company, 3rd generation Founded in 1909 in the Port of Antwerp, Ahlers operates in 3 regions (Europe, CIS, Asia) helping customers to drive future growth in complex", description_ru: "Founded in 1909 in the Port of Antwerp, Ahlers operates in 3 regions (Europe, CIS, Asia) helping customers to drive future growth in complex markets, Ahlers is a family-owned company, 3rd generation Founded in 1909 in the Port of Antwerp, Ahlers operates in 3 regions (Europe, CIS, Asia) helping customers to drive future growth in complex", description_en: "Founded in 1909 in the Port of Antwerp, Ahlers operates in 3 regions (Europe, CIS, Asia) helping customers to drive future growth in complex markets, Ahlers is a family-owned company, 3rd generation Founded in 1909 in the Port of Antwerp, Ahlers operates in 3 regions (Europe, CIS, Asia) helping customers to drive future growth in complex" }
];

// FAQ API

export const fetchFaqsData = () => {
    return axios.get(FAQ_DATA_URL)
}

export const dataFaqs = [
    { id: 1, name_uz: "1-модуль. Савдо жамоасини шакллантириш", name_ru: "1-модуль. Савдо жамоасини шакллантириш", name_en: "1-модуль. Савдо жамоасини шакллантириш", description_uz: "Grafik dizaynerning qiyinchiliklari Asosiy qiyinchilik menejer yoki raxbariyatdan keluvchi feedbacklarda. Ustoz grafik dizaynerning qiyinchiliklari Har bir narsani o‘rganuvchilarga juda ham yaxshilab tushuntirib o‘rgatib borish. Ularni ishlariga feedbacklar berish, sohaviy, psihologik, ruhiy holatlarini kuzatib borish, qo'ldan kelgancha yordam berish.", description_ru: "Grafik dizaynerning qiyinchiliklari Asosiy qiyinchilik menejer yoki raxbariyatdan keluvchi feedbacklarda. Ustoz grafik dizaynerning qiyinchiliklari Har bir narsani o‘rganuvchilarga juda ham yaxshilab tushuntirib o‘rgatib borish. Ularni ishlariga feedbacklar berish, sohaviy, psihologik, ruhiy holatlarini kuzatib borish, qo'ldan kelgancha yordam berish.", description_en: "Grafik dizaynerning qiyinchiliklari Asosiy qiyinchilik menejer yoki raxbariyatdan keluvchi feedbacklarda. Ustoz grafik dizaynerning qiyinchiliklari Har bir narsani o‘rganuvchilarga juda ham yaxshilab tushuntirib o‘rgatib borish. Ularni ishlariga feedbacklar berish, sohaviy, psihologik, ruhiy holatlarini kuzatib borish, qo'ldan kelgancha yordam berish." },
    { id: 2, name_uz: "1-модуль. Савдо жамоасини шакллантириш", name_ru: "1-модуль. Савдо жамоасини шакллантириш", name_en: "1-модуль. Савдо жамоасини шакллантириш", description_uz: "Grafik dizaynerning qiyinchiliklari Asosiy qiyinchilik menejer yoki raxbariyatdan keluvchi feedbacklarda. Ustoz grafik dizaynerning qiyinchiliklari Har bir narsani o‘rganuvchilarga juda ham yaxshilab tushuntirib o‘rgatib borish. Ularni ishlariga feedbacklar berish, sohaviy, psihologik, ruhiy holatlarini kuzatib borish, qo'ldan kelgancha yordam berish.", description_ru: "Grafik dizaynerning qiyinchiliklari Asosiy qiyinchilik menejer yoki raxbariyatdan keluvchi feedbacklarda. Ustoz grafik dizaynerning qiyinchiliklari Har bir narsani o‘rganuvchilarga juda ham yaxshilab tushuntirib o‘rgatib borish. Ularni ishlariga feedbacklar berish, sohaviy, psihologik, ruhiy holatlarini kuzatib borish, qo'ldan kelgancha yordam berish.", description_en: "Grafik dizaynerning qiyinchiliklari Asosiy qiyinchilik menejer yoki raxbariyatdan keluvchi feedbacklarda. Ustoz grafik dizaynerning qiyinchiliklari Har bir narsani o‘rganuvchilarga juda ham yaxshilab tushuntirib o‘rgatib borish. Ularni ishlariga feedbacklar berish, sohaviy, psihologik, ruhiy holatlarini kuzatib borish, qo'ldan kelgancha yordam berish." },
    { id: 3, name_uz: "1-модуль. Савдо жамоасини шакллантириш", name_ru: "1-модуль. Савдо жамоасини шакллантириш", name_en: "1-модуль. Савдо жамоасини шакллантириш", description_uz: "Grafik dizaynerning qiyinchiliklari Asosiy qiyinchilik menejer yoki raxbariyatdan keluvchi feedbacklarda. Ustoz grafik dizaynerning qiyinchiliklari Har bir narsani o‘rganuvchilarga juda ham yaxshilab tushuntirib o‘rgatib borish. Ularni ishlariga feedbacklar berish, sohaviy, psihologik, ruhiy holatlarini kuzatib borish, qo'ldan kelgancha yordam berish.", description_ru: "Grafik dizaynerning qiyinchiliklari Asosiy qiyinchilik menejer yoki raxbariyatdan keluvchi feedbacklarda. Ustoz grafik dizaynerning qiyinchiliklari Har bir narsani o‘rganuvchilarga juda ham yaxshilab tushuntirib o‘rgatib borish. Ularni ishlariga feedbacklar berish, sohaviy, psihologik, ruhiy holatlarini kuzatib borish, qo'ldan kelgancha yordam berish.", description_en: "Grafik dizaynerning qiyinchiliklari Asosiy qiyinchilik menejer yoki raxbariyatdan keluvchi feedbacklarda. Ustoz grafik dizaynerning qiyinchiliklari Har bir narsani o‘rganuvchilarga juda ham yaxshilab tushuntirib o‘rgatib borish. Ularni ishlariga feedbacklar berish, sohaviy, psihologik, ruhiy holatlarini kuzatib borish, qo'ldan kelgancha yordam berish." },
    { id: 4, name_uz: "1-модуль. Савдо жамоасини шакллантириш", name_ru: "1-модуль. Савдо жамоасини шакллантириш", name_en: "1-модуль. Савдо жамоасини шакллантириш", description_uz: "Grafik dizaynerning qiyinchiliklari Asosiy qiyinchilik menejer yoki raxbariyatdan keluvchi feedbacklarda. Ustoz grafik dizaynerning qiyinchiliklari Har bir narsani o‘rganuvchilarga juda ham yaxshilab tushuntirib o‘rgatib borish. Ularni ishlariga feedbacklar berish, sohaviy, psihologik, ruhiy holatlarini kuzatib borish, qo'ldan kelgancha yordam berish.", description_ru: "Grafik dizaynerning qiyinchiliklari Asosiy qiyinchilik menejer yoki raxbariyatdan keluvchi feedbacklarda. Ustoz grafik dizaynerning qiyinchiliklari Har bir narsani o‘rganuvchilarga juda ham yaxshilab tushuntirib o‘rgatib borish. Ularni ishlariga feedbacklar berish, sohaviy, psihologik, ruhiy holatlarini kuzatib borish, qo'ldan kelgancha yordam berish.", description_en: "Grafik dizaynerning qiyinchiliklari Asosiy qiyinchilik menejer yoki raxbariyatdan keluvchi feedbacklarda. Ustoz grafik dizaynerning qiyinchiliklari Har bir narsani o‘rganuvchilarga juda ham yaxshilab tushuntirib o‘rgatib borish. Ularni ishlariga feedbacklar berish, sohaviy, psihologik, ruhiy holatlarini kuzatib borish, qo'ldan kelgancha yordam berish." },
    { id: 5, name_uz: "1-модуль. Савдо жамоасини шакллантириш", name_ru: "1-модуль. Савдо жамоасини шакллантириш", name_en: "1-модуль. Савдо жамоасини шакллантириш", description_uz: "Grafik dizaynerning qiyinchiliklari Asosiy qiyinchilik menejer yoki raxbariyatdan keluvchi feedbacklarda. Ustoz grafik dizaynerning qiyinchiliklari Har bir narsani o‘rganuvchilarga juda ham yaxshilab tushuntirib o‘rgatib borish. Ularni ishlariga feedbacklar berish, sohaviy, psihologik, ruhiy holatlarini kuzatib borish, qo'ldan kelgancha yordam berish.", description_ru: "Grafik dizaynerning qiyinchiliklari Asosiy qiyinchilik menejer yoki raxbariyatdan keluvchi feedbacklarda. Ustoz grafik dizaynerning qiyinchiliklari Har bir narsani o‘rganuvchilarga juda ham yaxshilab tushuntirib o‘rgatib borish. Ularni ishlariga feedbacklar berish, sohaviy, psihologik, ruhiy holatlarini kuzatib borish, qo'ldan kelgancha yordam berish.", description_en: "Grafik dizaynerning qiyinchiliklari Asosiy qiyinchilik menejer yoki raxbariyatdan keluvchi feedbacklarda. Ustoz grafik dizaynerning qiyinchiliklari Har bir narsani o‘rganuvchilarga juda ham yaxshilab tushuntirib o‘rgatib borish. Ularni ishlariga feedbacklar berish, sohaviy, psihologik, ruhiy holatlarini kuzatib borish, qo'ldan kelgancha yordam berish." }
];

// comments API

export const fetchCommentsData = () => {
    return axios.get(COMMENTS_DATA_URL)
}

export const dataComments = [
    { id: 1, image: CommentImg1, date: "20.01.2022", name_uz: "apple company", name_ru: "apple company", name_en: "apple company", description_uz: "We coordinate all shipments through a large network of licensed Auto Shipping Carriers nationwide. All Carriers are legally required to be fully", description_ru: "We coordinate all shipments through a large network of licensed Auto Shipping Carriers nationwide. All Carriers are legally required to be fully", description_en: "We coordinate all shipments through a large network of licensed Auto Shipping Carriers nationwide. All Carriers are legally required to be fully" },
    { id: 2, image: CommentImg2, date: "20.01.2022", name_uz: "apple company", name_ru: "apple company", name_en: "apple company", description_uz: "We coordinate all shipments through a large network of licensed Auto Shipping Carriers nationwide. All Carriers are legally required to be fully", description_ru: "We coordinate all shipments through a large network of licensed Auto Shipping Carriers nationwide. All Carriers are legally required to be fully", description_en: "We coordinate all shipments through a large network of licensed Auto Shipping Carriers nationwide. All Carriers are legally required to be fully" },
    { id: 3, image: CommentImg1, date: "20.01.2022", name_uz: "apple company", name_ru: "apple company", name_en: "apple company", description_uz: "We coordinate all shipments through a large network of licensed Auto Shipping Carriers nationwide. All Carriers are legally required to be fully", description_ru: "We coordinate all shipments through a large network of licensed Auto Shipping Carriers nationwide. All Carriers are legally required to be fully", description_en: "We coordinate all shipments through a large network of licensed Auto Shipping Carriers nationwide. All Carriers are legally required to be fully" },
    { id: 4, image: CommentImg2, date: "20.01.2022", name_uz: "apple company", name_ru: "apple company", name_en: "apple company", description_uz: "We coordinate all shipments through a large network of licensed Auto Shipping Carriers nationwide. All Carriers are legally required to be fully", description_ru: "We coordinate all shipments through a large network of licensed Auto Shipping Carriers nationwide. All Carriers are legally required to be fully", description_en: "We coordinate all shipments through a large network of licensed Auto Shipping Carriers nationwide. All Carriers are legally required to be fully" }
];