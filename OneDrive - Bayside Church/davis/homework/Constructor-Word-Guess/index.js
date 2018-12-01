var fs = require("fs");
var inquirer = require("inquirer");
var Word = require("./word");

var LTRS = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var wordList = [
    "shell", "sun", "waves", "sand", "boardwalk", "shore", "coast", "starfish", "sandbar", "driftwood", "dock"
];

var setWord;
var newWord;
var wins = 0;
var losses = 0;

function start_game() {
    inquirer.prompt([
        {
            type: "confirm",
            message: "Do you want to play a word game?",
            name: "str_game",
            default: true
        }
    ]).then(function (StrGame) {
        if (StrGame.str_game) {
            console.log("Start Game");
            game_play();
        }
    })
}

start_game();

function word_set() {
    setWord = wordList[Math.floor(Math.random() * wordList.length)];
    console.log(setWord);
}


function game_play() {
    word_set();
    newWord = new Word(setWord);
    newWord.letter_array();
    game_loop();
}


function game_loop() {
    newWord.wordDisplayArray();
    inquirer.prompt([
        {
            type: "input",
            message: "Guess a letter in the beach word name.",
            name: "letterGuess"
        }
    ]).then(function (guess) {
        var letterGuess = guess.letterGuess.toUpperCase();
        checkLetter(letterGuess);
    });
}

function checkLetter(letterGuess) {
    if (LTRS.indexOf(letterGuess) < 0) {
        console.log("Your entry is not a letter, please enter a letter.");
        game_loop(newWord.word);
    } else {
        newWord.letterCheck(letterGuess);
        game_loop(newWord.word);
    }
};



