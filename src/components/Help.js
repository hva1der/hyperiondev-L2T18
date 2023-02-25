import { useState } from "react";

// COMPONENT: Show/hide help/rules when 'help' button clicked.
function Help() {
  const [show, setShow] = useState("hide");

  function displayHelp() {
    if (show === "hide") {
      setShow("show");
    } else {
      setShow("hide");
    }
  }

  return (
    <>
      <button className="help" onClick={displayHelp}>
        Help
      </button>
      <ul className={show}>
        <li>The aim of the game is to guess the word</li>
        <li>Click a letter to try your first guess!</li>
        <li> - </li>
        <li>Press F5 to restart the game</li>
        <li> - </li>
        <li>Click the help button again to hide this message</li>
        <li> - </li>
      </ul>
    </>
  );
}

// Exports
export default Help;
