// create word bank array

//create grid for words

//be able to type 1 letter into each cell

// check cell values against array index values


//create keys using forEach
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

// add guessrows to screen
tileRows.forEach((tileRow, tileRowIndex) => {
    const tile = document.createElement('div')
    tile.setAttribute('id', 'tileRow-' + tileRowIndex)
    tileRow.forEach((guess, guessIndex) => {
       const letter = document.createElement('div')
       letter.setAttribute('id', 'tileRow-' + tileRowIndex + '-guess-' + guessIndex)
       tile.append(letter)
    })
    tileDisplay.append(tile)
})
 //need to click the keys
 const handleClick = () => {
    console.log('clicked')
 }

keys.forEach(key => {
    const button = document.createElement('button')
    button.textContent = key
    button.setAttribute('id', key)
    button.addEventListener('click', handleClick)
    keyboard.append(button)

})
