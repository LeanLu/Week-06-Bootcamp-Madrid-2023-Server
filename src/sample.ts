/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/object-curly-spacing */
/* eslint-disable @typescript-eslint/indent */

// Comander:
import { program } from 'commander';

// Inquirer:
import inquirer from 'inquirer';

// Dos opciones que definimos como ejemplo:
// Una para preguntar de instalación y otra de versión:
program.option('--install').option('-v, --version');

program.parse();

const options = program.opts();

// Acá definimos un ejemplo del commander.
// Si ejecuta -v o --version, ejecuta el console.log de la versión.
if (options.version) {
  console.log('Version 1');
}

console.log('Hello Sample');

// Inquirer:

const courses = ['angular', 'react', 'vue'];

// Prompt es una función que se pasa como parámetro un Array con las preguntas que se quieren realizar:
// Prompt devuelve una promesa.
inquirer
  .prompt([
    {
      // Nombre de la variable donde quiero que se almacene la pregunta:
      name: 'userName',
      // Pregunta:
      message: 'Dime tu nombre',
      // Type:
      type: 'input',
    },
    {
      name: 'userAge',
      message: 'Dime tu edad',
      type: 'number',
      // En el type se coloca "number".
      // Si bien todo lo que se toma por consola es un string, nos ayuda luego para el tipado.
    },
    {
      name: 'course',
      message: 'Seleccion de un curso',
      type: 'list',
      choices: courses,
    },
    {
      name: 'coursesMulti',
      message: 'Seleccion algun curso',
      type: 'checkbox',
      choices: courses,
    },
    {
      name: 'ok',
      message: 'Aceptas',
      type: 'confirm',
    },
  ])
  .then((answer) => {
    console.log('Hello ', answer.userName);
    // El prompt devuelve un object de promesa.
    // Se suele llamar "answer" y se le pasa al then() para luego utilizar esos datos.
    // Luego puedo hacer la lógica para ver si está todo correcto, si se ha respondido todo, etc.
  });
