//
// COMPONENT: The word to be guessed by user. Determined randomly at the start of each game, and passed to TheWord from parent Letters.js
function TheWord({ word, alphabet }) {
  let wordDisplay = [];
  let correctCount = 0;
  let result = "";

  // maps through alphabet and checks if a letter is present in the solution word, and if it has been marked as correct by the click function in Letters.js
  // Displays correct letters or "_ " if the letter is wrong or not yet clicked
  // This .map() method doesn't render elements directly - so I don't need keys, is that correct?
  word.map((letter) => {
    for (let i = 0; i < alphabet.length; i++) {
      if (letter === alphabet[i].name && alphabet[i].class === "correct") {
        wordDisplay.push(letter);
        // Increments a counter to determine winner (below)
        correctCount++;
      } else if (letter === alphabet[i].name && alphabet[i].class === "new") {
        wordDisplay.push("_ ");
      } else if (letter === alphabet[i].name && alphabet[i].class === "wrong") {
        wordDisplay.push("_ ");
      }
    }
  });
  // Test to display win message
  if (correctCount === word.length) {
    result = "You Win!";
  }

  return (
    <>
      <h2>{wordDisplay}</h2>
      <h2 className="winner">{result}</h2>
    </>
  );
}

// Exports
export default TheWord;
