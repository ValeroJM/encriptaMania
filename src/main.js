import {ci_a1e2i3o4u5, dci_a1e2i3o4u5, ci_a1e2i3o4u5_v2, dci_a1e2i3o4u5_v2} from './c_a1e2i3o4u5.js';
import {ci_reverso, dci_reverso} from './c_reverso.js';
import {ci_zigzag, dci_zigzag} from './c_zigzag.js';
import {ci_cesar, dci_cesar} from './c_cesar.js';
import {transposicion5DigStr} from './diccionario.js';
import {ci_transposition, dci_transposition} from './c_transposition.js';
import {ci_binario, dci_binario, ci_binario_inv, dci_binario_inv} from './c_binario.js';
import {ci_atbash, dci_atbash} from './c_atbash.js';
import {ci_leetSpeak, dci_leetSpeak} from './c_leetSpeak.js';
import {ci_abcDecimal, dci_abcDecimal} from './c_abcdarioDecimal.js';
import {ci_codigoMorse, dci_codigoMorse} from './c_codigoMorse.js';
import {ci_hexadecimal, dci_hexadecimal} from './c_hexadecimal.js';
import {ci_bifido, dci_bifido} from './c_bifido.js';
import {ci_octal, dci_octal} from './c_octal.js';
import {ci_vigenere, dci_vigenere} from './c_vigenere.js';
import {ci_playfair, dci_playfair, ci_playfairMurcielago, dci_playfairMurcielago} from './c_playfair.js';
import {ci_esteganografia, dci_esteganografia} from './c_esteganografia.js';
import {ci_rot13, dci_rot13} from './c_rot13.js';
import {ci_scytale, dci_scytale} from './c_scytale.js';
import {ci_des, dci_des} from './c_des.js';
import {ci_aes, dci_aes, ci_aes32Soft, dci_aes32soft} from './c_aes.js';
import {ci_gronsfeld, dci_gronsfeld} from './c_gronsfeld.js';
import {ci_baconian, dci_baconian,ci_baconianInverso, dci_baconianInverso} from './c_baconian.js';
import {ci_polibio, dci_polibio} from './c_polibio.js';
import {ci_6x4, dci_6x4} from './c_6x4.js';

function encriptarAccBtn(){
    if(validateForm()){
        let textAreaStr = document.getElementById("mensajeTextarea").value;
        guardarMensajeTextarea();
        guardarSeleccionCifrado();
        guardarClaveCesar();
        guardarSecuenciaDeTransposicion();
        guardarPasswordVigenere();
        guardarClaveScytale();
        guardarPasswordDES();
        guardarPasswordAES();
        guardarClaveGronsfeld();
        guardarPasswordAESSoft32();

        //Llama la función de encriptarODesencriptar y lo guarda en el localStorage
        let resultadoEncriptado = encriptarODesencriptar('encriptar');
        localStorage.setItem("msjEncriptado", resultadoEncriptado);
        
        //Muestra la tarjeta de Encriptado
        mostrarEncriptarCard();

        //Muestra el resultado en la tarjeta Encriptar
        msjEncriptado(resultadoEncriptado);
    }
}

function desencriptarAccBtn(){
    if(validateForm()){
        let textAreaStr = document.getElementById("mensajeTextarea").value;
        guardarMensajeTextarea();
        guardarSeleccionCifrado();
        guardarClaveCesar();
        guardarSecuenciaDeTransposicion();
        guardarPasswordVigenere();
        guardarClaveScytale();
        guardarPasswordDES();
        guardarPasswordAES();
        guardarClaveGronsfeld();
        guardarPasswordAESSoft32();

        //Llama la función de encriptarODesencriptar y lo guarda en el localStorage
        let resultadoDesencriptado = encriptarODesencriptar('desencriptar');
        localStorage.setItem("msjDesencriptado", resultadoDesencriptado);
        
        //Muestra la tarjeta de Desencriptado
        mostrarDesencriptarCard();

        //Muestra la tarjeta de Encriptado
        msjDesencriptado(resultadoDesencriptado);
    }
}

// Variables esteganografía
const imgInput = document.getElementById('imagenEsteganografia');
const canvas = document.getElementById('canvasPreview');
const ctx = canvas.getContext('2d');

