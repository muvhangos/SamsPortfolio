let secret = Math.floor(Math.random() * 20) + 1; // Random secret number between 1 and 20
let guess = parseInt(prompt("Please guess the secret number (1-20)"));

while (guess !== secret) {
    if (guess < secret) {
        alert("Incorrect, too low");
    } else if (guess > secret) {
        alert("Incorrect, too high");
    }
    // Prompt inside the loop to keep asking until the guess is correct
    guess = parseInt(prompt("Please guess the secret number (1-20)"));
}

alert("Correct Guess! You guessed the secret number.");