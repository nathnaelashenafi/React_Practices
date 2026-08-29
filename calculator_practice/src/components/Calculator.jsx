import { useState } from "react";
import { Button } from "./Button";
import { Display } from "./Display";

export function Calculator() {
  // const buttons = [
  //   "AC",
  //   "DEL",
  //   "÷",
  //   "×",
  //   "7",
  //   "8",
  //   "9",
  //   "−",
  //   "4",
  //   "5",
  //   "6",
  //   "+",
  //   "1",
  //   "2",
  //   "3",
  //   "=",
  //   "0",
  //   ".",
  //   "+/-",
  //   "%",
  // ];
  const numberButtons = ["7", "8", "9", "4", "5", "6", "1", "2", "3", "0"];
  const [display, setDisplay] = useState("0");

  function handleNumberClick(value) {
    if (display === "0") {
      setDisplay(value);
    } else {
      setDisplay(display + value);
    }
  }

  function handleClear() {
    setDisplay("0");
  }

  function handleDel() {
    if (display.length === 1) {
      setDisplay("0");
    } else {
      setDisplay(display.slice(0, -1));
    }
  }
  return (
    <div className="flex items-center justify-center w-full min-h-screen bg-black">
      <div className="w-full max-w-sm p-4 bg-gray-900 rounded-2xl shadow-2xl">
        <Display value={display} />
        <div className="grid grid-cols-4 gap-2 mt-4">
          <Button value="AC" onClick={handleClear} />
          <Button value="DEL" onClick={handleDel} />
          {numberButtons.map((button) => (
            <Button
              key={button}
              value={button}
              onClick={() => handleNumberClick(button)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
