import "../styles/Square.css";
import { useState } from "react";
import { Square } from "../components";

export const Board = () => {
  const [xIsNext, setXisNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  const handleClick = (i) => {
    if (squares[i] || calculateWinner[squares]) {
      return;
    }
    const nextSquares = squares.slice();
    xIsNext ? (nextSquares[i] = "X") : (nextSquares[i] = "O");
    setSquares(nextSquares);
    setXisNext(!xIsNext);
  };

  const winner = calculateWinner(squares);
  let gameStatus;
  if (winner) {
    gameStatus = "Winner: " + winner + "!";
  }
  else {
    gameStatus = "Next player: " + (xIsNext ? "X" : "O");
  }

  return (
    <>
    <div className="gameStatus">{gameStatus}</div>
      <div className="board-row">
        <Square
          value={squares[0]}
          onSquareClick={() => handleClick(0)}
        />
        <Square
          value={squares[1]}
          onSquareClick={() => handleClick(1)}
        />
        <Square
          value={squares[2]}
          onSquareClick={() => handleClick(2)}
        />
      </div>
      <div className="board-row">
        <Square
          value={squares[3]}
          onSquareClick={() => handleClick(3)}
        />
        <Square
          value={squares[4]}
          onSquareClick={() => handleClick(4)}
        />
        <Square
          value={squares[5]}
          onSquareClick={() => handleClick(5)}
        />
      </div>
      <div className="board-row">
        <Square
          value={squares[6]}
          onSquareClick={() => handleClick(6)}
        />
        <Square
          value={squares[7]}
          onSquareClick={() => handleClick(7)}
        />
        <Square
          value={squares[8]}
          onSquareClick={() => handleClick(8)}
        />
      </div>
    </>
  );
};

const calculateWinner = (squares) => {
  const winningLine = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8]
  ];

  for (let i = 0; i < winningLine.length; i++) {
    const [squareA, squareB, squareC] = winningLine[i];
    if (squares[squareA] && squares[squareA] === squares[squareB] && squares[squareA] === squares[squareC]) {
      return squares[squareA];
    }
  }
  return null;
}