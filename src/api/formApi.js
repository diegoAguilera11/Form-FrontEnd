/* eslint-disable eol-last */
/* eslint-disable quotes */
import axios from "axios";

const baseURL = 'http://192.168.0.19:8000/api';

const formApi = axios.create({baseURL});


export default formApi;