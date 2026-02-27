import {abcedario, abecesarioDellaPorta} from "./diccionario.js";

//Cifrado Della Porta
function ci_dellaPorta(text, password){
    let textIndexesArray= [];
    let passwordAbcIndexArray= [];
    let passIndx = 0;
    let result = "";

    for (let i = 0; i < text.length; i++){
        textIndexesArray.push(abcedario.indexOf(text[i]));
    }

    for (let i = 0; i < password.length; i++){
        passwordAbcIndexArray.push(selectorDeAbecedario(password[i]));
    }

    for (let i = 0; i < textIndexesArray.length; i++){
        let abcSeleccionado = abecesarioDellaPorta[passwordAbcIndexArray[passIndx]][0];
        result += abcSeleccionado.charAt(textIndexesArray[i]);
        passIndx = (passIndx < password.length-1) ? passIndx + 1 : 0;
    }

    return result;
}

//Descifrado Della Porta
function dci_dellaPorta(text, password){
    let textIndexesArray= [];
    let passwordAbcIndexArray= [];
    let passIndx = 0;
    let result = "";

    for (let i = 0; i < password.length; i++){
        passwordAbcIndexArray.push(selectorDeAbecedario(password[i]));
    }


    for (let i = 0; i < text.length; i++){
        let abcSeleccionado = abecesarioDellaPorta[passwordAbcIndexArray[passIndx]][0];
        textIndexesArray.push(abcSeleccionado.indexOf(text[i]));
        passIndx = (passIndx < password.length-1) ? passIndx + 1 : 0;
    }

    for (let i = 0; i < textIndexesArray.length; i++){
        result += abcedario.charAt(textIndexesArray[i]);
    }

    return result;
}

function selectorDeAbecedario (chr){
    let abcCode = 0;

    if (chr === 'A' || chr === 'a' || chr === 'B' || chr === 'b' || chr === 'á' || chr ==='Á' || chr === 'ä' || chr === 'Ä'){
        abcCode = 0;
    }else if (chr === 'C' || chr === 'c' || chr === 'D' || chr === 'd' || chr === 'K' || chr === 'k'){
        abcCode = 1;
    }else if (chr === 'E' || chr === 'e' || chr === 'F' || chr === 'f' || chr === 'é' || chr ==='É' || chr === 'ë'){
        abcCode = 2;
    }else if (chr === 'G' || chr === 'g' || chr === 'H' || chr === 'h'){
        abcCode = 3;
    }else if (chr === 'I' || chr === 'i' || chr === 'J' || chr === 'j' ||chr === 'L' || chr === 'l' || chr === 'í' || chr ==='Í' || chr === 'ï'){
        abcCode = 4;
    }else if (chr === 'M' || chr === 'n' || chr === 'N' || chr === 'n' || chr === 'Ñ' || chr === 'ñ'){
        abcCode = 5;
    }else if (chr === 'O' || chr === 'o' || chr === 'P' || chr === 'p' || chr === 'ó' || chr ==='Ó' || chr === 'ö' || chr === 'Ö'){
        abcCode = 6;
    }else if (chr === 'Q' || chr === 'q' || chr === 'R' || chr === 'r'){
        abcCode = 7;
    }else if (chr === 'S' || chr === 's' || chr === 'T' || chr === 't'){
        abcCode = 8;
    }else if (chr === 'V' || chr === 'v' || chr === 'X' || chr === 'x'){
        abcCode = 9;
    }else if (chr === 'Y' || chr === 'y' || chr === 'Z' || chr === 'z'){
        abcCode = 10;
    }else if (chr === 'U' || chr === 'u' || chr === 'ú' || chr ==='Ú' || chr === 'ü' || chr === 'Ü'){
        abcCode = 11;
    }else if (chr === 'W' || chr === 'w'){
        abcCode = 12;
    }

    return abcCode;
}

export {ci_dellaPorta, dci_dellaPorta};