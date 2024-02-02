function diasEnMes(mes) {
  // La función recibe un mes(número) por argumento.
  // Determine cúantos días tiene el mes correspondiente a ese número.
  // PISTA: Usa un bucle do-while para validar que el mes ingresado sea válido.
  // Tu código:

  // Verifica que el mes sea un número entre 1 y 12
  if (typeof mes !== 'number' || mes < 1 || mes > 12) {
    return 0;
  }

  let dias;

  // Utiliza un bucle do-while para validar el mes ingresado
  do {
    switch (mes) {
      case 1:
      case 3:
      case 5:
      case 7:
      case 8:
      case 10:
      case 12:
        dias = 31;
        break;
      case 4:
      case 6:
      case 9:
      case 11:
        dias = 30;
        break;
      case 2:
        dias = 28;
        break;
    }
  } while (false);

  return dias;
}

module.exports = diasEnMes;
