import Slot from "./Slot";

const tmp = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

const Board = () => {
  return (
    <div className="board">
      {tmp.map((row) =>
        row.map((cl) => <div className="cell">{cl % 3 === 0 && <Slot />}</div>)
      )}
    </div>
  );
};

export default Board;
