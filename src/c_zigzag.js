//Cifrado ZigZag
function ci_zigzag(text){
    let imparList = [];
    let parList = [];
    let result = "";

    for(let i = 0; i < text.length; i++){
        if (i % 2 === 0){
            imparList.push(text[i]);
        }
        if (i % 2 !== 0){
            parList.push(text[i]);
        }
    }

    for (let i = 0; i < imparList.length; i++){
        result += imparList[i];
    }

    result += '__';

    for (let i = 0; i < parList.length; i++){
        result += parList[i];
    }
    
    return result;
}

//Descifrado ZigZag
function dci_zigzag(text){
    let separator = text.indexOf("__");
    let imparList = [];
    let parList = [];
    let result = "";
    
    
    for (let i = 0; i < separator; i++){
        imparList.push(text[i]);
    }

    for (let i = separator + 2; i < text.length; i++){
        parList.push(text[i]);
    }

    if (imparList.length > parList.length){
        for (let i = 0; i < imparList.length; i++){
            if (i !== imparList.length-1){
                result += imparList[i];
                result += parList[i];
            }else{
                result += imparList[i];
            } 
        }
    }else{
        for (let i = 0; i < parList.length; i++){
            result += imparList[i];
            result += parList[i];
        }
    }

    return result;
}

export {ci_zigzag, dci_zigzag};