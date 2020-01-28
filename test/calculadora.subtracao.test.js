
const Calculadora = require('./../model/Calculadora');

const calculadora = new Calculadora();

test('deveria retornar a subtração de dois numeros inteiros', () => {
  expect(1).toBe(calculadora.subtrair(3, 2));
});

test('deveria retornar um erro do tipo InvalidParam', () => {
  try {
    calculadora.subtrair("3", "2");
  } catch (err) {
    expect(new Error('InvalidParam')).toEqual(err);
  }
});