function encriptarODesencriptar(accion){
    let tipoCifrado = localStorage.getItem("seleccionCifrado");
    let mensajeOriginal = localStorage.getItem("mensajeTextarea");
    let claveCesarOriginal = parseInt(localStorage.getItem("cesarPassword"));
    let secuenciaTransposicion = parseInt(localStorage.getItem("transposicionSecuencia"));
    let passwordVigenere = localStorage.getItem("vigenerePassword");
    let claveScytaleOriginal = parseInt(localStorage.getItem("scytalePassword"));
    let passwordDES = localStorage.getItem("desPassword");
    let passwordAES = localStorage.getItem("aesPassword");
    let claveGronsfeldOriginal = parseInt(localStorage.getItem("gronsfeldPassword"));
    let passwordAESSoft32 = localStorage.getItem("aesSoft32Password");
    let resultado;
    
    if (tipoCifrado === '1'){
        resultado = accion === 'encriptar' ? ci_a1e2i3o4u5(mensajeOriginal) : dci_a1e2i3o4u5(mensajeOriginal);
    }else if(tipoCifrado === '2'){
        resultado = accion === 'encriptar' ? ci_a1e2i3o4u5_v2(mensajeOriginal) : dci_a1e2i3o4u5_v2(mensajeOriginal);
    }else if(tipoCifrado === '3'){
        resultado = accion === 'encriptar' ? ci_reverso(mensajeOriginal) : dci_reverso(mensajeOriginal);
    }else if(tipoCifrado === '4'){
        resultado = accion === 'encriptar' ? ci_zigzag(mensajeOriginal) : dci_zigzag(mensajeOriginal);
    }else if(tipoCifrado === '5'){
        resultado = accion === 'encriptar' ? ci_cesar(mensajeOriginal, claveCesarOriginal) : dci_cesar(mensajeOriginal, claveCesarOriginal);
    }else if(tipoCifrado === '6'){
        resultado = accion === 'encriptar' ? ci_transposition(mensajeOriginal, secuenciaTransposicion) : dci_transposition(mensajeOriginal, secuenciaTransposicion);
    }else if(tipoCifrado === '7'){
        resultado = accion === 'encriptar' ? ci_binario(mensajeOriginal) : dci_binario(mensajeOriginal);
    }else if(tipoCifrado === '8'){
        resultado = accion === 'encriptar' ? ci_binario_inv(mensajeOriginal) : dci_binario_inv(mensajeOriginal);
    }else if(tipoCifrado === '9'){
        resultado = accion === 'encriptar' ? ci_atbash(mensajeOriginal) : dci_atbash(mensajeOriginal);
    }else if(tipoCifrado === '10'){
        resultado = accion === 'encriptar' ? ci_leetSpeak(mensajeOriginal) : dci_leetSpeak(mensajeOriginal);
    }else if(tipoCifrado === '11'){
        resultado = accion === 'encriptar' ? ci_abcDecimal(mensajeOriginal) : dci_abcDecimal(mensajeOriginal);
    }else if(tipoCifrado === '12'){
        resultado = accion === 'encriptar' ? ci_codigoMorse(mensajeOriginal) : dci_codigoMorse(mensajeOriginal);
    }else if(tipoCifrado === '13'){
        resultado = accion === 'encriptar' ? ci_hexadecimal(mensajeOriginal) : dci_hexadecimal(mensajeOriginal);
    }else if(tipoCifrado === '14'){
        resultado = accion === 'encriptar' ? ci_bifido(mensajeOriginal) : dci_bifido(mensajeOriginal);
    }else if(tipoCifrado === '15'){
        resultado = accion === 'encriptar' ? ci_octal(mensajeOriginal) : dci_octal(mensajeOriginal);
    }else if(tipoCifrado === '16'){
        resultado = accion === 'encriptar' ? btoa(mensajeOriginal) : atob(mensajeOriginal);
    }else if(tipoCifrado === '17'){
        resultado = accion === 'encriptar' ? ci_vigenere(mensajeOriginal, passwordVigenere) : dci_vigenere(mensajeOriginal, passwordVigenere);
    }else if(tipoCifrado === '18'){
        resultado = accion === 'encriptar' ? ci_playfair(mensajeOriginal) : dci_playfair(mensajeOriginal);
    }else if(tipoCifrado === '19'){
        resultado = accion === 'encriptar' ? ci_playfairMurcielago(mensajeOriginal) : dci_playfairMurcielago(mensajeOriginal);
    }else if(tipoCifrado === '20'){
        resultado = accion === 'encriptar' ? ci_esteganografia(canvas, ctx, mensajeOriginal) : dci_esteganografia(canvas, ctx, mensajeOriginal);
    }else if(tipoCifrado === '21'){
        resultado = accion === 'encriptar' ? ci_rot13(mensajeOriginal) : dci_rot13(mensajeOriginal);
    }else if(tipoCifrado === '22'){
        resultado = accion === 'encriptar' ? ci_scytale(mensajeOriginal, claveScytaleOriginal) : dci_scytale(mensajeOriginal, claveScytaleOriginal);
    }else if(tipoCifrado === '23'){
        resultado = accion === 'encriptar' ? ci_des(mensajeOriginal, passwordDES) : dci_des(mensajeOriginal, passwordDES);
    }else if(tipoCifrado === '24'){
        resultado = accion === 'encriptar' ? ci_aes(mensajeOriginal, passwordAES) : dci_aes(mensajeOriginal, passwordAES);
    }else if(tipoCifrado === '25'){
        resultado = accion === 'encriptar' ? ci_gronsfeld(mensajeOriginal, claveGronsfeldOriginal) : dci_gronsfeld(mensajeOriginal, claveGronsfeldOriginal);
    }else if(tipoCifrado === '26'){
        resultado = accion === 'encriptar' ? ci_aes32Soft(mensajeOriginal, passwordAESSoft32) : dci_aes32soft(mensajeOriginal, passwordAESSoft32);
    }else if(tipoCifrado === '27'){
        resultado = accion === 'encriptar' ? ci_baconian(mensajeOriginal) : dci_baconian(mensajeOriginal);
    }else if(tipoCifrado === '28'){
        resultado = accion === 'encriptar' ? ci_baconianInverso(mensajeOriginal) : dci_baconianInverso(mensajeOriginal);
    }else if(tipoCifrado === '29'){
        resultado = accion === 'encriptar' ? ci_polibio(mensajeOriginal) : dci_polibio(mensajeOriginal);
    }else if(tipoCifrado === '30'){
        resultado = accion === 'encriptar' ? ci_6x4(mensajeOriginal) : dci_6x4(mensajeOriginal);
    }
    return resultado;
}

