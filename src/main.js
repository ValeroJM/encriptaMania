import {ci_a1e2i3o4u5, dci_a1e2i3o4u5, ci_a1e2i3o4u5_v2, dci_a1e2i3o4u5_v2} from './c_a1e2i3o4u5.js';
import {ci_reverso, dci_reverso} from './c_reverso.js';
import {ci_zigzag, dci_zigzag} from './c_zigzag.js';
import {ci_cesar, dci_cesar} from './c_cesar.js';
import {transposicion5DigStr} from './diccionario.js';
import {ci_transposition, dci_transposition} from './c_transposition.js';
import {ci_binario, dci_binario, ci_binario_inv, dci_binario_inv} from './c_binario.js';
import {ci_atbash, dci_atbash} from './c_atbash.js';

function encriptarAccBtn(){
    if(validateForm()){
        let textAreaStr = document.getElementById("mensajeTextarea").value;
        guardarMensajeTextarea();
        guardarSeleccionCifrado();
        guardarClaveCesar();
        guardarSecuenciaDeTransposicion();

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

        //Llama la función de encriptarODesencriptar y lo guarda en el localStorage
        let resultadoDesencriptado = encriptarODesencriptar('desencriptar');
        localStorage.setItem("msjDesencriptado", resultadoDesencriptado);
        
        //Muestra la tarjeta de Desencriptado
        mostrarDesencriptarCard();

        //Muestra la tarjeta de Encriptado
        msjDesencriptado(resultadoDesencriptado);
    }
}

function encriptarODesencriptar(accion){
    let tipoCifrado = localStorage.getItem("seleccionCifrado");
    let mensajeOriginal = localStorage.getItem("mensajeTextarea");
    let claveCesarOriginal = parseInt(localStorage.getItem("cesarPassword"));
    let secuenciaTransposicion = parseInt(localStorage.getItem("transposicionSecuencia"));
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

function msjEncriptado(msjEncriptadoStr){
    let textEncriptarCard = document.getElementById("msjEncriptado");
    textEncriptarCard.innerHTML = msjEncriptadoStr;
}

function msjDesencriptado(msjDesencriptadoStr){
    let textDesencriptarCard = document.getElementById("msjDesencriptado");
    textDesencriptarCard.innerHTML = msjDesencriptadoStr;
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

function comprobarEncriptarCard() {
    let encriptarCard = document.getElementById("encriptarCard");
    if (localStorage.getItem("encriptarCardVisible") === "true") {
        encriptarCard.style.display = "block";
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

function validateForm() {
    let form = document.querySelector('.needs-validation');
    let inputCesar = form.querySelector('#cesarPassword');
    let inputTransposicion = form.querySelector('#transposicionSecuencia');
    if (!form.checkValidity() || (inputCesar.offsetParent !== null && (inputCesar.value < 1 || inputCesar.value > 120)) || (inputTransposicion.offsetParent !== null && ((String(inputTransposicion.value).length < 5 || String(inputTransposicion.value).length >= 6) || !transposicion5DigStr.includes(String(inputTransposicion.value))))) {
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
        let passwordCesarGrupoCampo = document.getElementById('passwordCesarGrupoCampo');
        let transposicionGrupoCampo = document.getElementById('transposicionGrupoCampo');
       
        // Esta función observa qué tipo de cifrado se selecciona en el menú dropdown y proveerá de los campos necesarios para hacer el cifrado
        document.getElementById('cifrado').addEventListener('change', function() {
            let encryptionType = this.value;
            if (encryptionType === '5') {
                passwordCesarGrupoCampo.style.display = 'block';
                inputCesar.setAttribute('required', 'required');
            } else if(encryptionType === '6'){
                transposicionGrupoCampo.style.display = 'block';
                inputTransposicion.setAttribute('required', 'required');
            }else {
                passwordCesarGrupoCampo.style.display = 'none';
                transposicionGrupoCampo.style.display = 'none';
                inputCesar.removeAttribute('required');
                inputTransposicion.removeAttribute('required');
            }
        });

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
        // Este otro comando recupera el valor del localStorage y lo pone en el imput
        document.getElementById("cesarPassword").value = savedClaveCesar;
    }

    // Recuperar el valor de la transposicionSecuencia
    let savedTransposicionSecuencia = localStorage.getItem("transposicionSecuencia");
    if (savedTransposicionSecuencia){
        // Este comando muestra el campo passwordCesarCrupoCampo
        document.getElementById('transposicionGrupoCampo').style.display = 'block';
        // Este otro comando recupera el valor del localStorage y lo pone en el imput
        document.getElementById("transposicionSecuencia").value = savedTransposicionSecuencia;
    }
};

document.getElementById("encriptarBtn").addEventListener("click", encriptarAccBtn);
document.getElementById("desencriptarBtn").addEventListener("click", desencriptarAccBtn);
document.getElementById("limpiarEnc").addEventListener("click", limpiarYRecargar);
document.getElementById("limpiarDes").addEventListener("click", limpiarYRecargar);
document.getElementById("copiarBtnEnc").addEventListener("click", copiarAClipboardEnc);
document.getElementById("copiarBtnDes").addEventListener("click", copiarAClipboardDes);
document.getElementById("copiarBtnTextarea").addEventListener("click", copiarAClipboardTextarea);