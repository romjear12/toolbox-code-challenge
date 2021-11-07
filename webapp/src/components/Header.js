import { useState } from "react";

function Header(props) {
  const { handleFetch, resetArray, state } = props;
  const [text, setText] = useState("");

  const handleInput = (e) => {
    const text = e.target.value;
    setText(text);
  };

  const handleButton = () => {
    if (text && text.trim() !== "") {
      handleFetch(text);
      setText("");
    }
  };

  const inputIsFilled = text.trim() !== "";
  return (
    <div className="header">
      <div className="row">
        <div className="col col-md-8 offset-md-2 col-10 offset-1">
          <div className="input-group mb-3 pt-4 pb-4">
            <input
              type="text"
              className="form-control"
              placeholder="Insert text"
              aria-label="Insert text"
              aria-describedby="button-addon2"
              onChange={handleInput}
              value={text || ""}
              required
            />
            <button className="btn btn-primary" type="button" id="button-addon2" onClick={handleButton} disabled={!inputIsFilled}>
              Send
            </button>
            &nbsp;&nbsp; &nbsp;
            {state.array.length > 0 && (
              <button className="btn btn-link" type="button" onClick={resetArray}>
                Reset
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
