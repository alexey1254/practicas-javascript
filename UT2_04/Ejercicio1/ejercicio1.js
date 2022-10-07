// Aqui esta donde empiezan y terminan los rangos de ip. Empiezan por 
// x.0.0.0 y terminan por x.255.255.255
const rangos = {
    "a": [0,126],
    "b": [127,191],
    "c": [192,223],
    "d": [224,239],
    "e":[240,255]

}

function generarIp() {
    var rango = extraerRango();
    var ipGenerada = generarIpAleatoria(rango);
    var ip = ipGenerada.toString();
    ip = ip.replaceAll(',','.');
    document.getElementById("texto").innerHTML = "La ip generada es: ";
    var output = document.getElementById("output").innerHTML = ip;
}
function ipToString(ipGenerada) {
    let ip = 
    console.log(ip);
}
//Extrae el rango de direcciones ip
function extraerRango() {
    rango = document.getElementById("rango").value;
    rango = rango.toLowerCase();
    return rangos[rango];
} 
//Genera un numero aleatorio entre minimo inclusive y maximo exclusive
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

//TODO: Poner las ultimas ip en 255

function generarIpAleatoria(rango) {
    ip = []
    for(let i=0;i<4;i++){
        if(i==0) {
            ip[i] = getRandomInt(rango[0],rango[1]+1);
        } else {
            ip[i] = getRandomInt(rango[0],256);
        }
        
    }
    return ip;
}