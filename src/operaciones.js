//GitHub Actions ejecuta tareas normalmente en un entorno Node.js para JavaScript. 
// Así que necesitamos convertir el codgio  a módulos JS comunes.

function suma(a, b) {
  return a + b;
}

function resta(a, b) {
  return a - b;
}

function multiplicar(a, b) {
  return a * b;
}

function dividir(a, b) {
  if (b === 0) return "Error";
  return a / b;
}

function potencia(a, b) {
  return Math.pow(a, b);
}

function raizCuadrada(a) {
  if (a < 0) return "Error";
  return Math.sqrt(a);
}

module.exports = { suma, resta, multiplicar, dividir, potencia, raizCuadrada };