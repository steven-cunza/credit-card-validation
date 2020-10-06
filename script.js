let cardNumber = document.getElementsByClassName("ccnumber");//la segunda palabra en js es en inicial may`uscula
const donarbt = document.getElementById("bt-donar");//Nombres mas decriptivos
const message = document.getElementById("message");
const header = document.getElementsByTagName("header");
const main = document.getElementsByTagName("main");
let meimg = document.getElementById("me-img");
let memessage = document.getElementById("me-message");
let messagecontainer = document.getElementById("messagecontainer");
let returb = document.getElementById("return");
let smaerror = document.getElementById("smaerror")

let numberstring = cardNumber[0].value.toString();
let total = 0;

message.classList.add("notshow");
smaerror.classList.add("notshow");

donarbt.addEventListener("click", function (e) {
    e.preventDefault();

    let numtosti = cardNumber[0].value.toString();
    let numtoarr = Array.from(numtosti);
    let lastfour = numtoarr.slice(numtoarr.length - 4);
    let numtoarrback = numtoarr.reverse();
      
    let i = 0;
    for (i = 0; i < numtoarrback.length; i++) {
       numtoarrback[i] =  parseInt( numtoarrback [i]);
    }
    console.log(numtoarrback);

    for (i = 0; i < numtoarrback.length; i++) {
      if (i % 2 !== 0) {
        numtoarrback[i] = (numtoarrback[i] * 2)
      } 
    }
    console.log(numtoarrback);
    
    for (i = 0; i < numtoarrback.length; i++ ) {
      if (numtoarrback[i] > 9) {
        numtoarrback[i] = numtoarrback[i] % 10 + Math.floor(numtoarrback[i] / 10); 
      }
    }
    console.log(numtoarrback);

    for (i = 0; i < numtoarrback.length; i++ ) {
      total += numtoarrback[i];
    }
    console.log(total);
    
    if (cardNumber[0].value === "") {
      smaerror.classList.remove("notshow");
      cardNumber[0].classList.add("wrongformat");
      smaerror.innerText = "No puede dejar el espacio vacío"
    } 
      else if (isNaN(total) === true) {     
      console.log("Por favor escriba solo números (0-9)");
      smaerror.innerText = "Por favor escriba solo números (0-9)";
      smaerror.classList.remove("notshow");
      cardNumber[0].classList.add("wrongformat");
      total = 0;
    } 
      else if (total.toString().endsWith("0") === true) { 
      valida();
      cardNumber[0].classList.remove("wrongformat");
      
    } else {
      invalida();      
      cardNumber[0].classList.remove("wrongformat");
    }
    
    function valida() {      
      header[0].classList.add("notshow");//lineas iguales, Do not repeat yourself. Decidir en una sola funcion qu`e mensajes mostrar
      main[0].classList.add("notshow");
      message.classList.remove("notshow");
      meimg.classList.add("valida");
      memessage.innerText = `Su tarjeta XXXX XXXX XXXX ${lastfour[0]}${lastfour[1]}${lastfour[2]}${lastfour[3]} es válida en unos momentos su donación será procesada `;
      returb.innerText = "REGRESAR"
    }

    function invalida() {
      header[0].classList.add("notshow");
      main[0].classList.add("notshow");
      message.classList.remove("notshow");
      meimg.classList.add("invalida");
      memessage.innerText = `Lo sentimos su tarjeta XXXX XXXX XXXX ${lastfour[0]}${lastfour[1]}${lastfour[2]}${lastfour[3]} no es válida por favor intente de nuevo `;
      returb.innerText = "REGRESAR"
    }

    returb.addEventListener("click", function (e) {
      e.preventDefault();
      smaerror.classList.add("notshow");
      header[0].classList.remove("notshow");
      main[0].classList.remove("notshow");
      message.classList.remove("notshow");
      meimg.classList.remove("invalida");
      meimg.classList.remove("valida");
      message.classList.add("notshow");
      total = 0;
      cardNumber[0].value = '';
    })
})