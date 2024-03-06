import { useState } from "react";
import { GameHeader } from "./components/Header";
import { GameScreen } from "./components/GameScreen";

function App() {
  const [start, setStart] = useState(false);

  const handleClick = () => {
    setStart(true);
  };

  return (
    <>
      {/* background */}

      {!start && <GameHeader handleClick={handleClick} />}

      {start && <GameScreen />}
    </>
  );
}

export default App;
