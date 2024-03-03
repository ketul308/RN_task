import axios from "axios";
import { URL } from "./DefaultURL";

const axiosObj = axios.create({
    baseURL: URL.base_url,
    headers: { 'Accept': 'application/json' }
});


export { axiosObj as APIs };
