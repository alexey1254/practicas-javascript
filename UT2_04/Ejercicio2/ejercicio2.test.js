const {impares} = require("./ejercicio2.js");

test("Ver numeros impares", ()=>{
    var numerosImpares = dimeImpares(1,5);
    const resultado = [1,3,5];
    


    expect(numerosImpares).toBe(result);
})