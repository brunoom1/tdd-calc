
const Calculadora = require('./../model/Calculadora');
const calculadora = new Calculadora();

test('deveria retornar a multiplicacao de dois numeros', () => {
  expect(6).toBe(calculadora.multiplicar(3, 2));
});

test('deveria retornar um erro do tipo InvalidParam', () => {
  try {
    calculadora.multiplicar("3", 2);
    throw false;
  } catch (err) {
    expect(new Error('InvalidParam')).toEqual(err);
  }
});
