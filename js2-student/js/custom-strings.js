/* 01.
Sukurti du kintamuosius. Jiems priskirti savo mylimo aktoriaus vardą ir pavardę kaip stringus (Jonas Jonaitis). 
Atspausdinti trumpesnį stringą.
*/

console.log("custom-String.js1");

const uzduotis1A = "Jonaitis";
const uzduotis1B = "Petraitis";

if (uzduotis1A.length < uzduotis1B.length) {
    console.log(uzduotis1A);
}   else {
    console.log(uzduotis1B);
}

/* 02.
Sukurti du kintamuosius. Jiems priskirti savo mylimo aktoriaus vardą ir pavardę kaip stringus. 
Vardą atspausdinti tik didžiosiom raidėm, o pavardę tik mažosioms. (LEONARDO dicaprio)
*/

console.log("custom-String.js2");

const uzduotis2A = "Jonas";
const uzduotis2B = "Petraitis";

console.log(`${uzduotis2A.toUpperCase()} ${uzduotis2B.toLowerCase()}`);

/* 03.
Sukurti du kintamuosius. Jiems priskirti savo mylimo aktoriaus vardą ir pavardę kaip stringus. 
Sukurti trečią kintamąjį ir jam priskirti stringą, sudarytą iš pirmų vardo ir pavardės kintamųjų raidžių. Jį atspausdinti.
*/

console.log("custom-String.js3");

const uzduotis3A = "Jonas";
const uzduotis3B = "Petraitis";

let uzduotis3C = `${uzduotis3A.charAt(0)}${uzduotis3B.charAt(0)}`;

console.log(uzduotis3C);

/* 04.
Sukurti du kintamuosius. Jiems priskirti savo mylimo aktoriaus vardą ir pavardę kaip stringus. 
Sukurti trečią kintamąjį ir jam priskirti stringą, sudarytą iš trijų paskutinių vardo ir pavardės kintamųjų raidžių. Jį atspausdinti.
*/

console.log("custom-String.js4");
const uzduotis4A = "Jonas";
const uzduotis4B = "Petraitis";

const uzduotis4CRezultatas = `${uzduotis4A.slice(-3)} ${uzduotis4B.slice(-3)}`;
console.log(uzduotis4CRezultatas);

/* 05.
Sukurti kintamąjį su stringu: “An American in Paris”. Jame visas “a” (didžiąsias ir mažąsias) pakeisti žvaigždutėm “*”.  
Rezultatą atspausdinti.
*/

console.log("custom-String.js5");
const uzduotis5 = "An American in Paris";

const uzduotis5R = uzduotis5.replaceAll('a', '*');
const uzduotis5Rezultatas = uzduotis5R.replaceAll('A', '*');

console.log(uzduotis5Rezultatas);

/* 06.
Sukurti kintamąjį su stringu: “An American in Paris”. Jame ištrinti visas balses. Rezultatą atspausdinti. 
Kodą pakartoti su stringais: “Breakfast at Tiffany's”, “2001: A Space Odyssey” ir “It's a Wonderful Life”.
*/

console.log("custom-String.js6");
const uzduotis6A = "An American in Paris";
const uzduotis6B = "Breakfast at Tiffany's";
const uzduotis6C = "2001: A Space Odyssey";
const uzduotis6D = "It's a Wonderful Life";

const raidesA = uzduotis6A.replaceAll(/[aieouy]/gi, "");
const raidesB = uzduotis6B.replaceAll(/[aieouy]/gi, "");
const raidesC = uzduotis6C.replaceAll(/[aieouy]/gi, "");
const raidesD = uzduotis6D.replaceAll(/[aieouy]/gi, "");

console.log(raidesA);
console.log(raidesB);
console.log(raidesC);
console.log(raidesD);

/* 07.
Stringe, kurį generuoja toks kodas: "Star Wars: Episode "+ " ".repeat( Math.ceil(Math.random() * 10))+(Math.ceil (Math.random() * 7)+1) + " - A New Hope"; Surasti ir atspausdinti epizodo numerį.
*/

//"Star Wars: Episode "+ " ".repeat( Math.ceil(Math.random() * 10))+(Math.ceil (Math.random() * 7)+1) + " - A New Hope"

console.log("custom-String.js7");
const uzduotis7 = "Star Wars: Episode "+ " ".repeat( Math.ceil(Math.random() * 10))+(Math.ceil (Math.random() * 7)+1) + " - A New Hope";
const skaicius = uzduotis7.match(/\d+/gi);

console.log(uzduotis7);
console.log(skaicius);

/* 08.
Suskaičiuoti kiek stringe “Don't Be a Menace to South Central While Drinking Your Juice in the Hood” yra 
žodžių trumpesnių arba lygių nei 5 raidės. 
Pakartokite kodą su stringu “Tik nereikia gąsdinti Pietų Centro, geriant sultis pas save kvartale”.
*/

console.log("custom-String.js8");

var uzduotis8A = "Don't Be a Menace to South Central While Drinking Your Juice in the Hood";
var uzduotis8B = "Tik nereikia gąsdinti Pietų Centro, geriant sultis pas save kvartale";

var galutinis1=0;
var galutinis2=0;

//operuojame su pirmu sakiniu
zodis8A=uzduotis8A.split(" ")

for (i= 0 ; i < zodis8A.length; i++) {
    if (zodis8A[i].length <= 5) {
        galutinis1++;
    };
}
console.log(`Bendras kiekis zodziu (pirmo sakinio) yra ${zodis8A.length}`);
console.log(galutinis1);

//operuojame su antru sakiniu
zodis8B=uzduotis8B.split(" ")

for (i= 0 ; i < zodis8B.length; i++) {
    if (zodis8B[i].length <=5) {
        galutinis2++;
    };
}
console.log(galutinis2);
console.log(`Bendras kiekis zodziu (antro sakinio) yra ${zodis8B.length}`);

/* 09.
Parašyti kodą, kuris generuotų atsitiktinį stringą iš lotyniškų mažųjų raidžių. Stringo ilgis 3 simboliai.
*/

console.log("custom-String.js9");
 const latin = "abcdefghijklmnopqrstuvwxyz";
 const size = latin.length;
var raide = [];

 for (i=0; i<3; i++) {
    raide[i] = latin.charAt(Math.floor(Math.random() * size));
 }
    
console.log(raide.join(""));

/* 10. 
Parašykite kodą, kuris generuotų atsitiktinį stringą su 10 atsitiktine tvarka išdėliotų žodžių, o žodžius generavimui imtų iš 8-me uždavinyje pateiktų dviejų stringų. Žodžiai neturi kartotis. (reikės masyvo)
*/

