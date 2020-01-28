
class Calculadora {

  _verificarParametros (a, b) {
    if (typeof(a) !== 'number' || typeof(b) !== 'number') {
      throw new Error("InvalidParam");
    }
  }

  somar (a, b) {
    this._verificarParametros(a, b);
    return a + b;
  }

  subtrair (a, b) {
    this._verificarParametros(a, b);
    return a - b;
  }

  dividir (a, b) {
    this._verificarParametros(a, b);

    if (b === 0) {
      throw new Error('Infinity');
    }

    return a / b;
  }

  multiplicar (a, b) {
    this._verificarParametros(a, b);

    return a * b;
  }

}

module.exports = Calculadora;