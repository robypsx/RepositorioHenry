function esPalindromo(string) {
  // La función recibe un argumento "string".
  // Verifica si este string es palíndromo o no.
  // Retorna true si lo es, caso contrario, retorna false.
  // IMPORTANTE: Un palíndromo es una palabra o frase
  // que se lee igual hacia adelante que hacia atrás.
  // Tu código:
  
  // Elimina los espacios y convierte a minúsculas para comparar sin considerar mayúsculas ni espacios
  const textoSinEspacios = string.toLowerCase().replace(/\s/g, '');

  // Invierte el string
  const textoInvertido = textoSinEspacios.split('').reverse().join('');

  // Compara el string original con el invertido
  return textoSinEspacios === textoInvertido;
}

module.exports = esPalindromo;
