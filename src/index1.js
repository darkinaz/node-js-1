import * as fs from "fs/promises";
async function suma(a, b) {
    return a + b;
}
let rez = await suma(1, 2) + await suma(4, 5);
console.log(rez + 4);
console.log("labas");
suma(1, 2)
    .then(v1 => {
        return new Promise((resolve) => {
            suma(4, 5)
                .then(v2 => {
                    resolve(v1 + v2);
                });
        });
    })
    .then(val => {
        rez = val;
        console.log(rez + 4);
        console.log("labas");
    });


// function suma(a, b) {
//     return a + b;
// }
// console.log(suma(1, 2));
// console.log(sumaAsync(1, 2));
// let rez;
// let reiksmesPromise = suma(1, 2);
// // console.log(reiksmesPromise);

// reiksmesPromise.then(reiksme => {
//     rez = reiksme + 4;
//     console.log(rez);
// });





// try {
//     let tekstas = await fs.readFile("./a.txt");
//     console.log("" + tekstas);
// } catch (err) {
//     console.log("klaida", err);
// }





// import { Puodukas } from "./produktas.js";


// console.log("Hello world");
// console.log(Puodukas);

// let p = new Puodukas();

// console.log(p);




// let vardas = "Jonas"
// let pavarde = "Jonaitis";
// let zmogus = {
//     vardas: vardas,
//     pavarde: pavarde,
//     gimimoMetai: 1999,
//     pasisveikinimas: function (kalba) {
//         if (kalba === "en") {
//             console.log("Hello", this.vardas, this.pavarde);
//         } else {
//             console.log("Labas", this.vardas, this.pavarde);
//         }
//     }

// };
// console.log(zmogus);
// labas(zmogus);
// labas ({});
// labasBeLukstu ();

// function labas({ vardas, pavarde }) {
//     console.log("labinuosis is labas su",vardas,pavarde);

// }
// function labasBeLukstu (zm) {
//     if (zm) {
//         let vardas = zm.vardas;
//         let pavarde = zm.pavarde;
//         console.log("labinuosis is labas su",vardas,pavarde);

//     } else {

//     }
// }


