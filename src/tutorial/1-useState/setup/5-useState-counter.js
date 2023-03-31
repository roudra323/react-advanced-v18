import React, { useState } from "react";

const UseStateCounter = () => {
  let [count, setCount] = useState(0);

  return (
    <React.Fragment>
      <h2>{count}</h2>
      <button type="button" className="btn" onClick={() => setCount(count + 1)}>
        increase
      </button>
      <button type="button" className="btn" onClick={() => setCount(count - 1)}>
        decrease
      </button>
      <button type="button" className="btn" onClick={() => setCount(0)}>
        reset
      </button>
    </React.Fragment>
  );
};
export default UseStateCounter;
