import {abcedarioList, abcedarioDecimalList} from "./diccionario.js";

let separador = ' ';

//Cifrado AbcDecimal
function ci_abcDecimal(text){
    let resultado = "";

    for (let i = 0; i < text.length; i++){
        if(!abcedarioList.includes(text[i]) && i === text.length-1){
            resultado += text[i];
        }else if(!abcedarioList.includes(text[i]) && i !== text.length-1){
            resultado += text[i] + separador;
        }else{
            let abcDecimalIndex = abcedarioList.indexOf(text[i]);
            if (i !== text.length-1){
                resultado += abcedarioDecimalList[abcDecimalIndex] + separador;
            }else{
                resultado += abcedarioDecimalList[abcDecimalIndex];
            }
        }        
    }

    return resultado;
}

//Descifrado AbcDecimal
function dci_abcDecimal(text){
    let textList = text.split(separador);
    let resultado = "";
    for (let i = 0; i < textList.length; i++){
        if(!abcedarioDecimalList.includes(textList[i])){
            resultado += textList[i];
        }else{
            let abcDecimalIndex = abcedarioDecimalList.indexOf(textList[i]);
            resultado += abcedarioList[abcDecimalIndex];
        }
    }

    return resultado;
}

export {ci_abcDecimal, dci_abcDecimal};