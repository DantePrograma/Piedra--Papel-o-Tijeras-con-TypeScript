import { useGame } from "../hooks/UseGame";
import { elements } from "../hooks/UseGame";

export const GameScreen = () => {
  const {
    userChoice,
    computerChoice,
    winner,
    disabled,
    handlePlay,
    resetGame,
    userWins,
    pcWins,
    draws,
  } = useGame();

  return (
    <div className="grid grid-rows-[1.7fr_1.2fr_1.2fr] m-8 xl:grid-rows-none  xl:grid-cols-[1fr_1.5fr_1fr]  gap-4 mx-auto text-white max-w-screen-2xl">
      <div className="bg-[#222] grid order-3 xl:order-1 place-content-center text-left gap-4">
        <h1 className="text-7xl">Wins</h1>
        <p className="text-2xl">Your wins: {userWins} ✔️</p>
        <p className="text-2xl">Pc wins: {pcWins} ❌</p>
        <p className="text-2xl">Draws: {draws} 🔄</p>
      </div>

      <div className="flex flex-col gap-4 bg-[#222] p-6 rounded order-1 xl:order-2">
        <h1 className="text-center text-6xl mb-3 uppercase">Choose one</h1>
        <div className="grid grid-cols-2 grid-rows-2 gap-8 place-items-center mb-6">
          {elements.map((element, index) => (
            <button
              disabled={disabled}
              onClick={() => {
                handlePlay(element.id);
              }}
              key={element.id}
              title={element.name}
              className={`cursor-pointer p-8 hover:border-green-500 text-6xl rounded-full bg-white  ${
                index === 0 ? "col-span-2" : ""
              }`}
            >
              {element.emoji}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center justify-center p-3 text-3xl gap-7  order-2 xl:order-3 bg-[#222]">
        <h1 className="text-7xl">Plays</h1>

        {userChoice != null && (
          <p>
            You choose {elements[userChoice].name} {elements[userChoice].emoji}
          </p>
        )}

        {computerChoice != null && (
          <p>
            PC choose {elements[computerChoice].name}{" "}
            {elements[computerChoice].emoji}
          </p>
        )}

        {winner === 0 && winner != null && <p className="text-4xl">DRAW</p>}

        {winner === 1 && winner != null && (
          <p className="text-4xl">{`YOU WIN! :)`}</p>
        )}

        {winner === 2 && winner != null && (
          <p className="text-4xl">{`YOU LOSE :(`}</p>
        )}

        <button
          onClick={resetGame}
          className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white"
        >
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white  rounded-md group-hover:bg-opacity-0">
            RESET GAME
          </span>
        </button>
      </div>
    </div>
  );
};
