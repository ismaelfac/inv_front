import Repository from "./repository";
const resource = "/auth/login";
export function login(credentials){
    return new Promise((res, rej) => {
        console.log(credentials)
        Repository.post(`${resource}`).then((response) => {
            console.log("entro al response")
            res(response.data)
        }).catch((err) => {
            console.log("error")
            rej('El email o paswword son incorrectos')
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