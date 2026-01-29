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

    if (segmento.length === 1 || segmento.length === 2 || segmento.length === 3 || segmento.length === 24){
        result += segmento[0];
        (segmento[6] !== undefined) ? result += segmento[6] : "";
        (segmento[12] !== undefined) ?result += segmento[12] : "";
        (segmento[18] !== undefined) ?result += segmento[18] : "";
        (segmento[1] !== undefined) ?result += segmento[1] : "";
        (segmento[7] !== undefined) ?result += segmento[7] : "";
        (segmento[13] !== undefined) ?result += segmento[13] : "";
        (segmento[19] !== undefined) ?result += segmento[19] : "";
        (segmento[2] !== undefined) ?result += segmento[2] : "";
        (segmento[8] !== undefined) ?result += segmento[8] : "";
        (segmento[14] !== undefined) ?result += segmento[14] : "";
        (segmento[20] !== undefined) ?result += segmento[20] : "";
        (segmento[3] !== undefined) ?result += segmento[3] : "";
        (segmento[9] !== undefined) ?result += segmento[9] : "";
        (segmento[15] !== undefined) ?result += segmento[15] : "";
        (segmento[21] !== undefined) ?result += segmento[21] : "";
        (segmento[4] !== undefined) ?result += segmento[4] : "";
        (segmento[10] !== undefined) ?result += segmento[10] : "";
        (segmento[16] !== undefined) ?result += segmento[16] : "";
        (segmento[22] !== undefined) ?result += segmento[22] : "";
        (segmento[5] !== undefined) ?result += segmento[5] : "";
        (segmento[11] !== undefined) ?result += segmento[11] : "";
        (segmento[17] !== undefined) ?result += segmento[17] : "";
        (segmento[23] !== undefined) ?result += segmento[23] : "";
    }else if (segmento.length === 5){
        result += segmento[0];
        result += segmento[2];
        result += segmento[3];
        result += segmento[4];
        result += segmento[1];
    }else if (segmento.length === 6){
        result += segmento[0];
        result += segmento[2];
        result += segmento[4];
        result += segmento[5];
        result += segmento[1];
        result += segmento[3];
    }else if (segmento.length === 7){
        result += segmento[0];
        result += segmento[2];
        result += segmento[4];
        result += segmento[6];
        result += segmento[1];
        result += segmento[3];
        result += segmento[5];
    }else if (segmento.length === 8){
        result += segmento[0];
        result += segmento[2];
        result += segmento[4];
        result += segmento[6];
        result += segmento[1];
        result += segmento[3];
        result += segmento[5];
        result += segmento[7];
    }else if (segmento.length === 9){
        result += segmento[0];
        result += segmento[3];
        result += segmento[5];
        result += segmento[7];
        result += segmento[1];
        result += segmento[4];
        result += segmento[6];
        result += segmento[8];
    }else if (segmento.length === 10){
        result += segmento[0];
        result += segmento[3];
        result += segmento[6];
        result += segmento[8];
        result += segmento[1];
        result += segmento[4];
        result += segmento[7];
        result += segmento[9];
        result += segmento[2];
        result += segmento[5];
    }else if (segmento.length === 11){
        result += segmento[0];
        result += segmento[3];
        result += segmento[6];
        result += segmento[9];
        result += segmento[1];
        result += segmento[4];
        result += segmento[7];
        result += segmento[10];
        result += segmento[2];
        result += segmento[5];
        result += segmento[8];
    }else if (segmento.length === 12){
        result += segmento[0];
        result += segmento[3];
        result += segmento[6];
        result += segmento[9];
        result += segmento[1];
        result += segmento[4];
        result += segmento[7];
        result += segmento[10];
        result += segmento[2];
        result += segmento[5];
        result += segmento[8];
        result += segmento[11];
    }else if (segmento.length === 13){
        result += segmento[0];
        result += segmento[4];
        result += segmento[7];
        result += segmento[10];
        result += segmento[1];
        result += segmento[5];
        result += segmento[8];
        result += segmento[11];
        result += segmento[2];
        result += segmento[6];
        result += segmento[9];
        result += segmento[12];
        result += segmento[3];
    }else if (segmento.length === 14){
        result += segmento[0];
        result += segmento[4];
        result += segmento[8];
        result += segmento[11];
        result += segmento[1];
        result += segmento[5];
        result += segmento[9];
        result += segmento[12];
        result += segmento[2];
        result += segmento[6];
        result += segmento[10];
        result += segmento[13];
        result += segmento[3];
        result += segmento[7];
    }else if (segmento.length === 15){
        result += segmento[0];
        result += segmento[4];
        result += segmento[8];
        result += segmento[12];
        result += segmento[1];
        result += segmento[5];
        result += segmento[9];
        result += segmento[13];
        result += segmento[2];
        result += segmento[6];
        result += segmento[10];
        result += segmento[14];
        result += segmento[3];
        result += segmento[7];
        result += segmento[11];
    }else if (segmento.length === 16){
        result += segmento[0];
        result += segmento[4];
        result += segmento[8];
        result += segmento[12];
        result += segmento[1];
        result += segmento[5];
        result += segmento[9];
        result += segmento[13];
        result += segmento[2];
        result += segmento[6];
        result += segmento[10];
        result += segmento[14];
        result += segmento[3];
        result += segmento[7];
        result += segmento[11];
        result += segmento[15];
    }else if (segmento.length === 17){
        result += segmento[0];
        result += segmento[4];
        result += segmento[8];
        result += segmento[12];
        result += segmento[1];
        result += segmento[5];
        result += segmento[9];
        result += segmento[13];
        result += segmento[2];
        result += segmento[6];
        result += segmento[10];
        result += segmento[14];
        result += segmento[3];
        result += segmento[7];
        result += segmento[11];
        result += segmento[15];
    }else if (segmento.length === 18){
        result += segmento[0];
        result += segmento[5];
        result += segmento[9];
        result += segmento[13];
        result += segmento[1];
        result += segmento[6];
        result += segmento[10];
        result += segmento[14];
        result += segmento[2];
        result += segmento[7];
        result += segmento[11];
        result += segmento[15];
        result += segmento[3];
        result += segmento[8];
        result += segmento[12];
        result += segmento[16];
        result += segmento[4];
    }else if (segmento.length === 19){
        result += segmento[0];
        result += segmento[5];
        result += segmento[10];
        result += segmento[14];
        result += segmento[1];
        result += segmento[6];
        result += segmento[11];
        result += segmento[15];
        result += segmento[2];
        result += segmento[7];
        result += segmento[12];
        result += segmento[16];
        result += segmento[3];
        result += segmento[8];
        result += segmento[13];
        result += segmento[17];
        result += segmento[4];
        result += segmento[9];
    }else if (segmento.length === 20){
        result += segmento[0];
        result += segmento[5];
        result += segmento[10];
        result += segmento[15];
        result += segmento[1];
        result += segmento[6];
        result += segmento[11];
        result += segmento[16];
        result += segmento[2];
        result += segmento[7];
        result += segmento[12];
        result += segmento[17];
        result += segmento[3];
        result += segmento[8];
        result += segmento[13];
        result += segmento[18];
        result += segmento[4];
        result += segmento[9];
        result += segmento[14];
    }else if (segmento.length === 21){
        result += segmento[0];
        result += segmento[5];
        result += segmento[10];
        result += segmento[15];
        result += segmento[1];
        result += segmento[6];
        result += segmento[11];
        result += segmento[16];
        result += segmento[2];
        result += segmento[7];
        result += segmento[12];
        result += segmento[17];
        result += segmento[3];
        result += segmento[8];
        result += segmento[13];
        result += segmento[18];
        result += segmento[4];
        result += segmento[9];
        result += segmento[14];
        result += segmento[19];
    }else if (segmento.length === 22){
        result += segmento[0];
        result += segmento[6];
        result += segmento[11];
        result += segmento[16];
        result += segmento[1];
        result += segmento[7];
        result += segmento[12];
        result += segmento[17];
        result += segmento[2];
        result += segmento[8];
        result += segmento[13];
        result += segmento[18];
        result += segmento[3];
        result += segmento[9];
        result += segmento[14];
        result += segmento[19];
        result += segmento[4];
        result += segmento[10];
        result += segmento[15];
        result += segmento[20];
        result += segmento[5];
    }else if (segmento.length === 23){
        result += segmento[0];
        result += segmento[6];
        result += segmento[12];
        result += segmento[17];
        result += segmento[1];
        result += segmento[7];
        result += segmento[13];
        result += segmento[18];
        result += segmento[2];
        result += segmento[8];
        result += segmento[14];
        result += segmento[14];
        result += segmento[3];
        result += segmento[9];
        result += segmento[15];
        result += segmento[20];
        result += segmento[4];
        result += segmento[10];
        result += segmento[16];
        result += segmento[21];
        result += segmento[5];
        result += segmento[11];
    }
    
    return result; 
}

export {ci_6x4, dci_6x4};