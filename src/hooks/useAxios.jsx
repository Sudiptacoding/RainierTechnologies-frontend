import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://rainiertechnologies.vercel.app',
});

const useAxios = () => {
    return instance;
};

export default useAxios;