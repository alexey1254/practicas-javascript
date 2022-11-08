
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

function check_fullName() {
    let fullName_regex = /^[a-z ,.'-]+$/i;
    let in_name = document.getElementById("in_name").value;
    let surname = document.getElementById("in_surname").value;
    let in_concat = in_name + surname;

    if(fullName_regex.exec(in_concat) == null) {
        console.log("El nombre o los apellidos no deben tener un número");
        return false;
    } else {
        return true;
    }
}
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

    if(dni_regex.exec(dni_nif_in) != null) {
        console.log("El formato del dni es correcto");
        return 
        if(!check_letter_dni(dni_nif_in)) {
            console.log("La letra es incorrecta");
            return false;
        }

    if(nif_regex.exec(dni_nif_in) != null) {
        console.log("El formato del nif es correcto");
        return true;
    }

    } 

    
}

function validar(){
    let  date_regex = /^(0[1-9]|[1-2]\d|3[01])(\/)(0[1-9]|1[012])\2(\d{4})$/;
    let fecha_ida = document.getElementById('date').value;

    if(date_regex.exec(fecha_ida)==null){
        alert("Formato invalido en la fecha de ida, formato adecuado: XX/XX/XXXX")
        console.log("no cumple")

    }else{
        console.log("cumple")
    }
    


}
