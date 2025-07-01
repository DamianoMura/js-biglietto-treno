//variables 
let age;
let distance;
let price;
const pricePerKm= 0.21;


alert("Benvenuto nella biglietteria di CrazyTrain \n premi ok per selezionare la tratta e la tua età");
//inseriamo i dati
distance=parseInt(prompt("inserisci la distanza che vuoi percorrere in km"));
age=parseInt(prompt("inserisci la tua età"));

//calcoliamo il prezzo senza sconti
price= distance * pricePerKm;

//verifichiamo eventuali sconti
if (age<18){
  let discount = price / 100 * 20;  //troviamo il 20% 
  price = price - discount;         //applichiamo lo sconto
 }
else if (age>65){
  let discount = price / 100 * 40; //troviamo il 40%
  price = price - discount;        //applichiamo lo sconto
}

