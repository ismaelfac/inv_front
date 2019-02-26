import axios from "axios";

const baseDomain = "http://127.0.0.1:8000";
const baseURL = `${baseDomain}/api`;
let headers = new Headers();

    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    headers.append('Authorization', 'Basic ' + base64.encode(username + ":" +  password));
    headers.append('Origin','http://localhost:3000');
export default axios.create({
    baseURL,
    headers: headers
});