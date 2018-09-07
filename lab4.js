// Oualid El Khalki
// Aplicatie en mediaontwikkelaar
// pizza calculator

alert ('Welkom bij pizzaria Oualid!'); //geeft een bericht wanneer je naar een site gaa
var smallpizza = prompt("hoeveel small pizza's wilt u? Prijs is 5 euro per stuk."); //krijgt een vraag met hoeveel small pizzas je wilt
var mediumpizza = prompt("hoeveel medium pizza's wilt u? Prijs is 7.50 euro per stuk. "); //krijgt een vraag met hoeveel medium pizzas je wilt
var largepizza = prompt("hoeveel large pizza's wilt u? Prijs is 10 euro per stuk");//krijgt een vraag met hoeveel large pizzas je wilt 
var adres = prompt ("wat is uw adres?") 

const prijssmall = smallpizza * 5 ; //geeft prijs aan van smallpizza
const prijsmedium = mediumpizza * 7.50 ; //geeft prijs aan van medium pizza
const prijslarge = largepizza * 10 ; // geeft prijs aan van large pizza


var totaal = prijssmall + prijsmedium + prijslarge ; // vertelt wat het totaal is

document.write("aantal Small Pizza's:" + smallpizza); // laat aantal small pizzas zien op het scherm
document.write("<br>" + "prijs:" + prijssmall + " euro " ); // laat de prijs zien

document.write("<br>" + "<br>" + "aantal Mediums Pizza's:" + mediumpizza); 
document.write("<br>" + "prijs:" + prijsmedium +" euro" );

document.write("<br>" + "<br>" + "aantal large Pizza's:" + largepizza);
document.write("<br>" + "prijs: " + prijslarge + " euro");

document.write("<br>" + "<br>" + "Uw totaal prijs:" +  totaal +" euro" );// laat totale prijs zien

document.write("<br>" +"<br>" + "de bestelling word bezorgt op: " + adres);





 