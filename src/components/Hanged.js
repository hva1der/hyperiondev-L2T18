//
// COMPONENT: Displays progression of hangman pictures for each wrong letter chosen by the user.
function Hanged({ alphabet }) {
  let numOfWrongs = 0;
  let result = "";
  for (let i = 0; i < alphabet.length; i++) {
    if (numOfWrongs > 9) {
      break;
    } else if (alphabet[i].class === "wrong") {
      numOfWrongs++;
    }
  }
  // If the number of wrong choices exceeds 9 the final picture is displayed and lose statement triggered.
  if (numOfWrongs > 9) {
    result = "You Lose!";
  }

  // src of image is chosen by number of wrong guesses
  let source = "state" + numOfWrongs + ".gif";

  return (
    <>
      <h2 className="loser">{result}</h2>
      <img className="hung" src={source} alt="hanged" />
    </>
  );
}

// Exports
export default Hanged;
