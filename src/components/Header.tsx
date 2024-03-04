export const GameHeader = () => {
  return (
    <header>
      <h1 className="uppercase text-5xl text-center mb-3">
        the rock paper scissors game
      </h1>
      <div className="flex items-center justify-center gap-2">
        <p>MADE IN</p>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png"
          width={40}
          height={"auto"}
          alt="typescript"
        ></img>
      </div>
    </header>
  );
};
