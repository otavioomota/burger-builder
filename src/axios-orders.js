import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-bfe2e.firebaseio.com/'
});

export default instance;