//Cifrado AES
function ci_aes(texto, clave) {
    return CryptoJS.AES.encrypt(texto, clave).toString();
}

//Descifrado AES
function dci_aes(textoCifrado, clave) {
    const bytes = CryptoJS.AES.decrypt(textoCifrado, clave);
    return bytes.toString(CryptoJS.enc.Utf8);
}

export {ci_aes, dci_aes};