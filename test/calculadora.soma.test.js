const Calculadora = require('./../model/Calculadora');

const calculadora = new Calculadora();  

test('deveria retornar a soma de dois inteiros', () => {
  expect(3).toBe(calculadora.somar(2, 1));
});

test('deveria retornar a somar dos numeros reais', () => {
  expect(32.624).toBe(calculadora.somar(32.39, 0.234));
});

test('deveria retornar a soma dos números negativos', () => {
  expect(-46).toBe(calculadora.somar(-23, -23));
});

test('deveria retornar um erro do tipo InvalidParam', () => {
  try {
    calculadora.somar("2", "4");
  } catch (err) {
    expect(new Error('InvalidParam')).toEqual(err);
  }
});
