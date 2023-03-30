import React, { useState } from "react";

const UseStateCounter = () => {
  let [count, setCount] = useState(0);

  const incClick = () => {
    console.log(count);
    count += 1;
    setCount(count);
  };

  const decClick = () => {
    console.log(count);
    count -= 1;
    setCount(count);
  };

  const resClick = () => {
    console.log(count);
    count = 0;
    setCount(count);
  };

  return (
    <React.Fragment>
      <h2>{count}</h2>
      <button type="button" className="btn" onClick={() => incClick()}>
        increase
      </button>
      <button type="button" className="btn" onClick={() => decClick()}>
        decrease
      </button>
      <button type="button" className="btn" onClick={() => resClick()}>
        reset
      </button>
    </React.Fragment>
  );
};
export default UseStateCounter;
