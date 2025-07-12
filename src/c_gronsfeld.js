import {abcedario} from "./diccionario.js";
import {abecedarioGronsfeld} from "./diccionario.js";

//Cifrado Gronsfeld
function ci_gronsfeld(text, password){
    let passwordStr = password.toString();
    let result = "";
    let passIndx = 0;

    for (let i = 0; i < text.length; i++){
        let passwordInt = parseInt(passwordStr[passIndx]);
        result += abecedarioGronsfeld[passwordInt][0].charAt(abcedario.indexOf(text[i]));
        passIndx = (passIndx < password.length-1) ? passIndx + 1 : 0;
    }

    return result;
}

//Descifrado Gronsfeld
function dci_gronsfeld(text, password){
    let passwordStr = password.toString();
    let result = "";
    let passIndx = 0;

    for (let i = 0; i < text.length; i++){
        let passwordInt = parseInt(passwordStr[passIndx]);
        result += abcedario.charAt(abecedarioGronsfeld[passwordInt][0].indexOf(text[i]));
        passIndx = (passIndx < password.length-1) ? passIndx + 1 : 0;
    }

    return result;
}

export {ci_gronsfeld, dci_gronsfeld};