import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-builder-5a04a.firebaseio.com/'
});

export default instance;