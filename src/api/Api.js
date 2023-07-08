import axios from 'axios';
import { COMMENTS_DATA_URL, FAQ_DATA_URL, HEADER_SLIDER_URL, NEWS_DATA_URL, ONE_SERVICE_DATA_URL, PARTNERS_DATA_URL, SERVICES_DATA_URL } from './ApiLink';

// header slider API

export const fetchHeaderSliderData = () => {
    return axios.get(HEADER_SLIDER_URL)
};

// services API

export const fetchServicesData = () => {
    return axios.get(SERVICES_DATA_URL)
};

// services API

export const fetchOneServiceData = () => {
    return axios.get(ONE_SERVICE_DATA_URL)
};

// news API

export const fetchNewsData = () => {
    return axios.get(NEWS_DATA_URL)
};

// FAQ API

export const fetchFaqsData = () => {
    return axios.get(FAQ_DATA_URL)
};

// comments API

export const fetchCommentsData = () => {
    return axios.get(COMMENTS_DATA_URL)
};

// partners API

export const fetchPartnersData = () => {
    return axios.get(PARTNERS_DATA_URL)
};