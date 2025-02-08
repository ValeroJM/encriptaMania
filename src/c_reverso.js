//Texto Reverso
function ci_reverso(text){
    let result = "";

    for (let i = text.length-1; i >= 0; i--){
        result += text[i];
    }

    return result;
}

//Descifrado Reverso
function dci_reverso(text){
    let result = "";

    for (let i = text.length-1; i >= 0; i--){
        result += text[i];
    }

    return result;
}

export {ci_reverso, dci_reverso};