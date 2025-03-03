import React, { useState } from "react";

type Choice = "rock" | "paper" | "scissors";
const choices: Choice[] = ["rock", "paper", "scissors"];
const choiceEmojis: Record<Choice, string> = {
    rock: "🪨",
    paper: "📄",
    scissors: "✂️",
};

const getWinner = (player: Choice, ai: Choice): string => {
    if (player === ai) return "It's a tie! 🤝";
    if (
        (player === "rock" && ai === "scissors") ||
        (player === "scissors" && ai === "paper") ||
        (player === "paper" && ai === "rock")
    ) {
        return "You win! 🎉🥳";
    }
    return "AI wins! 🤖💻";
};

const RockPaperScissors: React.FC = () => {
    const [playerChoice, setPlayerChoice] = useState<Choice | null>(null);
    const [aiChoice, setAiChoice] = useState<Choice | null>(null);
    const [result, setResult] = useState<string>("");

    const handlePlayerChoice = (choice: Choice) => {
        const aiRandomChoice =
            choices[Math.floor(Math.random() * choices.length)];
        setPlayerChoice(choice);
        setAiChoice(aiRandomChoice);
        setResult(getWinner(choice, aiRandomChoice));
    };

    return (
        <div className="flex justify-center items-center h-screen w-screen bg-gradient-to-br from-blue-400 to-purple-500">
            <div className="flex flex-col items-center p-6 bg-white text-gray-800 rounded-lg shadow-xl w-96">
                <h1 className="text-2xl font-extrabold mb-6 text-center">
                    Rock Paper Scissors ✊📄✂️
                </h1>
                <div className="flex gap-4 mb-6">
                    {choices.map((choice) => (
                        <button
                            key={choice}
                            className="px-6 py-3 bg-gray-200 text-gray-800 font-semibold rounded-lg shadow-md hover:bg-gray-300 transition-all duration-300"
                            onClick={() => handlePlayerChoice(choice)}
                        >
                            {choiceEmojis[choice]}{" "}
                            {choice.charAt(0).toUpperCase() + choice.slice(1)}
                        </button>
                    ))}
                </div>
                {playerChoice && aiChoice && (
                    <div className="text-lg mt-6 bg-gray-100 p-4 rounded-lg shadow-md w-full text-center">
                        <p className="font-semibold">
                            You chose:{" "}
                            <strong>
                                {choiceEmojis[playerChoice]} {playerChoice}
                            </strong>
                        </p>
                        <p className="font-semibold">
                            AI chose:{" "}
                            <strong>
                                {choiceEmojis[aiChoice]} {aiChoice}
                            </strong>
                        </p>
                        <p className="text-xl font-bold mt-4">{result}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default RockPaperScissors;