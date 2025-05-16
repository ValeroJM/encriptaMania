//Esteganografía
//Code from this website: https://hackernoon.com/steganography-how-to-hide-text-in-images-using-javascript
//Git Repo: https://github.com/Blaumaus/steganography

import {generaHashRapido} from './t_hash.js';
import {ci_hexadecimal} from './c_hexadecimal.js';
import {ci_vigenere, dci_vigenere} from './c_vigenere.js';

function ci_esteganografia(canvas, ctx, text) {
  //Datos de la imagen
  const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const data = imgData.data;
  let binaryText = "";

  if(text[0] === '#' && text.lastIndexOf('#')){
      let clave = text.substring(1, text.lastIndexOf("#"));
      let claveHexa = ci_hexadecimal(clave);
      let claveHashTotal = generaHashRapido(claveHexa) + generaHashRapido(clave);

      text = text.substring(text.lastIndexOf('#') + 1);
      text = ci_vigenere(text, claveHashTotal);
  }

  // Convert each character to binary and add a delimiter
  for (let i = 0; i < text.length; i++) {
    let binaryChar = text.charCodeAt(i).toString(2).padStart(8, "0");
    binaryText += binaryChar;
  }

  // Add the null character to signal the end of the message
  binaryText += "00000000";

  // Ensure we don't overflow the image data
  if (binaryText.length > data.length / 4) {
    alert("Text is too long to encode in this image.");
    return;
  }

  // Encode each bit of the binaryText into the image
  for (let i = 0; i < binaryText.length; i++) {
    data[i * 4] = (data[i * 4] & 0b11111110) | parseInt(binaryText[i]);
  }

  ctx.putImageData(imgData, 0, 0);
  return canvas.toDataURL();
}

function dci_esteganografia(canvas, ctx, text) {
  const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const data = imgData.data;
  let binaryText = "";
  let decodedText = "";
  let claveHashTotal = "";

  if(text[0] === '#' && text.lastIndexOf('#')){
      let clave = text.substring(1, text.lastIndexOf("#"));
      let claveHexa = ci_hexadecimal(clave);
      claveHashTotal = generaHashRapido(claveHexa) + generaHashRapido(clave);
  }

  // Extract binary data from the image
  for (let i = 0; i < data.length; i += 4) {
    binaryText += (data[i] & 1).toString();
  }

  // Convert binary data back to characters
  for (let i = 0; i < binaryText.length; i += 8) {
    let byte = binaryText.slice(i, i + 8);
    if (byte.length < 8) break; // Stop if the byte is incomplete
    let charCode = parseInt(byte, 2);
    if (charCode === 0) break; // Stop if we hit a null character
    decodedText += String.fromCharCode(charCode);
  }
  
  decodedText = claveHashTotal === "" ? decodedText : dci_vigenere(decodedText, claveHashTotal);
  return decodedText;
}

export {ci_esteganografia, dci_esteganografia};