import axios from "axios";

const instance = axios.create({
    baseURL: `https://food-express-pe2o.onrender.com`,
});

export default instance;
