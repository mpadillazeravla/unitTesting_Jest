// esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// solo un registro en consola para nosotros.
console.log(sum(7,3))

// exporta la función para usarla en otros archivos 
// (similar a la palabra clave `export` cuando se usa webpack)
//////////////////////////////////////////////////////////////////////////

// FUNCIONES CAMBIO DE MONEDA
// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

// funcion dollar a yen
function fromDollarToYen(num){
    return num * 106.58
}
console.log(fromDollarToYen(1))


// funcion euro a dollar
function fromEuroToDollar(num){
    return num * 1.2
}
console.log(fromEuroToDollar(4))

// cuncion yen a libra
function fromYenToPound(num){
    return num * 0.006255
}
console.log(fromYenToPound(1000))

module.exports = {sum , fromEuroToDollar, fromDollarToYen , fromYenToPound};