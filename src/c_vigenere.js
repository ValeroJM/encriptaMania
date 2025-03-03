import {all} from "./diccionary.js";

//Cifrado Vigenere
function ci_vigenere(text, password){
    let newIdexes = [];
    let result = "";
    let passIndx = 0;

    for (let i = 0; i < text.length; i++){
        newIdexes.push(all.indexOf(text[i]) + all.indexOf(password[passIndx]));
        passIndx = (passIndx < password.length-1) ? passIndx + 1 : 0;
    }

    for (let i = 0; i < newIdexes.length; i++){
        result += newIdexes[i] > 120 ? all[newIdexes[i] - 121] : all[newIdexes[i]];
    }

    return result;
}

//Descifrado Vigenere
function dci_vigenere(text, password){
    let newIdexes = [];
    let result = "";
    let passIndx = 0;

    for (let i = 0; i < text.length; i++){
        newIdexes.push(all.indexOf(text[i]) - all.indexOf(password[passIndx]));
        passIndx = (passIndx < password.length-1) ? passIndx + 1 : 0;
    }

    for (let i = 0; i < newIdexes.length; i++){
        result += newIdexes[i] < 0 ? all[newIdexes[i] + 121] : all[newIdexes[i]];
    }

    return result;
}

//Test Example:
let example = `The Fulton County case
Trump and more than a dozen of his allies were charged in a sprawling racketeering case brought by Willis last year, which accuses them of engaging in an unlawful scheme to overturn the results of the 2020 election in Georgia. The former president and the 18 co-defendants charged alongside him all pleaded not guilty. Four later accepted plea deals.

The case was derailed after one of those co-defendants, Michael Roman, accused Willis and Wade in January of having an improper romantic relationship that began before Wade was hired to work on the election case in November 2021. Roman, a longtime GOP operative, claimed that Willis financially benefited from the relationship, since Wade allegedly paid for trips, hotel rooms and travel expenses using money he received through his work as a special prosecutor.

Trump, Roman and seven others sought to have Willis and her office removed from the case and the charges against them dismissed.

Wade and Willis both acknowledged they were romantically involved, but disputed claims that their relationship began before Wade's hiring. Both took the stand during an evidentiary hearing in February, where Willis forcefully defended herself from allegations of wrongdoing. The two testified that they split the costs associated with their travels, and Willis said she often reimbursed Wade in cash for her share. `;
let vigenere = ci_vigenere(example, '1Catezi2');
let d_vigenere = dci_vigenere(vigenere, '1Catezi2');
console.log("Ejemplo cifrado Vigenere: ", vigenere);
console.log("");
console.log("Ejemplo descifrado Vigenere: ", d_vigenere);

export {ci_vigenere, dci_vigenere};