//Cifrado Binario
function ci_binario(text){
    return text.split('').map(function(char) {
        return char.charCodeAt(0).toString(2).padStart(8, '0');
    }).join(' ');
}

//Descifrado Binario
function dci_binario(text){
    return text.split(' ').map(function(bin) {
        return String.fromCharCode(parseInt(bin, 2));
    }).join('');
}

//Cifrado Binario Inverso
function ci_binario_inv(text){
    const textoBinario = ci_binario(text);
    let resultado = "";

    for (let i = 0; i < textoBinario.length; i++){
        if (textoBinario[i] === '1'){
            resultado += '0';
        }else if (textoBinario[i] === '0'){
            resultado += '1';
        }else{
            resultado += textoBinario[i];
        }
    }

    return resultado;
}

//Descifrado Binario Inverso
function dci_binario_inv(text){
    let textoBinario = "";

    for (let i = 0; i < text.length; i++){
        if (text[i] === '1'){
            textoBinario += '0';
        }else if (text[i] === '0'){
            textoBinario += '1';
        }else{
            textoBinario += text[i];
        }
    }

    return dci_binario(textoBinario);
}

export {ci_binario, dci_binario, ci_binario_inv, dci_binario_inv};