/*
Define Global Variables
*/
// length of a dot
var dot = 1;
// length of a dash
var dash = 3;
// space between parts of the same letter
var p = 1;
// space between letters
var l = 3;
// space between words
var w = 7;

function stringToMorse(string)
{
    // morseCode
  var morse = [];
  // Get string length once for increase speed
  var length = string.length;
  // LOOP THROUGH STRING, ONE BY ONE
  for(var i = 0;i<length;i++)
  {
    var c = string.charAt(i).toUpperCase();
    var code = charToMorse(c);
    // if the next letter is not a space, add the necessary break
    if(string.charAt(i+1) != " " && c !=" "){code = code.concat([l])}
    // add this letters code to the already existing one
    morse = morse.concat(code);
  }
  //console.log(morse);
  return morse;
}

function charToMorse(c)
{
  switch(c) {
    case "A":
      var arr = [dot,p,dash];
      break;
    case "B":
      var arr = [dash,p,dot,p,dot,p,dot];
      break;
    case "C":
      var arr = [dash,p,dot,p,dash,p,dot];
      break;
    case "D":
      var arr = [dash,p,dot,p,dot];
      break;
    case "E":
      var arr = [dot];
      break;
    case "F":
      var arr = [dot,p,dot,p,dash,p,dot];
      break;
    case "G":
      var arr = [dash,p,dash,p,dot];
      break;
    case "H":
      var arr = [dot,p,dot,p,dot,p,dot];
      break;
    case "I":
      var arr = [dot,p,dot];
      break;
    case "J":
      var arr = [dot,p,dash,p,dash,p,dash];
      break;
    case "K":
      var arr = [dash,p,dot,p,dash];
      break;
    case "L":
      var arr = [dot,p,dash,p,dot,p,dot];
      break;
    case "M":
      var arr = [dash,p,dash];
      break;
    case "N":
      var arr = [dash,p,dot];
      break;
    case "O":
      var arr = [dash,p,dash,p,dash];
      break;
    case "P":
      var arr = [dot,p,dash,p,dash,p,dot];
      break;
    case "Q":
      var arr = [dash,p,dash,p,dot,p,dash];
      break;
    case "R":
      var arr = [dot,p,dash,p,dot];
      break;
    case "S":
      var arr = [dot,p,dot,p,dot];
      break;
    case "T":
      var arr = [dash];
      break;
    case "U":
      var arr = [dot,p,dot,p,dash];
      break;
    case "V":
      var arr = [dot,p,dot,p,dot,p,dash];
      break;
    case "W":
      var arr = [dot,p,dash,p,dash];
      break;
    case "X":
      var arr = [dash,p,dot,p,dot,p,dash];
      break;
    case "Y":
      var arr = [dash,p,dot,p,dash,p,dash];
      break;
    case "Z":
      var arr = [dash,p,dash,p,dot,p,dot];
      break;
    case "0":
      var arr = [dash,p,dash,p,dash,p,dash,p,dash];
      break;
    case "1":
      var arr = [dot,p,dash,p,dash,p,dash,p,dash];
      break;
    case "2":
      var arr = [dot,p,dot,p,dash,p,dash,p,dash];
      break;
    case "3":
      var arr = [dot,p,dot,p,dot,p,dash,p,dash];
      break;
    case "4":
      var arr = [dot,p,dot,p,dot,p,dot,p,dash];
      break;
    case "5":
      var arr = [dot,p,dot,p,dot,p,dot,p,dot];
      break;
    case "6":
      var arr = [dash,p,dot,p,dot,p,dot,p,dot];
      break;
    case "7":
      var arr = [dash,p,dash,p,dot,p,dot,p,dot];
      break;
    case "8":
      var arr = [dash,p,dash,p,dash,p,dot,p,dot];
      break;
    case "9":
      var arr = [dash,p,dash,p,dash,p,dash,p,dot];
      break;
    case ".":
      var arr = [dot,p,dash,p,dot,p,dash,p,dot,p,dash];
      break;
    case "?":
      var arr = [dot,p,dot,p,dash,p,dash,p,dot,p,dot];
      break;
    case " ":
    var arr = [w];
    break;
    // If char is not known, it will be skipped
    default:
    var arr =[];
    break;
  }
  return arr;
}
