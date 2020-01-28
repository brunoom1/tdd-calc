
const Calculadora = require('./../model/Calculadora');


const calculadora = new Calculadora();

test('deveria retornar o resultado da divisão', () => {
  expect(3).toBe(calculadora.dividir(6, 2)); 
});

test('deveria retornar um erro do tipo Infinity', () => {
  try {
    calculadora.dividir(3, 0);
    throw false;
  } catch (err) {
    expect(new Error('Infinity')).toEqual(err);
  }
});

test('deveria retornar um erro do tipo InvalidParam', () => {
  try {
    calculadora.dividir("3", 1);
    throw false;

  } catch (err) {
    expect(new Error('InvalidParam')).toEqual(err);
  }
});



