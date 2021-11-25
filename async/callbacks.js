const cortana = " La iA!";

function soyAsincrona(hola) {
  console.log(
    "[+] Hola!, soy " +
      cortana +
      " y estoy probando la funcion y saludando a " +
      hola
  );
}

soyAsincrona("rodri");
soyAsincrona("platzi");

function soyAsincronaDos(a, b) {
  const trescuartos = 3 / 4;
  let multiplicoPorDos = trescuartos * 2;
  let dividoPorDos = trescuartos / 2;
  console.log(
    multiplicoPorDos * a + " elemento inverso asociado a la multiplicacion"
  );
  console.log(
    dividoPorDos * b +
      " :b dividir es multiplicar por el inverso multipilcativo de b, \nelemento inverso asociado a la multiplicacion es a por uno partido b"
  );
  function chao(rodri, otroCallback) {
    setTimeout(function (otrocallback) {
      console.log(
        "[-] Y adios " +
          [(rodri = "platzi")] +
          " buena noche! recuerda mi nombre soy" +
          cortana
      );
    }, 1000);
  }
  console.log("Entonces es igual a " + (a * 1) / b);
  setTimeout(function (miCallback = soyAsincrona("wtf")) {
    console.log("mientras estoy siendo asincrona " + [miCallback]);
    chao("rodri");
  }, 1000);
}

console.log("[+] Iniciando proceso...");
soyAsincronaDos(8, 8);
console.log("[-] Terminando proceso...");
/* Estamos ocupados o estamos siendo productivos?
ENFOCATE */
