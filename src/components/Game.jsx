import { Board } from "../components";
import { useState } from "react";

export const Game = () => {
    const [ xIsNext, setXisNext ] = useState(true);
    const [ history, setHistory ] = useState([Array(9).fill(null)]);
    const currentSquare = history[history.length - 1];

    const handlePlay = (nextSquare) => {
        setHistory([ ...history, nextSquare ]);
        setXisNext(!xIsNext);
    }

    const jumpTo = (nextMove) => {

    }
    
    const moves = history.map((squares, move) => {
        let description;
        if (move > 0) {
            description = 'Go to move #' + move;
        }
        else {
            description = 'Go to game start';
        }
        return (
            <li>
                <button onClick={() => jumpTo(move)}>{description}</button>
            </li>
        ); 
    });

    return (
        <div className="game">
            <div className="game-board">
                <Board xIsNext={xIsNext} squares={currentSquare} onPlay={handlePlay} />
            </div>
            <div className="game-info">
                <ol>{moves}</ol>
            </div>
        </div>
    );
}