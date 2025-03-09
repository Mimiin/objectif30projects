const checkButton = document.getElementById("check-btn");
const textInput = document.getElementById("text-input");
const resultSpan = document.getElementById("result");

checkButton.addEventListener("click", () => {
    const inputValue = textInput.value.trim();  // Récupère la valeur de l'input

    // Nettoyage du texte : supprimer les espaces, ponctuation et mettre tout en minuscules
    const cleanedValue = inputValue.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

    if (inputValue === "") {
        alert("Please input a value");
    } else {
        // Inverser la chaîne nettoyée
        const reversedInput = cleanedValue.split("").reverse().join("");  // Inverse le texte nettoyé

        // Vérifier si c'est un palindrome
        if (cleanedValue === reversedInput) {
            resultSpan.textContent = `${inputValue} is a palindrome ⭐`;  // Affiche que c'est un palindrome
        } else {
            resultSpan.textContent = `${inputValue} is not a palindrome❌`;  // Affiche que ce n'est pas un palindrome
        }
    }
});
