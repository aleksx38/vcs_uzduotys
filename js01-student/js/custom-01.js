/*
Uždavinių sprendimui nenaudoti, masyvų, ciklų ir savo parašytų funkcijų. JavaScript funkcijas žinoma naudokite (pageidautina).
Visi random generuojami skaičiai turi būti sveikieji.
*/

/* 01.
Sukurkite 4 kintamuosius, kurie saugotų jūsų vardą, pavardę, gimimo metus ir šiuos metus (nebūtinai tikrus). Parašykite kodą, kuris pagal gimimo metus paskaičiuotų jūsų amžių ir naudodamas vardo ir pavardės kintamuosius atspausdintų tokį sakinį :
"Aš esu Vardenis Pavardenis. Man yra XX metai(-ų)".
*/
console.log("uzduotis 1");
const vardas = "Alex";
const surname = 'Siktorovas';
const age = 1995;
const currentYear = 2023;

console.log(`Aš esu ${vardas} ${surname}. Man yra ${currentYear-age} metai(-ų)`);


/* 02.
Naudokite funkciją Math.random(). Sukurkite du kintamuosius ir naudodamiesi funkcija Math.random() jiems priskirkite atsitiktines reikšmes nuo 0 iki 4. Didesnę reikšmę padalinkite iš mažesnės. Atspausdinkite rezultatą jį suapvalinę iki 2 skaičių po kablelio.
*/
console.log("uzduotis 2");
const skaicius1 = Math.floor(Math.random() *5);
const skaicius2 = Math.floor(Math.random() *5);

const a = Math.max(skaicius1, skaicius2);
const b = Math.min(skaicius1, skaicius2);

const c = a/b;
const result = c.toFixed(2);

console.log(`number a is ${a}`);
console.log(`number b is ${b}`);
console.log(`divided number is ${c}`);
console.log(`rounded divided is ${result}`);


/* 03.
Naudokite funkciją Math.random(). Sukurkite tris kintamuosius ir naudodamiesi funkcija Math.random() jiems priskirkite atsitiktines reikšmes nuo 0 iki 25. Raskite ir atspausdinkite kintąmąjį turintį vidurinę reikšmę.
*/
console.log("uzduotis 3");
const number1 = Math.floor(Math.random() *26);
const number2 = Math.floor(Math.random() *26);
const number3 = Math.floor(Math.random() *26);

const number4 = (number1 + number2 + number3) / 3;

console.log(`number 1 is ${number1}`);
console.log(`number 2 is ${number2}`);
console.log(`number 3 is ${number3}`);
console.log(`average is ${number4}`);

/* 04.
Įvedami skaičiai - kr1, kr2, kr3 – kraštinių ilgiai, trys kintamieji (naudokite ​Math.random()​ funkcija nuo 1 iki 10). Parašykite JavaScript programą, kuri nustatytų, ar galima sudaryti trikampį ir atsakymą atspausdintų. 
*/
console.log("uzduotis 4")
const kr1 = Math.floor(Math.random() *10)+1; 
const kr2 = Math.floor(Math.random() *10)+1;
const kr3 = Math.floor(Math.random() *10)+1;

if (kr1 + kr2 > kr3 && kr2 + kr3 > kr1 && kr1 + kr3 >kr2) {
    console.log("Trikampis galimas");
}   else{
    console.log("Trikampis NEgalimas");
}
console.log(kr1);
console.log(kr2);
console.log(kr3);

/* 05.
Sukurkite keturis kintamuosius ir ​Math.random()​ funkcija sugeneruokite jiems reikšmes nuo 0 iki 2. Suskaičiuokite kiek yra nulių, vienetų ir dvejetų.
*/
console.log("uzduotis 5");
const yra1 = Math.floor(Math.random()*3);
const yra2 = Math.floor(Math.random()*3);
const yra3 = Math.floor(Math.random()*3);
const yra4 = Math.floor(Math.random()*3);