function guardarMensajeTextarea() {
    let textAreaStr = document.getElementById("mensajeTextarea").value;
    localStorage.setItem("mensajeTextarea", textAreaStr);
}

function guardarSeleccionCifrado(){
    let cifradoSelect = document.getElementById("cifrado").value;
    localStorage.setItem("seleccionCifrado", cifradoSelect);
}

function guardarClaveCesar(){
    let claveCesar = document.getElementById("cesarPassword").value;
    localStorage.setItem("cesarPassword", claveCesar);
}

function guardarSecuenciaDeTransposicion(){
    let secuenciaDeTransposicion = document.getElementById("transposicionSecuencia").value;
    localStorage.setItem("transposicionSecuencia", secuenciaDeTransposicion);
}

function guardarPasswordVigenere(){
    let passwordVigenere = document.getElementById("vigenerePassword").value;
    localStorage.setItem("vigenerePassword", passwordVigenere);
}

function guardarClaveScytale(){
    let claveScytale = document.getElementById("scytalePassword").value;
    localStorage.setItem("scytalePassword", claveScytale);
}

function guardarPasswordDES(){
    let passwordDES = document.getElementById("desPassword").value;
    localStorage.setItem("desPassword", passwordDES);
}

function guardarPasswordAES(){
    let passwordAES = document.getElementById("aesPassword").value;
    localStorage.setItem("aesPassword", passwordAES);
}

function guardarClaveGronsfeld(){
    let claveGronsfeld = document.getElementById("gronsfeldPassword").value;
    localStorage.setItem("gronsfeldPassword", claveGronsfeld);
}

function guardarPasswordAESSoft32(){
    let passwordEASSoft32 = document.getElementById("aesSoft32Password").value;
    localStorage.setItem("aesSoft32Password", passwordEASSoft32);
}

function msjEncriptado(msjEncriptadoStr){
    let textEncriptarCard = document.getElementById("msjEncriptado");
    textEncriptarCard.textContent = msjEncriptadoStr;
}

function msjDesencriptado(msjDesencriptadoStr){
    let textDesencriptarCard = document.getElementById("msjDesencriptado");
    textDesencriptarCard.textContent = msjDesencriptadoStr;
}

function mostrarEncriptarCard() {
    let encriptarCard = document.getElementById("encriptarCard");
    let desencriptarCard = document.getElementById("desencriptarCard");

    desencriptarCard.style.display = "none"; // Asegurarse de que la otra tarjeta está oculta
    encriptarCard.style.display = "block";
    mostrarCopiBtnTextarea();

    localStorage.setItem("encriptarCardVisible", "true");
    localStorage.removeItem("desencriptarCardVisible");
}

function mostrarDesencriptarCard() {
    let desencriptarCard = document.getElementById("desencriptarCard");
    let encriptarCard = document.getElementById("encriptarCard");

    encriptarCard.style.display = "none"; // Asegurarse de que la otra tarjeta está oculta
    desencriptarCard.style.display = "block";
    mostrarCopiBtnTextarea();

    localStorage.setItem("desencriptarCardVisible", "true");
    localStorage.removeItem("encriptarCardVisible");
}

function mostrarCopiBtnTextarea(){
    let copiBtnTextare = document.getElementById("copiarBtnTextarea");
    let encriptarBtn = document.getElementById("encriptarBtn");
    let desencriptarBtn = document.getElementById("desencriptarBtn");
    
    copiBtnTextare.style.display = "block";
    encriptarBtn.style.display = "none"; //Ocultar boton de encriptado
    desencriptarBtn.style.display = "none"; //Ocultar boton de desencriptado
}

