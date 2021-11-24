function soyAsincrona(hola) {
  console.log("Probando la funcion y saludando a " + hola);
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
      " a:b dividir es multiplicar por el inverso multipilcativo de b, \nelemento inverso asociado a la multiplicacion es a por uno partido b"
  );
  console.log((a * 1) / b);
}

soyAsincronaDos(2, 2);
