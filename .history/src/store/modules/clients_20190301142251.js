import webserviceInversiones from "../../helpers/repository";
const resource = "/panelclient";

export function clients(credentials){
    return new Promise((res, rej) => {
        webserviceInversiones.post(`${resource}`,credentials).then((response) => {
            res(response.data)
        }).catch((err) => {
            rej('Sin respuesta del servidor'+err)
        })
    });
}