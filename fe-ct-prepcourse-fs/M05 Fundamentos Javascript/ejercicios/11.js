function esMayorDeEdad(fechaNacimiento) {
  // La función recibe un argumento "fechaNacimiento" correspondiente a la fecha
  // de nacimiento de una persona.
  // Determina si esta persona es mayor de edad (tiene 18 años o más).
  // Devuelve true si lo es, caso contrario, retorna false.
  // PISTA: Investiga el método getFullYear() de la clase Date para obtener el año actual.
  // Tu código:

  const fechaActual = new Date();
  const añoActual = fechaActual.getFullYear();
  const añoNacimiento = new Date(fechaNacimiento).getFullYear();

  return añoActual - añoNacimiento >= 18;

}

// Ejemplos de uso:
console.log(esMayorDeEdad('2000-01-25')); // Devuelve true (mayor de edad)
console.log(esMayorDeEdad('2010-01-25')); // Devuelve false (menor de edad)

module.exports = esMayorDeEdad;