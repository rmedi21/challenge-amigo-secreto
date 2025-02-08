// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
document.getElementById("amigo").focus();


function agregarAmigo() {
    let txtAmigo = document.getElementById("amigo");
    let amigo = txtAmigo.value;
    
    document.getElementById("resultado").innerHTML = "";
    
    if (amigo == "") {
        alert("Ingrese un nombre por favor.");
    } else {
        amigos.push(amigo);
        document.getElementById("listaAmigos").innerHTML += `<li>${amigo}</li>`
        txtAmigo.value = "";
        txtAmigo.focus();
    }
}

function sortearAmigo() {
    if (amigos.length == 0) {
        alert("No hay amigos para sortear.")
    }
    else {
        const indAleatorio = obtenerNumeroAleatorio(0, amigos.length - 1);
        document.getElementById("resultado").innerHTML = `<li>El amigo secreto es ${amigos[indAleatorio]}</li>`
        limpiarAmigos();
    }
}

function obtenerNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function mostrarAmigos() {
    for (const amigo of amigos) {
        console.log(amigo);
    }
}

function limpiarAmigos() {
    amigos = [];
    document.getElementById("listaAmigos").innerHTML = "";
    txtAmigo.value = "";
    txtAmigo.focus();
}