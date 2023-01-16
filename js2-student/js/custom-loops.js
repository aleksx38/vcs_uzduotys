/*
alert("This is an alert message");
confirm("Ar tikrai norite pasirinkti?");
*/
//prompt("Ką norite įrašyti?");

/*
let turimVarda = false;

while (turimVarda == false) {
    let userVardas = prompt("Koks tavo vardas?");

    if(userVardas) {
        if(confirm(`Ar tikrai tavo vardas ${userVardas}?`)) {
            alert(`Labas, ${userVardas}`);
            turimVarda = true;
        } else {
            alert("Bandyk dar karta.")
        }
        } else {
            alert("Bandyk dar karta");
        }
    }
    */

/*
function sumOfCubes(a, b) {
    return a * a * a + b * b * b;
}

let mySum = sumOfCubes(5, 4);
console.log(mySum);
*/

/*
let numberList = [2, 3, 5, 8, 4,7,6,9,1,12];
let lyginiuKiekis = 0;

for (let i = 0; i < numberList.length; i++) {
    if(numberList[i] % 2 == 0) {
        lyginiuKiekis++;
    } else {
        numberList[i] = undefined;
    }
}

console.log(lyginiuKiekis);
console.log(numberList);
*/


/* LENGVESNI */

/* 01.
Sukurkite ciklą kuris atspausdintų 10 kartų žodį “labas”.
*/

for (let i=0; i < 10; i++) {
    console.log("labas");
}
 
/* 02.
Sukurkite ciklą kuris atspausdintų skaičius nuo 0 iki 9.
*/

for (let i=0; i<10; i++) {
    console.log(i);
}

/* 03.
Sukurkite masyvą su dešimt augalų pavadinimų.
*/

let uzduotis03 = ["augalas1", "aug2", "augal3", "as4", "augalas5", "augalas6", "augalas7", "s8", "augalas9", "augalas10"];

/* 04.
Atspausdinkite kiekvieną 3-čio uždavinio augalą atskiroje eilutėje.
*/

console.log("uzduotis 04");
for (let i=0; i < uzduotis03.length; i++) {
    console.log(uzduotis03[i]);
}

/* 05.
Atspausdinkite 3-čio uždavinio kiekvieną augalą pradedant nuo paskutinio, ir baigiant pirmuoju. (atvirkščias ciklas).
*/

console.log("uzduotis 05");
for (let i=9; i >-1; i--) {
    console.log(uzduotis03[i]);
}

/* 06.
Atspausdinkite kas antrą skaičių nuo 10 iki 50 (porinius);
*/

console.log("uzduotis 06");
for (let i=10; i <51; i++) {
    if (i % 2 ==0) {
        console.log(i);
    }
}

/* 07.
Atspausdinkite kas antrą skaičių nuo 10 iki 50. (porinius) Jei skaičius dalinasi iš 10 be liekanos jo nespausdinkite. ( naudokite continue.) (atspausdinti visus porinius skaičius, išskyrus tuos kurie dalinasi iš 10 be liekanos)
*/

console.log("uzduotis 07");
for (let i=10; i <51; i++) {
    if (i % 2 ==0) {
        if (i % 10 ==0) {continue;}
            console.log(i);}
}

/* 08.
Sukurkite ciklą kuris suktųsi nuo 0 iki 20. Suskaičiuokite, kiek kartų kintamasis i turėjo porinę reikšmę;
*/

console.log("uzduotis 08");
let uzduotis08 = 0;

for (let i=0; i <21; i++) {
    if (i % 2 ==0) {
        uzduotis08++;
    }
}
console.log(uzduotis08);

/* 09.
Suskaičiuokite kiek 3-čio uždavinio masyve yra žodžių trumpesnių nei 5 simboliai, ir kiek ilgesnių nei 7 simboliai.
*/
console.log("uzduotis 09");

//let uzduotis03 = ["augalas1", "aug2", "augal3", "as4", "augalas5", "augalas6", "augalas7", "s8", "augalas9", "augalas10"];

let trumpesnis5 = 0;
let ilgesnis7 = 0;

for (let i=0; i < uzduotis03.length; i++) {
   if (uzduotis03[i].length < 5) {
        trumpesnis5++;
    } else if (uzduotis03[i].length > 7 ) {
        ilgesnis7++;
    }
}

console.log(trumpesnis5);
console.log(ilgesnis7);

/* SUNKESNI */

/* 01.
Sugeneruokite 300 atsitiktinių skaičių nuo 0 iki 300, atspausdinkite juos atskirtus tarpais ir 
suskaičiuokite kiek tarp jų yra didesnių už 150.  Skaičiai didesni nei 275 turi būti atspausdinti skliausteliuose” [ ] “.
*/

console.log("uzduotis sunkesni 01");

let sunkUzduotis01 = [];
let j = 0;

for (let i=0; i <300; i++) {
    sunkUzduotis01[i] = Math.floor(Math.random()*301);
    if (sunkUzduotis01[i] > 150) {
        j++;
    }
    if (sunkUzduotis01[i] > 275) {
        sunkUzduotis01[i] = `[${sunkUzduotis01[i]}]`;
    }
}

console.log(sunkUzduotis01.join(" "));
console.log(`Turime ${j} kieki skaiciu, didesniu uz 150`);

/* 02.
Vienoje eilutėje atspausdinkite visus skaičius nuo 1 iki 3000, kurie dalijasi iš 77 be liekanos. 
Skaičius atskirkite kableliais. Po paskutinio skaičiaus kablelio neturi būti.
*/

console.log("uzduotis sunkesni 02");

let sunkUzduotis02=[];


for (let i=0; i <3000; i++) {
    if (i % 77 == 0) {
        sunkUzduotis02.push(i);
    }
}

console.log(sunkUzduotis02.join(", "));

/* 03.
Nupieškite kvadratą iš “*”, kurio kraštines sudaro 10 “*”.
* * * * * * * * * * *
* * * * * * * * * * *
* * * * * * * * * * *
* * * * * * * * * * *
* * * * * * * * * * *
* * * * * * * * * * *
* * * * * * * * * * *
*/

console.log("uzduotis sunkesni 03");

let sunkUzduotis03 = [];

for (let i=0; i <10; i++) {
    sunkUzduotis03[i] = '*';

}

for (let j=0; j<7; j++) {
console.log(sunkUzduotis03.join(" "));
}