function mostrarGuardarBtnEncriptaCard(){
    let copiBtnEnc = document.getElementById("copiarBtnEnc");
    let guardarBtnEnc = document.getElementById("saveBtnEnc");

    guardarBtnEnc.style.display = "block";
    copiBtnEnc.style.display = "none"; // Oculta boton copiar
}

function mostrarImagenEncriptaCard(newURL){
    let mensajeEncriptadoParrafo = document.getElementById("msjEncriptado");
    let nuevaImagen = document.getElementById("nuevaImagen");
    nuevaImagen.src = newURL;

    nuevaImagen.style.display = "block";
    mensajeEncriptadoParrafo.style.display = "none"; // Oculta mensaje
}

function comprobarEncriptarCard() {
    let encriptarCard = document.getElementById("encriptarCard");
    let tipoCifrado = localStorage.getItem("seleccionCifrado");
    let imagenURL = localStorage.getItem("msjEncriptado");
    if (localStorage.getItem("encriptarCardVisible") === "true") {
        encriptarCard.style.display = "block";

        // Condicion para cambiar el botón guardar si usamos esteganografía
        if(tipoCifrado === '20'){
        mostrarGuardarBtnEncriptaCard();
        mostrarImagenEncriptaCard(imagenURL);
        }

        mostrarCopiBtnTextarea();
        let msjEncriptadoStr = localStorage.getItem("msjEncriptado");
        if (msjEncriptadoStr) {
            msjEncriptado(msjEncriptadoStr);
        }
    } else {
        encriptarCard.style.display = "none";
    }
}

function comprobarDesencriptarCard() {
    let desencriptarCard = document.getElementById("desencriptarCard");
    if (localStorage.getItem("desencriptarCardVisible") === "true") {
        desencriptarCard.style.display = "block";
        mostrarCopiBtnTextarea();
        let msjDesencriptadoStr = localStorage.getItem("msjDesencriptado");
        if (msjDesencriptadoStr) {
            msjDesencriptado(msjDesencriptadoStr);
        }
    } else {
        desencriptarCard.style.display = "none";
    }
}

function limpiarYRecargar() {
    let encriptarCard = document.getElementById("encriptarCard");
    let desencriptarCard = document.getElementById("desencriptarCard");

    // Eliminar los ítems de localStorage
    localStorage.removeItem("encriptarCardVisible");
    localStorage.removeItem("desencriptarCardVisible");
    localStorage.removeItem("msjEncriptado");
    localStorage.removeItem("msjDesencriptado");
    localStorage.removeItem("mensajeTextarea");
    localStorage.removeItem("seleccionCifrado");
    localStorage.removeItem("cesarPassword");
    localStorage.removeItem("transposicionSecuencia");
    localStorage.removeItem("vigenerePassword");
    localStorage.removeItem("scytalePassword");
    localStorage.removeItem("desPassword");
    localStorage.removeItem("aesPassword");
    localStorage.removeItem("gronsfeldPassword");
    localStorage.removeItem("aesSoft32Password");
        
    // Ocultar las tarjetas en la interfaz de usuario
    encriptarCard.style.display = "none";
    desencriptarCard.style.display = "none";

    // Recargar la página después de un breve retraso
    setTimeout(function() {
        location.reload();
    }, 100); // Un retraso corto para asegurar que los cambios se reflejan antes de la recarga
}

function copiarAClipboardEnc() {
    const txtEncriptado = localStorage.getItem("msjEncriptado");
    const copiBtn = document.getElementById("copiarBtnEnc");

    // Usar la API moderna de portapapeles
    navigator.clipboard.writeText(txtEncriptado).then(function() {
        // Mostrar mensaje de copiado en el botón
        const originalLabel = copiBtn.innerHTML;
        copiBtn.innerHTML = "¡Copiado!";
        
        setTimeout(function(){
            copiBtn.innerHTML = originalLabel;
        }, 1500); // Revertir etiqueta después de 1,5 segundos
    }).catch(function(err) {
        console.error('Error al copiar al portapapeles: ', err);
    });
}

function copiarAClipboardDes() {
    const txtEncriptado = localStorage.getItem("msjDesencriptado");
    const copiBtn = document.getElementById("copiarBtnDes");

    // Usar la API moderna de portapapeles
    navigator.clipboard.writeText(txtEncriptado).then(function() {
        // Mostrar mensaje de copiado en el botón
        const originalLabel = copiBtn.innerHTML;
        copiBtn.innerHTML = "¡Copiado!";
        
        setTimeout(function(){
            copiBtn.innerHTML = originalLabel;
        }, 1500); // Revertir etiqueta después de 1,5 segundos
    }).catch(function(err) {
        console.error('Error al copiar al portapapeles: ', err);
    });
}

