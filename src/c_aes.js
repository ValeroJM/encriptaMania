import {generaHashRapido32} from './t_hash.js';

//Cifrado AES
function ci_aes(texto, clave) {
    return CryptoJS.AES.encrypt(texto, clave).toString();
}

//Descifrado AES
function dci_aes(textoCifrado, clave) {
    const bytes = CryptoJS.AES.decrypt(textoCifrado, clave);
    return bytes.toString(CryptoJS.enc.Utf8);
}

//Cifrado AES32_Soft
function ci_aes32Soft(texto, clave) {
    let claveBase64 = btoa(clave)
    let claveSoft32 = generaHashRapido32(claveBase64);
    return ci_aes(texto, claveSoft32);
}

//Descifrado AES32_Soft
function dci_aes32soft(textoCifrado, clave) {
    let claveBase64 = btoa(clave)
    let claveSoft32 = generaHashRapido32(claveBase64);
    return dci_aes(textoCifrado, claveSoft32);
}
export {ci_aes, dci_aes, ci_aes32Soft, dci_aes32soft};