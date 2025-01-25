import React from "react";

const MazeGrid = ({ maze, updateCell }) => {
  return (
    <div
      id="mazeGrid"
      className="maze-grid"
      style={{ gridTemplateColumns: `repeat(${maze.length}, 30px)` }}
    >
      {maze.map((row, rowIndex) =>
        row.map((cell, colIndex) => (
          <div
            key={`${rowIndex}-${colIndex}`}
            className={`cell ${cell === 1 ? "wall" : "path"}`}
            onClick={() => updateCell(rowIndex, colIndex)}
          />
        ))
      )}
    </div>
  );
};

export default MazeGrid;
