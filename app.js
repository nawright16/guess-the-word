
// create word bank array

const wordBank = ['HAVEN', 'DRAIN', 'SINUS', 'PENNY', 'PASTE', 'BOUGH', 'FOLLY', 'EXERT', 'PARSE', 'ARRAY', 'RURAL', 'FOUND', 'CRASH', 'RAKES', 'TRICK', 'MAFIA', 'STERN', 'SMURF', 'COVER', 'CHIEF', 'BUNCH', 'PILOT', 'QUEST', 'STAMP', 'ROUSE', 'PIZZA', 'JEWEL', 'AGONY']

// From https://stackoverflow.com/questions/4550505/getting-a-random-value-from-a-javascript-array
// This code will return a random value from the worBank array listed above by choosing a random value in the range of 0 and the array length
// add async function to get word from API

// let wordle = await fetchWord()

let wordle = wordBank[Math.floor(Math.random() * wordBank.length)]


//console.log(wordle)

// assign values for each major div

const tileDisplay = document.querySelector('.tile-container')
const keyboard = document.querySelector('.keyboard')
const messageDisplay = document.querySelector('.messages')


// starting position using index values of the tileRows array above

let currentRow = 0;
let currentTile = 0;

let gameOver = false;

// let wordle = fetchWord()

// This code sets keys as an array of individual letter values. I want to use them as buttons later

const keys = [
    'Q',
    'W',
    'E',
    'R',
    'T',
    'Y',
    'U',
    'I',
    'O',
    'P',
    'A',
    'S',
    'D',
    'F',
    'G',
    'H',
    'J',
    'K',
    'L',
    'Z',
    'X',
    'C',
    'V',
    'B',
    'N',
    'M',
    'ENTER',
    '<<'
]

// Creating my grid using an array of blank values.

const tileRows = [
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', '']
]

// This code is from https://developer.mozilla.org/en-US/docs/Web/API/KeyboardLayoutMap/forEach and https://www.youtube.com/watch?v=mpby4HiElek&list=PL7VGP-8h8i1NrD4pgT9XfAk-UiH-yHvP3&index=7&t=177s&ab_channel=CodewithAniaKub%C3%B3w
// This code takes each array from tileRows above and assigns it a div, which is a cell for a letter in the game. The div is assigned the value of tile and given an ID of tileRow + the index value of the array.

tileRows.forEach((tileRow, tileRowIndex) => {
    const tile = document.createElement('div')
    tile.setAttribute('id', 'tileRow-' + tileRowIndex)

    tileRow.forEach((guess, guessIndex) => {
        const letter = document.createElement('div')
        letter.setAttribute('id', 'tileRow-' + tileRowIndex + '-guess-' + guessIndex)
        letter.classList.add('guess')
        tile.append(letter)
    })
    tileDisplay.append(tile)
})

// This code is from https://developer.mozilla.org/en-US/docs/Web/API/KeyboardLayoutMap/forEach 
// This code makes each array index a button and gives it an ID of key. Each key is made clickable by the addEventListener. The buttons are then placed in the keyboard div with keyboard.append.

keys.forEach(key => {
    const button = document.createElement('button')
    button.textContent = key
    button.setAttribute('id', key)
    button.addEventListener('click', () => click(key))
    keyboard.append(button)
})

// This code is from here: https://www.section.io/engineering-education/keyboard-events-in-javascript/
// I am adding the capability to use the keyboard to guess words rather than only be allowed to click. I used console.log to get the names and code of the events of a 'keyup', then define them as variables and pass them into my event listener. Then the code checks if enter or backspace is pressed on the keyboard. Enter will run the checkRows function. Backspace will run the deleteLetter function.

const keyPress = document.addEventListener('keyup', (event) => {
    if (!gameOver) {
        const name = event.key;
        const code = event.code;
        const capitalName = name.toUpperCase();

        if (code === 'Enter') {
            checkRows()
            return
        } else if (code === 'Backspace') {
            deleteLetter()
            return
        } else {
            addLetter(capitalName);
        }
    }
})

// This function checks the enter and backspace keys. If backspace is clicked, the deleteLetter() function is called as a callback. If enter is clicked, checkRows() function is called as a callback. If neither is clicked, it enters the value of the key clicked. 

const click = (key) => {
    if (!gameOver) {
        if (key === '<<') {
            deleteLetter()
            return
        } else if (key === 'ENTER') {
            checkRows()
            return
        } else {
            addLetter(key)
        }
    }
}

// This code adds a letter to the tiles by checking the index values. The function checks the square's row and tile numbers by it's ID assigned in tileRows.forEach above.

const addLetter = (part) => {
    if (currentTile < 5 && currentRow < 6) {
        const square = document.getElementById('tileRow-' + currentRow + '-guess-' + currentTile)
        square.textContent = part;
        tileRows[currentRow][currentTile] = part;
        square.setAttribute('data', part);
        currentTile++;
    }
}

// This code deletes removes a letter entered in the most recent square and sets it to a blank value

const deleteLetter = () => {
    if (currentTile > 0) {
        currentTile--
        const square = document.getElementById('tileRow-' + currentRow + '-guess-' + currentTile)
        square.textContent = ''
        tileRows[currentRow][currentTile] = '';
        square.setAttribute('data', '');
    }
}

// This code is from https://www.youtube.com/watch?v=mpby4HiElek&list=PL7VGP-8h8i1NrD4pgT9XfAk-UiH-yHvP3&index=7&t=177s&ab_channel=CodewithAniaKub%C3%B3w
// This function checks the row once all the tiles are filled up. Word is created by join() combining each tileRow value that has been entered. The if/else is checking the index values for when to assign certain colors in the addColor() function and which message to show in the showMessage() functions.

const checkRows = () => {
    const word = tileRows[currentRow].join('')
    if (currentTile > 4) {
        addColor()
        if (wordle === word) {
            showMessage('Great Job!')
            gameOver = true
            return
        } else if (currentRow < 5) {
            currentRow++
            currentTile = 0
        } else if (currentRow >= 5) {
            showMessage('Game Over. Word is ' + wordle)
            gameOver = true
            return

        }
    }

}

// This function creates gameMessage as a p tag and puts it in the message display div. What message displays depends on the check rows function above

const showMessage = (message) => {
    const gameMessage = document.createElement('p')
    gameMessage.textContent = message
    messageDisplay.append(gameMessage)
}

// From https://www.youtube.com/watch?v=mpby4HiElek&list=PL7VGP-8h8i1NrD4pgT9XfAk-UiH-yHvP3&index=7&ab_channel=CodewithAniaKub%C3%B3w

const addColor = () => {
    const rowTiles = document.querySelector('#tileRow-' + currentRow).childNodes
    rowTiles.forEach((tile, index) => {
        const dataLetter = tile.getAttribute('data')

        setTimeout(() => {
            if (dataLetter === wordle[index]) {
                tile.classList.add('green-fillcolor')
            } else if (wordle.includes(dataLetter)) {
                tile.classList.add('yellow-fillcolor')
            } else {
                tile.classList.add('red-fillcolor')
            }
        }, 300 * index)
    })
}

// From https://makeschool.org/mediabook/oa/tutorials/build-a-game-of-concentration-with-javascript/final-touch-ups/ and http://www.jacobenfield.com/jakeWeb/JS_GAMES/lesson18/index.php. This code assigns the replayButton variable to the replaybtn element in the HTML. Then calls the replay() function to reload the page.

const replayButton = document.getElementById('replay-btn');
replayButton.addEventListener('click', () => {
    replay()
}
);

function replay() {
    location.reload();
}