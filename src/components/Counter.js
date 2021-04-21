import React, { useState } from "react";
import 'h8k-components';

function Counter() {

  const [counterValue, setCounterValue ] = useState(0);
  const [inputValue, setInputValue ] = useState(0);
  const [isInteger, setIsIntegerFlag ] = useState(true);

  const handleAddition = () => {
    setCounterValue(counterValue + inputValue)
  }

  const handleSubtraction = () => {
    setCounterValue(counterValue - inputValue)
  }

  const handleChange = (e) => {
    setInputValue(parseInt(e.target.value))
    setIsIntegerFlag(!isNaN(e.target.value))
  }

  return (
    <div>
      <div className="mt-100 layout-column align-items-center justify-content-center">
        <h1 className="my-0" data-testid="header">My Counter</h1>
        <h1 className="my-0" data-testid="counter">{counterValue}</h1>
        <div className="layout-row">
          <button 
            data-testid="add-button"
            disabled={!isInteger}
            onClick={handleAddition}
          >+</button>
          <input 
            data-testid="input-field"
            className="mt-10" 
            type="text" 
            placeholder="Enter value"
            onChange={handleChange}
            defaultValue={0}
          />
          <button 
            data-testid="sub-button"
            disabled={!isInteger}
            onClick={handleSubtraction}
          >-</button>
        </div>
      </div>
    </div>
  );
}

export default Counter;
