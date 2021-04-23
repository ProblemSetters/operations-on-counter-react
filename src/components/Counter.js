import React, { useState } from "react";
import 'h8k-components';

function Counter() {

  const [counterValue, setCounterValue ] = useState(0);
  const [inputValue, setInputValue ] = useState("");
  const [isInteger, setIsIntegerFlag ] = useState(false);

  const handleAddition = () => {
    setCounterValue(counterValue + parseInt(inputValue))
  }

  const handleSubtraction = () => {
    setCounterValue(counterValue - parseInt(inputValue))
  }

  const handleChange = (e) => {
    const value = e.target.value
    const isInt = !isNaN(value) && (parseInt(value) == value)
    setInputValue(value)
    setIsIntegerFlag(isInt)
  }

  const handleReset = (e) => {
    setCounterValue(0)
  }

  return (
    <div>
      <div className="mt-100 layout-column align-items-center justify-content-center">
        <h1 className="my-0" data-testid="header">Counter</h1>
        <h1 className="my-0" data-testid="counter">{counterValue}</h1>
        <div className="layout-row">
          <button 
            data-testid="add-button"
            disabled={!isInteger}
            onClick={handleAddition}
          >Add</button>
          <input 
            data-testid="input-field"
            className="mt-10" 
            type="text" 
            placeholder="Enter value to add/subtract"
            value={inputValue}
            onChange={handleChange}
          />
          <button 
            data-testid="sub-button"
            disabled={!isInteger}
            onClick={handleSubtraction}
          >Sub</button>
        </div>
        <button 
          data-testid="reset-button"
          onClick={handleReset}
        >Reset Counter</button>
      </div>
    </div>
  );
}

export default Counter;
