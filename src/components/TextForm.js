import React, { useState } from "react";

export default function TextForm(props) {

  const handleCopyClick = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Text copied to clipboard!", "success");
  };
  const handleUpperClick = () => {
    setText(text.toUpperCase());
    props.showAlert("Text converted to uppercase!", "success");
  };

  const handleOnChange = (e) => {
    setText(e.target.value);
  };

  const handleLowerClick = () => {
    setText(text.toLowerCase());
    props.showAlert("Text converted to lowercase!", "success");
  };

  const handleFirstUpperClick = () => {
    let newText = text.toLowerCase();
    let firstChar = newText.charAt(0).toUpperCase();
    let remainingText = newText.slice(1);
    setText(firstChar + remainingText);
    props.showAlert("First letter converted to uppercase!", "success");
  };

  const [text, setText] = useState("");

  return (
    <div>
      <h1 className={`text-${props.mode=='light'?'dark':'light'}`}>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className={`form-control text-${props.mode=='light'?'dark':'light'} bg-${props.mode}`}
          placeholder="Enter Text Here"
          value={text}
          onChange={handleOnChange}
          id="myBox"
          rows="8"
        ></textarea>
      </div>
      <div>
        <button
          className="btn btn-primary mx-4"
          onClick={handleUpperClick}
          disabled={text.length === 0}
        >
          UpperCase
        </button>
        <button
          className="btn btn-primary mx-4"
          onClick={handleLowerClick}
          disabled={text.length === 0}
        >
          LowerCase
        </button>
        <button
          className="btn btn-primary mx-4"
          onClick={handleFirstUpperClick}
          disabled={text.length === 0}
        >
          First Upper
        </button>
        <button
          className="btn btn-primary mx-4"
          onClick={handleCopyClick}
          disabled={text.length === 0}
        >
          Copy Text
        </button>
      </div>
      <div>
        <h1 className={`text-${props.mode=='light'?'dark':'light'}`}>Your Text Summary</h1>
        <p className={`text-${props.mode=='light'?'dark':'light'}`}>{text.length==0?"0":text.split(" ").length} words and {text.length} characters.</p>
      </div>
      <div>
        <h2 className={`text-${props.mode=='light'?'dark':'light'}`}>Preview</h2>
        <p className={`text-${props.mode=='light'?'dark':'light'}`}>{text.length>0?text:"Enter something in the textArea..."}</p>
      </div>
    </div>
  );
}
