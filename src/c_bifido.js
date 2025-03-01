import {abecedarioBifidoList} from './diccionario.js';

//Cifrado Bifido
function ci_bifido(text){
    let coordenadasOrignalList =[];
    let result ='';

    for (let i = 0; i < text.length; i++){
        let coordenadasLetra = encuentraCoordenadasDe(abecedarioBifidoList, text[i]);
        coordenadasOrignalList.push(coordenadasLetra[0]);
        coordenadasOrignalList.push(coordenadasLetra[1]);
    }

    let coodenadasBifidas = text.length-1;

    for (let i = 0; i < text.length; i++){
        
        result += abecedarioBifidoList[coordenadasOrignalList[i]][coordenadasOrignalList[coodenadasBifidas]];
        coodenadasBifidas++;
    }

    return result;
}

//Descifrado Bifido
function dci_bifido(text){
    let imparList = [];
    let parList = [];
    let result = "";

    for(let i = 0; i < text.length; i++){
        let coordenadasLetra = encuentraCoordenadasDe(abecedarioBifidoList, text[i]);
        imparList.push(coordenadasLetra[0]);
        parList.push(coordenadasLetra[1]);
    }

    let coordenadasTextoOriginal = imparList.concat(parList);

    for(let i = 0; i < coordenadasTextoOriginal.length; i++){
        if (i !== coordenadasTextoOriginal.length-1 ){
            result += abecedarioBifidoList[coordenadasTextoOriginal[i]][coordenadasTextoOriginal[i+1]];
            i = i + 1;
        }
    }

    return result;
}


// Esta funcion buscará las coordenadas de la letra que buscamos 
function encuentraCoordenadasDe(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        const item = arr[i];
        if (item === target) {
            return [i];
        }
        if (Array.isArray(item)) {
            const path = encuentraCoordenadasDe(item, target);
            if (path.length > 0) {
                return [i, ...path];
            }
        }
    }
    return [];
}

let msj = 'Esto es solo una prueba para saber si busca las coordenadas o no';

console.log('length texto original', msj.length);

let msjCifrado = ci_bifido(msj);
let msjDecifrado = dci_bifido(msjCifrado);

console.log('Mensaje cifrado:', msjCifrado);
console.log('length texto cifrado', msjCifrado.length);
console.log('Mensaje descifrado:', msjDecifrado);
console.log('Length Mensaje Decifrado:', msjDecifrado.length);