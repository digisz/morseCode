# morseCode
A small javascript library that returns a Morse Code Array.

Morse Code usually goes like this -. --.. .- ..--..  , but this poses a problem for a computer, since there are clearly defined pauses between all the elements (see graphic at the bottom).

## How To use
Include morseCode.js in your project.

There are only two functions
```javascript
var array = stringToMorse("foo bar");
// returns array[1,1,1,1,3,1,1,3,3,1,3,1,3,3,3,1,3,1,3,7,3,1,1,1,1,1,1,3,1,1,3,3,1,1,3,1,1,3]
var c = charToMorse("a");
// returns array[1,1,3]
```

Every element in the array defines the amount of time units, the current state needs to be. The first element is ON (LIGHT ON), therefore the second element is OFF (LIGHT OFF) and so forth.

### stringToMorse
This function returns an array of integer values for the whole string entered. It includes all necessary pauses. The last value will always be 3 so that the last ON signal can be turned off again.


### charToMorse
Same as stringToMorse but without the pauses between characters and words, onyl between the dots and dashes of this specific character.

## Why does someone build a morse code encoder
This is a by-product of my final project for Harvards CS50.

## The Morse Code
!["The Morse Code"](https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/International_Morse_Code.svg/2000px-International_Morse_Code.svg.png)
