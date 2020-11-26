// Un alert espone 5 numeri casuali diversi.
var numCasuali= [];
var numUtente;
while (numCasuali.length < 5) {
  var numeroCasuale = Casuale(1,100);
  var trovaNumero = in_array(numCasuali,numeroCasuale);
  if (trovaNumero == false) {
  numCasuali.push(numeroCasuale);
  }
}

console.log(numCasuali);
alert(numCasuali);
var maxtime = 3;
// da cambiare con 30

// Countdown di 30 secondi
var countdown = setInterval(function(){
  console.log(maxtime);
  maxtime = maxtime - 1;
  var numPresi=[];
  // Dopo 30 secondi l’utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.
  if(maxtime == 0) {
    clearInterval(countdown);
    setTimeout(function(){
      for(var i = 1; i <= 5; i++) {
      numUtente = (prompt("inserisci un numero"));
        if (in_array(numCasuali,numUtente)) {
          numPresi.push(numUtente);
          console.log("hai preso il numero " + numUtente);
          }else {
          console.log([i]);
        }
      }
      // Una volta inseriti i 5 numeri, il software dice quanti e quali numeri sono stati ricordati.

      document.write("Hai indovinato " + numPresi.length + " numeri");
      // scrivere fuori dalla console anche i numeri presi
    }, 1000);
  }
},1000);




// FUNZIONI

function Casuale(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function in_array (array,numero) {
  for(i = 0;  i<  array.length; i++) {
	  if (array[i] == numero) {
	  return true;
	  }
  }
    return false;
}
