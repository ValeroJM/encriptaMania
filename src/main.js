function encriptarFtn(){
    let textAreaStr = document.getElementById("mensajeTextarea").value;
    guardarMensajeTextarea();
    localStorage.setItem("msjEncriptado", textAreaStr);
    mostrarEncriptarCard();
    msjEncriptado(textAreaStr);
}

function desencriptarFtn(){
    let textAreaStr = document.getElementById("mensajeTextarea").value;
    guardarMensajeTextarea();
    localStorage.setItem("msjDesencriptado", textAreaStr);
    mostrarDesencriptarCard();
    msjDesencriptado(textAreaStr);
}

function guardarMensajeTextarea() {
    let textAreaStr = document.getElementById("mensajeTextarea").value;
    localStorage.setItem("mensajeTextarea", textAreaStr);
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
    //Botones
    let copiBtnTextare = document.getElementById("copiarBtnTextarea");
    let encriptarBtn = document.getElementById("encriptarBtn");
    let desencriptarBtn = document.getElementById("desencriptarBtn");

    desencriptarCard.style.display = "none"; // Asegurarse de que la otra tarjeta está oculta
    encriptarCard.style.display = "block";
    copiBtnTextare.style.display = "block";
    encriptarBtn.style.display = "none"; //Ocultar boton de encriptado
    desencriptarBtn.style.display = "none"; //Ocultar boton de desencriptado

    localStorage.setItem("encriptarCardVisible", "true");
    localStorage.removeItem("desencriptarCardVisible");
}

function mostrarDesencriptarCard() {
    let desencriptarCard = document.getElementById("desencriptarCard");
    let encriptarCard = document.getElementById("encriptarCard");
    //Botones
    let copiBtnTextare = document.getElementById("copiarBtnTextarea");
    let encriptarBtn = document.getElementById("encriptarBtn");
    let desencriptarBtn = document.getElementById("desencriptarBtn");

    encriptarCard.style.display = "none"; // Asegurarse de que la otra tarjeta está oculta
    desencriptarCard.style.display = "block";
    copiBtnTextare.style.display = "block";
    encriptarBtn.style.display = "none"; //Ocultar boton de encriptado
    desencriptarBtn.style.display = "none"; //Ocultar boton de desencriptado

    localStorage.setItem("desencriptarCardVisible", "true");
    localStorage.removeItem("encriptarCardVisible");
}

function comprobarEncriptarCard() {
    let encriptarCard = document.getElementById("encriptarCard");
    if (localStorage.getItem("encriptarCardVisible") === "true") {
        encriptarCard.style.display = "block";
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
};

document.getElementById("encriptarBtn").addEventListener("click", encriptarFtn);
document.getElementById("desencriptarBtn").addEventListener("click", desencriptarFtn);
document.getElementById("limpiarEnc").addEventListener("click", limpiarYRecargar);
document.getElementById("limpiarDes").addEventListener("click", limpiarYRecargar);
document.getElementById("copiarBtnEnc").addEventListener("click", copiarAClipboardEnc);
document.getElementById("copiarBtnDes").addEventListener("click", copiarAClipboardDes);
document.getElementById("copiarBtnTextarea").addEventListener("click", copiarAClipboardTextarea);