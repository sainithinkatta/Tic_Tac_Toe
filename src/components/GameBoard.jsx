import { useState } from "react";

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]

export default function GameBoard ({ changePlayer, activePlayer }) {
    const [gameBoard, setGameBoard] = useState(initialGameBoard);

    function handleSelectSquare (rowIndex, colIndex) {
        setGameBoard((prevGameBoard) => {
            const updatedBoard = [ ...prevGameBoard.map((innerArray) => [...innerArray]) ];
            updatedBoard[rowIndex][colIndex] = activePlayer;
            return updatedBoard;
        });

        changePlayer();
    }

    return (
        <ol id="game-board">
            {
                gameBoard.map((row, rowIndex) => (
                    <li key={rowIndex}>
                        <ol>
                            {row.map((col, colIndex) => (
                                <li key={colIndex}>
                                    <button onClick={() => {
                                        handleSelectSquare(rowIndex, colIndex)
                                    }}>{col}</button>
                                </li>
                            ))}
                        </ol>
                    </li>
                ))
            }
    
            <li>
                <ol>
                    <li></li>
                    <li></li>
                    <li></li>
                </ol>
            </li>
        </ol>
    );        
}
