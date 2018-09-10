// Oualid El Khalki
// Aplicatie en mediaontwikkelaar
// pizza calculator

  alert ('Welkom bij pizzeria Oualid!'); //geeft een bericht wanneer je naar een site gaat\

var smallpizza = prompt("hoeveel small pizza's wilt u?"); // Ik maak hier de vragen die de klant moet beantwoorden
var mediumpizza = prompt("hoeveel medium pizza's wilt u?");
var largepizza = prompt("hoeveel large pizza's wilt u?");
var adres = prompt("wat is uw adres?") 
var Naam = prompt("Wat is uw Voornaam en achternaam");
var telefoonnummer = prompt("Wat is uw telefoonnummer")


const prijssmall = smallpizza * 5;    //IK geef hier De prijzen aan per pizza maat
const prijsmedium = mediumpizza * 7.5;
const prijslarge = largepizza * 10;

var totaal = prijssmall + prijsmedium + prijslarge ; // Ik laat hier zien wat het totaal is




document.write("aantal Small Pizza's:" + smallpizza); // hier laat ik wat ze hebben geantwoord zien op het scherm
document.write("<br>" + "prijs:" + prijssmall +" euro" );
document.write("<br>" + "<br>" + "aantal Mediums Pizza's:" + mediumpizza);
document.write("<br>" + "prijs:" + prijsmedium +" euro" );
document.write("<br>" + "<br>" + "aantal large Pizza's:" + largepizza);
document.write("<br>" + "prijs:" + prijslarge + " euro");

document.write("<br>" + "<br>" + "Uw totale Prijs is:" + totaal +" Euro")

document.write("<br>" + "<br>" + "<br>" + "<br>" + "Uw gegevens zijn:");
document.write("<br>" + "<br>" + "Uw voornaam en achternaam: " + Naam );
document.write("<br>" + "<br>" +"Uw telefoonnummer: " + telefoonnummer);
document.write("<br>" +"<br>" + "de bestelling word bezorgt op: " + adres);


