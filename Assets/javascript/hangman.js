// "use strict";
var words = ["hello", "goodbye", "woodrows", "computers", "joel"];
var userInputs = [];
var wins = 0;
var lives = 5;
var arrayGuess = [];
var dashGuesses = [];
window.onload = function() {
    var randomWord = randomWordChoice();
    console.log("random word = " + randomWord);
    for (var i = 0; i < randomWord.length; i++) {
        var container = document.getElementById("container");
        var div = document.createElement("div");
        container.appendChild(div);
    }

    var letters = randomWord.split("");
    console.log(letters);
    var arrayGuess = [];
    var win = 0;


    document.onkeypress = function(event) {
        event = event || window.event;
        var charCode = event.keyCode || event.which;
        var charString = String.fromCharCode(charCode);

        var lastKey = String.fromCharCode(event.keyCode).toLowerCase();
        userInputs.push(lastKey);
        console.log("currentGuess = " + charString);
        for (var a = 0; a < randomWord.length; a++) {
            if (charString === letters[a]) {
                var index = letters.indexOf(charString);
                console.log(index);
                arrayGuess.push(charString);
                console.log("current aray guess " + arrayGuess);
                delete letters[index];
                var container = document.getElementById("container");
                var child = container.children[index];
                console.log("child is = " + child);
                getAllIndexes(randomWord, charString);
                child.text(charString);

            }
        }

    }

    function getAllIndexes(arr, val) {
        var indexes = [];
        // var dashGuesses
        i = -1;
        while ((i = arr.indexOf(val, i + 1)) != -1) {
            indexes.push(i);
            // currentI equals the current index in the word that will replace _ for the correct guessed letter.
            var currentI = i;
            var start_index = currentI;
            var number_of_elements_to_remove = 1;
            var replacementElement = userInputs[arrayGuess.length - 1];
            if (val === " ") {
                replacementElement = " ";
            }
            // 1st element = Start of the index 2nd element = how many elements to remove, 3rd element = element to replace
            var removed_elements = dashGuesses.splice(start_index, number_of_elements_to_remove, replacementElement);
            console.log("removed index " + removed_elements.indexOf() + " for " + val);
        }
        if ((arrayGuess.indexOf("_")) < 0) {
            // winAudio.play();
            wins++
            // $("#lastGuess").html("Last word choice was: " + randomWord + "</h1>");
            // reset();
            console.log("loop determined a winner!");
        }
        return indexes;
    }

    function randomWordChoice() {
        // var randomWord = words[Math.floor(Math.random() * words.length)];
        var randomWord = words[Math.floor(Math.random() * words.length)];
        console.log("random word is " + randomWord);
        var dashGuesses = [];

        for (var i = 0; i < randomWord.length; i++) {
            dashGuesses.push("_");
            console.log(arrayGuess);
        }
        return randomWord;
    }
}



// child.innerHTML = charStr;
// win += 1;
// if (times === chooseRandomWord.length) {
//     location.reload();
// }(use push to add to arrayGuess)

// new messages
