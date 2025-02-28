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

console.log(msj.length);

console.log(ci_bifido(msj));