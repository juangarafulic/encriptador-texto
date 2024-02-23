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
    let texto = textoEntrada.value;
    console.log(texto);
}

/*
if (texto == null) {
document.getElementById("texto-salida").style.display = "none";
} else {
    document.getElementById("persona").style.display = "none";
}
*/
