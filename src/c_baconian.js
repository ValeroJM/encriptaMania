import {abcedario, abcedarioBaconian} from "./diccionario.js";

//Cifrado Baconian
function ci_baconian(text){
    let resultado = "";

    for (let i = 0; i < text.length; i++){
        let abcedarioIndex = abcedario.indexOf(text[i]);
        resultado += abcedarioBaconian[abcedarioIndex];
    }

    return resultado;
}

//Cifrado Baconian Inverso
function ci_baconianInverso(text){
    let resultado = "";
    let valoresOriginales = "";

    for (let i = 0; i < text.length; i++){
        let abcedarioIndex = abcedario.indexOf(text[i]);
        valoresOriginales += abcedarioBaconian[abcedarioIndex];
    }

    for (let i = 0; i < valoresOriginales.length; i++){
        if(valoresOriginales[i] === '1'){
            resultado += '0';
        }else{
            resultado += '1';
        }
    }

    return resultado;
}

//Descifrado Baconian
function dci_baconian(text){
    let resultado = "";
    let grupos7CaracteresList = [];

    for (let i = 0; i < text.length; i += 7) {
    grupos7CaracteresList.push(text.substring(i, i + 7));
    }

    for (let i = 0; i < grupos7CaracteresList.length; i++){
        let abcedarioBaconianIndex = abcedarioBaconian.indexOf(grupos7CaracteresList[i]);
        resultado += abcedario[abcedarioBaconianIndex];
    }

    return resultado;
}

//Descifrado Baconian Inverso
function dci_baconianInverso(text){
    let textoInvertido = "";
    let resultado = "";
    let grupos7CaracteresList = [];

    for (let i = 0; i < text.length; i++){
        if(text[i] === '1'){
            textoInvertido += '0';
        }else{
            textoInvertido += '1';
        }
    }

    for (let i = 0; i < textoInvertido.length; i += 7) {
    grupos7CaracteresList.push(textoInvertido.substring(i, i + 7));
    }

    for (let i = 0; i < grupos7CaracteresList.length; i++){
        let abcedarioBaconianIndex = abcedarioBaconian.indexOf(grupos7CaracteresList[i]);
        resultado += abcedario[abcedarioBaconianIndex];
    }

    return resultado;
}

export {ci_baconian, dci_baconian,ci_baconianInverso, dci_baconianInverso};