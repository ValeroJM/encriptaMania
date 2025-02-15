import {abcedario} from "./diccionario.js";

//Cifrado Cesar
function ci_cesar(text, num){
    let newIdexes = [];
    let result = "";

    for (let i = 0; i < text.length; i++){
        newIdexes.push(abcedario.indexOf(text[i]) + num);
    }

    for (let i = 0; i < newIdexes.length; i++){
        result += newIdexes[i] > 120 ? abcedario[newIdexes[i] - 121] : abcedario[newIdexes[i]];
    }

    return result;
}

//Descifrado Cesar
function dci_cesar(text, num){
    let newIdexes = [];
    let result = "";

    for (let i = 0; i < text.length; i++){
        newIdexes.push(abcedario.indexOf(text[i]) - num);
    }

    for (let i = 0; i < newIdexes.length; i++){
        result += newIdexes[i] < 0 ? abcedario[newIdexes[i] + 121] : abcedario[newIdexes[i]];
    }

    return result;
}

export {ci_cesar, dci_cesar};