import React from "react";

const ErrorExample = () => {
  let title = "Random Title";

  const handleClick = () => {
    title = "Hello People";
    console.log(title);
  };
  return (
    <>
      <h2>{title}</h2>
      <button type="button" className="btn" onClick={handleClick}>
        Click to change title
      </button>
    </>
  );
};

export default ErrorExample;
