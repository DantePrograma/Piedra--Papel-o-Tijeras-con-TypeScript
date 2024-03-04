import { useState } from "react";
import { Game } from "./components/Game";
import { GameHeader } from "./components/Header";

function App() {
  const [start, setStart] = useState(false);

  return (
    <>
      {/* background */}
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] opacity-90"></div>
      <main className="text-default bg-[#222] text-white w-full flex justify-center items-center flex-col p-9 gap-5 mx-auto max-w-2xl rounded">
        {!start && <GameHeader />}

        {!start && (
          <button
            onClick={() => setStart(true)}
            className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white  focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
          >
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white  rounded-md group-hover:bg-opacity-0">
              START GAME
            </span>
          </button>
        )}

        {start && <Game />}
      </main>
    </>
  );
}

export default App;
