import webserviceInversiones from "./repository";
const resource = "/auth/login";
export function login(credentials){
    return new Promise((res, rej) => {
        webserviceInversiones.post(`${resource}`,credentials).then((response) => {
            res(response.data)
        }).catch((err) => {
            rej('El email o paswword son incorrectos'+err)
        })
    });
}
export function getLocalUser(){
    const userStr = localStorage.getItem("user")
    if(!userStr){
        return null;
    }
    return JSON.parse(userStr)
}