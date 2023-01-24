// create word bank array

//create grid for words

//be able to type 1 letter into each cell

// check cell values against array index values

//create keyboard

// be sure to add flexbox to css

//need array of keyboard values

//create keys using forEach


const tile = document.querySelector('.tile')
const keyboard = document.querySelector('.keyboard')

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

keys.forEach(key => {
    const button = document.createElement('button')
    button.textContent = key
    keyboard.append(button)
})
