async function generarHash(texto) {
    const encoder = new TextEncoder();
    const data = encoder.encode(texto);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(byte => byte.toString(16).padStart(2, '0')).join('');
    return hashHex;
}

function generaHashRapido(texto) {
    let hash = 0;
    for (let i = 0; i < texto.length; i++) {
        hash = (hash << 5) - hash + texto.charCodeAt(i);
        hash = hash & hash; // Convierte a un número de 32 bits
    }  return hash.toString(16); // Retorna en formato hexadecimal
}

export {generarHash, generaHashRapido};