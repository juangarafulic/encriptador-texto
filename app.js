let textoEntrada = document.querySelector("#texto-entrada"); //colocar # es clave
let textoSalida = document.querySelector("#texto-salida");
let elementosSalida = document.querySelector("#salida-inicio");
let mostrarElementos = true;
let setReglas = [
    ["a", "ai"], // 0
    ["e", "enter"], // 1
    ["i", "imes"], // 2
    ["o", "ober"], // 3
    ["u", "ufat"] // 4
];

// Función para cambiar entre la imagen y el texto
function alternarElementos() {
    const elementos = document.getElementById("salida-inicio");
    const texto = document.getElementById("texto-salida");

    if (mostrarElementos) {
        elementos.style.display = "none";
        texto.style.display = "block";
    } else {
        elementos.style.display = "block";
        texto.style.display = "none";
    }

    // Cambiar el estado
    mostrarElementos = !mostrarElementos;
}

//Otra forma de alternar elementos
function mostrarSalida() {
    var x = document.getElementById("salida-inicio");
    if (x.style.display === 'none') {
      x.style.display = 'block';
    } else {
      x.style.display = 'none';
    }
}

//Una condición para mostrar u ocultar elementos
let mostrarObjeto = false; // Puedes asignar aquí el valor de tu variable

if (mostrarObjeto) {
    document.getElementById("salida-inicio").style.display = "block"; // Muestra el objeto
} else {
    document.getElementById("miObjeto").style.display = "none"; // Oculta el objeto
}

function encriptar(fraseEncriptada) {
    for(let i = 0; i < setReglas.length; i++) {
        if(fraseEncriptada.includes(setReglas[i][0])) {
            fraseEncriptada = fraseEncriptada.replaceAll(
                setReglas[i][0],
                setReglas[i][1]
            )
        }
    }
    return fraseEncriptada;
}

function reiniciarElementos() {
    elementosSalida.style.display = 'block';
    textoSalida.style.display = 'none';
}

function botonEncriptar() {
    let textoEcriptado = encriptar(textoEntrada.value);
    textoSalida.value = textoEcriptado;
    //mostrarSalida(elementosSalida);
    alternarElementos(elementosSalida);
    //textoEntrada.value = "";
    console.log(textoSalida.value);
}
