import axios from "axios";

const baseDomain = "http://127.0.0.1:8000";
const baseURL = `${baseDomain}/api`;
let headers = new Headers();

    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    headers.append('Origin','http://127.0.0.1:8000/api');
export default axios.create({
    headers: headers
});