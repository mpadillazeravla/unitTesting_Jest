// importar la función sum del archivo app.js
const { sum } = require('./app.js');

// comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    //dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});
// TESTS TIPO DE CAMBIO MONEDAS

// test euro a dolar
test("One euro should be 1.206 dollars", function(){
    // importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js')
    
    // hago mi comparacion (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
})


// test dolar a yen
test("One dolar should be 106.58 yen", function(){
    // importo la funcion desde app.js
    const { fromDollarToYen } = require('./app.js')
    
    // hago mi comparacion (la prueba)
    expect(fromDollarToYen(3)).toBe(319.74); //1 dolar son 106.58 yenes, entonces 3 dolares deben ser 319.74 yenes
})

// test yen a libras
test("One yen should be 0.006255 libras", function(){
    // importo la funcion desde app.js
    const {fromYenToPound  } = require('./app.js')
    
    // hago mi comparacion (la prueba)
    expect(fromYenToPound(2000)).toBe(12.51); //1 yen son 0.006255 libras, entonces 2000 son 12.51 libras
})