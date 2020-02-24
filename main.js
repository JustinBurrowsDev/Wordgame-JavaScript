//words the game will be able to choose from
let dragonBallZWords = [
    "goku",
    "trunks",
    "vegeta",
    "krillin",
    "gohan",
    "piccolo",
    "goten",
    "kamehameha",
    "spritbomb",
    "destructivewave",
    "supersayian",
    "the",
    "and",
    "you",
    "that",
    "was",
    "for",
    "are",
    "with",
    "his",
    "they",
    "this",
    "have",
    "from",
    "one",
    "had",
    "word",
    "but",
    "not",
    "what",
    "all",
    "were",
    "we",
    "when",
    "your",
    "can",
    "said",
    "there",
    "use",
    "each",
    "which",
    "she",
    "how",
    "their",
    "will",
    "other",
    "about",
    "out",
    "many",
    "then",
    "them",
    "these",
    "some",
    "her",
    "would",
    "make",
    "like",
    "him",
    "into",
    "time",
    "has",
    "look",
    "two",
    "more",
    "write",
    "see",
    "number",
    "way",
    "could",
    "people",
    "than",
    "first",
    "water",
    "been",
    "call",
    "who",
    "oil",
    "its",
    "now",
    "find",
    "long",
    "down",
    "day",
    "did",
    "get",
    "come",
    "made",
    "may",
    "part"
]

// this is the word the game would like the user to try and guess
let currentWord = ""

// this is the letters the game player has guess already
let currWrdLtrs = []

// this is for the number of blanks remaining in the he givin word
let numBlanks = 0

// this is to display the corectly chosen word and or letters
let answerDisplay = []

//this is to display the incorrent letter the user has chosen
let wrongLtrs = []

let wins = 0
let losses = 0
let guessesLeft = 9

/// every time a new game has begun this function will be called
function newGame() {
    currentWord =
        // when the game chooses a word for the players to guess, i would like it to choose from the given array at the top
        // of the file. First i need to know how many index places there are in the array, i can do that by calling ".length"
        // on the "dragonBallZWords" array, then once i know that I can multiply that number times the math.random()
        // function. the math.random function will give me a puseudo-random number between 0 and less than 1. Now, because
        // my indexes are whole numbers and the math.random() will likely return to me a decimal, in order to get that number
        // to be a whole number in going to need to use the math.floor(). which is design to take whatever number it is given
        // and round it down to the nearest whole number.
        dragonBallZWords[Math.floor(Math.random() * dragonBallZWords.length)]
    console.log("The current word chosen is: " + currentWord)

    // i created a new variable called "currWrdLtrs" this is going to hold array of the the current word chosen by
    // the game. The only difference is that im going to use the the .spit() method to turn the word from a string into
    // and array of items.
    currWrdLtrs = currentWord.split("")
    console.log("The current word's letters are: " + currWrdLtrs)

    // this variable will eventually hold the number on underscores that correspond with the length of the word chosen
    // by the game.
    numBlanks = currWrdLtrs.length
    console.log("The number of letters in the current word is: " + numBlanks)

    // total attempts the gmaer is alloted
    guessesLeft = 9
        // this will hold the wrong answer choices
    wrongLtrs = []
        // correctly chosen words
    answerDisplay = []

    // I will be making the 1 character disappear for every wrong answer that is chosen by the user ive written the
    // following so i can manipulate the css, by using "document.getElementById" I can have the computer go in to my
    // html document and select my images based off the id that I have given to them. Then by using the ".removeAttribute"
    // method and remove any given attribute ive passed in, in this case ive removed the style attribute.

    if ((guessesLeft = 9)) {
        document.getElementById("friezaImg").removeAttribute("style")
        document.getElementById("krillinImg").removeAttribute("style")
        document.getElementById("piccoloImg").removeAttribute("style")
        document.getElementById("trunksImg").removeAttribute("style")
        document.getElementById("brolyImg").removeAttribute("style")
        document.getElementById("gohanImg").removeAttribute("style")
        document.getElementById("vegetaImg").removeAttribute("style")
        document.getElementById("gokuImg").removeAttribute("style")
    }

    //I need represent the correct word's length with corresponding underscores, so i created a variable called
    //"numBlanks". "numBlanks" value is a integer right now an is holding the length on the array "currWrdLtrs"
    //which is holding the actual letters. This for loop is designed to go through the array of letters that is
    //passed to it and subsitute each character with an underscore.

    for (i = 0; i < numBlanks; i++) {
        answerDisplay.push("_")
        console.log(answerDisplay)
    }

    document.getElementById("theWord").innerHTML = answerDisplay.join(" ")
    document.getElementById("remGuesses").innerHTML =
        "Number of Guesses Remaining: " + " " + guessesLeft
    document.getElementById("wins").innerHTML = "Wins: " + " " + wins
    document.getElementById("losses").innerHTML = "Losses: " + " " + losses
}