function copiarAClipboardTextarea() {
    const txtTextarea = document.getElementById("mensajeTextarea").value;
    const copiBtn = document.getElementById("copiarBtnTextarea");

    // Usar la API moderna de portapapeles
    navigator.clipboard.writeText(txtTextarea).then(function() {
        // Mostrar mensaje de copiado en el botón
        const originalLabel = copiBtn.innerHTML;
        copiBtn.innerHTML = "¡Copiado!";
        
        setTimeout(function(){
            copiBtn.innerHTML = originalLabel;
        }, 1500); // Revertir etiqueta después de 1,5 segundos
    }).catch(function(err) {
        console.error('Error al copiar al portapapeles: ', err);
    });
}

function guardarImagenBtn(){
    const imagen = document.getElementById('nuevaImagen');
    const enlace = document.createElement('a');
    enlace.href = imagen.src;
    enlace.download = 'em_download.png'; // Nombre del archivo al descargar
    document.body.appendChild(enlace);
    enlace.click();
    document.body.removeChild(enlace);
}

function validateForm() {
    let form = document.querySelector('.needs-validation');
    let inputCesar = form.querySelector('#cesarPassword');
    let inputTransposicion = form.querySelector('#transposicionSecuencia');
    let inputVigenere = form.querySelector('#vigenerePassword');
    let inputScytale = form.querySelector('#scytalePassword');
    let inputDES = form.querySelector('#desPassword');
    let inputAES = form.querySelector('#aesPassword');
    let inputAESSoft32 = form.querySelector('#aesSoft32Password');

    if (!form.checkValidity() 
        || (inputCesar.offsetParent !== null && (inputCesar.value < 1 || inputCesar.value > 120)) 
        || (inputTransposicion.offsetParent !== null && ((String(inputTransposicion.value).length < 5 || String(inputTransposicion.value).length >= 6) 
        || !transposicion5DigStr.includes(String(inputTransposicion.value)))) 
        || (inputVigenere.offsetParent !== null && inputVigenere.value.trim().length === 0)
        || (inputScytale.offsetParent !== null && (inputScytale.value < 1 || inputScytale.value > 7))
        || (inputDES.offsetParent !== null && inputDES.value.trim().length === 0 && inputDES.value.trim().length !== 8)
        || (inputAES.offsetParent !== null && inputAES.value.trim().length === 0 && !(inputAES.value.trim().length === 16 || inputAES.value.trim().length === 24 || inputAES.value.trim().length === 32))
        || (inputAESSoft32.offsetParent !== null && inputAESSoft32.value.trim().length === 0)
        ) {
        form.classList.add('was-validated');
        return false;
    }
    return true;
}

