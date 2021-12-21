try {


 /* +:  */let caja1=1; let caja2=2; console.log(caja1+caja2);  /* ouput: 3 */		 
    /* +: */ var c=1; let a=2; console.log(c + a);  /* ouput: 3 */ var c=1; a=2; console.log(c+a);  /* ouput: 3 */	/* // ! las variables se pueden redeclarar, let no */	 
     /*  +: */ let c_=1; let a_=2; console.log(c_ + a_);  /* ouput: 3 */ let lattice=1; let piroxeno=2; console.log(lattice+piroxeno);  /* ouput: 3 */ 
      /* -:  */c_=1; a_=2; console.log(c_- a_);  /* -1 */ let olivino=1; let antracita=2; console.log(olivino-antracita);  /* ouput: -1 */ 
     /*  -: */ let btc=1; let btc_=2; console.log(btc- btc_);  /* -1 */ btc=1; let eth=2; console.log(btc-eth);  /* ouput: -1 */ 
     /* *:  */console.log(btc * btc_);  /* 2 */ console.log(eth * btc_);  /* 4 */ 
   /* *:  */eth = (btc * btc_);  /* eth: 2 */ eth = (eth * btc_);  /* 4 */ 
/* /:  */ant = (piroxeno / lattice);  /* ant: 2 */ console.log(pir = (eth / 0));  /* infinity */ 
 /* /:  */nk = ( pir / pir );  /* NaN */
  /* /:  */console.log(ed = ( 0 / pir )); /* 0 */ console.log(pir/1)  /* infinty */



} catch (err) {
	console.error(err.stack, "\n[-] " + err.name + "\n[+] " + err.message);
}

