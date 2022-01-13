try {
//!  ██████╗ ██████╗      ██╗███████╗ ██████╗████████╗███████╗
//! ██╔═══██╗██╔══██╗     ██║██╔════╝██╔════╝╚══██╔══╝██╔════╝
//! ██║   ██║██████╔╝     ██║█████╗  ██║        ██║   ███████╗
//! ██║   ██║██╔══██╗██   ██║██╔══╝  ██║        ██║   ╚════██║
//! ╚██████╔╝██████╔╝╚█████╔╝███████╗╚██████╗   ██║   ███████║
//!  ╚═════╝ ╚═════╝  ╚════╝ ╚══════╝ ╚═════╝   ╚═╝   ╚══════╝
let id = 1;
let HaroldCorzo = {
  id: id++,
  name: 'Harold',
  apellido: 'Corzo',
  edadMuerte: 36,
  causaDeMuerte: 'Bola_cancerigena_en_boca_del_estomago',
  mujerName: 'Ruth_Pertúz',
  seEscondeEn: 'Finca_de_su_hermano',
  prestidigitacion: 'Murío_por_drogadicto',
  asesinadoPor: function(causaDeMuerte) {
    console.log(`Id ${this.id++}`,`Persona: ${this.name} ${this.apellido} ${this.edadMuerte} años`)
    console.log('Muerto_por: ', this.causaDeMuerte,'\n Se dice en las calles que',this.prestidigitacion,`Quien_lo_Dice?: ${this.mujerName}`+'\n')
  }
}
HaroldCorzo.asesinadoPor();
//! ┌┬┐┌─┐┌┬┐┌─┐┬  ┌─┐┌┬┐┌─┐╔═╗┌─┐┬─┐┌─┐┌─┐┌┐┌
//!  │ ├┤ │││├─┘│  ├─┤ │ ├┤ ╠═╝├┤ ├┬┘└─┐│ ││││
//!  ┴ └─┘┴ ┴┴  ┴─┘┴ ┴ ┴ └─┘╩  └─┘┴└─└─┘└─┘┘└┘
function Person(name,apellido,edad,edadMuerte,causaDeMuerte,mujerName,madreName,seEscondeEn,prestidigit) {
  this.id = function() {return id++ }();
  this.name = name;
  this.apellido = apellido;
  this.edad = edad;
  this.edadMuerte = edadMuerte;
  this.causaDeMuerte = causaDeMuerte;
  this.mujerName = mujerName;
  this.madreName = madreName;
  this.seEscondeEn = seEscondeEn;
  this.prestidigit = prestidigit;
  this.asesinadoPor = function(param) {
    console.log(`Id ${this.id}`,` Persona: ${this.name} ${this.apellido} ${this.edadMuerte} años`)
    console.log('Muerto_por: ', this.causaDeMuerte+param,'\n Se dice en las calles que',this.prestidigit,`Quien_lo_Dice?: ${this.madreName}`+"\n")
    return this.asesinadoPor;
  }
}
const RodrigoMoreno = new Person('Rodrigo','Moreno',29,'?','Bola_cancerigena_en_boca_del_estomago','Murío_por_drogadicto',madreName='Ruth_Pertúz','Finca_de_su_hermano','Murío_por_drogadicto',undefined);
// console.log(RodrigoMoreno.asesinadoPor(' ControlarDedeAquiUnparametro'));
RodrigoMoreno.asesinadoPor(' aun no sé');


//! ╦╔═╗╔╗╔╔═╗╔╦╗╦╦  ╦╔═╗
//! ║╚═╗║║║╠═╣ ║ ║╚╗╔╝║ ║
//!╚╝╚═╝╝╚╝╩ ╩ ╩ ╩ ╚╝ ╚═╝

console.log('================BANEER======================================');
console.log('$$$$$$$$$$$$$$$$CAPTURETHEASSASINS$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$\n');

const captureTheAssasins = function(un, param){
  return {
    linea1: '\t\t'+`Id: ${un}`+` Persona: ${this.name} ${this.apellido} ${this.edadMuerte} años`+"\n",
    linea2: '\t\44\t\t'+'Asesinado_por: '+param+'\n\r Se dice en las calles que'+this.prestidigit+`Quien_lo_Dice?: ${this.madreName}`+"\n",
  } 
  
}
const a = captureTheAssasins(id,name='Ruth_Elena',apellido='Pertuz',param='wtf',edadMuerte=undefined,prestidigit=' ella Fué ',madreName='Los_hechos');
console.log(a.linea1,a.linea2);

console.log('$$$$$$$$$$$$$$$$CAPTURETHEASSASINS$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$');
console.log('================BANEER======================================\n');

//todo */ ┌─┐┌─┐┬  ┌─┐┌─┐┌┬┐┬┌─┐┌┐┌  ┌─┐┬ ┬┌┐┌┌─┐┌┬┐┬┌─┐┌┐┌┌─┐
//todo */ │  │ ││  ├┤ │   │ ││ ││││  ├┤ │ │││││   │ ││ ││││└─┐
//todo */ └─┘└─┘┴─┘└─┘└─┘ ┴ ┴└─┘┘└┘  └  └─┘┘└┘└─┘ ┴ ┴└─┘┘└┘└─┘
console.log('88888888888888888888888888888888888BANEER88888888888888888888888888888888888888');
console.log('$$$$$$$$$$$$$$$$CAPTURETHEASSASINS$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$');
console.log('================BANEER======================================');

const pb = {
    0: apply = (num, f) => f(num),
    1: double = (num) =>  2 * num ,
    2: square = (num) =>  num * num ,
    3: print = (e) =>  console.log(e),
}; 
// console.log(pb[3](apply(1, double)));
// pb[3](double(1, double));
// pb[3](double(2, double));
// pb[3](double(4, double));
// console.log(pb[1](apply(4, double)));
// console.log(pb[1](apply(4, square)));
// console.log(pb[2](apply(4, double)));
// console.log(pb[2](square(4, double)));

function pagina1() {
  return {
    pag0: `${pb[3](double(1, double))}`,
    pag1: `${pb[3](double(2, double))}`,
    pag2: `${pb[3](double(4, double))}`,
    pag3: `${console.log(pb[1](apply(4, double)))}`,
    pag4: `${console.log(pb[1](apply(4, square)))}`,
    pag5: `${console.log(pb[2](apply(4, double)))}`,
    pag6: `${console.log(pb[2](square(4, double)))}`,
  }
}
let matrix = () =>  pagina1() ;
matrixRecargado = [matrix,pagina1]
console.log(matrixRecargado[1]());


console.log('$$$$$$$$$$$$$$$$CAPTURETHEASSASINS$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$');
console.log('88888888888888888888888888888888888BANEER88888888888888888888888888888888888888');

dollars = ["40$","30$","48$","44$","60$","1160$"];

//?map
let prices = [];
for (let i=0 ; i<dollars.length ; i++) {
    prices[i] = Number(dollars[i].slice(0, dollars[i].length - 1));
}; // print(prices);

//?mapZoomer
prices = [];
for (const dollar of dollars) {
    prices.push(Number(dollar.slice(0, dollar.length - 1)));
}; //print(prices)

//?map2021
x = [];
dollars.forEach((pos) => {
    x.push(Number(pos.replace('$', '').split(',')[0]));
}); //print(x)

//?map2021Hacker
prices$ = dollars.map( (dollar) => Number(dollar.slice(0, dollar.length-1)) );
// print(prices$);

//?filterManual
let expensive = [];
for (const price of prices) { price>=20 ? expensive.push(price) : NaN ;}; 
// print(expensive);

//?filter
expensive$ = prices.filter((prices) => prices>=20);
// print(expensive$);

//?ReduceManual
sum = 0;
for(price of expensive) { sum += price ;};
// print(sum)

//?Reduce
sum$ = expensive.reduce( (acc, curr) => acc + curr)
// print(sum$)

//todo Mix
exp_ = dollars
    .map( dollar => Number(dollar.slice(0, dollar.length-1)) )
    .filter( price => price >= 20 )
    .reduce( (acc, curr) => acc+curr);
    // print(exp_);

//todo Manual
exp_ = 0; 
for(const dollar of dollars) {
    const price = Number(dollar.slice(0, dollar.length -1));
    if (price >= 20) {
        exp_ += price;
    };
}; // print(exp_)

exp_ = prices;
exp$ = exp_.map(price => ({price, currency: '$'}));
exp$.forEach( (obj) => obj.price += 99 ); 
print(exp$);

console.time('Tiempo de uno')
setTimeout( () => console.log('time'), 2000);
console.timeEnd('Tiempo de uno');

var maxNumberInArray =  Math.max.apply(Math, exp_);
console.log('maxNumberInArray ',maxNumberInArray, typeof(maxNumberInArray))
print('$$$$$$$$$$$$$$$$$$$$$$$$\n')

var n = ["(2,1)", "(4,2)", "(6,3)", "(8,4)", "(3,5)", "(1,6)", "(7,7)", "(5,8)"];
let Z = [], y =[];
n.forEach((pos) => {
    Z.push(Number(pos.replace('(', '').replace(')', '').split(',')[0]));
    y.push(Number(pos.replace('(', '').replace(')', '').split(',')[1]));
    });
const setX = new Set(Z)
const setY = new Set(y)

const flat = y.flatMap(n => n);
const flat1 = Z.flat(2);
console.log('prueba',flat1)
const ho = flat.reduce( (ac,e) => ac+e)
console.log(ho)



solveNQ();
function printSolution(board){
  for(var i=0; i<n; i++){
    for(var j=0; j<n; j++){
      document.write(" "+board[i][j]+" ");
    }
    document.write("<br>");
  }
  document.write("<br>");
}

function isSafe(board, row, col){

  // Checks the ← direction
  for(var i=0; i<col; i++){
    if (board[row][i] === 1) {
      return false;
    }
  }

  // Checks the ↖ direction 
  for(var i=row, j=col; i>=0 && j>=0; i--, j--){
    if (board[i][j] === 1) {
      return false;
    }
  }

  // Checks the ↙ direction 
  for(var i=row, j=col; j>=0 && i<n; i++, j--){
    if (board[i][j] === 1){
      return false;
    }
  }

  return true;
}


function recurseNQ(board, col){
  if(col===n){
      printSolution(board); // <-- print another solution when n==8
    return;  
  }

  for(var i=0; i<n; i++){
    if(isSafe(board, i, col)){
      board[i][col]=1;

      recurseNQ(board, col+1);
      //if(recurseNQ(board, col+1)===true) //<-- you don't need this
          // return true;

      board[i][col]=0;
    }
  }
  return false;
}


function solveNQ(){
  var board = generateBoard(n);
  recurseNQ(board, 0);
  //if(recurseNQ(board, 0)===false){
    //console.log("No solution found");
   // return false;
 // }
 // printSolution(board);
}

function generateBoard(n){
  var board=[];
  for(var i=0; i<n; i++){
    board[i]=[];
    for(var j=0; j<n; j++){
      board[i][j]=0;
    }
  }
  return board;
}


} catch(e) { console.error(e.stack,'\n'+e.name,'\n'+e.message) };