// Validador del formulario --- Empieza aquí: ---
document.addEventListener('DOMContentLoaded', function() {
    'use strict'
    let forms = document.querySelectorAll('.needs-validation');

    Array.prototype.slice.call(forms).forEach(function(form) {
        let inputCesar = form.querySelector('#cesarPassword');
        let inputTransposicion = form.querySelector('#transposicionSecuencia');
        let inputVigenere = form.querySelector('#vigenerePassword');
        let inputImagenEsteganografia = form.querySelector('#imagenEsteganografia');
        let inputScytale = form.querySelector('#scytalePassword');
        let inputDES = form.querySelector('#desPassword');
        let inputAES = form.querySelector('#aesPassword');
        let inputGronsfeld = form.querySelector('#gronsfeldPassword');
        let inputAESSoft32 = form.querySelector('#aesSoft32Password');
        let passwordCesarGrupoCampo = document.getElementById('passwordCesarGrupoCampo');
        let transposicionGrupoCampo = document.getElementById('transposicionGrupoCampo');
        let passwordVigenereGrupoCampo = document.getElementById('passwordVigenereGrupoCampo');
        let imagenEsteganografiaGroupCampo = document.getElementById('imagenEsteganografiaGroupCampo');
        let canvasPreview = document.getElementById('canvasPreview');
        let passwordScytaleGrupoCampo = document.getElementById('passwordScytaleGrupoCampo');
        let passwordDESGrupoCampo = document.getElementById('passwordDESGrupoCampo');
        let passwordAESGrupoCampo = document.getElementById('passwordAESGrupoCampo');
        let passwordGronsfeldGrupoCampo = document.getElementById('passwordGronsfeldGrupoCampo');
        let passwordAESSoft32GrupoCampo = document.getElementById('passwordAESSoft32GrupoCampo');
       
        // Esta función observa qué tipo de cifrado se selecciona en el menú dropdown y proveerá de los campos necesarios para hacer el cifrado
        document.getElementById('cifrado').addEventListener('change', function() {
            let encryptionType = this.value;
            if (encryptionType === '5') {
                resetForm();
                passwordCesarGrupoCampo.style.display = 'block';
                inputCesar.setAttribute('required', 'required');
            }else if(encryptionType === '6'){
                resetForm();
                transposicionGrupoCampo.style.display = 'block';
                inputTransposicion.setAttribute('required', 'required');
            }else if(encryptionType === '17'){
                resetForm();
                passwordVigenereGrupoCampo.style.display = 'block';
                inputVigenere.setAttribute('required', 'required');
            }else if(encryptionType === '20'){
                resetForm();
                imagenEsteganografiaGroupCampo.style.display = 'block';
                inputImagenEsteganografia.setAttribute('required', 'required');
                //canvasPreview.style.display = 'block';
                
                // Esteganografía
                // Nuevo Event Listener para cargar la imagen en una Preview
                imgInput.addEventListener('change', (event) => {
                const file = event.target.files[0];
                if (file) {
                    const reader = new FileReader();
                    reader.onload = (e) => {
                    const img = new Image();
                    img.onload = () => {
                        // Verificar si la imagen supera los 1500 px en ancho o alto
                        const maxSize = 720;
                        let escala = 1; // Sin escala por defecto

                        if (img.width > maxSize || img.height > maxSize) {
                            // Calcular el factor de reducción manteniendo la proporción
                            escala = maxSize / Math.max(img.width, img.height);
                        }

                        canvas.width = img.width * escala;
                        canvas.height = img.height * escala;

                        ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas
                        ctx.drawImage(img, 0, 0, canvas.width, canvas.height); // Draw image
                    };
                    img.src = e.target.result;
                    };
                    reader.readAsDataURL(file);
                    }
                });
            }else if(encryptionType === '22'){
                resetForm();
                passwordScytaleGrupoCampo.style.display = 'block';
                inputScytale.setAttribute('required', 'required');
            }else if(encryptionType === '23'){
                resetForm();
                passwordDESGrupoCampo.style.display = 'block';
                inputDES.setAttribute('required', 'required');
            }else if(encryptionType === '24'){
                resetForm();
                passwordAESGrupoCampo.style.display = 'block';
                inputAES.setAttribute('required', 'required');
            }else if(encryptionType === '25'){
                resetForm();
                passwordGronsfeldGrupoCampo.style.display = 'block';
                inputGronsfeld.setAttribute('required', 'required');
            }else if(encryptionType === '26'){
                resetForm();
                passwordAESSoft32GrupoCampo.style.display = 'block';
                inputAESSoft32.setAttribute('required', 'required');
            }else {
                resetForm();
            }
        });

        //Este función Resetea todo el fomulario para encriptados con Password o campos extra
        function resetForm(){
            passwordCesarGrupoCampo.style.display = 'none';
            transposicionGrupoCampo.style.display = 'none';
            passwordVigenereGrupoCampo.style.display = 'none';
            imagenEsteganografiaGroupCampo.style.display = 'none';
            passwordScytaleGrupoCampo.style.display = 'none';
            passwordDESGrupoCampo.style.display = 'none';
            passwordAESGrupoCampo.style.display = 'none';
            passwordGronsfeldGrupoCampo.style.display = 'none';
            passwordAESSoft32GrupoCampo.style.display = 'none';
            inputCesar.removeAttribute('required');
            inputTransposicion.removeAttribute('required');
            inputVigenere.removeAttribute('required');
            inputImagenEsteganografia.removeAttribute('required');
            canvasPreview.style.display = 'none';
            inputScytale.removeAttribute('required');
            inputDES.removeAttribute('required');
            inputAES.removeAttribute('required');
            inputGronsfeld.removeAttribute('required');
            inputAESSoft32.removeAttribute('required');
        }

        // Verificar cada vez que se cambia el valor del campo de texto inputCesar
        inputCesar.addEventListener('input', function() {
            let claveCesar = inputCesar.value;
            if (claveCesar < 1 || claveCesar > 121) {
                inputCesar.classList.add('is-invalid');
                inputCesar.classList.remove('is-valid');
            } else {
                inputCesar.classList.remove('is-invalid');
                inputCesar.classList.add('is-valid');
            }
        });

        // Verificar cada vez que se cambia el valor del campo de texto inputTransposicion
        inputTransposicion.addEventListener('input', function() {
            let secuenciaTransposicion = inputTransposicion.value;
            let estaIncludioEnDiccionario = transposicion5DigStr.includes(String(secuenciaTransposicion));

            if ((String(secuenciaTransposicion).length < 5 || String(secuenciaTransposicion).length >= 6) || !estaIncludioEnDiccionario) {
                inputTransposicion.classList.add('is-invalid');
                inputTransposicion.classList.remove('is-valid');
            } else {
                inputTransposicion.classList.remove('is-invalid');
                inputTransposicion.classList.add('is-valid');
            }
        });

        // Verificar cada vez que se cambia el valor del campo de texto inputVigenere
        inputVigenere.addEventListener('input', function() {
            let passwordVigenere = inputVigenere.value;
            if (passwordVigenere.trim().length === 0) {
                inputVigenere.classList.add('is-invalid');
                inputVigenere.classList.remove('is-valid');
            } else {
                inputVigenere.classList.remove('is-invalid');
                inputVigenere.classList.add('is-valid');
            }
        });

        // Verificar cada vez que se cambia el valor del campo de texto inputScytale
        inputScytale.addEventListener('input', function() {
            let claveScytale = inputScytale.value;
            if (claveScytale < 1 || claveScytale > 7) {
                inputScytale.classList.add('is-invalid');
                inputScytale.classList.remove('is-valid');
            } else {
                inputScytale.classList.remove('is-invalid');
                inputScytale.classList.add('is-valid');
            }
        });

        // Verificar cada vez que se cambia el valor del campo de texto inputDES
        inputDES.addEventListener('input', function() {
            let passwordDES = inputDES.value;
            if (passwordDES.trim().length === 0 || passwordDES.trim().length !== 8) {
                inputDES.classList.add('is-invalid');
                inputDES.classList.remove('is-valid');
            } else {
                inputDES.classList.remove('is-invalid');
                inputDES.classList.add('is-valid');
            }
        });

        // Verificar cada vez que se cambia el valor del campo de texto inputAES
        inputAES.addEventListener('input', function() {
            let passwordAES = inputAES.value;
            if (passwordAES.trim().length === 0 || !(passwordAES.trim().length === 16 || passwordAES.trim().length === 24 || passwordAES.trim().length === 32)) {
                inputAES.classList.add('is-invalid');
                inputAES.classList.remove('is-valid');
            } else {
                inputAES.classList.remove('is-invalid');
                inputAES.classList.add('is-valid');
            }
        });

        // Verificar cada vez que se cambia el valor del campo de texto inputAESSoft32
        inputVigenere.addEventListener('input', function() {
            let passwordEASSoft32 = inputAESSoft32.value;
            if (passwordEASSoft32.trim().length === 0) {
                inputAESSoft32.classList.add('is-invalid');
                inputAESSoft32.classList.remove('is-valid');
            } else {
                inputAESSoft32.classList.remove('is-invalid');
                inputAESSoft32.classList.add('is-valid');
            }
        });
        
        // Validación personalizada antes de la validación de Bootstrap
        form.addEventListener('submit', function(event) {
            // Verificar la visibilidad y la validez del inputCesar
            if (inputCesar.offsetParent !== null && (inputCesar.value < 1 || inputCesar.value > 120)) {
                event.preventDefault();
                event.stopPropagation();
            }

            // Verificar la visibilidad y la validez del inputTransposicion
            if (inputTransposicion.offsetParent !== null && ((String(inputTransposicion.value).length < 5 || String(inputTransposicion.value).length >= 6) || !transposicion5DigStr.includes(String(inputTransposicion.value)))) {
                event.preventDefault();
                event.stopPropagation();
            }

            // Verificar la visibilidad y la validez del inputVigenere
            if (inputVigenere.offsetParent !== null && inputVigenere.value.trim().length === 0) {
                event.preventDefault();
                event.stopPropagation();
            }

            // Verificar si cualquier campo tiene la clase 'is-invalid'
            let invalidFields = form.querySelectorAll('.is-invalid');
            if (invalidFields.length > 0) {
                event.preventDefault();
                event.stopPropagation();
            }
            
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }
            
            // Verificar la visibilidad y la validez del inputScytale
            if (inputScytale.offsetParent !== null && (inputScytale.value < 1 || inputScytale.value > 7)) {
                event.preventDefault();
                event.stopPropagation();
            }

            // Verificar la visibilidad y la validez del inputDES
            if (inputDES.offsetParent !== null && inputDES.value.trim().length === 0 && inputDES.value.trim().length !== 8) {
                event.preventDefault();
                event.stopPropagation();
            }

            // Verificar la visibilidad y la validez del inputAES
            if (inputAES.offsetParent !== null && inputAES.value.trim().length === 0 && !(inputAES.value.trim().length === 16 || inputAES.value.trim().length === 24 || inputAES.value.trim().length === 32)) {
                event.preventDefault();
                event.stopPropagation();
            }

            // Verificar la visibilidad y la validez del inputAESSoft32
            if (inputAESSoft32.offsetParent !== null && inputAESSoft32.value.trim().length === 0) {
                event.preventDefault();
                event.stopPropagation();
            }

            form.classList.add('was-validated');
        }, false);
    });
});
// --- fin Validador del formulario ---

