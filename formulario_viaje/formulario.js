const rojo = "background-color:#f75e25;";
const verde = "background-color:#bdecb6;";
document.getElementById('in_postalcode').addEventListener("change", function(){
    let value = this.value;
    let text = this.options[this.selectedIndex].text;
    if(text == "Otro"){
        console.log("Visible")
        document.getElementById('otros_fieldset').style.display = 'block';
    }else{
        console.log("Hidden")
        document.getElementById('otros_fieldset').style.display = 'none';
    }
});

//Comprobar el nombre
function check_fullName() {
    let fullName_regex = /^[a-z ,.'-]+$/i;
    let in_name = document.getElementById("in_name").value;
    let surname = document.getElementById("in_surname").value;
    let in_concat = in_name + surname;

    if(!validarRegEx(in_concat, fullName_regex)) {
        console.log("El nombre o los apellidos no deben tener un número o no estar vacíos");
        document.getElementById("in_name").style = rojo;
        document.getElementById("in_surname").style = rojo;
        return false;
    } else {
        console.log("El nombre y apellidos son correctos");
        document.getElementById("in_name").style = verde;
        document.getElementById("in_surname").style = verde;
        return true;
    }
}
//Fin comprobar nombre

// DNI:
/**
 * La función toma como argumento una cadena, y devuelve verdadero si la cadena es un DNI español
 * válido, y falso si no lo es.
 * @param dni - El número de DNI a comprobar.
 * @returns un valor booleano.
 */
function check_letter_dni(dni) {
    //Segun el resto que salga tenemos una letra u otra.
    const resto_dni_letra = ["T","R","W","A","G","M","Y","F","P","D","X",
    "B","N","J","Z","S","Q","V","H","L","C","K","E"];
    // Quitamos la letra del dni para comprobar si es la correcta
    let numeros_dni = dni.substring(0, dni.length -1);
    // Dividimos la letra entre 23 y el resultado debe ser el que este en la posicion resto_dni_letra
    let letra = (resto_dni_letra[numeros_dni % 23]);
    if(dni.substring(8, 9) == letra) {
        console.log("El dni es correcto");
        return true;
    } else {
        console.log("La letra del dni no es correcta");
        return false;
    }
}
function check_dni_nif() {
    let dni_regex = /^([0-9]{8}[A-Z])/;
    let nif_regex = /[XYZ][0-9]{7}[A-Z]$/;
    let dni_nif_in = document.getElementById("in_dni_nie").value.toUpperCase();

    if(dni_nif_in == "" || dni_nif_in.length < 9) {
        console.log("El usuario debe introducir un dni válido");
        document.getElementById("in_dni_nie").style = "background-color:#f75e25;";
        return false;
    }
    if(!validarRegEx(dni_nif_in, dni_regex)) {
        console.log("El formato del dni es correcto");
        if(!check_letter_dni(dni_nif_in)) {
            console.log("La letra es incorrecta");
            document.getElementById("in_dni_nie").style = "background-color:#f75e25;";
            return false;
        }
        document.getElementById("in_dni_nie").style = "background-color:#bdecb6;";

        if(!validarRegEx(dni_nif_in, nif_regex)) {
            console.log("El formato del nif es correcto");
            document.getElementById("in_dni_nie").style = "background-color:#bdecb6;";
            return true;
        }
    }     
}
// Fin DNI ---

// Validar fecha
function validarFecha(){
    let  date_regex = /^(0[1-9]|[1-2]\d|3[01])(\/)(0[1-9]|1[012])\2(\d{4})$/;
    let fecha_ida = document.getElementById('date').value;

    if(!validarRegEx(fecha_ida, date_regex)){
        alert("Formato invalido en la fecha de ida, formato adecuado: XX/XX/XXXX");
        console.log("no cumple");
        return false;

    }else{
        console.log("cumple");
        return true;
    }
}

// Fin validar fecha

/**
 * Devuelve verdadero si la cadena coincide con la expresión regular y falso si no coincide.
 * @param string - La cadena que se va a validar.
 * @param regex - La expresión regular contra la que se va a realizar la prueba.
 * @returns el resultado del método regex.exec(string).
 */
function validarRegEx(string, regex) {
        return regex.exec(string) != null;
}
function cambiarFondo(color, elementId) {
    if(color == "rojo") {
        document.getElementById(elementId).style = "background-color:#f75e25;"
    }
    else if (color == "verde") {
        document.getElementById(elementId).style = "background-color:#bdecb6;"
    }
}
function checkPhone() {
    let fijo = document.getElementById("tlfn-fijo").value;
    let movil = document.getElementById("tlfn-movil").value;
    const regexFijo = /^[9|8]{1}([\d]{2}[-]*){3}[\d]{2}$/;
    const regexMovil = /^\(\+\d{2,3}\)\d{9}$/;

    if(validarRegEx(fijo, regexFijo)) {
        cambiarFondo("verde", "tlfn-fijo");
    }
    if(validarRegEx(movil, regexMovil)) {
        cambiarFondo("verde", "tlfn-movil");
        return true;
    } else {
        cambiarFondo("rojo","tlfn-movil");
        return false;
    }

}

function checkMarca() {
    regexMarca = /^([A-Z]{1}[a-zñáéíóú]+[\s]*)+$/;
    marca = document.getElementById("marca").value;
    if(validarRegEx(marca, regexMarca)) {
        cambiarFondo("verde", "marca");
    } else {
        cambiarFondo("rojo", "marca");
    }
}
function checkMatricula() {
    regexMatricula = /^([0-9]{4})([-]{1})([A-Z]{3})$/;
    matricula = document.getElementById("matricula").value;

    if(validarRegEx(matricula, regexMatricula)) {
        cambiarFondo("verde", "matricula");
    } else {
        cambiarFondo("rojo", "matricula");
    }
}

function checkIp() {
    regexIpv4 = /^(\b\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\b)/;
    regexIpv6 = /(([a-f0-9:]+:+)+[a-f0-9]+)$/;
    ip = document.getElementById("ip").value;

    if(validarRegEx(ip, regexIpv4)) {
        cambiarFondo("verde", "ip");
        console.log("Ipv4");
        return true;
    } else if(!validarRegEx(ip, regexIpv4)) {
        cambiarFondo("rojo", "ip");
        return false;
    }
    if(validarRegEx(ip, regexIpv6)) {
        cambiarFondo("verde", "ip");
        console.log("Ipv6");
        return true;
    } else {
        cambiarFondo("rojo", "ip");
        return false;
    }
}

/** Al enviar el formulario: */

function validar() {
    let envio = document.getElementById("btn-envio");
    if(checkIp() == true && checkMatricula() == true && checkMarca() == true && checkPhone() == true && validarFecha == true && check_dni_nif == true && check_fullName == true) {
        envio.style = "display:block";
    }
    else {
        envio.style = "display:none";
    }
}