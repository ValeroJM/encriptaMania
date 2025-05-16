import {abcedario, abcROT13} from "./diccionario.js";

//Cifrado Rot13
function ci_rot13(text){
    let resultado = "";

    for (let i = 0; i < text.length; i++){
        let abcedarioIndex = abcedario.indexOf(text[i]);
        resultado += abcROT13[abcedarioIndex];
    }

    return resultado;
}

//Descifrado Rot13
function dci_rot13(text){
    let resultado = "";

    for (let i = 0; i < text.length; i++){
        let abcedarioRot13Index = abcROT13.indexOf(text[i]);
        resultado += abcedario[abcedarioRot13Index];
    }

    return resultado;
}

export {ci_rot13, dci_rot13};