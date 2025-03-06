// Cifrado Octal
function ci_octal(text) {
    let octal = '';
    for (let i = 0; i < text.length; i++) {
        octal += text.charCodeAt(i).toString(8).padStart(3, '0');
    }
    return octal;
}

// Descifrado Octal
function dci_octal(octal) {
    let text = '';
    for (let i = 0; i < octal.length; i += 3) {
        text += String.fromCharCode(parseInt(octal.substr(i, 3), 8));
    }
    return text;
}

export {ci_octal, dci_octal};