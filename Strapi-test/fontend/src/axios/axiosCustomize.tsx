import axios from "axios";

const instance = axios.create({
    baseURL: 'https://hungcoder.site:3000/api/',
});
export default instance