var nuliai=0;
var vienetai=0;
var dvejetai=0;
/*
for 
if (yra1 == 0) {
    nuliai++;
} else if (yra1 ==1) {
    vienetai++;
} else if (yra1 ==2) {
    dvejetai++;
}
if (yra2 == 0) {
    nuliai++;
} else if (yra2 ==1) {
    vienetai++;
} else if (yra2 ==2) {
    dvejetai++;
}

if (yra3 == 0) {
    nuliai++;
} else if (yra3 ==1) {
    vienetai++;
} else if (yra3 ==2) {
    dvejetai++;
}

console.log(yra1);
console.log(yra2);
console.log(yra3);
console.log(nuliai);
console.log(vienetai);
console.log(dvejetai);
*/

/* 06.
Naudokite funkcija Math.random(). Atspausdinkite 3 skaičius nuo -10 iki 10. Skaičiai mažesni už 0 turi būti  laužtiniuose skliaustuose [], 0 -  (), didesni už 0 {}.
*/
console.log("uzduotis 6");

let vr1 = Math.floor(Math.random()*21)-10;
if (vr1 >0) {
    console.log(`[${vr1}]`);
} else {
    console.log(`{${vr1}}`);
}
let vr2 = Math.floor(Math.random()*21)-10;
if (vr2 >0) {
    console.log(`[${vr2}]`);
} else {
    console.log(`{${vr2}}`);
}
let vr3 = Math.floor(Math.random()*21)-10;
if (vr1 >0) {
    console.log(`[${vr3}]`);
} else {
    console.log(`{${vr3}}`);
}

/* 07.
Įmonė parduoda žvakes po 1 EUR. Perkant daugiau kaip už 1000 EUR taikoma 3 % nuolaida, daugiau kaip už 2000 EUR - 4 % nuolaida. 
Parašykite programą, kuri skaičiuos žvakių kainą ir atspausdintų atsakymą kiek žvakių ir kokia kaina perkama. 
Žvakių kiekį generuokite ​Math.random()​ funkcija nuo 5 iki 3000.
*/
console.log("uzduotis 7");

let kiekiszv = Math.floor(Math.random()*2996)+5;
const kainazv = 1;
let galutinekaina=0;
let nuolaida=0;

if (kiekiszv*kainazv > 1000 && kiekiszv*kainazv < 2000) {
    galutinekaina = (kiekiszv * kainazv)*0.97;
    nuolaida=3;
}   else if (kiekiszv*kainazv > 2000) {
    galutinekaina = (kiekiszv * kainazv)*0.96;
    nuolaida=4;
} else {
    galutinekaina = kiekiszv * kainazv;
    nuolaida=0;
}

console.log(`zvakiu kiekis yra ${kiekiszv}`);
console.log(`sumoketa suma ${galutinekaina}`);
console.log(`nuolaida pritaikyta: ${nuolaida}%`);


/* 08.
Naudokite funkciją Math.random(). Sukurkite tris kintamuosius su atsitiktinėm reikšmėm nuo 0 iki 100. 
Paskaičiuokite jų aritmetinį vidurkį. Tada aritmetinį vidurkį atmetus tas reikšmes, kurios yra mažesnės nei 10 arba didesnės nei 90. 
Abu vidurkius atspausdinkite. Rezultatus apvalinkite iki sveiko skaičiaus.
*/
console.log("uzduotis 8");

const sk1 = Math.floor(Math.random()*101);
const sk2 = Math.floor(Math.random()*101);
const sk3 = Math.floor(Math.random()*101);

let sk = 3;
let arit2 = 0;
let suma = sk1 + sk2 + sk3;
const arit1 = Math.floor(suma/sk);

if (sk1 < 10 || sk1 > 90) {
    sk--;
    suma = suma-sk1;
} if (sk2 < 10 || sk2 > 90) {
    sk--;
    suma = suma-sk2; 
} if (sk3 < 10 || sk3 > 90) {
        sk--;
        suma = suma-sk3;
}

const aritmetinis2=Math.floor(suma/sk);

console.log(`skaicius 1 yra ${sk1}`);
console.log(`skaicius 2 yra ${sk2}`);
console.log(`skaicius 3 yra ${sk3}`);

console.log(`vidurkis 1 yra ${arit1}`);
console.log(`vidurkis 2 yra ${aritmetinis2}`);
console.log(`skaiciai panaudoti yra ${sk}`);

