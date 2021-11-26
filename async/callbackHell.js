const cortana = " la iA! ";
let eter = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let transformer = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let a = eter[1];
let b = transformer[1];
let c = a * b;

function si(a, b) {
  setTimeout(function () {
    if ((a, b)) {
      result = true;
      console.log(result);
      console.log(c);
    }
  }, 1);
}
si(a, b);

function hola(nombre, miCallback) {
  setTimeout(function () {
    console.log("Hola " + nombre);
    miCallback(nombre);
  }, 1000);
}

function hablar(callBackHablar) {
  setTimeout(function () {
    console.log(
      "Como estas? sabias que un gugol es 10 elevado a 100?"
    );
    callBackHablar();
  }, 1100);
}

function adios(nombre, otroCallback) {
  setTimeout(function () {
    console.log(
      "Eso " + nombre + " es mi velocidad\ny poder de procesamiento"
    );
    otroCallback(nombre);
  }, 1800);
}

console.log("[+] Iniciando proceso...");
hola("Platzi", function (nombre) {
  hablar(function () {
    adios(nombre, function () {
      console.log("[-] Adios " + nombre + " Terminando proceso...");
    });
  });
});

/* Estamos ocupados o estamos siendo productivos?
ENFOCATE */
