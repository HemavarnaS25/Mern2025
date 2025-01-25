export const generateEmptyMaze = (size) => {
    return Array.from({ length: size }, () => Array(size).fill(0)); // Create a 2D array of 0s (paths)
  };
  