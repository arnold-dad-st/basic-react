import React, { useState } from "react";
import "./App.css";

const Input = ({ label, initValue, error, disabled }) => {
  const [text, setText] = useState(initValue || "");
  const [errorText, setErrorText] = useState(error || "");

  const handleChange = (event) => {
    setText(event.target.value);
  };
  console.log("Render Inout element");

  return (
    <label>
      {label}
      <input disabled={disabled} value={text} onChange={handleChange} />
      {errorText && <p style={{ color: "red" }}>{errorText}</p>}
    </label>
  );
};

function App() {
  const [select, setSelect] = useState("option3");
  const [checkbox, setCheckbox] = useState(true);
  const [radio, setRadio] = useState("radio2");
  const [range, setRange] = useState(0);
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted", event);

    const data = {
      select,
      checkbox,
      radio,
      range,
      date,
    };

    console.log(JSON.stringify(data));

    // request to server
  };

  const handleSelectChange = (event) => {
    setSelect(event.target.value);
  };

  const handleCheckboxChange = (event) => {
    setCheckbox(event.target.checked);
  };

  const handleRadioChange = (event) => {
    setRadio(event.target.value);
  };

  const handleRangeChange = (event) => {
    setRange(event.target.value);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const name = localStorage.getItem("name");

  return (
    <div style={{ maxWidth: "500px", margin: "0 auto" }}>
      <form onSubmit={handleSubmit}>
        <Input label="Name" initValue={name} disabled={!!name} />
        <select value={select} onChange={handleSelectChange}>
          <option disabled value="option1">
            Option 1
          </option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>

        <label>
          <input
            checked={checkbox}
            type="checkbox"
            onChange={handleCheckboxChange}
          />
          Checkbox
        </label>

        <label>
          Radio Input:
          <label>
            Radio One:
            <input
              checked={radio === "radio1"}
              type="radio"
              name="radio"
              value="radio1"
              onChange={handleRadioChange}
            />
          </label>
          <label>
            Radio Two:
            <input
              checked={radio === "radio2"}
              type="radio"
              name="radio"
              value="radio2"
              onChange={handleRadioChange}
            />
          </label>
        </label>
        <label>
          Range:
          <input
            min="0"
            max="100"
            type="range"
            value={range}
            onChange={handleRangeChange}
          />
        </label>

        <label>
          Date:
          <input type="date" value={date} onChange={handleDateChange} />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
