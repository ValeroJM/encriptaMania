function encriptarFtn(){
    var textAreaStr = document.getElementById("mensajeTextarea").value;
    guardarMensajeTextarea();
    localStorage.setItem("msjEncriptado", textAreaStr);
    mostrarEncriptarCard();
    msjEncriptado(textAreaStr);
}

function desencriptarFtn(){
    var textAreaStr = document.getElementById("mensajeTextarea").value;
    guardarMensajeTextarea();
    localStorage.setItem("msjDesencriptado", textAreaStr);
    mostrarDesencriptarCard();
    msjDesencriptado(textAreaStr);
}

function guardarMensajeTextarea() {
    var textAreaStr = document.getElementById("mensajeTextarea").value;
    localStorage.setItem("mensajeTextarea", textAreaStr);
}

function msjEncriptado(msjEncriptadoStr){
    var textEncriptarCard = document.getElementById("msjEncriptado");
    textEncriptarCard.innerHTML = msjEncriptadoStr;
}

function msjDesencriptado(msjDesencriptadoStr){
    var textDesencriptarCard = document.getElementById("msjDesencriptado");
    textDesencriptarCard.innerHTML = msjDesencriptadoStr;
}

function mostrarEncriptarCard() {
    var encriptarCard = document.getElementById("encriptarCard");
    var desencriptarCard = document.getElementById("desencriptarCard");
    desencriptarCard.style.display = "none"; // Asegurarse de que la otra tarjeta está oculta
    encriptarCard.style.display = "block";
    localStorage.setItem("encriptarCardVisible", "true");
    localStorage.removeItem("desencriptarCardVisible");
}

function mostrarDesencriptarCard() {
    var desencriptarCard = document.getElementById("desencriptarCard");
    var encriptarCard = document.getElementById("encriptarCard");
    encriptarCard.style.display = "none"; // Asegurarse de que la otra tarjeta está oculta
    desencriptarCard.style.display = "block";
    localStorage.setItem("desencriptarCardVisible", "true");
    localStorage.removeItem("encriptarCardVisible");
}

function comprobarEncriptarCard() {
    var encriptarCard = document.getElementById("encriptarCard");
    if (localStorage.getItem("encriptarCardVisible") === "true") {
        encriptarCard.style.display = "block";
        var msjEncriptadoStr = localStorage.getItem("msjEncriptado");
        if (msjEncriptadoStr) {
            msjEncriptado(msjEncriptadoStr);
        }
    } else {
        encriptarCard.style.display = "none";
    }
}

function comprobarDesencriptarCard() {
    var desencriptarCard = document.getElementById("desencriptarCard");
    if (localStorage.getItem("desencriptarCardVisible") === "true") {
        desencriptarCard.style.display = "block";
        var msjDesencriptadoStr = localStorage.getItem("msjDesencriptado");
        if (msjDesencriptadoStr) {
            msjDesencriptado(msjDesencriptadoStr);
        }
    } else {
        desencriptarCard.style.display = "none";
    }
}

function limpiarYRecargar() {
    var encriptarCard = document.getElementById("encriptarCard");
    var desencriptarCard = document.getElementById("desencriptarCard");

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

window.onload = function() {
    var encriptarCard = document.getElementById("encriptarCard");
    var desencriptarCard = document.getElementById("desencriptarCard");
    
    // Asegurarse de que ambas tarjetas están ocultas al cargar la página
    encriptarCard.style.display = "none";
    desencriptarCard.style.display = "none";
    comprobarEncriptarCard();
    comprobarDesencriptarCard();

    // Recuperar el valor del mensajeTextarea y establecerlo en el textarea
    var savedTextAreaStr = localStorage.getItem("mensajeTextarea");
    if (savedTextAreaStr) {
        document.getElementById("mensajeTextarea").value = savedTextAreaStr;
    }
};

document.getElementById("encriptarBtn").addEventListener("click", encriptarFtn);
document.getElementById("desencriptarBtn").addEventListener("click", desencriptarFtn);
document.getElementById("limpiarEnc").addEventListener("click", limpiarYRecargar);
document.getElementById("limpiarDes").addEventListener("click", limpiarYRecargar);