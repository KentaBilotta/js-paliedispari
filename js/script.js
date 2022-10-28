// chiedere all'utente di inserire una parola e creare una funzione che verifichi che sia palindroma

let parola = prompt("Inserisci una parola");
let output = document.getElementById("palindroma");

function reverseWord (parola) {
    return parola.split("").reverse().join("");
}

let reverse = reverseWord(parola);
console.log(reverse);

if (parola == reverse) {
    console.log("La parola è palindroma");
    output.innerHTML = parola + " è polindroma";
} else {
    console.log("La parola non è polindroma");
    output.innerHTML = parola + " non è polindroma";
}

// chiedere all'utente pari o disparie di inserire un numero; generiamo un numero random per il computer; facciamo la somma dei due numeri e stabilire chi è il vincitore

let userPariDispari = prompt("pari o dispari?");
document.getElementById("user-pd").innerHTML = userPariDispari;

let userNumber = parseInt(prompt("Inserisci un numero da 1 a 5"));
document.getElementById("user-number").innerHTML = userNumber;

function getRandomInteger (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
let computerNumber = getRandomInteger (1, 5);
document.getElementById("computer-number").innerHTML = computerNumber;

let somma = userNumber + computerNumber;
document.getElementById("somma").innerHTML = somma;

if ((somma % 2 == 0 && userPariDispari == "pari") || (somma % 2 !== 0 && userPariDispari == "dispari")) {
    document.getElementById("winner").innerHTML = "Hai vinto!"
} else {
    document.getElementById("winner").innerHTML = "Hai perso"
}