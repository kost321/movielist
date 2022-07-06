import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { add, clear, selectInput, addSomeText } from "./inputSlice";
import "./input.css";

export function FieldInput() {
  const field = useSelector(selectInput);
  const dispatch = useDispatch();
  const [addText, setaddText] = useState("");

  const handleChange = () => {
    setaddText("");
  };

  return (
    <div>
      <div className="container">
        <div
          className="text"
          contenteditable="false"
          data-placeholder="input field"
        >
          {field}
        </div>
        <button
          className="btn"
          aria-label="Decrement value"
          onClick={() => dispatch(add())}
        >
          add !
        </button>
        <button
          className="btn"
          aria-label="Decrement value"
          onClick={() => dispatch(clear())}
        >
          clear
        </button>
      </div>

      <div className="block__field">
        <input
          className="input"
          aria-label="Set increment amount"
          value={addText}
          onChange={(e) => {
            setaddText(e.target.value);
          }}
        />
        <button
          className="btn"
          aria-label="Decrement value"
          onClick={() => dispatch(addSomeText(addText))}
        >
          add
        </button>
        <button
          className="btn"
          aria-label="Decrement value"
          onClick={() => handleChange(addText)}
        >
          clear
        </button>
      </div>
    </div>
  );
}

export default FieldInput;
