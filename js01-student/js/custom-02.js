/* 
Užduotis 1
Naudodami while loop, konsolėje parašykite nuo 10 iki 1. 
*/
console.log("--custom-02-1--")

let i=10;

while (i>0) {
    console.log(i);
    i--;
}


/* 
Užduotis 2
Naudodami for loop, konsolėje parašykite nuo 10 iki 1.
*/
console.log("--custom-02-2--")

for (j=10; j>0; j--) {
    console.log(j);
}


/*
Užduotis 3
Per mėnesį avių skaičius išauga 4 kartais. Naudodami while loop ir tris nurodytus kintamuosius, išveskite avių skaičių 12 mėnesių.

let numAvys = 4;
let numMenuo = 1;
let kiekMenSpausdinti = 12;

Štai kaip atrodys pirmos dvi eilutės:

Po 1 mėnesio(-ių) bus 16 avių!
Po 2 mėnesio(-ių) bus 64 avių!
*/

console.log("--custom-02-3--")

let numAvys = 4;
let numMenuo = 1;
let kiekMenSpausdinti = 12;

while (numMenuo<kiekMenSpausdinti) {
    numMenuo++;
    numAvys=numAvys*4;
    console.log(`Po ${numMenuo} menesnio (-iu) bus ${numAvys} aviu!`);
}

/*
Užduotis 4
Atlikite užduotį JS 03 su for loop
*/
console.log("--custom-02-4--")

let numAvys1 = 4;
let numMenuo1 = 1;
let kiekMenSpausdinti1 = 12;

for (numMenuo1; numMenuo1<kiekMenSpausdinti1; numMenuo1++) {
    numAvys1=numAvys1*4;
    console.log(`Po ${numMenuo1} menesnio (-iu) bus ${numAvys1} aviu!`);
}

/*
Užduotis 5
Hidroeleketrinėje yra 19 generatorių. Pirmi 4 gamina po 62 MW, likusieji 15 - po 124 MW. Inžinieriai paprašė tavęs sukurti du ciklus (loops), 
kurie vienas po kito įjungia visus 19 generatorių ir atspausdina generuojamų MW skaičių. 
Pirmiems 4 generatoriams panaudok while loop, likusiems 15 - for loop. 
Kiekviena spausdinama eilutė turėtų atrodyti taip (koreguojant currentGen ir totalMW):

Generatorius #1 įjungtas, pridėjo 62 MW, viso generuojama 62 MW!
Generatorius #2 įjungtas, pridėjo 62 MW, viso generuojama 124 MW!

Naudokis tokiais kintamaisiais:
let currentGen = 1;
let totalGen = 19;
let totalMW = 0;
*/
console.log("--custom-02-5--")

let currentGen = 1;
let totalGen = 19;
let totalMW = 0;

for (currentGen; currentGen<=4; currentGen++) {
    totalMW=totalMW+62;
    console.log(`Generatorius #${currentGen} įjungtas, pridėjo 62 MW, viso generuojama ${totalMW} MW!`);
}

while (currentGen<19 && currentGen>3) {
    currentGen++;
    totalMW=totalMW+124;
    console.log(`Generatorius #${currentGen} įjungtas, pridėjo 124 MW, viso generuojama ${totalMW} MW!`);
}

/*
Užduotis 6
Keli pakeitimai JS 05 užduočiai. Veikia tik lyginiai generatoriai. Panaudok tik vieną for loop. 
Nepamiršk, kad pirmi 4 generatoriai gamina po 62 MW, o likusieji 15 - po 124 MW.

Konsolės formatas:

Generatorius #1 išjungtas.
Generatorius #2 įjungtas, pridėjo 62 MW, viso generuojama 62 MW!

Naudojami kintamieji:
let totalGen = 19;
let totalMW = 0;
*/
console.log("--custom-02-6--")
let totalGen1 = 19;
let totalMW1 = 0;
let ij=1;

for (ij; ij<=19; ij++) {
    if (ij<=4) {
            if (ij %2 ==0) {
                totalMW1 = totalMW1+62;
                console.log(`Generatorius ${ij} įjungtas, pridėjo 62 MW, viso generuojama ${totalMW1} MW!`);
            } else {
            console.log(`Generatorius ${ij} isjungtas`);
            }}
        else {
            if (ij %2 ==0) {
                totalMW1 = totalMW1+124;
                console.log(`Generatorius ${ij} įjungtas, pridėjo 124 MW, viso generuojama ${totalMW1} MW!`);
            } else {
                console.log(`Generatorius ${ij} isjungtas`);
        }}
    }

/*
Užduotis 7
Papildyk while loop taip, kad tik lyginiai skaičiai būtų spausdinami. 
Tavo rezultatas turėtų būti lyginiai skaičiai nuo 10 iki 2 žemėjančia tvarka.

let num=10;
while (num > 0) {

console.log(num);

num--;
}
*/
console.log("--custom-02-7--")

let num=10;
while (num > 0) {
    if (num % 2 ==0) {
        console.log(num);
    }
num--;
}

/*
Užduotis 8
Sukurk funkciją maxOf2, kuri priima du skaičius ir gražina didesnį skaičių. 
Nepamiršk galimybės, kad skaičiai bus lygūs. Tuo atveju gražink vieną iš skaičių.
*/
console.log("--custom-02-8--")

function maxOf2(nr1, nr2) {
    if (nr1 > nr2) {
        return nr1;
    } else if (nr2 > nr1) {
        return nr2;
    } else return nr1;
}

