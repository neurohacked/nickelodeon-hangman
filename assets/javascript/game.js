window.onload = function() {

	var randomWord; // Array of words
	var randomCategory; // Selected category
	var word; // Selected word
	var guess; // User guess
	var leetters = []; // Stored letters
	var tries; // Tries
	var counter; // Count correct guesses
	var space; // Handle spaces in words

	// Select Category
	function select() {
		if (chosenCategory === randomWord[0]) {
			categoryName.innerHTML = "Category: Show";
		} else if (chosenCategory === randomWord[1]) {
			categoryName.innerHTML = "Category: Character";
		}
	}

	// Create letter blanks for word
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
	displayTries = document.getElementById("tries");

	function life() {
		displayTries.setAttribute('class', 'label label-primary');
		displayTries.innerHTML = "You have " + tries + " tries";
		if (tries < 1) {
			displayTries.setAttribute('class', 'label label-danger');
			displayTries.innerHTML = "Game Over";
		}
		else if (tries < 5) {
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
		if(tries === 0) {
			alert('Click \'Play Again\' to start a new game.');
			return;
		}
		guess = String.fromCharCode(keyPressed.keyCode);
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
		console.log(tries);
	}

	// Play
    function play() {
        randomWord = [
            ["All That", "Hey Arnold", "Double Dare", "Invader ZIM", "Nickelodeon Guts", "Rugrats", "Hey Dude", "SpongeBob SquarePants", "Finders Keepers", "Nick Arcade", "Weinerville", "Rocket Power"],
            ["Alex Mack", "Doug Funnie", "Patti Mayonnaise", "GIR", "Dib", "Gaz", "Helga Pataki", "Tommy Pickles", "Chuckie Finster", "Reptar", "Ickis", "Oblina", "Krumm", "Rocko", "Heffer Wolfe", "Ren", "Stimpy", "Daggett Doofus", "Norbert Foster"]
        ];

        chosenCategory = randomWord[Math.floor(Math.random() * randomWord.length)];
        word = chosenCategory[Math.floor(Math.random() * chosenCategory.length)];
        // console.log(word);

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
