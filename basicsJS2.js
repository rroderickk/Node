try {
    const string="holaMundo"
    let age = 1/0;
// ! ██╗███████╗ pir = (age >= 18) ? age : pir ; console.log(age,pir)
// ! ██║██╔════╝
// ! ██║█████╗ 
// ! ██║██╔══╝
// ! ██║██║
// ! ╚═╝╚═╝ pir = (age >= 18) ? age : pir ; console.log(age,pir)
    /* if */ pir = (age >= 18) ? age : pir ; console.log(pir,"[$$]",age)
// ! ██╗███████╗// ! ██╗███████╗// ! ██╗███████╗// ! ██╗███████╗// ! ███████╗// ! ███████ !
// ? ███████╗// ? ███████╗// ? ███████╗// ? ███████╗// ? ███████╗// ? ███████╗// ? ██████ ?
// ! ██╗███████╗// ! ██╗███████╗// ! ██╗███████╗// ! ██╗███████╗// ! ███████╗// ! ███████ !
 /* function */ foo = (b) => console.log(b);                         // ? ███████╗
//! /* function */ function foo() {console.log('bar');}              // ? ██╔════╝
hola = foo(string);                                                  // ? █████╗
bar = () => {console.log(`\t$$foo()= ${age+string+age} $$`)}; bar(); // ? ██╔══╝
foo(`${foo}\n ${bar}\v ${pir}`);                                     // ? ██║
                                                                     // ? ╚═╝
        /* f */ pi = (n) => { if(!n) {return null} else if (n==0) {foo(0)} ;foo(Math.PI*n);}; pi() /* pi*n */
    /* f */ console.log(pi(0),pi(1),pi(2),pi(4),pi(8),pi(7),pi(5)); 
    /* f */ console.log(pi(0),pi(3),pi(6),pi(9),pi(3),pi(6),pi(9),pi['0']=string); 
    /* f */ console.log(pi[0], pi(0), pi['1']=age, `${pi(3)}`, Object.values(JSON.stringify(pi[0]))); pi(4)
        /* f */ for (var i in pi[0]){console.log(pi[i], i)};
            /**
             * @param variable mixed  The var to log to the console
             * @param varName string  Optional, will appear as a label before the var
            */    var obj = {field1: 'xyz', field2: 2020};
                function dd(variable, varName,text) { var varNameOutput;
            varName = varName || '';
        varNameOutput = varName ? varName + '' : '';
    console.warn(text,varNameOutput, variable/* , ' (' + (typeof variable) + ')' */);} dd(); 
dd(pi,'',''); dd(obj, '\n',""); dd(foo,"",""); dd("[+]","[+]",''); dd(bar,'',''); dd("\t","dd(string)",''); dd(dd,'',''); dd("[+]","[+]",''); dd(obj,'',''); dd(pi,'','\n'); 

function printObj(obj) {
console.log((function traverse(tab, obj) {
    let str = "";
    if(typeof obj !== 'object') {
        return obj + ',';
    }
    if(Array.isArray(obj)) {            
        return '[' + obj.map(o=>JSON.stringify(o)).join(',') + ']' + ',';
    }
    str = str + '{\n';
    for(var p in obj) {
        str = str + tab + ' ' + p + ' : ' + traverse(tab+' ', obj[p]) +'\n';
    }
    str = str.slice(0,-2) + str.slice(-1);                
    str = str + tab + '},';
    return str;
}('',obj).slice(0,-1)))}; printObj(dd); printObj(Object); printObj(printObj)
//! printObj(console)
/* f */ var dog = [{name: 'Perro1 ', habla: "¡Woff!: 2020 ya está aquí!!"},
    /* f */ { name: 'Perro2 ', habla: "¡Wow!: que nos trajó el niño dios papá?!!"}];
        /* f */ printObj(`\n${dog[0].name}: ${dog[0].habla}\n ${dog[1].name} ${dog[1].habla}\n ${ dog.push({name: 'Perro3 ', habla: "¡Wow!¡Wof!"}), dog[2].name+ dog[2].habla}\n`)
            // ? --WRAP// ? --WRAP// ? --WRAP// ? --WRAP// ? --WRAP// ? --WRAP// ? --WRAP// ? --WRAP// ? --WRAP
        /* w */ A = (o) => { printObj(o) };
    /* w */ A(`\n||${string}\v${string}\\\v${string}\\\v${string}\\\v${string}`);
 /* w */ A(`\t\t\t${string}/\n\t\t${string}/\n\t${string}/\n||${string}||\n||${string}||`);
A(`\t${string}`);A(`\t\t${string}\\`);A(`\t\t\t${string}.`); console.table(dog); //todo A(console)

// ? ███████╗// ? ███████╗// ? ███████╗// ? ███████╗// ? ███████╗// ? ███████╗// ? ██████ ?
// ! ██╗███████╗// ! ██╗███████╗// ! ██╗███████╗// ! ██╗███████╗// ! ███████╗// ! ███████ !
// ? ███████╗// ? ███████╗// ? ███████╗// ? ███████╗// ? ███████╗// ? ███████╗// ? ██████ ?
// Se crean y asignan cuatro variables de una sola vez,
// separadas por comas
var myObj = new Object(),     //* ,adPPYba,              88                88
    str = 'myString',       //* a8"     "8a              88                "" 
    rand = Math.random(),   //* 8b       d8              88  
    obj = new Object();     //* "8a,   ,a8"              88,dPPYba,        88
                             //* `"YbbdP"'               88P'   "8a        88
myObj.type                 = 'Sintaxis de puntos';//*    88      d8        88
myObj['fecha de creación'] = 'Cadena con espacios';//*   88b,  ,a8         88
myObj[str]                 = 'Valor de cadena';//*       8Y'Ybbd8'         88     8888
myObj[rand]                = Math.random();//*                            ,88     8888
myObj[obj]                 = 'Object';//*                              888P"
myObj['']                  = 'Incluso una cadena vacía'; console.warn(myObj);

/* f */function getRandomArbitrary(min, max) {
        return Math.round(Math.random() * (max - min) + min),0;
            }; nRa = (min,max) => {return Math.round(Math.random() * (max - min) + min);}
                //! Numeros Aleatorios
            function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
} nRi = (min,max) => {return Math.floor(Math.random() * (max - min)) + min;}
//!Paletas de colores aleatorias
dd("nRa",`rgb(${nRa(0,999)} ${nRa(0,999)} ${nRa(0,999)})` /* ${nRa(0,999)}  */ ,"Colores: ")
    dd("nRa",`#${nRa(0,9)}f${nRa(0,9)}`,"Colores: ")
    dd("nRi",`rgb(${nRi(0,999)}, ${nRi(0,999)}, ${nRi(0,999)})` /* ${nRa(0,999)}  */ ,"\tColores: ")