/*
Užduotis 9
Šiuo metu Lietuvoje yra 26 laipsniai pagal Farenheitą,
naudodamiesi JavaScript apskaičiuokite kokia temperatūra yra pagal Celsijų.

Būtinos sąlygos:
- Turime "string" kintamąjį su tekstu "Lietuvoje šiuo metu laipsnių pagal Celsijų"
- Negalima rašyti jokio papildomo teksto
- Temperatūra pagal Celsijų turi būti nurodyta vienas skaičius po kablelio
- Temperatūra turi būti konvertuojama iš Farenheito į Celsijų
- Rezultatą išvesti konsolėje

Rezultatas:
Lietuvoje šiuo metu -3.3 laipsnių pagal Celsijų
*/
console.log("custom-02-9")

const t=26;
console.log(`Lietuvoje šiuo metu ${((t-32)*5/9).toFixed(1)} laipsnių pagal Celsijų`)


/*
Užduotis 10
Turime masyvą, kuriame yra trumpos tekstinės eilutės (pateikta apačioje). Mūsų užduotis:
1. Sukurti funkciją, kuri rastų ilgiausią žodį tekstinėje eilutėje
2. Panaudojant šią funkciją išvesti kiekvienos eilutės ilgiausią žodį (rezultatas turi būti viena tekstinė eilutė)
3. Išvedant žodžius panaudoti tarpą tarp žodžių
4. Išvedimas turi būti dinamiškas (pasikeitus masyve esančių eilučių skaičiui - vis tiek gautume kiekvienos eilutės ilgiausią žodį)
5. Rezultatą išvesti konsolėje

// Masyvas
let posts = ["Sveikinu radus darbą", "Ar tikrai pabaigus kursą viskas bus gerai", "Javascript nėra Java", "Rasti video medžiagą visada šaunu"];
*/
console.log("custom-02-10")

let x = ["Ar", "tikrai", "pabaigus", "kursą", "viskas", "bus", "gerai"];
let y = x.length;
let zodis = x[y];
let ilgiausias = 0;
let ilgiausiasZodis = 0;
ik=0;

while (ik < x.length) {
    zodis = x[ik].length;
    if (ilgiausias < zodis) {
        ilgiausias=zodis;
        ilgiausiasZodis=x[ik];
    } 
    ik++;
}

console.log(ilgiausiasZodis);

/*
Užduotis 11
Įmonė nori įsigyti 2 baltus arba juodus tos pačios rūšies kompiuterius (būtinai vienos spalvos), kurių bendra kaina neviršytų 1600 €. 
Sugeneruokite sąrašą kompiuterių, kuriuos galite pasiūlyti.

Masyvas su objektais:

let pcs = [
{ "modelis":"lenovo idėja", "kaina":1234, "spalva":{"raudona":1,"žalia":2} },
{ "modelis":"hp monstras", "kaina":800, "spalva":{"juoda":2,"geltona":0} },
{ "modelis":"toshiba sriuba", "kaina":256, "spalva":{"mėlyna":3,"žalia":1} },
{ "modelis":"dell apskritimas", "kaina":697, "spalva":{"juoda":1,"balta":2} },
{ "modelis":"acer peizažas", "kaina":620, "spalva":{"juoda":4,"balta":2} },
{ "modelis":"apple 256", "kaina":2560, "spalva":{"balta":3,"juoda":1} },
{ "modelis":"asus pokšt", "kaina":1001, "spalva":{"juoda":2,"geltona":3} }
];

Būtinos sąlygos:
- Panaudokite bent po vieną ciklą ir sąlyginį sakinį,
- Rezultatas išvedamas konsolėje,
- Line break naudokite "\n".

Rezultatas turėtų atrodyti taip:

Galimi variantai:

Modelis: hp monstras
Kaina: 1600
Spalvos: juoda

Modelis: dell apskritimas
Kaina: 1394
Spalvos: balta

Modelis: acer peizažas
Kaina: 1240
Spalvos: balta ir juoda
*/
console.log("custom-02-11");

let pcs = [
    { "modelis":"lenovo idėja", "kaina":1234, "spalva":{"raudona":1,"žalia":2} },
    { "modelis":"hp monstras", "kaina":800, "spalva":{"juoda":2,"geltona":0} },
    { "modelis":"toshiba sriuba", "kaina":256, "spalva":{"mėlyna":3,"žalia":1} },
    { "modelis":"dell apskritimas", "kaina":697, "spalva":{"juoda":1,"balta":2} },
    { "modelis":"acer peizažas", "kaina":620, "spalva":{"juoda":4,"balta":2} },
    { "modelis":"apple 256", "kaina":2560, "spalva":{"balta":3,"juoda":1} },
    { "modelis":"asus pokšt", "kaina":1001, "spalva":{"juoda":2,"geltona":3} }
    ];

iz=0;
while (iz < pcs.length) {
    if (pcs[iz].spalva.balta >=2 || pcs[iz].spalva.juoda >=2) {
        if (pcs[iz].kaina*2 <=1600) {
            console.log(pcs[iz].modelis);
            console.log(pcs[iz].kaina*2);
            if (pcs[iz].spalva.balta %2 ==0) {
                console.log(pcs[iz].spalva);
            } else if (pcs[iz].spalva.juoda %2 ==0) {
                console.log(pcs[iz].spalva);
        }
    }
    iz++;
}
}
