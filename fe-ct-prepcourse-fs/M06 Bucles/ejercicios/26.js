function esAnagrama(str1, str2) {
  // La función recibe dos argumentos "str1" y "str2" que son strings.
  // Determina si los dos strings son anagramas.
  // Devuelve true de ser así, sino retorna false.
  // IMPORTANTE: Un anagrama es una palabra que se forma
  // con las mismas letras que otra, pero en orden diferente.
  // Tu código:
  // Elimina los espacios y convierte a minúsculas para comparar sin considerar mayúsculas ni espacios
  const texto1 = str1.toLowerCase().replace(/\s/g, '');
  const texto2 = str2.toLowerCase().replace(/\s/g, '');

  // Convierte los strings en arrays, ordena los caracteres y luego los convierte de nuevo en strings
  const textoOrdenado1 = texto1.split('').sort().join('');
  const textoOrdenado2 = texto2.split('').sort().join('');

  // Compara los strings ordenados
  return textoOrdenado1 === textoOrdenado2;
}

module.exports = esAnagrama;
