import {abcedario, abcedarioAtbash} from "./diccionario.js";

//Cifrado Atbash
function ci_atbash(text){
    let resultado = "";

    for (let i = 0; i < text.length; i++){
        let abcedarioIndex = abcedario.indexOf(text[i]);
        resultado += abcedarioAtbash[abcedarioIndex];
    }

    return resultado;
}

//Descifrado Atbash
function dci_atbash(text){
    let resultado = "";

    for (let i = 0; i < text.length; i++){
        let abcedarioAtbashIndex = abcedarioAtbash.indexOf(text[i]);
        resultado += abcedario[abcedarioAtbashIndex];
    }

    return resultado;
}

export {ci_atbash, dci_atbash};