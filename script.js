let setReglas = [
    ["e", "enter"],// 0
    ["i", "imes"], // 1
    ["a", "ai"],   // 2
    ["o", "ober"], // 3
    ["u", "ufat"]  // 4
];

function encriptar(frase) {
    for (let i = 0; i < setReglas.length; i++) {
        frase = frase.replaceAll(setReglas[i][0], setReglas[i][1]);
    }
    return frase;
}

function desencriptar(fraseEncriptada) {
    for (let i = 0; i < setReglas.length; i++) {
        fraseEncriptada = fraseEncriptada.replaceAll(setReglas[i][1], setReglas[i][0]);
    }
    return fraseEncriptada;
}

function botonEncriptar() {
    const textoEntrada = document.getElementById('texto-entrada').value.toLowerCase();
    if (textoEntrada.trim() === '') {
        mostrarElementosIniciales();
    } else {
        const textoSalida = encriptar(textoEntrada);
        mostrarResultado(textoSalida);
    }
}

function botonDesencriptar() {
    const textoEntrada = document.getElementById('texto-entrada').value.toLowerCase();
    if (textoEntrada.trim() === '') {
        mostrarElementosIniciales();
    } else {
        const textoSalida = desencriptar(textoEntrada);
        mostrarResultado(textoSalida);
    }
}

function mostrarElementosIniciales() {
    const salidaInicio = document.getElementById('salida-inicio');
    salidaInicio.style.display = 'block'; // Muestra los elementos iniciales

    const textoSalidaElemento = document.getElementById('texto-salida');
    textoSalidaElemento.textContent = ''; // Limpia el texto encriptado/desencriptado
    textoSalidaElemento.style.display = 'none'; // Oculta el texto encriptado/desencriptado
}

function mostrarResultado(texto) {
    const salidaInicio = document.getElementById('salida-inicio');
    salidaInicio.style.display = 'none'; // Oculta los elementos iniciales

    const textoSalidaElemento = document.getElementById('texto-salida');
    textoSalidaElemento.textContent = texto;
    textoSalidaElemento.style.display = 'block'; // Muestra el texto encriptado/desencriptado
}

function botonCopiar() {
    const textoSalida = document.getElementById('texto-salida').textContent;
    navigator.clipboard.writeText(textoSalida)
        //.then(() => alert('Texto copiado correctamente'))
        //.catch(err => console.error('No se pudo copiar el texto: ', err));
}

document.querySelector('.encriptar').addEventListener('click', botonEncriptar);
document.querySelector('.desencriptar').addEventListener('click', botonDesencriptar);
document.querySelector('.copiar').addEventListener('click', botonCopiar);

// Mostrar elementos iniciales al cargar la página
mostrarElementosIniciales();
