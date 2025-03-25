import React from "react";
import Square from "./Square";

export default function Board({ squares, handleClick }) {
  return (
    <div className="board">
      <div>
        <div className="board-row">
          {Array.from({ length: 3 }).map((_, i) => (
            <Square key={i} value={squares[i]} onClick={() => handleClick(i)} />
          ))}
        </div>
        <div className="board-row">
          {Array.from({ length: 3 }).map((_, i) => (
            <Square key={i + 3} value={squares[i + 3]} onClick={() => handleClick(i + 3)} />
          ))}
        </div>
        <div className="board-row">
          {Array.from({ length: 3 }).map((_, i) => (
            <Square key={i + 6} value={squares[i + 6]} onClick={() => handleClick(i + 6)} />
          ))}
        </div>
      </div>
    </div>
  );
}
