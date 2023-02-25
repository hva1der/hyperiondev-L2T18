import { useState } from "react";
import { newAlphabet } from "../items/newAlphabet";
import TheWord from "./TheWord";
import Hanged from "./Hanged";

// Array of words to be randomly chosen for the game
const words = [
  "SOFA",
  "ZEPHYRUS",
  "FIREPLACE",
  "SCRABBLE",
  "ARMADILLO",
  "SHARK",
  "FIBEROPTIC",
];
const word = words[Math.floor(Math.random() * words.length)].split("");

//
// COMPONENT: Displays individual letters from the alphabet array as buttons. Sets and
// alters an array of alphabet buttons.
function Letters() {
  // set alphabet state
  const [alphabet, setAlphabet] = useState(newAlphabet);

  // Use map() to display each letter of the alphabet as a button.
  const alphabetButtons = alphabet.map((letter, alphIndex) => (
    <button
      key={letter.id}
      className={letter.class}
      // On click function changes the class of letters in alphabet array - changes the colors of buttons to indicate correct/wrong choice
      // updated alphabet is passed to word and hanging components to render solution word or progress hanging.
      onClick={() => {
        let updatedAlphabet = alphabet.slice();
        for (let i = 0; i < word.length; i++) {
          if (updatedAlphabet[alphIndex].name === word[i]) {
            updatedAlphabet[alphIndex].class = "correct";
            break;
          } else {
            updatedAlphabet[alphIndex].class = "wrong";
          }
        }
        setAlphabet(updatedAlphabet);
      }}
    >
      {letter.name}
    </button>
  ));

  return (
    <>
      <div>{alphabetButtons}</div>
      <br />
      {/* Call TheWord and Hanged components here so I can pass 'alphabet' and 'word' props to them */}
      <TheWord word={word} alphabet={alphabet} />
      <Hanged alphabet={alphabet} />
    </>
  );
}

// Exports
export default Letters;

//
// NOTES/known issues:
//
// # Can keep playing after lose/win message is displayed.
