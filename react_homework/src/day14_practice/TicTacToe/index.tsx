import {useState} from "react";
import "./style.css";


export default function TicTacToe() {
 const [data, setData] = useState(Array(9).fill(""));
  const [count, setCount] = useState(0);
  const [lock, setLock] = useState(false);
  const [player, setPlayer] = useState("X");
  const [winner, setWinner] = useState("");

  const handleClick = (index:any) => {
    if (lock || data[index] !== "") return;

    const newData = [...data];
    newData[index] = count % 2 === 0 ? "X" : "O";
    setData(newData);
    setCount(count + 1);
    checkWin(newData);

    setPlayer(player === "X" ? "O" : "X");
  };

  const checkWin = (board:any) => {
    const winConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let condition of winConditions) {
      const [a, b, c] = condition;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        setWinner(board[a]);
        setLock(true);
        return;
      }
    }

    if (!board.includes("")) {
      setWinner("Tie");
      setLock(true);
    }
  };

  const handleReset = () => {
    setData(Array(9).fill(""));
    setCount(0);
    setLock(false);
    setWinner("");
  };

  return (
    <div>
      <h2>Tic Tac Toe</h2>
      <div>Current Player: {player}</div>
      <div className="board">
        {data.map((value, index) => (
          <div key={index} className="boxes" onClick={() => handleClick(index)}>
            {value}
          </div>
        ))}
      </div>
      {winner && (
        <div>{winner === "Tie" ? "It's a Tie!" : `Winner is ${winner}`}</div>
      )}
      <button className="reset" onClick={handleReset}>
        Restart
      </button>
    </div>
  );
}
