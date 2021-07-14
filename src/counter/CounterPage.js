import React, { useState } from "react";
import CounterDisplay from "./components/CounterDisplay";
import {
  CounterPageContainer,
  ButtonContainer,
} from "./styles/CounterPageStyles";

const CounterPage = () => {
	// States
  const [count, setCount] = useState(0);
  const [customCount, setCustomCount] = useState("");

  // Event handlers
  const handleDecrementClick = () => {
    setCount(count - 1);
  };

  const handleIncrementClick = () => {
    setCount(count + 1);
  };

  const handleCustomCountOnChange = (event) => {
    setCustomCount(event.target.value);
  };

  const handleApplyButtonClick = () => {
    var reg = /^\d+$/;

    if (reg.test(customCount)) {
      setCount(parseInt(customCount));
    }

    setCustomCount("");
  };

  return (
    <CounterPageContainer>
      <CounterDisplay count={count} />
      <ButtonContainer>
        <button onClick={handleDecrementClick}>Decrement</button>
        <button onClick={handleIncrementClick}>Increment</button>
      </ButtonContainer>
      <div>
        <input value={customCount} onChange={handleCustomCountOnChange} />
        <button onClick={handleApplyButtonClick}>Apply</button>
      </div>
    </CounterPageContainer>
  );
};

export default CounterPage;
