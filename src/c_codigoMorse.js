import {abcedarioSignoMorseList, codigoMorseList} from "./diccionario.js";

let separador = ' ';

//Cifrado Codigo Morse
function ci_codigoMorse(text){
    let resultado = "";

    for (let i = 0; i < text.length; i++){
        if(!abcedarioSignoMorseList.includes(text[i].toUpperCase()) && i === text.length-1){
            resultado += text[i].toUpperCase();
        }else if(!abcedarioSignoMorseList.includes(text[i].toUpperCase()) && i !== text.length-1){
            resultado += text[i].toUpperCase() + separador;
        }else{
            let abcMorseIndex = abcedarioSignoMorseList.indexOf(text[i].toUpperCase());
            if (i !== text.length-1){
                resultado += codigoMorseList[abcMorseIndex] + separador;
            }else{
                resultado += codigoMorseList[abcMorseIndex];
            }
        }        
    }

    return resultado;
}

//Descifrado Codigo Morse
function dci_codigoMorse(text){
    let textList = text.split(separador);
    let resultado = "";
    for (let i = 0; i < textList.length; i++){
        if(!codigoMorseList.includes(textList[i])){
            resultado += textList[i];
        }else{
            let abcMorseIndex = codigoMorseList.indexOf(textList[i]);
            resultado += abcedarioSignoMorseList[abcMorseIndex];
        }
    }

    return resultado;
}

export {ci_codigoMorse, dci_codigoMorse};