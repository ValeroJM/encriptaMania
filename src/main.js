import {ci_reverso, dci_reverso} from './c_reverso.js';

function encriptarAccBtn(){
    if(validateForm()){
        let textAreaStr = document.getElementById("mensajeTextarea").value;
        guardarMensajeTextarea();
        guardarSeleccionCifrado();

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
    let resultado;
    
    if (tipoCifrado === '1'){
        resultado = accion === 'encriptar' ? ci_reverso(mensajeOriginal) : dci_reverso(mensajeOriginal);
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
    if (!form.checkValidity()) {
        form.classList.add('was-validated');
        return false;
    }
    return true;
}

//Validador del formulario --- Empieza aquí: ---
document.addEventListener('DOMContentLoaded', function() {
    let forms = document.querySelectorAll('.needs-validation');

    Array.prototype.slice.call(forms).forEach(function(form) {
        form.addEventListener('submit', function(event) {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }

            form.classList.add('was-validated');
        }, false);
    });
});
//--- fin Validador del formulario ---

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
};

document.getElementById("encriptarBtn").addEventListener("click", encriptarAccBtn);
document.getElementById("desencriptarBtn").addEventListener("click", desencriptarAccBtn);
document.getElementById("limpiarEnc").addEventListener("click", limpiarYRecargar);
document.getElementById("limpiarDes").addEventListener("click", limpiarYRecargar);
document.getElementById("copiarBtnEnc").addEventListener("click", copiarAClipboardEnc);
document.getElementById("copiarBtnDes").addEventListener("click", copiarAClipboardDes);
document.getElementById("copiarBtnTextarea").addEventListener("click", copiarAClipboardTextarea);