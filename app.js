let textoEntrada = document.querySelector("#texto-entrada"); //colocar # es clave
let textoSalida = document.querySelector("#texto-salida");
let setReglas = [
    ["a", "ai"], // 0
    ["e", "enter"], // 1
    ["i", "imes"], // 2
    ["o", "ober"], // 3
    ["u", "ufat"] // 4
];

function botonEncriptar() {
    let texto = encriptar(textoEntrada.value);
    textoSalida.value = texto;
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
    return fraseEncriptada
}
/*
//Área para mostrar el texto encriptado/desencriptado.
//comienza con la imagen
if (texto == null) {
document.getElementById("texto-salida").style.display = "none";
} else {
    document.getElementById("persona").style.display = "none";
}
*/
