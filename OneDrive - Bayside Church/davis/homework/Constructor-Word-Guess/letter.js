function letter(value) {
    this.value = value;
    this.hidden = true;
    this.updateDisplay = function (guessedLetter) {
        if (guessedLetter === this.value) {
            this.hidden = false;
        }
    };
};

module.exports = letter;