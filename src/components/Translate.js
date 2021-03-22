import React, { useState } from "react";
import Dropdown from "./Dropdown";
import Convert from "./Convert";

const options = [
  {
    label: "Afrikaans",
    value: "af",
  },
  {
    label: "Arabic",
    value: "ar",
  },
  {
    label: "Dutch",
    value: "nl",
  },
  {
    label: "Hindi",
    value: "hi",
  },
  {
    label: "Polish",
    value: "pl",
  },
  {
    label: "Spanish",
    value: "es",
  },
];

const Translate = () => {
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState("");
  return (
    <div>
      <div className="ui form">
        <p className="ui segment yellow">
          Warning: The translation api will work only if it's called from
          localhost:3000. If you can't see any text being translated you can
          contact <a href="https://alfonso-dev.com/contact/">me</a> for a
          private demo
        </p>
        <div className="field">
          <label>Write something</label>
          <input
            className=""
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
      </div>
      <Dropdown
        label="Select a Language"
        options={options}
        selected={language}
        onSelectedChanged={setLanguage}
      />
      <hr />
      <h3 className="ui header">Output</h3>
      <Convert language={language} text={text} />
    </div>
  );
};

export default Translate;
