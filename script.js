console.log('prova');

//Generare 5 numeri casuali e visualizzarli in pagina con un alert
//Avviare un timer di 30 secondi dopo la chiusura dell'alert
//Alla fine dei 30 secondi
    //User deve inserire i numeri che ha visto precedentemente
    //Tramite prompt()
//Il software comunica quanti e quali numeri sono stati indovinati

//Welcome
alert(
    `
    Mmorizza i 5 numeri che vedrai in seguito e aspetta cinque secondi.
    `
)

//Contenitore dei numeri random da presentare
const randomNumbers = [];
console.log(randomNumbers);
//Contenitore dei numeri inseriti dall'user
const userNumbers = [];
console.log(userNumbers);
//Contenitore dei numeri indovinati
const guessedNumbers = [];
console.log(guessedNumbers);

//Generare 5 numeri casuali
function randomN(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random()*(max-min+1)+min);
}

//Inserire i numeri nel contenitore
do{
    const numbers = randomN(1, 10);

    if(randomNumbers.includes(numbers)===false){
        randomNumbers.push(numbers);
    }

} while (randomNumbers.length <= 5)

//Mostrare i numeri
alert(
    `
    ${randomNumbers.join(' - ')}.
    `
);


//Creare timeout

setTimeout(timeoutF, 300);

function timeoutF() {

    //Chiedere i numeri ricordati e inserirli
    do{
        
        const askIt = parseInt(prompt('Inserisci i numeri che hai memorizzato.'));
        userNumbers.push(askIt);

        if(randomNumbers.includes(askIt)){
            guessedNumbers.push(askIt);
        }

    } while (userNumbers.length < randomNumbers.length);
    //Comunicare l'esito
    alert(
        `
        Hai indovinato ${guessedNumbers.length} numeri su ${randomNumbers.length}.
        Hai indovinato ${guessedNumbers.join(' - ')}.
        `
    )
}
