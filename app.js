// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
document.getElementById("amigo").focus();


function agregarAmigo() {
    let txtAmigo = document.getElementById("amigo");
    let amigo = txtAmigo.value;

    if (amigo == "") {
        alert("Ingrese un nombre por favor.");
    } else {
        amigos.push(amigo);
        txtAmigo.value = "";
        txtAmigo.focus();
    }
}

function sortearAmigo() {
    mostrarAmigos();
}

function mostrarAmigos() {
    for (const amigo of amigos) {
        console.log(amigo);
    }
}