import React, { useState, useEffect } from "react";
import "./App.css";
import { evaluate } from "mathjs";

const App = () => {
  const [inputState, setInputState] = useState("");
  const [error, setError] = useState("");
  const [resultStatus, setResultStatus] = useState(false);

  useEffect(() => {
    setError("");
    if (!inputState) {
      setInputState("0");
    } else {
      if (inputState.length > 28) {
        setInputState(inputState.substring(0, inputState.length - 1));
      }
    }
  }, [inputState]);

  const clearAll = () => {
    setError("");
    setResultStatus(false);
    setInputState("0");
  };

  const clearEntry = () => {
    setError("");
    setResultStatus(false);
    setInputState(inputState.substring(0, inputState.length - 1));
  };

  const addCharacterToFormState = (value) => {
    setError("");
    setResultStatus(false);
    if (inputState.length === 1 && inputState === "0") {
      setInputState(value);
    } else if (value === "x") {
      setInputState(inputState + "*");
    } else {
      setInputState(inputState + `${value}`);
    }
  };

  const evaluateExpression = () => {
    try {
      setInputState(`${evaluate(inputState)}`);
      setResultStatus(true);
    } catch (error) {
      setError("EXPRESSION SYNTAX ERROR!");
    }
  };

  return (
    <div className="App">
      <div>
        <h1
          style={{
            margin: 0,
            paddingTop: "20px",
            textAlign: "center",
            color: "white",
          }}
        >
          Daniel Nofulla's 4 Function Calculator!
        </h1>
      </div>
      <div className="container">
        <div className="innerContainer">
          <p
            style={{
              textAlign: "center",
              color: "red",
              fontSize: "20px",
            }}
          >
            {error}
          </p>
          <p
            style={{
              textAlign: "center",
              color: "white",
              fontSize: "20px",
            }}
          >
            {resultStatus ? "Result:" : null}
          </p>
          <div className="resultScreen">
            <div className="result">{inputState}</div>
          </div>

          <div className="buttonContainer">
            <button className="clearAll" onClick={() => clearAll()}>
              C
            </button>
            <button className="clear" onClick={() => clearEntry()}>
              CE
            </button>

            <button onClick={() => addCharacterToFormState("/")}>/</button>
            <button onClick={() => addCharacterToFormState("x")}>x</button>

            <button onClick={() => addCharacterToFormState("7")}>7</button>
            <button onClick={() => addCharacterToFormState("8")}>8</button>
            <button onClick={() => addCharacterToFormState("9")}>9</button>
            <button onClick={() => addCharacterToFormState("-")}>-</button>

            <button onClick={() => addCharacterToFormState("4")}>4</button>
            <button onClick={() => addCharacterToFormState("5")}>5</button>
            <button onClick={() => addCharacterToFormState("6")}>6</button>

            <button
              className="plus"
              onClick={() => addCharacterToFormState("+")}
            >
              +
            </button>

            <button onClick={() => addCharacterToFormState("1")}>1</button>
            <button onClick={() => addCharacterToFormState("2")}>2</button>
            <button onClick={() => addCharacterToFormState("3")}>3</button>

            <button
              className="zero"
              onClick={() => addCharacterToFormState("0")}
            >
              0
            </button>

            <button onClick={() => addCharacterToFormState(".")}>.</button>
            <button onClick={() => evaluateExpression()} className="equals">
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
