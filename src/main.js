function encriptarFtn(){
    document.getElementById("mensajeTextarea").value;
    mostrarEncriptarCard();
}

function desencriptarFtn(){
    document.getElementById("mensajeTextarea").value;
}

function mostrarEncriptarCard() {
    var encriptarCard = document.getElementById("encriptarCard");
    encriptarCard.style.display = "block";
    localStorage.setItem("encriptarCardVisible", "true");
}

function comprobarEncriptarCard() {
    var encriptarCard = document.getElementById("encriptarCard");
    if (localStorage.getItem("encriptarCardVisible") === "true") {
        encriptarCard.style.display = "block";
    }
}

function limpiarYRecargar() {
    localStorage.removeItem("encriptarCardVisible");
    location.reload();
}

window.onload = comprobarEncriptarCard;

document.getElementById("encriptarBtn").addEventListener("click", encriptarFtn);
document.getElementById("desencriptarBtn").addEventListener("click", desencriptarFtn);
document.getElementById("limpiar").addEventListener("click", limpiarYRecargar);