function checkLtrs(letter) {
    if (event.keyCode >= 65 && event.keyCode <= 90) {
        let correctLetter = false

        for (let i = 0; i < numBlanks; i++) {
            if (currentWord[i] == letter) {
                correctLetter = true
            }
        }

        if (correctLetter) {
            for (let i = 0; i < numBlanks; i++) {
                if (currentWord[i] == letter) {
                    answerDisplay[i] = letter
                }
            }
        } else {
            wrongLtrs.push(letter)
            guessesLeft--
        }

        console.log(answerDisplay)
    } else {
        alert("Please be sure to select a letter from the Alphabet (from a to z)")
    }
}

function roundComplete() {
    console.log(
        "Win count: " +
        wins +
        " | Loss Count: " +
        losses +
        " | Guesses Left: " +
        guessesLeft
    )

    document.getElementById("remGuesses").innerHTML =
        "Number of Guesses Remaining: " + " " + guessesLeft
    document.getElementById("theWord").innerHTML = answerDisplay.join(" ")
    document.getElementById("guessedLetters").innerHTML =
        "Letters Already Guessed:" + " " + wrongLtrs.join(" ")

    if (currWrdLtrs.toString() == answerDisplay.toString()) {
        wins++
        alert(
            "CONTRATULATIONS! You guessed '" +
            currentWord +
            "' correctly. Try another round?"
        )
        console.log("YOU WIN!")

        document.getElementById("wins").innerHTML = "Wins: " + " " + wins
        document.getElementById("winVideo").play()

        newGame()
        document.getElementById("guessedLetters").innerHTML =
            "Letters Already Guessed:" + " " + " "
    } else if (guessesLeft == 0) {
        losses++
        alert(
            "OH NO! You have 0 guesses left, and all your friends are now in the upsidedown. The correct word was '" +
            currentWord +
            "'. Do you want to try again?"
        )
        console.log("You Lost!")

        document.getElementById("losses").innerHTML = "Losses: " + " " + losses
        document.getElementById("loseVideo").play()

        newGame()
        document.getElementById("guessedLetters").innerHTML =
            "Letters Already Guessed:" + " " + " "
    }
}

newGame()

document.onkeyup = function(event) {
    let ltrsGuessed = String.fromCharCode(event.keyCode).toLowerCase()
    console.log("You Guessed the letter: " + ltrsGuessed) // Testing via Console.Log

    checkLtrs(ltrsGuessed)
    roundComplete()

    if (guessesLeft <= 8) {
        document.getElementById("friezaImg").style.display = "none"
        document.getElementById("friezaImg").style.opacity = "0.25"
    }

    if (guessesLeft <= 7) {
        document.getElementById("krillinImg").style.display = "none"
        document.getElementById("krillinImg").style.opacity = "0.25"
    }

    if (guessesLeft <= 6) {
        document.getElementById("piccoloImg").style.display = "none"
        document.getElementById("piccoloImg").style.opacity = "0.25"
    }

    if (guessesLeft <= 5) {
        document.getElementById("trunksImg").style.display = "none"
        document.getElementById("trunksImg").style.opacity = "0.25"
    }

    if (guessesLeft <= 4) {
        document.getElementById("brolyImg").style.display = "none"
        document.getElementById("brolyImg").style.opacity = "0.25"
    }

    if (guessesLeft <= 3) {
        document.getElementById("gohanImg").style.display = "none"
        document.getElementById("gohanImg").style.opacity = "0.25"
    }

    if (guessesLeft <= 2) {
        document.getElementById("vegetaImg").style.display = "none"
        document.getElementById("vegetaImg").style.opacity = "0.25"
    }

    if (guessesLeft <= 1) {
        document.getElementById("gokuImg").style.display = "none"
        document.getElementById("gokuImg").style.opacity = "0.25"
    }
}