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
 */
function dd(variable, varName) {
    var varNameOutput;

    varName = varName || '';
    varNameOutput = varName ? varName + ':' : '';

    console.warn(varNameOutput, variable, ' (' + (typeof variable) + ')');
} dd(); 
dd(pi); 
var obj = {field1: 'xyz', field2: 2016};
dd(obj, 'My Cool Obj'); 







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

