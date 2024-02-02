function agregarMetodoCalculoDescuento(objetoProducto) {
  // Agrega una propiedad al "objetoProducto" con el nombre "calcularPrecioDescuento".
  // Esta propiedad debe ser una función que multiplique el precio del producto por el porcentajeDeDescuento.
  // El "objetoProducto" posee una propiedad "precio" y una propiedad "porcentajeDeDescuento".
  // Luego debes restar del precio total del producto ese valor de descuento.
  // Retornar el precio final.
  // Ejemplo:
  // Precio ---> 10
  // PorcentajeDeDescuento ---> 0.2
  // Precio final ---> 8
  // Tu código:
 // Agregar la propiedad "calcularPrecioDescuento" que es una función
 objetoProducto.calcularPrecioDescuento = function() {
  // Verificar si el objeto tiene las propiedades necesarias
  if (
    objetoProducto.hasOwnProperty("precio") &&
    objetoProducto.hasOwnProperty("porcentajeDeDescuento") &&
    typeof objetoProducto.precio === "number" &&
    typeof objetoProducto.porcentajeDeDescuento === "number"
  ) {
    // Calcular el precio con descuento
    const precioConDescuento = objetoProducto.precio - (objetoProducto.precio * objetoProducto.porcentajeDeDescuento);
    return precioConDescuento;
  } else {
    // Si no tiene las propiedades necesarias, retornar null
    return null;
  }
};

// Retornar el objetoProducto modificado
return objetoProducto;
}

module.exports = agregarMetodoCalculoDescuento;
