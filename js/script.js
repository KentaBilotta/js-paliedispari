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

