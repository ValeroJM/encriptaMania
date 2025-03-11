import {abcedario} from "./diccionario.js";

//Cifrado Vigenere
function ci_vigenere(text, password){
    let newIdexes = [];
    let result = "";
    let passIndx = 0;

    for (let i = 0; i < text.length; i++){
        newIdexes.push(abcedario.indexOf(text[i]) + abcedario.indexOf(password[passIndx]));
        passIndx = (passIndx < password.length-1) ? passIndx + 1 : 0;
    }

    for (let i = 0; i < newIdexes.length; i++){
        result += newIdexes[i] > 120 ? abcedario[newIdexes[i] - 121] : abcedario[newIdexes[i]];
    }

    return result;
}

//Descifrado Vigenere
function dci_vigenere(text, password){
    let newIdexes = [];
    let result = "";
    let passIndx = 0;

    for (let i = 0; i < text.length; i++){
        newIdexes.push(abcedario.indexOf(text[i]) - abcedario.indexOf(password[passIndx]));
        passIndx = (passIndx < password.length-1) ? passIndx + 1 : 0;
    }

    for (let i = 0; i < newIdexes.length; i++){
        result += newIdexes[i] < 0 ? abcedario[newIdexes[i] + 121] : abcedario[newIdexes[i]];
    }

    return result;
}

export {ci_vigenere, dci_vigenere};