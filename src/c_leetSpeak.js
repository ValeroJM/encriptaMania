import {abcedario, abcedarioLeetSpeak} from "./diccionario.js";

//Cifrado Leet Speak
function ci_leetSpeak(text){
    let resultado = "";

    for (let i = 0; i < text.length; i++){
        let abcedarioIndex = abcedario.indexOf(text[i]);
        resultado += abcedarioLeetSpeak[abcedarioIndex];
    }

    return resultado;
}

//Descifrado Leet Speak
function dci_leetSpeak(text){
    let resultado = "";

    for (let i = 0; i < text.length; i++){
        let abcedarioLeetSpeakIndex = abcedarioLeetSpeak.indexOf(text[i]);
        resultado += abcedario[abcedarioLeetSpeakIndex];
    }

    return resultado;
}

export {ci_leetSpeak, dci_leetSpeak};