dd("nRi",`#${nRi(0,9)}f${nRi(0,9)}`,"\tColores: ");
//!Paletas de colores aleatorias
dd(".",`#ff${nRi(0,9)}${nRa(0,9)}`,`\v${i++} Colores: `);                                          //!███████╗                                           
dd(".",`#${nRi(0,9)}${nRi(0,9)}${nRa(0,9)}${nRa(0,9)}`,`${i++} Colores: `);                        //!██╔══██╗
dd(".",`#ff${nRi(0,9)}${nRi(0,9)}${nRa(0,9)}${nRa(0,9)}`,`${i++} ColoresR: `);                     //!██████╔╝
dd(".",`#${nRi(0,9)}${nRi(0,9)}ff${nRa(0,9)}${nRa(0,9)}`,`${i++} ColoresG: `);                     //!██╔══██╗
dd(".",`#${nRi(0,9)}${nRi(0,9)}${nRa(0,9)}${nRa(0,9)}ff`,`${i++} ColoresB: `);                     //!██║  ██║
dd(".",`#${nRi(0,9)}${nRi(0,9)}${nRi(0,9)}${nRi(0,9)}${nRa(0,9)}${nRa(0,9)}`,`${i++} Colores: `); //! ╚═╝  ╚═╝
                                      
                                    // ██████╗  ██████╗ ██████╗                                   //* ██████╗
                                    // ██╔══██╗██╔════╝ ██╔══██╗                                  //* ██╔════╝
                                    // ██████╔╝██║  ███╗██████╔╝                                  //* ██║  ███╗
                                    // ██╔══██╗██║   ██║██╔══██╗                                  //* ██║  ███╗
                                    // ██║  ██║╚██████╔╝██████╔╝                                  //* ██║   ██║
                                    // ╚═╝  ╚═╝ ╚═════╝ ╚═════╝                                   //* ╚██████╔╝
                                                                                                  //*  ╚═════╝
const Al='#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
dd("\n"+Al,Al,Al);dd(Al,Al,Al);dd(Al,Al,randomColor(255));dd(Al,Al,Al);dd(Al,Al,Al);dd("\r"+Al,"\r"+Al,Al);
                                                                                                  //?██████╗
                                                                                                  //?██╔══██╗
                                                                                                  //?██████╔╝
                                                                                                  //?██╔══██╗
                                                                                                  //?██████╔╝
                                                                                                  //?╚═════╝
