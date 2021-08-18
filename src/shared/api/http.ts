import axios from "axios";
import { API_URLS, COMMON_CONSTS } from "shared/constants";

export const http = axios.create({
    baseURL: API_URLS.base,
    headers: { appKey: COMMON_CONSTS.appKey }
})