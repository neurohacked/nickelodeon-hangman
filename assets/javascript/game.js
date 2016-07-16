window.onload = function() {

    //Variables
    var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'
    ];

    var category; // Array of categories
    var randomCategory; // Randomly selected category
    var word; // Randomly selected word
    var userGuess; // User guess
    var geusses = []; // Stored guesses
    var tries; // Number of tries ramaining
    var space; // Blank spaces in word '_'

    // Show Game Elements
    var displayTries = document.querySelector("#tries");
    var displayCategory = document.querySelector("#category");

    // Select Category
    var selectCat = function() {
        if (randomCategory === category[0]) {
            categoryName.innerHTML = "Category: Show";
        } else if (randomCategory === category[1]) {
            categoryName.innerHTML = "Category: Character";
        }
    }

    // Word placeholder and guesses
    function hangman() {
        placeholder = document.querySelector("#placeholder");
        correctGuess = document.querySelector("#correct");

        for (var i = 0; i < word.length; i++) {
            correctGuess.setAttribute('id', 'game-word');
            document.onkeyup = function(event) {
                guess = document.createElement('li');
                userGuess = String.fromCharCode(event.keyCode).toLowerCase();
                console.log('User Guess: ' + userGuess);

                // if (userGuess matches letter(s) in a word) {
                //   display that letter in place of placeholder;
                // }
                // else {
                //   lower tries by 1;
                // }
                //
                // if (all letters in a word are revealed & tries > 0) {
                //   userWins = true;
                // }
                // else {
                //   userWins = false;
                // }
            }
        }
    }

    // Play Game
    function play() {
        category = [
            ["All That", "Hey Arnold", "Are You Afraid of the Dark", "Double Dare", "Invader ZIM", "Doug", "GUTS", "The Adventures of Pete and Pete"],
            ["Doug Funny", "GIR", "Helga Pataki", "Tommy Pickles"]
        ];

        randomCategory = category[Math.floor(Math.random() * category.length)];
        word = randomCategory[Math.floor(Math.random() * randomCategory.length)];
        console.log(word);

        selectCat();
        hangman();
        // tries();

    }
    play();
}
