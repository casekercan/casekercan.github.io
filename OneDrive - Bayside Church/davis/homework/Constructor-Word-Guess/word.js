var letter = require("./letter");

function Word(setWord) {
    this.word = setWord;
    this.word_length = setWord.length;
    this.guesses = 10;
    this.letterArray = [];
    this.letterDisplayArray = [];
    this.guessedLetters = [];
    this.letter_array = function () {
        for (var i = 0; i < this.word_length; i++) {
            var Letter = new letter(this.word[i].toUpperCase());
            if (Letter.value === " ") {
                Letter.hidden = false;
            }
            this.letterArray.push(Letter);
        }
    };

    this.wordDisplayArray = function () {
        this.letterDisplayArray = [];
        for (var i = 0; i < this.letterArray.length; i++) {
            var letterObj = this.letterArray[i];
            if (letterObj.hidden === true && letterObj.value != " ") {
                this.letterDisplayArray.push("_");
            }
            else if (letterObj.hidden === false && letterObj.value == " ") {
                this.letterDisplayArray.push(" ");
            }
            else {
                this.letterDisplayArray.push(letterObj.value);
            }
        }
        console.log(this.letterDisplayArray.join(" "));
    };

    this.letterCheck = function (guessedLetter) {
        this.lettersHidden = 0;
        if (this.guessedLetters.indexOf(guessedLetter) < 0) {
            for (var i = 0; i < this.letterArray.length; i++) {
                if (this.letterArray[i].value == guessedLetter) {
                    this.letterArray[i].updateDisplay(guessedLetter);
                } else if (this.letterArray[i].hidden) {
                    this.lettersHidden++;
                }
            }
        };

        if (this.lettersHidden === 0) {
            console.log("You Win!");


        } else {
            this.guessedLetters.push(guessedLetter);
            this.guesses--;
            if (this.guesses <= 0) {
                console.log("You are out of guesses, you lose.");
            }
            else {
                console.log("These are the letters you have already guessed: " + this.guessedLetters.join(', '));
                console.log("Number of guesses remaining: " + this.guesses);

            }
        }
    }

}

module.exports = Word;





