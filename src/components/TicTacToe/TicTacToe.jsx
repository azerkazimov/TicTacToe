import { FaRegCircle } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { useState } from "react";

function TicTacToe() {
  const [count, setCount] = useState(0);
  const [lock, setLock] = useState(false);
  const [data, setData] = useState(Array(9).fill(""));
  const [history, setHistory] = useState([]);
  const [title, setTitle] = useState("Tic Tac Toe");

  const checkWinner = (board) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return null;
  };

  const toggle = (num) => {
    if (lock || data[num] !== "") {
      return;
    }
    const newData = [...data];
    const newHistory = [...history, num];

    if (newHistory.length > 5) {
      const firstMove = newHistory.shift();
      newData[firstMove] = "";
    }

    newData[num] = count % 2 === 0 ? "x" : "o";
    setData(newData);
    setHistory(newHistory);
    setCount(count + 1);

    const winner = checkWinner(newData);
    if (winner) {
      won(winner);
    }
  };

  const won = (winner) => {
    setLock(true);
    if (winner === "x") {
      setTitle(
        <span>
          Congratulations: <RxCross1 />
        </span>
      );
    } else {
      setTitle(
        <span>
          Congratulations: <FaRegCircle />
        </span>
      );
    }
  };

  const resetGame = () => {
    setData(Array(9).fill(""));
    setCount(0);
    setLock(false);
    setHistory([]);
    setTitle("Tic Tac Toe");
  };

  return (
    <div className="tic-tac-toe">
      <h1 className="title">{title}</h1>
      <div className="board">
        <div className="row1">
          <div className="boxes" onClick={() => toggle(0)}>
            {data[0] === "x" && <RxCross1 />}
            {data[0] === "o" && <FaRegCircle />}
          </div>
          <div className="boxes" onClick={() => toggle(1)}>
            {data[1] === "x" && <RxCross1 />}
            {data[1] === "o" && <FaRegCircle />}
          </div>
          <div className="boxes" onClick={() => toggle(2)}>
            {data[2] === "x" && <RxCross1 />}
            {data[2] === "o" && <FaRegCircle />}
          </div>
        </div>
        <div className="row2">
          <div className="boxes" onClick={() => toggle(3)}>
            {data[3] === "x" && <RxCross1 />}
            {data[3] === "o" && <FaRegCircle />}
          </div>
          <div className="boxes" onClick={() => toggle(4)}>
            {data[4] === "x" && <RxCross1 />}
            {data[4] === "o" && <FaRegCircle />}
          </div>
          <div className="boxes" onClick={() => toggle(5)}>
            {data[5] === "x" && <RxCross1 />}
            {data[5] === "o" && <FaRegCircle />}
          </div>
        </div>
        <div className="row3">
          <div className="boxes" onClick={() => toggle(6)}>
            {data[6] === "x" && <RxCross1 />}
            {data[6] === "o" && <FaRegCircle />}
          </div>
          <div className="boxes" onClick={() => toggle(7)}>
            {data[7] === "x" && <RxCross1 />}
            {data[7] === "o" && <FaRegCircle />}
          </div>
          <div className="boxes" onClick={() => toggle(8)}>
            {data[8] === "x" && <RxCross1 />}
            {data[8] === "o" && <FaRegCircle />}
          </div>
        </div>
      </div>
      <button className="reset" onClick={resetGame}>
        Reset
      </button>
    </div>
  );
}

export default TicTacToe;
