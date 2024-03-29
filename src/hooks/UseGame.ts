import { useState } from "react";

export const elements = [
  { id: 0, name: "SCISSORS", emoji: "✌🏻", beats: [2] },
  { id: 1, name: "ROCK", emoji: "✊🏻", beats: [0] },
  { id: 2, name: "PAPER", emoji: "🤚🏻", beats: [1] },
];

export const useGame = () => {
  const [userChoice, setUserChoice] = useState<number | null>(null);
  const [computerChoice, setComputerChoice] = useState<number | null>(null);
  const [winner, setWinner] = useState<number | null>(null);
  const [disabled, setDisabled] = useState(false);
  const [userWins, setUserWins] = useState(0);
  const [pcWins, setPcWins] = useState(0);
  const [draws, setDraws] = useState(0);

  const getWinner = (userChoice: number, computerChoice: number) => {
    if (userChoice === computerChoice) {
      return 0;
    }

    if (elements[userChoice].beats.includes(computerChoice)) {
      return 1;
    }

    return 2;
  };

  const resetGame = () => {
    setUserChoice(null);
    setComputerChoice(null);
    setWinner(null);
    setDisabled(false);
  };

  const handlePlay = (choice: number) => {
    setDisabled(true);
    setUserChoice(choice);
    const randomChoice = Math.floor(Math.random() * 3);

    setTimeout(() => {
      setComputerChoice(randomChoice);

      setTimeout(() => {
        const winners = getWinner(choice, randomChoice);
        setWinner(winners);

        if (winners === 1) {
          setUserWins(userWins + 1);
        } else if (winners === 2) {
          setPcWins(pcWins + 1);
        } else {
          setDraws(draws + 1);
        }

        console.log(winners);
      }, 1500);
    }, 2000);
  };

  return {
    userChoice,
    computerChoice,
    winner,
    disabled,
    userWins,
    pcWins,
    draws,
    handlePlay,
    resetGame,
  };
};
