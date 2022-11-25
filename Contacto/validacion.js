let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let correo = document.getElementById("correo");
let msj = document.getElementById("mensaje");
let formulario = document.querySelector(".formulario");
let errorAlerta = document.querySelector(".error");
let correctoalerta = document.querySelector(".enviado");
const vNom = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
const vApe = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
const vCorreo = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
function validacion() {

    formulario.addEventListener('submit', e => {
        e.preventDefault();
        errorAlerta.innerHTML = "";
        correctoalerta.innerHTML ="";
        let error = false;
        let alert;

        //nombre
        if (nombre.value == "") {
            alert = document.createElement("li");
            alert.innerHTML = "Ingrese un nombre";
            errorAlerta.appendChild(alert);
            error = true;
        }
        if (!vNom.test(nombre.value)) {
            alert = document.createElement("li");
            alert.innerHTML = "Ingrese un nombre valido";
            errorAlerta.appendChild(alert);
            error = true;
        }
        if (nombre.value.length < 3) {
            alert = document.createElement("li");
            alert.innerHTML = "El nombre es muy corto";
            errorAlerta.appendChild(alert);
            error = true;
        } else if (nombre.value.length > 20) {
            alert = document.createElement("li");
            alert.innerHTML = "El nombre es muy largo";
            errorAlerta.appendChild(alert);
            error = true;
        }


        //apellido
        if (apellido.value == "") {
            alert = document.createElement("li");
            alert.innerHTML = "Ingrese un apellido";
            errorAlerta.appendChild(alert);
            error = true;
        }
        if (!vApe.test(apellido.value)) {
            alert = document.createElement("li");
            alert.innerHTML = "Ingrese un apellido valido";
            errorAlerta.appendChild(alert);
            error = true;
        }
        if (apellido.value.length < 2) {
            alert = document.createElement("li");
            alert.innerHTML = "El apellido es muy corto";
            errorAlerta.appendChild(alert);
            error = true;
        } else if (apellido.value.length > 50) {
            alert = document.createElement("li");
            alert.innerHTML = "El apellido es muy largo";
            errorAlerta.appendChild(alert);
            error = true;

        }
        //email 
        if (!vCorreo.test(correo.value)) {
            alert = document.createElement("li");
            alert.innerHTML = "El Gmail no es valido";
            errorAlerta.appendChild(alert);
            error = true;
        }
        //mensaje
        if (msj.value == "") {
            alert = document.createElement("li");
            alert.innerHTML = "Ingrese un texto";
            errorAlerta.appendChild(alert);
            error = true;
        } else if (msj.value.length > 300) {
            alert = document.createElement("li");
            alert.innerHTML = "El texto ha excedido el limite de 300 caracteres";
            errorAlerta.appendChild(alert);
            error = true;
        }

        if (error == false) {
            let enviado = document.createElement("h2");
            enviado.innerHTML = "Formulario enviado con éxito";
            correctoalerta.appendChild(enviado);
            let espacio = document.createElement("br");
            correctoalerta.appendChild(espacio);
            let n = document.createElement("h3");
            n.innerHTML = nombre.value + " " + apellido.value;
            correctoalerta.appendChild(n);
            let mail = document.createElement("h3");
            mail.innerHTML = correo.value;
            correctoalerta.appendChild(mail);
            let text = document.createElement("h3");
            text.innerHTML = "Dice: " + msj.value;
            correctoalerta.appendChild(text);
            error == true;
        }
    });
}
validacion();
