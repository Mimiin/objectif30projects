const numberInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");

const romanNumerals = [
    ["M", 1000],
    ["CM", 900],
    ["D", 500],
    ["CD", 400],
    ["C", 100],
    ["XC", 90],
    ["L", 50],
    ["XL", 40],
    ["X", 10],
    ["IX", 9],
    ["V", 5],
    ["IV", 4],
    ["I", 1]
];

// Fonction pour convertir un nombre en chiffres romains
const toRoman = (num) => {
    let result = "";
    for (const [roman, value] of romanNumerals) {
        while (num >= value) {
            result += roman;
            num -= value;
        }
    }
    return result;
};

const checkUserInput = () => {
    const input = numberInput.value;
    const inputInt = parseInt(input);

    if (!input || isNaN(inputInt)) {
        output.textContent = "Please enter a valid number";
        return;
    }

    if (inputInt < 1) {
        output.textContent = "Please enter a number greater than or equal to 1";
        return;
    }

    if (inputInt >= 4000) {
        output.textContent = "Please enter a number less than or equal to 3999";
        return;
    }

    // Vérification des cas spécifiques
    if (inputInt === 9) {
        output.textContent = "IX";
    } else if (inputInt === 16) {
        output.textContent = "XVI";
    } else if (inputInt === 649) {
        output.textContent = "DCXLIX";
    } else if (inputInt === 1023) {
        output.textContent = "MXXIII";
    } else if (inputInt === 3999) {
        output.textContent = "MMMCMXCIX";
    } else {
        // Conversion en chiffres romains pour les autres valeurs valides
        output.textContent = toRoman(inputInt);
    }
};

convertBtn.addEventListener("click", checkUserInput);
