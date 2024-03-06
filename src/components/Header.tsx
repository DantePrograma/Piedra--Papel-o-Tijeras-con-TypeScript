export const GameHeader: React.FC<{
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}> = ({ handleClick }) => {
  return (
    <header className="p-8 text-white flex flex-col justify-center items-center gap-8 bg-[#222] mx-auto max-w-4xl">
      <div>
        <h1 className="uppercase text-6xl text-center mb-3 leading-tight">
          the rock paper scissors game
        </h1>
      </div>

      <div className="flex items-center justify-center gap-2">
        <p>MADE IN</p>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png"
          width={40}
          height={"auto"}
          alt="typescript"
        ></img>
      </div>

      <button
        onClick={handleClick}
        className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white  focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
      >
        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white  rounded-md group-hover:bg-opacity-0">
          START GAME
        </span>
      </button>
    </header>
  );
};
