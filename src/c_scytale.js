//Cifrado Scytale
function ci_scytale(text, diameter) {
    const rows = diameter;
    const cols = Math.ceil(text.length / rows);
    text = text.padEnd(rows * cols, ' ');

    let matrix = Array(rows).fill(null).map(() => Array(cols));
    let index = 0;

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
        matrix[i][j] = text[index++];
        }
    }

    let encryptedText = '';
    for (let j = 0; j < cols; j++) {
        for (let i = 0; i < rows; i++) {
        encryptedText += matrix[i][j];
        }
    }

return encryptedText;
}

//Descifrado Scytale
function dci_scytale(encryptedText, diameter) {
    const rows = diameter;
    const cols = encryptedText.length / rows;

    let matrix = Array(rows).fill(null).map(() => Array(cols));
    let index = 0;

    for (let j = 0; j < cols; j++) {
        for (let i = 0; i < rows; i++) {
            matrix[i][j] = encryptedText[index++];
        }
    }

    let decryptedText = '';
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            decryptedText += matrix[i][j];
        }
    }
return decryptedText.trimEnd();
}

export {ci_scytale, dci_scytale};  