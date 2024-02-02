function dePalabrasAFrase(palabras) {
  // El argumento "palabras" es un arreglo de strings.
  // Retorna un string donde todas las palabras estén concatenadas,
  // con un espacio entre cada palabra.
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
  // Tu código:

  // Usa el método join para concatenar las palabras con un espacio entre cada una.
  return palabras.join(' ');
}

module.exports = dePalabrasAFrase;
