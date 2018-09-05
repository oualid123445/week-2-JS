// Oualid El Khalki
// Aplicatie en mediaontwikkelaar
// pizza calculator


var smallpizza = prompt("hoeveel small pizza's wilt u?"); //krijgt een vraag met hoeveel small pizzas je wilt
var mediumpizza = prompt("hoeveel medium pizza's wilt u?"); //krijgt een vraag met hoeveel medium pizzas je wilt
var largepizza = prompt("hoeveel large pizza's wilt u?");//krijgt een vraag met hoeveel large pizzas je wilt 


const prijssmall = smallpizza * 5; //geeft prijs aan van smallpizza
const prijsmedium = mediumpizza * 7.5; //geeft prijs aan van medium pizza
const prijslarge = largepizza * 10; // geeft prijs aan van large pizza


var totaal = prijssmall + prijsmedium + prijslarge ; // vertelt wat het totaal is

document.write("aantal Small Pizza's:" + smallpizza); // laat aantal small pizzas zien op het scherm
document.write("<br>" + "prijs:" + prijssmall ); // laat de prijs zien

document.write("<br>" + "<br>" + "aantal Mediums Pizza's:" + mediumpizza); 
document.write("<br>" + "prijs:" + prijsmedium );

document.write("<br>" + "<br>" + "aantal large Pizza's:" + largepizza);
document.write("<br>" + "prijs: " + prijslarge);

document.write("<br>" + "<br>" + "Totaal:" + totaal) // laat totale prijs zien
 