// create word bank array

//create grid for words

//be able to type 1 letter into each cell

// check cell values against array index values

//create keyboard

// be sure to add flexbox to css



//create keys using forEach
const tileDisplay = document.querySelector('.tile-rows')

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
const guessRows = [
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', '']
]

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
