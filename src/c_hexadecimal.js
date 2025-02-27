//Cifrado Hexadecimal
function ci_hexadecimal(text) {
    let hex = '';
    for (let i = 0; i < text.length; i++) {
        hex += text.charCodeAt(i).toString(16);
    }
    return hex;
}

//Descifrado Hexadecimal
function dci_hexadecimal(hex) {
    let text = '';
    for (let i = 0; i < hex.length; i += 2) {
        text += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
    }
    return text;
}

export {ci_hexadecimal, dci_hexadecimal};