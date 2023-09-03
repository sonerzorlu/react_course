import { useState } from "react";

const KeyboardClipboard = () => {
  const [inputData, setInputData] = useState("");

  const handleKeyDown = (e) => {
    if (e.keyCode >= 48 && e.keyCode <= 57) {
      e.preventDefault();
      alert("no number");
    }
  };

  const handlePast = (e) => {
    e.target.style.fontSize = "27px";
    e.target.style.color = "red";
    e.target.style.backgroundColor = "blue";
    e.target.value += e.clipboardData.getData("text").toUpperCase();
    e.preventDefault();
  };

  const handleCopy = (e) => {
    e.preventDefault();
  };
  const handleCut = (e) => {
    e.preventDefault();
  };

  return (
    <div className="container textcenter">
      <h2 className="display-5 text-danger">Keyboard-Clipboard Events</h2>

      <input
        type="text"
        className="form-control"
        onChange={(e) => {
          e.target.value = e.target.value.toUpperCase();
          setInputData(e.target.value);
        }}
        onKeyDown={handleKeyDown}
        onCopy={handleCopy}
        onCut={handleCut}
      />
      <div className="text-start mt-4">
        <h6>Copied Input Data</h6>
        <p>{inputData.toLowerCase()}</p>
      </div>

      <textarea
        className="form-control"
        name="textarea"
        id="textarea"
        cols="30"
        rows="10"
        onPaste={handlePast}
      ></textarea>
    </div>
  );
};

export default KeyboardClipboard;
