const obtenerValorPropiedad = (objeto, propiedad) => {
  // Recibe un objeto y el nombre de una propiedad.
  // Devuelve el valor de esta propiedad.
  // Tu código:
  // Divide la propiedad en partes si es una cadena con notación de punto o corchetes.
  const propiedades = propiedad.split(/\.|\["|"\]/).filter(Boolean);

  // Itera sobre las partes de la propiedad y accede al valor correspondiente en el objeto.
  for (let prop of propiedades) {
    if (objeto && objeto.hasOwnProperty(prop)) {
      objeto = objeto[prop];
    } else {
      return undefined; // Devuelve undefined si la propiedad no existe.
    }
  }

  return objeto;
};

module.exports = obtenerValorPropiedad;
