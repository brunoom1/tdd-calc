
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

}

module.exports = Calculadora;