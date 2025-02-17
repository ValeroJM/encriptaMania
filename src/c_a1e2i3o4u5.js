//Texto a1e2i3o4u5
function ci_a1e2i3o4u5(text){
    let result = "";

    for (let i = 0; i < text.length; i++){
        if(text[i] === 'A' || text[i] === 'Á' || text[i] === 'a' || text[i] === 'á'){
            result += '1';
        }else if(text[i] === 'E' || text[i] === 'É' || text[i] === 'e' || text[i] === 'é'){
            result += '2';
        }else if(text[i] === 'I' || text[i] === 'Í' || text[i] === 'i' || text[i] === 'í'){
            result += '3';
        }else if(text[i] === 'O' || text[i] === 'Ó' || text[i] === 'o' || text[i] === 'ó'){
            result += '4';
        }else if(text[i] === 'U' || text[i] === 'Ú' || text[i] === 'Ü' || text[i] === 'u' || text[i] === 'ú' || text[i] === 'ü'){
            result += '5';
        }else if(text[i] === '0' || text[i] === '1' || text[i] === '2' || text[i] === '3' || text[i] === '4' || text[i] === '5' || text[i] === '6' || text[i] === '7' || text[i] === '8' || text[i] === '9'){
            result += '#'+ text[i];
        } else{
            result += text[i];
        }
    }

    return result;
}

//Descifrado a1e2i3o4u5
function dci_a1e2i3o4u5(text){
    let result = "";

    for (let i = 0; i < text.length; i++){
        if (text[i] === '#' && i !== text.length-1){
            if (text[i+1] === '0' || text[i+1] === '1' || text[i+1] === '2' || text[i+1] === '3' || text[i+1] === '4' || text[i+1] === '5' || text[i+1] === '6' || text[i+1] === '7' || text[i+1] === '8' || text[i+1] === '9'){
                result += text[i+1];
                i= i+1;
            }
        }else if (text[i] === '1'){
            result += 'a';
        }else if (text[i] === '2'){
            result += 'e';
        }else if (text[i] === '3'){
            result += 'i';
        }else if (text[i] === '4'){
            result += 'o';
        }else if (text[i] === '5'){
            result += 'u';
        }else{
            result += text[i];
        } 
    }

    return result;
}

let vocales = 'AÁaáEÉeéIÍiíOÓoóUÚÜuúü';

function numeroAleatorio(max){
    return Math.floor(Math.random() * max)
}

//Texto a1e2i3o4u5 - v2
function ci_a1e2i3o4u5_v2(text){
    let result = "";

    for (let i = 0; i < text.length; i++){
        if(text[i] === 'A' || text[i] === 'Á' || text[i] === 'a' || text[i] === 'á'){
            result += '1';
        }else if(text[i] === 'E' || text[i] === 'É' || text[i] === 'e' || text[i] === 'é'){
            result += '2';
        }else if(text[i] === 'I' || text[i] === 'Í' || text[i] === 'i' || text[i] === 'í'){
            result += '3';
        }else if(text[i] === 'O' || text[i] === 'Ó' || text[i] === 'o' || text[i] === 'ó'){
            result += '4';
        }else if(text[i] === 'U' || text[i] === 'Ú' || text[i] === 'Ü' || text[i] === 'u' || text[i] === 'ú' || text[i] === 'ü'){
            result += '5';
        }else if(text[i] === '0' || text[i] === '1' || text[i] === '2' || text[i] === '3' || text[i] === '4' || text[i] === '5' || text[i] === '6' || text[i] === '7' || text[i] === '8' || text[i] === '9'){
            result += '#'+ text[i];
        }else if(text[i] === ' '){
            let indexAlAzar = numeroAleatorio(21);
            result += vocales[indexAlAzar];
        }else{
            result += text[i];
        }
    }

    return result;
}

//Descifrado a1e2i3o4u5 - v2
function dci_a1e2i3o4u5_v2(text){
    let result = "";

    for (let i = 0; i < text.length; i++){
        if (vocales.includes(text[i])){
            result += ' ';

        }else if (text[i] === '#' && i !== text.length-1){
            if (text[i+1] === '0' || text[i+1] === '1' || text[i+1] === '2' || text[i+1] === '3' || text[i+1] === '4' || text[i+1] === '5' || text[i+1] === '6' || text[i+1] === '7' || text[i+1] === '8' || text[i+1] === '9'){
                result += text[i+1];
                i= i+1;
            }
        }else if (text[i] === '1'){
            result += 'a';
        }else if (text[i] === '2'){
            result += 'e';
        }else if (text[i] === '3'){
            result += 'i';
        }else if (text[i] === '4'){
            result += 'o';
        }else if (text[i] === '5'){
            result += 'u';
        }else{
            result += text[i];
        } 
    }

    return result;
}

export {ci_a1e2i3o4u5, dci_a1e2i3o4u5, ci_a1e2i3o4u5_v2, dci_a1e2i3o4u5_v2};