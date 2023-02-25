import "./App.css";

import Help from "./components/Help";
import Letters from "./components/Letters";

function App() {
  return (
    <div className="App">
      <h1>Hangman</h1>
      <Help />
      <Letters />
    </div>
  );
}

export default App;
