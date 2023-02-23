/* eslint-disable @typescript-eslint/promise-function-async */
/* eslint-disable @typescript-eslint/object-curly-spacing */
/* eslint-disable @typescript-eslint/indent */
/* eslint-disable arrow-body-style */
/* eslint-disable @typescript-eslint/no-floating-promises */

import fs from 'fs/promises';

// En este caso tenemos que hacer un await o then.
fs.writeFile('sample.txt', 'Promesa nueva linea', { encoding: 'utf-8' })
  .then(() => {
    return fs.readFile('sample.txt', { encoding: 'utf-8' });
  })
  .then((data) => {
    console.log(data);
  });
