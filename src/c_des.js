//Cifrado DES
function ci_des(texto, clave) {
    return CryptoJS.DES.encrypt(texto, clave).toString();
}

//Descifrado DES
function dci_des(textoCifrado, clave) {
    const bytes = CryptoJS.DES.decrypt(textoCifrado, clave);
    return bytes.toString(CryptoJS.enc.Utf8);
}

export {ci_des, dci_des};