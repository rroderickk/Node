// ** VARIABLES DE ENTORNO **

// Para pasar el valor a nombre en la consola escribr NOMBRE=Omar node conceptos/entorno.js
let nombre = process.env.NOMBRE || "rroderickk";
let miWeb = process.env.MI_WEB || "https://github.com/rroderickk/node.git";

console.log(`Hola ${nombre}. Mi web es ${miWeb}`);

console.log("nodemon es un demonio y cuando esta trabajando lo que hace es tener un liveserver, me permite estar viendo el resultado de lo que estoy codeando: livecoding");
console.log("Ejecutando codigo js en vivo si tengo el nodemon activado.");
console.log("El comando para ponerlo a trabajar es: npx nodemon archivo.js en windows.");
console.log("Prueba sumando otros outputs a tu codigo y veras como trabaja nodemon")
console.log("Con eso te enchufas mas a codificar que a estar ejecutando una y otra vez el codigo.");
