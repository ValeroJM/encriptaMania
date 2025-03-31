import {abecedarioBifidoList} from './diccionario.js';

//Cifrado Playfair
function ci_playfair(text){
    let result = "";

    if(text.length % 2 !== 0){
        text += '=';
    }

    let textoEnParejas = splitStringEnParejas(text);

    for(let i = 0; i < textoEnParejas.length; i++){
        let letra1 = textoEnParejas[i].at(0);
        let letra2 = textoEnParejas[i].at(1);
        
        let letra1Coordenadas = findIndexRecursive(abecedarioBifidoList, letra1);
        let letra2Coordenadas = findIndexRecursive(abecedarioBifidoList, letra2);
        
        //Letras que comparten la misma fila
        if(letra1Coordenadas[0] === letra2Coordenadas[0]){
            if(letra1Coordenadas[1] + 1 > 10){
                letra1Coordenadas[1] = 0;
                letra2Coordenadas[1]++;
            }else if (letra2Coordenadas[1] + 1 > 10){
                letra2Coordenadas[1] = 0;
                letra1Coordenadas[1]++;
            }else{
                letra1Coordenadas[1]++;
                letra2Coordenadas[1]++;
            }
        //Letras que comparten la misma columna
        }else if(letra1Coordenadas[1] === letra2Coordenadas[1]){
            if(letra1Coordenadas[0] + 1 > 10){
                letra1Coordenadas[0] = 0;
                letra2Coordenadas[0]++;
            }else if (letra2Coordenadas[0] + 1 > 10){
                letra2Coordenadas[0] = 0;
                letra1Coordenadas[0]++;
            }else{
                letra1Coordenadas[0]++;
                letra2Coordenadas[0]++;
            }
        //Letras que NO comparten la fila ni columna
        }else{
            let letra1Columna = letra1Coordenadas[1];
            let letra2Columna = letra2Coordenadas[1];

            letra1Coordenadas[1] = letra2Columna;
            letra2Coordenadas[1] = letra1Columna;
        }

        result += abecedarioBifidoList[letra1Coordenadas[0]][letra1Coordenadas[1]];
        result += abecedarioBifidoList[letra2Coordenadas[0]][letra2Coordenadas[1]];
        
    }

    return result;
}

//Descifrado Playfair
function dci_playfair(text){
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

//Esta funcion devuelve un Array con las coordenadas de una letra que busquemos dentro de nuestro diccinario 
function findIndexRecursive(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        const item = arr[i];
        if (item === target) {
            return [i];
        }
        if (Array.isArray(item)) {
            const path = findIndexRecursive(item, target);
            if (path.length > 0) {
                return [i, ...path];
            }
        }
    }
    return [];
}

//Esta función toma un texto y lo divide en parejas de dos caracteres
function splitStringEnParejas(textOriginal) {
    const parejasArray = [];
    
    for (let i = 0; i < textOriginal.length; i += 2) {
      // Tomamos 2 caracteres en cada iteración
      parejasArray.push(textOriginal.slice(i, i + 2));
    }
    
    return parejasArray;
}
  

export {ci_playfair, dci_playfair};

//let test = 'kcckbd';
//let test = '0ww0mK';
//let test = 'czzc';
let test = 'kcckbd0ww0mKczzc'

console.log(ci_playfair(test));