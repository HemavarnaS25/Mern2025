import React from "react";

const Controls = ({ gridSize, setGridSize, resetMaze, saveMaze }) => {
  return (
    <div className="controls">
      <label>
        Grid Size:
        <input
          type="number"
          value={gridSize}
          min="5"
          max="20"
          onChange={(e) => setGridSize(Number(e.target.value))}
        />
      </label>
      <button onClick={resetMaze}>Reset Maze</button>
      <button onClick={saveMaze}>Download</button>
    </div>
  );
};

export default Controls;
