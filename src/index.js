import * as fs from "fs/promises";
try {
    let tekstas = await fs.readFile("./a.txt");
    console.log("" + tekstas);
} catch (err) {
    console.log("klaida", err);
}





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


