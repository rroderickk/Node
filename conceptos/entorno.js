// ** VARIABLES DE ENTORNO **

// Para pasar el valor a nombre en la consola escribr NOMBRE=Omar node conceptos/entorno.js
let nombre = process.env.NOMBRE || "rroderickk";
let miWeb = process.env.MI_WEB || "https://github.com/rroderickk/node.git";

console.log(`Hola ${nombre}. Mi web es ${miWeb}`);
