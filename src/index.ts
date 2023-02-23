/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/object-curly-spacing */
/* eslint-disable no-case-declarations */
/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable @typescript-eslint/prefer-nullish-coalescing */
/* eslint-disable @typescript-eslint/indent */
/* eslint-disable @typescript-eslint/naming-convention */
import http from 'http';
import url from 'url';

// Importación del dotenv:
import * as dotenv from 'dotenv';
import { addCountry } from './countries';

// Configuración del dotenv:
dotenv.config();

const PORT = process.env.PORT || 4300;

// Creamos el servidor.
// Al "createServer" hay que pasarle una callBack como parámetro.
// En los parámetros de la CallBack hay que pasarle un Request y Response:
const server = http.createServer((req, resp) => {
  console.log('Server', PORT);

  switch (req.method) {
    case 'GET':
      // En caso que se haga una gestión de error con server.emit:
      if (!req.url) {
        server.emit('error', new Error('Invalid url'));
        return;
      }

      // Podría guardar en una variable y luego tomar la propiedad que queremos:
      // const parseURL = url.parse();
      // Pero lo desestructuramos:
      const { pathname } = url.parse(req.url);

      resp.write('Hello World: estos son tus datos de ' + pathname);
      break;

    // Utilizamos la función que habíamos creado para agregar un dato cuando el case es POST:
    case 'POST':
      addCountry({});
      break;

    case 'PATCH':
    case 'DELETE':
      resp.write('Hello World, sin implementación' + req.method);
      break;
    default:
      resp.write('Hello World, método no válido: ' + req.method);
      break;
  }

  resp.end();
});

server.on('listening', () => {
  console.log('Listening http://localhost: ' + PORT);
});

// En este caso al no darle un req, le pedimos lo que sea y va a devolver siempre el console.log.

// Ponemos a escuchar al servidor dandole un puerto:
server.listen(PORT);
