import { useState } from "react";
import { Button } from "./Button";
import { Display } from "./Display";

export function Calculator() {
  const numberButtons = ["7", "8", "9", "4", "5", "6", "1", "2", "3", "0"];
  const operators = ["÷", "×", "−", "+"];

  const [display, setDisplay] = useState("0");
  const [firstNumber, setFirstNumber] = useState(null);
  const [operator, setOperator] = useState(null);

  function handleNumberClick(value) {
    if (display === "0") {
      setDisplay(value);
    } else {
      setDisplay(display + value);
    }
  }

  function handleClear() {
    setDisplay("0");
    setFirstNumber(null);
    setOperator(null);
  }

  function handleDel() {
    if (display.length === 1) {
      setDisplay("0");
    } else {
      setDisplay(display.slice(0, -1));
    }
  }

  function handleOperator(value) {
    setFirstNumber(Number(display));
    setOperator(value);
    setDisplay("0");
  }

  function handleEquals() {
    const secondNumber = Number(display);
    let result;

    switch (operator) {
      case "+":
        result = firstNumber + secondNumber;
        break;

      case "−":
        result = firstNumber - secondNumber;
        break;

      case "×":
        result = firstNumber * secondNumber;
        break;

      case "÷":
        if (secondNumber === 0) {
          setDisplay("Error");
          return;
        }
        result = firstNumber / secondNumber;
        break;

      default:
        return;
    }

    setDisplay(String(result));
    setFirstNumber(null);
    setOperator(null);
  }

  function handleDecimal() {
    if (!display.includes(".")) {
      setDisplay(display + ".");
    }
  }

  function handleToggleSign() {
    if (display === "0" || display === "Error") {
      return;
    }

    if (display.startsWith("-")) {
      setDisplay(display.slice(1));
    } else {
      setDisplay("-" + display);
    }
  }
  return (
    <div className="flex items-center justify-center w-full min-h-screen bg-black">
      <div className="w-full max-w-sm p-4 bg-gray-900 rounded-2xl shadow-2xl">
        <Display value={display} />

        <div className="grid grid-cols-4 gap-2 mt-4">
          <Button value="AC" onClick={handleClear} />
          <Button value="DEL" onClick={handleDel} />

          {operators.map((operato) => (
            <Button
              key={operato}
              value={operato}
              onClick={() => handleOperator(operato)}
            />
          ))}

          {numberButtons.map((button) => (
            <Button
              key={button}
              value={button}
              onClick={() => handleNumberClick(button)}
            />
          ))}

          <Button value="=" onClick={handleEquals} />
          <Button value="." onClick={handleDecimal} />
        </div>
      </div>
    </div>
  );
}