function randomColor(brightness){
    function randomChannel(brightness){
        var r = 255-brightness;
        var n = 0|((Math.random() * r) + brightness);
        var s = n.toString(16);
        return (s.length==1) ? '0'+s : s;
    }
    return '#' + randomChannel(brightness) + randomChannel(brightness) + randomChannel(brightness);
} dd(".[+].\n",randomColor(nRi(0,255)),"Colors: ");
//! Matrix 6x6 numeros aleatorios
    rC = () => { dd(`#${nRi(0,9)}${nRi(0,9)}${nRi(0,9)}${nRi(0,9)}${nRa(0,9)}${nRa(0,9)}`,`#${nRi(0,9)}${nRi(0,9)}${nRi(0,9)}${nRi(0,9)}${nRa(0,9)}${nRa(0,9)}`,`#${nRi(0,9)}${nRi(0,9)}${nRi(0,9)}${nRi(0,9)}${nRa(0,9)}${nRa(0,9)}`)}; 
    rC();rC();rC();console.log("\b");

        //! Matrix 6x6 numeros aleatorios minimos maximos
        rCmm = function(mi,ma) { dd(`#${nRi(mi,ma)}${nRi(mi,ma)}${nRi(mi,ma)}${nRi(mi,ma)}${nRa(mi,ma)}${nRa(mi,ma)}`,`#${nRi(mi,ma)}${nRi(mi,ma)}${nRi(mi,ma)}${nRi(mi,ma)}${nRa(mi,ma)}${nRa(mi,ma)}`,`#${nRi(ma,mi)}${nRi(ma,mi)}${nRi(ma,mi)}${nRi(ma,mi)}${nRa(ma,mi)}${nRa(ma,mi)}`)}; 
        rCmm(1,9);rCmm(0,9);rCmm(0,9);console.log("\b");

        //! Matrix 6x6 numeros aleatorios controlados 
        rCc = function(p,l,a,t,z,i) { dd(`#${nRi(p,l)}${nRi(p,l)}${nRi(p,l)}${nRi(p,l)}${nRa(p,l)}${nRa(p,l)}`,`#${nRi(a,t)}${nRi(a,t)}${nRi(a,t)}${nRi(a,t)}${nRa(a,t)}${nRa(a,t)}`,`#${nRi(z,i)}${nRi(z,i)}${nRi(z,i)}${nRi(z,i)}${nRa(z,i)}${nRa(z,i)}`)}; 
        rCc(3,6,9,9,6,9);rCc(9,9,9,9,9,9);rCc(3,6,9,9,6,9); console.log("\b");
        rCc(3,6,3,6,3,6);rCc(6,6,6,6,6,6);rCc(3,6,3,6,3,6);console.log("\b");
        rCc(Al,Al,Al);rCc(Al,Al,Al);rCc(Al,Al,Al);A("[+] batman [+]\n")
                                                                                                        
        //! Matrix 6x6 numeros aleatorios controlados cruzado
        rCcp = function(p,l,a,t,z,i) { dd(`#${nRi(p,l)}${nRi(a,t)}${nRi(z,i)}${nRi(p,l)}${nRa(a,t)}${nRa(z,i)}`,`#${nRi(p,l)}${nRi(a,t)}${nRi(z,i)}${nRi(p,l)}${nRa(a,t)}${nRa(z,i)}`,`#${nRi(p,l)}${nRi(a,t)}${nRi(z,i)}${nRi(p,l)}${nRa(a,t)}${nRa(z,i)}`)}; 
        rCcp(1,2,4,8,7,5);rCcp(1,2,4,8,7,5);rCcp(1,2,4,8,7,5); console.log("\b");

    //! Matrix 6x6 hsl 
    rCh = (h,s,l) => { dd(`hsl(${nRi(h,h)}deg ${nRi(s,s)}% ${nRi(l,l)}%)`,``,``)}; 
    rCh(360,100,100);rCh(360,100,100);rCh(360,100,100);console.log("\b");

//! Matrix 6x6 hslfullAleatorio
rChf = (h,h_,s,s_,l,l_) => { dd(`hsl(${nRa(h,h_)}deg ${nRa(s,s_)}% ${nRa(l,l_)}%)`,``,``)}; 
rChf(0,40,0,100,0,100);rChf(0,40,0,100,0,100);rChf(0,40,0,100,0,100);console.log("\b");
rCc(Al,Al,Al);rCc(Al,Al,Al);rCc(Al,Al,Al);A("[+] batman [+]") //! banner */








//? Otra forma de escribir una funcion
// var neim = function(a,b) {console.log("Aleatorios: ",a+~b);}; neim(nRi(2128,2128),nRa(1,9))       //* ██████╗


// ? Mostrar en consola: 
//* * console.log(); /* console.log(dataTypeString) */ /* console.log(dataTypeNumber) */
//* * console.info(); /*  console.info(dataTypeString) */ /* console.info(dataTypeNumber) */
//* * console.error(); /* console.error(dataTypeString) */ /* console.error(dataTypeNumber) */
//* * console.table(); /* console.table(dataTypeString) */ /* console.table(dataTypeNumber) */

// ? Mostrar en navegador:
// ! alert(); /* alert(dataTypeString) */ /* alert(dataTypeNumber) */
// ? Pedir datos en navegador:
// ! prompt(); /* prompt(dataTypeString) */ /* prompt(dataTypeNumber) */

// ? Llamando variables:

// ? Llamando objetos:






} catch (err) {
	console.error(err.stack, "\n[-] " + err.name + "\n[+] " + err.message);
}

