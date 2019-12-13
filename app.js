/* 
|| NCR TEST ||
|| Challenge: Buscando anagramas ||

Dev: Azalot, Ezequiel M.

El Resultado se muestra por consola.
La funcion tiene en cuenta los espacios, se puede utilizar cualquier largo de cadena y subcadena.

*/

// Modificar estas variables para utilizar la funcion.
let str1 = "Tomi, me compré la motito del mito, no fué un timo ";
let str2 = "TOMI";
// Ejecutamos la funcion.
result = solution(str1, str2);

function solution(A, B) {
  // Contabilizador del resultado.
  let count = 0;
  // Convertimos a Minusculas, separamos en caracteres y convertimos en array.
  let stringA = A.toLowerCase().split("");
  let stringB = B.toLowerCase().split("");
  // Si la subcadena es mas grande que la cadena, entonces no habrá resultados.
  if (stringB.length > stringA.length) {
    return 0;
  }
  // Creamos un Array temporal para luego verificar coincidencias.
  let arrayTemp = [];

  for (var i = 0; i < stringB.length; i++) {
    for (var j = 0; j < stringA.length; j++) {
      /* Revisamos char por char y si encontramos una coincidencia
        rellenamos el arrayTemp con cantidad de chars = stringB lenght. */
      if (stringB[i] == stringA[j]) {
        let pos = j;
        for (k = 0; k < stringB.length; k++) {
          let pos2 = pos + k;
          arrayTemp.push(stringA[pos2]);
        }
        let check = []; // Creamos un array que vamos a usar de verificador.
        /* Revisamos char por char si los elementos del stringB estan contenidos en el arrayTemp
        y vamos rellenando el array check. */
        stringB.forEach(element => {
          if (arrayTemp.includes(element)) {
            check.push(1); // 1 si es verdadero.
          } else {
            check.push(0); // 0 si es Falso.
          }
        });
        // VERIFICAMOS que si hay un "0" en el array "check", entonces NO hay anagrama.
        if (check.includes(0)) {
          arrayTemp.splice(0, arrayTemp.length); // reseteamos el array.
          check.splice(0, check.length); // reseteamos el array.
          // Caso contrario, aumentamos en "1" el contador.
        } else {
          count++;
          arrayTemp.splice(0, arrayTemp.length); // reseteamos el array.
          check.splice(0, check.length); // reseteamos el array.
        }
      }
    }
  }
  return count; // Retornamos resultado.
}
// Mostramos los resultados por CONSOLA.
console.log("|| NCR Test ||");
console.log("|| Challenge: Buscando Anagramas ||");
console.log("String A: " + str1);
console.log("String B: " + str2);
console.log("El Resultado es: " + result);
