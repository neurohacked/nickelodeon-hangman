window.onload = function() {

    var randomWord; // Array of words
    var randomCategory; // Selected category
    var word; // Selected word
    var guess; // User guess
    var letters = []; // Stored letters
    var tries; // Tries
    var counter; // Count correct letters
    var space; // Handle spaces in words

    // Select Category
    function select() {
        if (chosenCategory === randomWord[0]) {
            categoryName.innerHTML = "Category: Show";
        } else if (chosenCategory === randomWord[1]) {
            categoryName.innerHTML = "Category: Character";
        }
    }

    // Create letters ul
    function result() {
        placeholder = document.getElementById('blank');
        correct = document.createElement('ul');

        for (var i = 0; i < word.length; i++) {
            correct.setAttribute('id', 'word');
            guess = document.createElement('li');
            guess.setAttribute('class', 'guess');
            if (word[i] === " ") {
                guess.innerHTML = " ";
                space = 1;
            } else {
                guess.innerHTML = "_";
            }

            letters.push(guess);
            placeholder.appendChild(correct);
            correct.appendChild(guess);
        }
    }

    // Show tries
    var displayTries = document.getElementById("tries");

    function life() {
        displayTries.setAttribute('class', 'label label-primary');
        displayTries.innerHTML = "You have " + tries + " tries";
        if (tries < 1) {
            displayTries.setAttribute('class', 'label label-danger');
            displayTries.innerHTML = "Game Over";
        } else if (tries < 5) {
            displayTries.setAttribute('class', 'label label-warning');
        }
        for (var i = 0; i < letters.length; i++) {
            if (counter + space === letters.length) {
                displayTries.setAttribute('class', 'label label-success');
                displayTries.innerHTML = "You Win!";
            }
        }
    }

    // Check keyPressed Function
    function check(keyPressed) {
        var guess = String.fromCharCode(keyPressed.keyCode);
        for (var i = 0; i < word.length; i++) {
            if (word[i] === guess.toLowerCase() || word[i] === guess.toUpperCase()) {
                letters[i].innerHTML = word[i];
                counter += 1;
            }
        }
        var j = (word.indexOf(guess));
        if (j === -1) {
            tries -= 1;
            life();
        } else {
            life();
        }
        console.log(guess);
    }

    // Play
    function play() {
        randomWord = [
            ["All That", "Hey Arnold", "Double dare", "Invader Zim", "GUTS", "Rugrats"],
            ["Alex Mack", "Doug Funny", "GIR", "Helga Pataki", "Tommy Pickles", "Reptar", "Ickis", "Oblina", "Krumm", "Rocko"]
        ];

        chosenCategory = randomWord[Math.floor(Math.random() * randomWord.length)];
        word = chosenCategory[Math.floor(Math.random() * chosenCategory.length)];
        console.log(word);

        document.onkeypress = check;
        letters = [];
        tries = 10;
        counter = 0;
        space = 0;
        result();
        life();
        select();
    }

    play();

    // Reset

    document.getElementById('reset').onclick = function() {
        correct.parentNode.removeChild(correct);
        play();
    };
};