window.onload = function() {
    let encriptarCard = document.getElementById("encriptarCard");
    let desencriptarCard = document.getElementById("desencriptarCard");
    
    // Asegurarse de que ambas tarjetas están ocultas al cargar la página
    encriptarCard.style.display = "none";
    desencriptarCard.style.display = "none";
    comprobarEncriptarCard();
    comprobarDesencriptarCard();

    // Recuperar el valor del mensajeTextarea y establecerlo en el textarea
    let savedTextAreaStr = localStorage.getItem("mensajeTextarea");
    if (savedTextAreaStr) {
        document.getElementById("mensajeTextarea").value = savedTextAreaStr;
    }

    // Recuperar el valor del seleccionCifrado y establecerlo en el dropdown select
    let savedSelectCifrado = localStorage.getItem("seleccionCifrado");
    if (savedSelectCifrado){
        document.getElementById("cifrado").value = savedSelectCifrado;
    }

    // Recuperar el valor de la claveCesar
    let savedClaveCesar = localStorage.getItem("cesarPassword");
    if (savedClaveCesar){
        // Este comando muestra el campo passwordCesarCrupoCampo
        document.getElementById('passwordCesarGrupoCampo').style.display = 'block';
        // Este otro comando recupera el valor del localStorage y lo pone en el input
        document.getElementById("cesarPassword").value = savedClaveCesar;
    }

    // Recuperar el valor de la transposicionSecuencia
    let savedTransposicionSecuencia = localStorage.getItem("transposicionSecuencia");
    if (savedTransposicionSecuencia){
        // Este comando muestra el campo transposicionGrupoCampo
        document.getElementById('transposicionGrupoCampo').style.display = 'block';
        // Este otro comando recupera el valor del localStorage y lo pone en el input
        document.getElementById("transposicionSecuencia").value = savedTransposicionSecuencia;
    }

    // Recuperar el valor de la claveVigenere
    let savedPasswordVigenere = localStorage.getItem("vigenerePassword");
    if (savedPasswordVigenere){
        // Este comando muestra el campo passwordVigenereGrupoCampo
        document.getElementById('passwordVigenereGrupoCampo').style.display = 'block';
        // Este otro comando recupera el valor del localStorage y lo pone en el input
        document.getElementById("vigenerePassword").value = savedPasswordVigenere;
    }

    // Recuperar el valor de la claveScytale
    let savedClaveScytale = localStorage.getItem("scytalePassword");
    if (savedClaveScytale){
        // Este comando muestra el campo passwordScytaleCrupoCampo
        document.getElementById('passwordScytaleGrupoCampo').style.display = 'block';
        // Este otro comando recupera el valor del localStorage y lo pone en el input
        document.getElementById("scytalePassword").value = savedClaveScytale;
    }

    // Recuperar el valor de la claveDES
    let savedPasswordDES = localStorage.getItem("desPassword");
    if (savedPasswordDES){
        // Este comando muestra el campo passwordDESGrupoCampo
        document.getElementById('passwordDESGrupoCampo').style.display = 'block';
        // Este otro comando recupera el valor del localStorage y lo pone en el input
        document.getElementById("desPassword").value = savedPasswordDES;
    }
    
    // Recuperar el valor de la claveAES
    let savedPasswordAES = localStorage.getItem("aesPassword");
    if (savedPasswordAES){
        // Este comando muestra el campo passwordAESGrupoCampo
        document.getElementById('passwordAESGrupoCampo').style.display = 'block';
        // Este otro comando recupera el valor del localStorage y lo pone en el input
        document.getElementById("aesPassword").value = savedPasswordAES;
    }

    // Recuperar el valor de la claveScytale
    let savedClaveGronsfeld = localStorage.getItem("gronsfeldPassword");
    if (savedClaveGronsfeld){
        // Este comando muestra el campo passwordScytaleCrupoCampo
        document.getElementById('passwordGronsfeldGrupoCampo').style.display = 'block';
        // Este otro comando recupera el valor del localStorage y lo pone en el input
        document.getElementById("gronsfeldPassword").value = savedClaveGronsfeld;
    }

    // Recuperar el valor de la claveAESSoft32
    let savedPasswordAESSoft32 = localStorage.getItem("aesSoft32Password");
    if (savedPasswordAESSoft32){
        // Este comando muestra el campo passwordAESSoft32GrupoCampo
        document.getElementById('passwordAESSoft32GrupoCampo').style.display = 'block';
        // Este otro comando recupera el valor del localStorage y lo pone en el input
        document.getElementById("aesSoft32Password").value = savedPasswordAESSoft32;
    }
    
};

document.getElementById("encriptarBtn").addEventListener("click", encriptarAccBtn);
document.getElementById("desencriptarBtn").addEventListener("click", desencriptarAccBtn);
document.getElementById("limpiarEnc").addEventListener("click", limpiarYRecargar);
document.getElementById("limpiarDes").addEventListener("click", limpiarYRecargar);
document.getElementById("copiarBtnEnc").addEventListener("click", copiarAClipboardEnc);
document.getElementById("copiarBtnDes").addEventListener("click", copiarAClipboardDes);
document.getElementById("copiarBtnTextarea").addEventListener("click", copiarAClipboardTextarea);
document.getElementById("saveBtnEnc").addEventListener("click", guardarImagenBtn);