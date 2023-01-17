/*
1. Sugeneruokite masyvą iš 30 elementų (indeksai nuo 0 iki 29), kurių reikšmės yra atsitiktiniai skaičiai nuo 5 iki 25.
*/
console.log("custom-.js1");

let a = [];

for (let i=0; i<30; i++) {
    a[i]=Math.floor(Math.random()*21)+5;
}

console.log(a);

/*
2. Naudodamiesi 1 uždavinio masyvu:
- Suskaičiuokite kiek masyve yra reikšmių didesnių už 10;
- Raskite didžiausią masyvo reikšmę;
- Suskaičiuokite visų reikšmių sumą;
- Sukurkite naują masyvą, kurio reikšmės yra 1 uždavinio masyvo reikšmes minus tos reikšmės indeksas;
- Papildykite masyvą papildomais 10 elementų su reikšmėmis nuo 5 iki 25, kad bendras masyvas padidėtų iki indekso 39;
- Iš masyvo elementų sukurkite du naujus masyvus. Vienas turi būti sudarytas iš neporinių indekso reikšmių, o kitas iš porinių;
- Masyvo elementus su poriniais indeksais padarykite lygius 0 jeigu jie didesni už 15;
- Suraskite pirmą (mažiausią) indeksą, kurio elemento reikšmė didesnė už 10;
*/
console.log("custom-.js2");

let suma=0;

console.log(`Didziausia reiksme yra: ${Math.max(...a)}`);

for (let j=0; j<30; j++) {
    suma=suma+a[j];
}

let b = [];

console.log(`suma masyvo yra ${suma}`);
for (let j=0; j<30; j++) {
    b[j]=a[j]-j;
}

console.log(`senas masyvas yra ${a}`);
console.log(`naujas masyvas yra ${b}`);
console.log(b);

for (let z=0; z<10; z++) {
    b.push(Math.floor(Math.random()*20)+5);
}

console.log(b);
console.log(`prideti nauji skaiciai masyvui reiskias, kad naujas masyvas yra ${b}`);

let d = [];
let e = []

for (let y=0; y<40; y++) {
    if (y % 2 ==0) {
        if (b[y]>15) {
            d.push(0);
        } else {
            d.push(b[y]);
        }
    } else {
        e.push(b[y]);
    }
}

console.log(d);
console.log(e);

let l=b.length;

for (let x=b.length-1; x>-1; x--) {
    if (b[x]>10 && x<l) {
        console.log(b[x]); 
        l=x;
    }
}

console.log(`${l} - maziausio masyvo skaicius, kai reiksme didesne nei 10: ${b[l]}`);

/*
3. Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 200. Suskaičiuokite kiek yra kiekvienos raidės.
*/
console.log("custom-.js3");

const raides = "ABCD";
let masyvas = [];
let raideA = 0;
let raideB = 0;
let raideC = 0;
let raideD = 0;

for (let i=0; i<200; i++) {
    masyvas[i]=raides.charAt(Math.floor(Math.random()*4));
    if (masyvas[i]=="A") {
        raideA++;
    } else if (masyvas[i]=="B") {
            raideB++;
    } else if (masyvas[i]=="C") {
        raideC++;
    } else {raideD++;} 
}

console.log(`Raides A yra : ${raideA}`);
console.log(`Raides B yra : ${raideB}`);
console.log(`Raides C yra : ${raideC}`);
console.log(`Raides D yra : ${raideD}`);

console.log(masyvas);
/*
4. Išrūšiuokite 3 uždavinio masyvą pagal abecėlę.
*/
console.log("custom-.js4");

console.log(masyvas.sort());
/*
5. Sugeneruokite masyvą, kurio reikšmės yra atsitiktiniai skaičiai nuo 100 iki 999. Masyvo ilgis 100. Masyvo reikšmės turi būti unikalios (t.y. neturi kartotis).
*/
