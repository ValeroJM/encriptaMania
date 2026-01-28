//Cifrado 6x4
function ci_6x4(text){
    const segmentos = splitStringEnSegmentos(text, 24)
    let resultado = "";

    for (let i = 0; i < segmentos.length; i++){
        resultado += org6x4(segmentos[i]);
    }

    return resultado;
}

//Descifrado 6x4
function dci_6x4(text){
    const textList = text.split(separador);
    let resultado = "";
    for (let i = 0; i < textList.length-1; i++){
        let codigoIndex = codigoPolibio.indexOf(textList[i]);
        resultado += abecedarioArray[codigoIndex];
    }

    return resultado;
}

function splitStringEnSegmentos(str, n){
    let segmentos = [];
    for (let i = 0; i < str.length; i += n){
        segmentos.push(str.slice(i, i + n));
    }
    return segmentos;
}

function org6x4(segmento){
    let row0 = "";
    let row1 = "";
    let row2 = "";
    let row3 = "";
    let result = "";
    
    for (let i = 0; i < segmento.length; i++){
        if (i === 0 || i === 4 || i === 8 || i === 12 || i === 16 || i === 20){
            row0 += segmento[i];
        }else if (i === 1 || i === 5 || i === 9 || i === 13 || i === 17 || i === 21){
            row1 += segmento[i];
        }else if (i === 2 || i === 6 || i === 10 || i === 14 || i === 18 || i === 22){
            row2 += segmento[i];
        }else{
            row3 += segmento[i];
        }
    }

    result = row0 + row1 + row2 + row3;    
    
    return result; 
}

//export {ci_polibio, dci_polibio};

let text = "Example: In this example, we will split a string into segments of a specified length using a for loop, store the segments in an array, and return the array of segments."
//let text = "Example: oooooooooooooooo a"
//let result = splitStringEnSegmentos(text, 24);
let result = ci_6x4(text);
console.log("Texto Cifrado:", result);

/*
let org = org6x4(result[0]);
console.log("Texto Cifrado: " + org);
console.log("Tamaño texto: ", org.length);
*/
