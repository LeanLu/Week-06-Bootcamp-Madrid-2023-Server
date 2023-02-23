/* eslint-disable @typescript-eslint/indent */
/* eslint-disable @typescript-eslint/object-curly-spacing */
import fs from 'fs';

// Método sync solo de ejemplo. NO se utiliza:
const data = fs.readFileSync('sample.txt', { encoding: 'utf-8' });
console.log(data);

// Se coloca en la callback primero el error y luego la data.
// El data es el mismo que antes pero en este caso es async entonces no puedo colocarlo como resultado del readFile.

fs.readFile('sample.txt', { encoding: 'utf-8' }, (_error, data) => {
  console.log('Async');
  console.log(data);
});

// Escritura de manera sync:
fs.writeFileSync('sample.txt', 'nueva linea', { encoding: 'utf-8' });

// Para añadir cosas al fichero:
// De manera async:
fs.appendFile('sample.txt', '\nlinea agregada', { encoding: 'utf-8' }, () => {
  fs.readFile('sample.txt', { encoding: 'utf-8' }, (_error, data) => {
    console.log('Async línea <agregada></agregada>');
    console.log(data);
  });
  console.log(data);
});