/* 09.
Padarykite skaitmeninį laikrodį, rodantį valandas, minutes ir sekundes. Valandom, minutėm ir sekundėm sugeneruoti panaudokite funkciją 
Math.random(). Sugeneruokite skaičių nuo 0 iki 300. Tai papildomos sekundės. Skaičių pridėkite prie jau sugeneruoto laiko. 
Atspausdinkite laikrodį prieš ir po sekundžių pridėjimo ir pridedamų sekundžių skaičių.
*/
console.log("uzduotis 9");

let sekundes = Math.floor(Math.random()*60);
let minutes = Math.floor(Math.random()*60);
let valandos = Math.floor(Math.random()*24);

let papildomamin = 0;
const papildomasek = Math.floor(Math.random()*301);

console.log(`Dabartinins laikas yra ${valandos} valandos, ${minutes} minutes ir ${sekundes} sekundes`);
sekundes = sekundes+papildomasek;

console.log(`naujos sekundes yra ${sekundes}`)

if (sekundes >= 60) {
    papildomamin = Math.floor(sekundes/60);
    sekundes = sekundes - papildomamin*60;
    minutes = minutes + papildomamin;
}
console.log(`Naujas laikas yra ${valandos} valandos, ${minutes} minutes ir ${sekundes} sekundes. Pridetos sekundes yra ${papildomasek}`);

/* 10.
Naudokite funkciją Math.random(). Sugeneruokite 6 kintamuosius su atsitiktinėm reikšmėm nuo 1000 iki 9999. 
Atspausdinkite reikšmes viename string'e, išrūšiuotas nuo didžiausios iki mažiausios, atskirtas tarpais. Naudoti ciklų ir masyvų NEGALIMA.
*/
console.log("uzduotis 10");

/*

const tk1 = Math.floor(Math.random()*9000+1000);
const tk2 = Math.floor(Math.random()*9000+1000);
const tk3 = Math.floor(Math.random()*9000+1000);
const tk4 = Math.floor(Math.random()*9000+1000);
const tk5 = Math.floor(Math.random()*9000+1000);
const tk6 = Math.floor(Math.random()*9000+1000);

tk1 < tk2 && tk1 < tk3 && tk1 < tk4 && tk1 < tk5 && tk1 < tk6
    skaicius6 = tk1
tk2 < tk1 && tk2 < tk3 && tk2 < tk4 && tk2 < tk5 && tk2 < tk6
    skaicius6 = tk2
tk3 < tk2 && tk3 < tk1 && tk3 < tk4 && tk3 < tk5 && tk3 < tk6
    skaicius6 = tk3
tk4 < tk1 && tk4 < tk3 && tk4 < tk2 && tk4 < tk5 && tk4 < tk6
    skaicius6 = tk4
tk5 < tk2 && tk5 < tk3 && tk5 < tk4 && tk5 < tk1 && tk5 < tk6
    skaicius6 = tk5
tk6 < tk1 && tk6 < tk3 && tk6 < tk4 && tk6 < tk5 && tk6 < tk1
    skaicius6 = tk6

    tk1 > tk2 && tk1 > tk3 && tk1 > tk4 && tk1 > tk5 && tk1 > tk6
    skaicius1 = tk1
tk2 > tk1 && tk2 > tk3 && tk2 > tk4 && tk2 > tk5 && tk2 > tk6
    skaicius1 = tk2
tk3 > tk2 && tk3 > tk1 && tk3 > tk4 && tk3 > tk5 && tk3 > tk6
    skaicius1 = tk3
tk4 > tk1 && tk4 > tk3 && tk4 > tk2 && tk4 > tk5 && tk4 > tk6
    skaicius1 = tk4
tk5 > tk2 && tk5 > tk3 && tk5 > tk4 && tk5 > tk1 && tk5 > tk6
    skaicius1 = tk5
tk6 > tk1 && tk6 > tk3 && tk6 > tk4 && tk6 > tk5 && tk6 > tk1
    skaicius1 = tk6



tk1 > tk2
    skaicius1 = tk1
    skaicius2 = tk2

tk3 > tk4
    skaicius3 = tk3
    skaicius4 = tk4

tk5 > tk6
    skaicius5 = tk5
    skaicius6 = tk6

    */