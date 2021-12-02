async function main() {
async function nombreP(P) {
return new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("###########======########======##########");
        resolve(P);
    }, 30);
});
}

async function banner(nombre,Jarvis,intb) {
return new Promise(function (resolve, reject) {
    setTimeout(function () {
        let Wellcome = "Wellcome Sir,"
        let Platzi = "Platzi"
        console.log(`${Jarvis} ${nombre}`);
        console.log("###########======########======##########");
        resolve(nombre);
    }, intb);
});
}

async function codigo(nombre,intc) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log(nombre);
            resolve();
        }, intc);
    });
}

async function rodri(nombreRodri,pregunta,intr) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            nombreRodri = "Rodri:"
            console.log(`${nombreRodri} ${pregunta}`);
            resolve();
        }, intr);
    });
}

async function ejemplo1(nombre) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
        let i = 0;
        let intervalo = setInterval(function () {
            console.log("hola mundoooooo");
            i++
            if (i === 3) {
                clearInterval(intervalo);
            }
        }, 1000); 
        console.log(nombre);
                    resolve();
                }, 300);
            });
}

let nombre = await banner("Rodri","Jarvis: Wellcome Sir");
let nombre2 = await nombreP("Platzi");

await banner("Platzi","Jarvis: Wellcome Sir");
await banner("Esto es un codigo que puedes usar: ","Jarvis: ");
await codigo("\n let i = 0;  \n let intervalo = setInterval(function () {\n\t console.log(\"hola mundoooooo\");\n\t i++ if (i === 3) {\n\t clearInterval(intervalo);\n\t }\n }, 100); \n");
await rodri("R","y para que sirve tal cosAAAA? ",10)
await ejemplo1("Jarvis: Imprimira esta secuencia y cortara al imprimirlo i veces checkea: ");

await rodri("R","Excelente ejemplo, que mas tienes? ",3100)

await banner("Si ejecutas esta linea\n console.log(global);\n Ejecutara lo siguiente: ","Jarvis: ",1000);
console.log(global);
await banner("Puedes observar propiedades del modulo global xD","Jarvis: ",1000);

await banner("Si ejecutas esta linea\n console.log(setInterval);\n Ejecutara lo siguiente: ","Jarvis: ",1000);
console.log(setInterval);
await banner("Puedes observar propiedades del modulo setInterval xD","Jarvis: ",1000);

await banner("Si ejecutas esta linea\n console.log(__dirname);\n Ejecutara lo siguiente: ","Jarvis: ",1000);
console.log(__dirname);
await banner("Puedes observar el directorio donde estes xD","Jarvis: ",1000);

await banner("Si ejecutas esta linea\n console.log(__filename);\n Ejecutara lo siguiente: ","Jarvis: ",1000);
console.log(__filename);
await banner("Puedes observar el nombre del archivo xD","Jarvis: ",1000);

await banner("Si ejecutas esta linea\n console.log(setImmediate);\n Ejecutara lo siguiente: ","Jarvis: ",1000);
console.log(setImmediate);
await banner("Puedes observar propiedades del modulo setImmediate xD","Jarvis: ",1000);

await banner("Si ejecutas esta linea tenemos un periodico \n console.log(process);\n Ejecutara lo siguiente: ","Jarvis: ",1900);
await codigo(process,2000)
await banner("Puedes observar propiedades del modulo process que SON BASTANTES","Jarvis: ",1900);

await banner("Si puedes no usar variables globales aqui te presento como deberias declararlas para evitar problemas\n global.miVariable = 'elValor';\n y si luego le haces el llamado de esta forma\n console.log(miVariable);\n verias lo siguiente: ","Jarvis: ",1000);
global.miVariable = 'elValor';
await codigo(miVariable,1000);
await banner("Puedes observar el valor de miVariable","Jarvis: ",1000);

// await codigo("HOLA")
console.log(`Terminando proceso... ADIOS!! vuelva pronto SIR, ${nombre}, ${nombre2}`)
}
main();


/* let i = 0;
let intervalo = setInterval(function () {
    console.log("hola mundoooooo");
    i++
    if (i === 3) {
        clearInterval(intervalo);
    }
}, 100);

let intervalo1= setInterval(function () {
    console.log("Modulos");
    if (i === 3) {
        clearInterval(intervalo1);
    }
    i++
}, 100);
 */

/* console.log("###########======##########"); */