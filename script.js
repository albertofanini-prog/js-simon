console.log('prova');

//Generare 5 numeri casuali e visualizzarli in pagina con un alert
//Avviare un timer di 30 secondi dopo la chiusura dell'alert
//Alla fine dei 30 secondi
    //User deve inserire i numeri che ha visto precedentemente
    //Tramite prompt()
//Il software comunica quanti e quali numeri sono stati indovinati


//Creare array in cui inserire i numeri generati
const numArray = [];

//Generare 5 numeri random e inserirli nell'array
while(numArray.length < 5){
    //Generare numeri random da 1 a 100
    const number = Math.floor(Math.random() * 100) + 1;

    //Inserire i numeri nell'array
    if(numArray.indexOf(number) === -1) numArray.push(number);
}
console.log(numArray);

//Comunicare i numeri generati
alert(`I numeri generati sono: ${numArray}`);