//Cifrado Transposicion 5
function ci_transposition(text, order){
    let colmnsArray = [];
    let orderArray = order.toString().split('').map(Number);
    let result = "";

    
    let colum0 ="";
    let colum1 ="";
    let colum2 ="";
    let colum3 ="";
    let colum4 ="";
    let indexColm = 0;

    for (let i = 0; i < text.length; i++){
        if (indexColm === 0){
            colum0 += text[i];
            indexColm ++;
        } else if (indexColm === 1){
            colum1 += text[i];
            indexColm ++;
        } else if (indexColm === 2){
            colum2 += text[i];
            indexColm ++;
        } else if (indexColm === 3){
            colum3 += text[i];
            indexColm ++;
        } else {
            colum4 += text[i];
            indexColm = 0;
        }
    }

    if (colum1.length < colum0.length){
        colum1 += '_';
    }
    if (colum2.length < colum0.length){
        colum2 += '_';
    }
    if (colum3.length < colum0.length){
        colum3 += '_';
    }
    if (colum4.length < colum0.length){
        colum4 += '_';
    }

    colmnsArray = [colum0, colum1, colum2, colum3, colum4];

    for (let i = 0; i < orderArray.length; i++){
        if (orderArray[i]-1 === 0){
            result += colmnsArray[0] + '__';
        } else if(orderArray[i]-1 === 1){
            result += colmnsArray[1] + '__';
        } else if(orderArray[i]-1 === 2){
            result += colmnsArray[2] + '__';
        } else if(orderArray[i]-1 === 3){
            result += colmnsArray[3] + '__';
        } else {
            result += colmnsArray[4] + '__';
        } 
    
    }
    return result;
}

//Descifrado Transposicion 5
function dci_transposition(text, order){
    let colmnsArray = text.toString().split('__');
    let orderArray = order.toString().split('').map(Number);
    let result = "";


    let colum0 ="";
    let colum1 ="";
    let colum2 ="";
    let colum3 ="";
    let colum4 ="";

    for (let i = 0; i < orderArray.length; i++){
        if (orderArray[i]-1 === 0){
            colum0 = colmnsArray[i];
        } else if (orderArray[i]-1 === 1){
            colum1 = colmnsArray[i];
        } else if (orderArray[i]-1 === 2){
            colum2 = colmnsArray[i];
        } else if (orderArray[i]-1 === 3){
            colum3 = colmnsArray[i];
        } else if (orderArray[i]-1 === 4){
            colum4 = colmnsArray[i];
        } 
    }

    if (colum0[0] === '_'){
        colum0 = colum0.substring(1);
    }

    if (colum1[0] === '_'){
        colum1 = colum1.substring(1);
    }

    if (colum2[0] === '_'){
        colum2 = colum2.substring(1);
    }

    if (colum3[0] === '_'){
        colum3 = colum3.substring(1);
    }

    if (colum4[0] === '_'){
        colum4 = colum4.substring(1);
    }

    if (colum0[colum0.length-1] === '_'){
        colum0 = colum0.substring(0, colum0.length - 1);
    }

    if (colum1[colum1.length-1] === '_'){
        colum1 = colum1.substring(0, colum1.length - 1);
    }

    if (colum2[colum2.length-1] === '_'){
        colum2 = colum2.substring(0, colum2.length - 1);
    }

    if (colum3[colum3.length-1] === '_'){
        colum3 = colum3.substring(0, colum3.length - 1);
    }

    if (colum4[colum4.length-1] === '_'){
        colum4 = colum4.substring(0, colum4.length - 1);
    }

    if (colum4[colum4.length-1] === '_'){
        colum4 = colum4.substring(0, colum4.length - 1);
    }

    if (colum1.length < colum0.length){
        colum1 += ' ';
    }

    if (colum2.length < colum0.length){
        colum2 += ' ';
    }

    if (colum3.length < colum0.length){
        colum3 += ' ';
    }

    if (colum4.length < colum0.length){
        colum4 += ' ';
    }
    
    for (let i = 0; i < colum0.length; i++){
        result += colum0[i] + colum1[i] + colum2[i] + colum3[i] + colum4[i];
    }
   
    return result.trim();
}

export {ci_transposition, dci_transposition};