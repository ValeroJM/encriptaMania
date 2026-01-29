//Cifrado 6x4
function ci_6x4(text){
    const segmentos = splitStringEnSegmentos(text, 24);
    let resultado = "";

    for (let i = 0; i < segmentos.length; i++){
        resultado += org6x4(segmentos[i]);
    }

    return resultado;
}

//Descifrado 6x4
function dci_6x4(text){
    const segmentos = splitStringEnSegmentos(text, 24);
    console.log(segmentos);
    let resultado = "";

    for (let i = 0; i < segmentos.length; i++){
        resultado += reorg6x4(segmentos[i]);
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

function reorg6x4(segmento){
    let result = "";
    
    for (let i = 0; i < segmento.length; i++){
        if (i === 0 || i === 6 || i === 12 || i === 18){
            result += segmento[i];
        }
    }

    for (let i = 0; i < segmento.length; i++){
        if (i === 1 || i === 7 || i === 13 || i === 19){
            result += segmento[i];
        }
    }

    for (let i = 0; i < segmento.length; i++){
        if (i === 2 || i === 8 || i === 14 || i === 20){
            result += segmento[i];
        }
    }

    for (let i = 0; i < segmento.length; i++){
        if (i === 3 || i === 9 || i === 15 || i === 21){
            result += segmento[i];
        }
    }

    for (let i = 0; i < segmento.length; i++){
        if (i === 4 || i === 10 || i === 16 || i === 22){
            result += segmento[i];
        }
    }

    for (let i = 0; i < segmento.length; i++){
        if (i === 5 || i === 11 || i === 17 || i === 23){
            result += segmento[i];
        }
    }
    
    return result; 
}

//export {ci_6x4, dci_6x4};

let org = "El rabo de San Roque se lo han contado porque Ramón Ramírez se lo ha llevadoa";
console.log("Org length:", org.length);

let cif = ci_6x4(org);
let des = dci_6x4(cif);

console.log("Texto cif:", cif);
console.log("Texto cif length:", cif.length);
console.log("Texto des:", des);
console.log("Texto des length:", des.length);