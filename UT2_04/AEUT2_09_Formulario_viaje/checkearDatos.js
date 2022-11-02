function noNumber() {
    var myRe = /^(?!\d*$)\w{1,99}$/g;
    var nombre = document.getElementById("nomApell").value;
    if(myRe.exec(nombre) == null ) {
        console.log("numero");
    }
}

function digitosNecesarios() {
    var dni = document.getElementById("dni").value;
    if(dni.length !== 9 && !isNaN(dni[8])) {
        console.log("El dni es incorrecto");
    }
    if() {
        console.log("El dni es incorrecto");
    }

}

function comprobarFecha() {
    
}

function isNumber() {
    
}

function isEmail() {
    
}

function addMatricula() {
    
}

function motivos() {
    
}
