// create word bank array
const wordle = 'SUPER'

//be able to type 1 letter into each cell

// check cell values against array index values


//create keys 
const tileDisplay = document.querySelector('.tile-container')

//const tile = document.querySelector('.tile')
const keyboard = document.querySelector('.keyboard')

//need array of keyboard values
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
    'ENTER',
    '<<'
]
//create the word rows with tiles
const tileRows = [
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', '']
]

//starting position
let currentRow = 0;
let currentTile = 0;


// add guessrows to screen
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


keys.forEach(key => {
    const button = document.createElement('button')
    button.textContent = key
    button.setAttribute('id', key)
    button.addEventListener('click', () => handleClick(key))
    keyboard.append(button)

})

 //need to click the keys
 const handleClick = (key) => {
    console.log('clicked', key)
    if (key === '<<') {
        console.log('delete letter')
        deleteLetter()
        return
    }
    if (key === 'enter') {
        console.log('check for match')
        return
    }
    addLetter(key)
 }

const addLetter = (part) => {
    if (currentTile < 5 && currentRow < 6) {
    const square = document.getElementById('tileRow-' + currentRow + '-guess-' + currentTile)
    square.textContent = part;
    tileRows[currentRow][currentTile] = part;
    square.setAttribute('data', part);
    currentTile++;
    console.log('tileRows', tileRows)
    }
 }

 const deleteLetter = () => {
    if (currentTile > 0 ) {
    currentTile--
    const square = document.getElementById('tileRow-' + currentRow + '-guess-' + currentTile)
    square.textContent = ''
    tileRows[currentRow][currentTile] = '';
    square.setAttribute('data', '');
    }
 }