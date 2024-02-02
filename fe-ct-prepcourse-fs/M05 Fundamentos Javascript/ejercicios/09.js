function esNuloOIndefinido(valor) {
  // La función recibe un argumento "valor".
  // Si este valor es null o undefined, retorna true.
  // De lo contrario, retorna false.
  // Tu código:
  return valor === null || valor === undefined;
}

console.log(esNuloOIndefinido(null));        // Output: true
console.log(esNuloOIndefinido(undefined));   // Output: true
console.log(esNuloOIndefinido("Hola"));      // Output: false
console.log(esNuloOIndefinido(42));          // Output: false

module.exports = esNuloOIndefinido;