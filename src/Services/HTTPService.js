import axios from "axios";
import logger from './LogService';
import { reject } from "lodash";

axios.interceptors.response.use(null, error => {
    const diharapkanerror = 
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

    if(!diharapkanerror) {
        logger.log(error);
    }

    return Promise.reject(error)
});

export default {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete
}