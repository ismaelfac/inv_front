import webserviceInversiones from "../../helpers/repository";
const resource = "/panelclient";

export function getSession(credentials){
    return new Promise((res, rej) => {
        console.log(credentials);
        webserviceInversiones.post(`${resource}`,credentials).then((response) => {
            res(response.data)
        }).catch((err) => {
            rej('Sin respuesta del servidor'+err)
        })
    });
}