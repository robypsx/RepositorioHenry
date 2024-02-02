function filter(arrayOfStrings) {
  // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
  // Luego retorna un nuevo arreglo con estos elementos.
  // Tu código:
  // Nuevo arreglo para almacenar los elementos que comienzan con "a".
  const newArray = [];

  // Itera sobre el arreglo y filtra los elementos que comienzan con "a".
  for (let elemento of arrayOfStrings) {
    if (elemento.charAt(0).toLowerCase() === 'a') {
      newArray.push(elemento);
    }
  }

  return newArray;
}

module.exports = filter;
