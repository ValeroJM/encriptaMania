import {abecedarioArray, codigoPolibio} from "./diccionario.js";

const separador = ' ';

//Cifrado Polibio
function ci_polibio(text){
    const splitText = text.split('');
    let resultado = "";

    for (let i = 0; i < splitText.length; i++){
        let letraIndex = abecedarioArray.indexOf(splitText[i]);
        resultado += codigoPolibio[letraIndex] + separador;
    }

    return resultado;
}

//Descifrado Polibio
function dci_polibio(text){
    const textList = text.split(separador);
    let resultado = "";
    for (let i = 0; i < textList.length-1; i++){
        let codigoIndex = codigoPolibio.indexOf(textList[i]);
        resultado += abecedarioArray[codigoIndex];
    }

    return resultado;
}

export {ci_polibio, dci_polibio};