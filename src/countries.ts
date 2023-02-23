/* eslint-disable @typescript-eslint/array-type */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/consistent-indexed-object-style */
/* eslint-disable @typescript-eslint/indent */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/object-curly-spacing */

import fs from 'fs/promises';

// Definimos la función como "async":
export const addCountry = async (country: { [key: string]: string }) => {
  // Primero hacemos la lectura de los datos.
  // fs.readFile devuelve una promesa:
  const stringDataInitial = await fs.readFile('data.json', {
    encoding: 'utf-8',
  });
  // Hay que agregar un await porque devuelve una promesa.

  // Luego hay que convertir el stringify de Json a Object:
  // Hay que tipar el data.
  const data: { [key: string]: string }[] = JSON.parse(stringDataInitial);

  // Luego tenemos que agregar el country en el array con push:
  data.push(country);
  // Esta operación es JS para manipular los datos. Sea write, update, etc.

  // Luego se hace el stringify del Array data resultante:
  const stringData = JSON.stringify(data);

  // Luego si puedo escribir los datos y reemplazarlos porque no se perdieron datos en el medio:
  // En este caso el write es una promesa void. Entonces no agregamos await porque no necesitamos esperar.
  fs.writeFile('data.json', stringData, { encoding: 'utf-8' });
};

const newCountry = { name: 'Italia', capital: 'Milano' };

addCountry(newCountry);
