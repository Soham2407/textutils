import React, { useState } from "react";

const TextForm = ({ mode }) => {
  const [text, setText] = useState("");

  const handleToUppercase = () => {
    setText(text.toUpperCase());
  };

  const handleToLowercase = () => {
    setText(text.toLowerCase());
  };

  const handleCopy = () => {
    const inputText = document.getElementById("textarea");
    inputText.select();
    navigator.clipboard.writeText(inputText.value);
  };

  const handleRemoveSpeces = () => {
    const newText = text.replace(/ /g, "");
    setText(newText);
  };

  const handleReset = () => {
    setText("");
  };

  return (
    <>
      <div
        className="container my-4"
        style={{ color: mode === "dark" ? "#fff" : "#000" }}
      >
        <textarea
          className="form-control"
          id="textarea"
          rows="8"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter Text Here..."
          style={{
            backgroundColor: mode === "dark" ? "#404040" : "#fff",
            color: mode === "dark" ? "#fff" : "#000",
          }}
        ></textarea>
        <button
          className="btn btn-primary my-3 me-2"
          onClick={handleToUppercase}
        >
          Convert To Uppercase
        </button>
        <button
          className="btn btn-secondary my-3 me-2"
          onClick={handleToLowercase}
        >
          Convert To Lowercase
        </button>
        <button className="btn btn-info my-3 me-2" onClick={handleCopy}>
          Copy Text
        </button>
        <button
          className="btn btn-warning my-3 me-2"
          onClick={handleRemoveSpeces}
        >
          Remove Spaces
        </button>
        <button className="btn btn-secondary my-3 me-2" onClick={handleReset}>
          Clear Text
        </button>
      </div>
      <div
        className="container"
        style={{ color: mode === "dark" ? "#fff" : "#000" }}
      >
        <h2>Your Text Summery</h2>
        <p>
          {text.split(" ").length - 1} Words and {text.length} Characters
        </p>
      </div>
    </>
  );
};

export default TextForm;
