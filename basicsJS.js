try {
/*// ? ██████╗  █████╗ ███████╗██╗ ██████╗
  // ? ██╔══██╗██╔══██╗██╔════╝██║██╔════╝
  // ? ██████╔╝███████║███████╗██║██║
  // ? ██╔══██╗██╔══██║╚════██║██║██║
  // ? ██████╔╝██║  ██║███████║██║╚██████╗
  // ? ╚═════╝ ╚═╝  ╚═╝╚══════╝╚═╝ ╚═════╝*/
  // * * caja,espacio en memoria,declarar,definir: const: cajas donde no cambia el valor del contenido.
  // * * caja,espacio en memoria,declarar,definir: let,var: cajas de contenido variable.

// ! Declarando una caja de valor constante: const = Math.PI
// ! Data type String,texto: let dataTypeString = "Esto es un string";
// ! Number,numero: let dataTypeNumber = 1234123412;

// todo //$   Operadores Aritmeticos: +,-,*,/,//,% 
// todo //$   	+,-,*,/: Suma,Resta,Multiplicacion,Division. 
// todo // 	 +: let caja1=1; let caja2=2; console.log(caja1+caja2);  /* ouput: 3 */ 		 
// todo // 	    +: let c=1; let a=2; console.log(c + ca);  /* ouput: 3 */ let c=1; let a=2; console.log(c+ca);  /* ouput: 3 */		 
// todo // 	      +: let c_=1; let a_=2; console.log(c_ + a_);  /* ouput: 3 */ let lattice=1; let piroxeno=2; console.log(lattice+piroxeno);  /* ouput: 3 */ 
// todo // 	      -: c_=1; a_=2; console.log(c_- a_);  /* -1 */ let olivino=1; antracita=2; console.log(olivino-antracita);  /* ouput: -1 */ 
// todo // 	      -: let btc=1; let btc_=2; console.log(btc- btc_);  /* -1 */ btc=1; let eth=2; console.log(btc-eth);  /* ouput: -1 */ 
// todo // 	     *: console.log(btc * btc_);  /* 2 */ console.log(eth * btc_);  /* 4 */ 
// todo // 	   *: eth = (btc * btc_);  /* eth: 2 */ eth = (eth * btc_);  /* 2 */ 
// todo // 	 /: ant = (piroxeno / lattice);  /* ant: 2 */ pir = (eth / 0);  /* infinity */ 
// todo //$  /: nk = ( pir / pir ); /* NaN */
// todo //$    /: ed = ( 0 / pir );  /* 0 */ escalar = ( nk / ed );  /* 0 */

 /* String:  */let string="holaMundo"; console.log(string);   /* ouput: holaMundo */		 
 /* +:  */let caja1=1; let caja2=2; console.log(caja1+caja2);  /* ouput: 3 */		 
    /* +: */ var c=1; let a=2; console.log(c + a);  /* ouput: 3 */ var c=1; a=2; console.log(c+a);  /* ouput: 3 */	/* // ! las variables se pueden redeclarar, let no */	 
     /*  +: */ let c_=1; let a_=2; console.log(c_ + a_);  /* ouput: 3 */ let lattice=1; let piroxeno=2; console.log(lattice+piroxeno);  /* ouput: 3 */ 
      /* -:  */c_=1; a_=2; console.log(c_- a_);  /* -1 */ let olivino=1; let antracita=2; console.log(olivino-antracita);  /* ouput: -1 */ 
     /*  -: */ let btc=1; let btc_=2; console.log(btc- btc_);  /* -1 */ btc=1; let eth=2; console.log(btc-eth);  /* ouput: -1 */ 
     /* *:  */console.log(btc * btc_);  /* 2 */ console.log(eth * btc_);  /* 4 */ 
   /* *:  */eth = (btc * btc_);  /* eth: 2 */ eth = (eth * btc_);  /* 4 */ 
/* /:  */ant = (piroxeno / lattice);  /* ant: 2 */ console.log(pir = (eth / 0));  /* infinity */ 
 /* /:  */nk = ( pir / pir );  /* NaN */ const cuatro="$\4$"
  /* /:  */console.log(ed = ( 0 / pir )); /* 0 */ console.log(pir/1);  /* infinty */console.log(cuatro);  /* infinty */
  // todo //$   	%: Residuo:Modulo:Cociente
	/* %:  */ mc = 2128 % 3;  /* 1 */ console.log("hola",mc,mc%5," jeje"); console.log("[-]",mc%0,`\n[+] ${mc/0} ${mc+0} ${mc-0} ${mc*0} \n`);
      /* %:  */ console.log(cn=2120, mc%cn, cn%mc, cn%1, cn%3, cn%5, cn%7, cn%9, cn%0, cn%13 );
        /* %:  */ console.log(mc, mc%cn, cn%mc, mc%1, mc%3, mc%5, mc%7, mc%9, mc%0, mc%13 );
          /* %:  */ console.log(cn, mc, cn%1, cn%2, cn%4, cn%8, cn%7, cn%5, cn%11, cn%13 );
          	/* %:  */ console.log(cn, mc, mc%1, mc%2, mc%4, mc%8, mc%7, mc%5, mc%11, mc%13 );
              /* %:  */ console.log(cn, mc, cn%3, cn%6, cn%3, cn%6, cn%3, cn%6, cn%3, cn%6 );
          	   /* %:  */ console.log(cn, mc, mc%3, mc%6, mc%9, mc%3, mc%6, mc%9, mc%36, mc%39 );
          	  /* %:  */ console.log("\nfiz si: " +mc%3 +" fiz si: "+mc%5,"fizbuzz si: "+!mc%3,"fizbuzz si: "+!!!mc%5,);
          	/* %:  */ console.log("\n\t\tinfinity % 2: " +pir%2 +"\n\tinfinity % 0: "+pir%0,"\ninfinity%infinity "+pir%pir);
        /* **: */ console.log("\ninfinity ** 2: " +pir**2 +"\n\tinfinity ** 0: "+pir**0,"\n\t\tinfinity%infinity "+pir**pir);
      /* **: */ console.log("\n\t\t:D " +cn**2 +"\n\t:D "+cn**0,"\n:D "+cn+mc);
    /* **: */ console.log("\n\t\t:D " +cn**2 +"\n\t:D "+cn**0,"\n:D "+cn+mc);
// todo //$   Comparadores Aritmeticos: typeof,<<,>>,>>>, ++, --, ==, !==, ^, <, >, <=, >=, !, !!, !!!, &&, ||, ??, ?:, |,
/* typeof: */ console.log(typeof(cn),typeof(mc),typeof(pir),nk,":wtf:",typeof(nk));
  /* typeof: */ console.log(ty=(a)=>{return typeof(a)}, ty(cn),ty(nk),ty(string),ty(cuatro),ty(ty))
  /* <<: */ console.log(n=1 ,cn << 1,cn,cn*2*n,cn<<4,cn<<8,cn<<7,cn<<5);
  /*   <<: */ console.log("\t",n++,cn << 3,cn,cn*6*n,cn<<9,cn<<3,cn<<6,cn<<9);;
  /*      >>: */ console.log(n+n,cn >> 1,cn,cn*2*n,cn>>4,cn>>8,cn>>7,cn>>5);
  /*        >>: */ console.log("\t",n--,cn >> 1,cn,cn*2*n,cn>>4,cn>>8,cn>>7,cn>>5);
  /*          >>: */ console.log(n--,cn >> 3,cn,cn*6*n,cn>>3,cn>>6,cn>>3,cn>>9);
  /*       >>>: */ console.log("\t",n--,cn >>> 3,cn,cn*6*n,cn>>>3,cn>>>6,cn>>>3,cn>>>9);
  /*       >>>: */ console.log("\t",n--,cn >>> 1,cn,cn*2*n,cn>>>4,cn>>>8,cn>>>7,cn>>>5);
  /*       >>>: */ console.log("\t",n--,cn, cn = ty(cn), cn, cn+cn, !cn ,!!cn,!!!cn);
  /*       >>>: */ console.log(n--,cn, ty(!cn), ty(cn), cuatro, (c_=cuatro), c_ + c_);
  /*         >>>: */ console.log(n--, cuatro, (c_=cuatro), c_ + c_,c_+c_,c_,c_,c_,`${c_+c_}`);
  /*       ==: */ console.log(n++, cuatro==c_ , ty(cuatro),c_ !== c_, ty(c_),c_+c_,`${!c_+!!c_}`);
  /*      ^: */ console.log(n++,c_, pir/c_, pir^c_, c_^n++, c_^n--, ty(n--) , s=506353 );
  /*     ^: */ console.log(n++,"Una pareja de "+19, " y ", 19,añ=" años ",`viajaron ${365} dias, pero 5 de sus amigos le dijeron que se tenian que regresar por el: \n [*] ${1919365/5} [*] ` );
  /*      */ console.log(n++,`Dos niños ${"10"+" y "+"10"} ${añ} compran 14chocolates y 18panes, pero dos personas los ven y les dicen que son: \n [*] ${10101418/2} [*] ` );
// ! //$$ <,> !,!!,!!!: Igual,Menor que,Mayor que. 
/* <: */ console.log(n++,`\n[*] ${cn < 10101418/2} [*]\t[*] ${pir < 10101418/2} [*]\n` );
  /* >: */ console.log(n++,`\n[*] ${cn > 10101418/2} [*]\v[*] ${pir > 10101418/2} [*]\n` );
   /* <>!: */ console.log(n++,`\n[*] ${pir < 10101418/2} [*]\t[*] ${!pir > 10101418/2} [*]\n` );
   // todo //$   	<=,>=,!: Menor igual que, Mayor igual que, Diferente. 
    /* !!!: */ console.log(`\t\t[*] ${!pir === !!!pir} [*]\t[*] ${pir !== pir} [*]\t` );
      // todo //$   	!!,!!!: Diferente diferente, diferente diferente diferente. 
        /* !!!: */ console.log(`\b\b[*] ${!!!pir === !!!pir} [*]\b[*] ${!!!pir !== !!!pir} [*]\b` );
        /* !!!: */ console.log(`\t\t[+] ${pir}  [+]\b[+] ${pir} [+]\b` );
        /* ~: */ console.log(`\t\t[+] ${~pir}~  [+]~\b[+] ~${pir}~ [+]~\b[+] ${~pir|~pir}~ [+]\b` );
      // ? //$     ~, &&, ||:  Y, O.
    /* &&,|| */ console.log(cn && pir, cn || pir, cn||cn, pir&&pir,  c_&&c_,  c_||c_, !c_&&!c_, !!!c_||!c_) 
// ? //$   Condicionales: if, for, while, 
  // ? //$   if: if(caja comparador caja) 
    /* * */ var age = (age >= 18) ? 'adult' : 'minor'; console.log(age)
    /* * */ age = (pir > !pir) ? 'adult' : 'minor'; console.log(age+=pir+age+!age+!!age+!!!pir)
    /* * */ age = (!!!pir > !!!pir) ? 'adult' : 'minor'; console.log(age+=pir+age+!age+!!age+!!!pir)
    /* * */ if(age >= 18) {console.log("Adult")} else {console.log("Minor")}; 
    /* * */ if(pir >= !pir) {console.log("Adult")} else {console.log("Minor")}; 
    /* if? */ pir = (age >= 18) ? age : pir ; console.log(age,pir)
console.table( array = [
  {a1 :  true && true},     // t && t devuelve true
  {a2 :  true && false},   // t && f devuelve false
  {a3 : false && true },    // f && t devuelve false
  {a4 : false && (3 == 4)}, // f && f devuelve false
  {a5 : 'Cat' && 'Dog'},   // t && t devuelve Dog
  {a6 : false && 'Cat'},   // f && t devuelve false
  {a7 : 'Cat' && false}]);
prueba = (cn !== pir) ? array : ty(array); console.log(prueba,prueba.length)
console.log(array[4], cuatro, array['4'], ty(array), array.length,age)
if(array['a1'] !== array.length) {return console.table(array = [
    {a1 :  true || true},     // t && t devuelve true
    {a2 :  true || false},   // t && f devuelve false
    {a3 : false || true },    // f && t devuelve false
    {a4 : false || (3 == 4)}, // f && f devuelve false
    {a5 : 'Cat' || 'Dog'},   // t && t devuelve Dog
    {a6 : false || 'Cat'},   // f && t devuelve false
    {a7 : pir || false}]
)}

// ? Mostrar en consola:
//* * console.log(); /* console.log(dataTypeString) */ /* console.log(dataTypeNumber) */
//* * console.info(); /*  console.info(dataTypeString) */ /* console.info(dataTypeNumber) */
//* * console.error(); /* console.error(dataTypeString) */ /* console.error(dataTypeNumber) */
//* * console.table(); /* console.table(dataTypeString) */ /* console.table(dataTypeNumber) */

// ? Mostrar en navegador:
// ! alert(); /* alert(dataTypeString) */ /* alert(dataTypeNumber) */
// ? Pedir datos en navegador:
// ! prompt(); /* prompt(dataTypeString) */ /* prompt(dataTypeNumber) */

// ? Llamando variables: "",``,''

// ? Llamando objetos:






} catch (err) {
	console.error(err.stack, "\n[-] " + err.name + "\n[+] " + err.message);
}
