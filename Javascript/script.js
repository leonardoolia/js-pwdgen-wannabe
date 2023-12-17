// Recuperiamo l'elemento HTML (1)
const element = document.getElementById('element');
console.log(element);

// Prepariamo il messaggio (2)
let message = 'La tua password è: ';
console.log(message);

//Dichiariamo le variabili e chiediamo nome, cognome, colore (3,4)
const firstName = prompt('Qual è il tuo nome?', 'Leonardo');
console.log(firstName);

const secondName = prompt('Qual è il tuo cognome?', 'Olia');
console.log(secondName);

const favoriteColor = prompt('Qual è il tuo colore preferito?', 'Viola');
console.log(favoriteColor);

const passwordNumber = '21';
console.log(passwordNumber);

// Generiamo la password (6)

const userPassword = firstName + secondName + favoriteColor + passwordNumber;
console.log(userPassword);




