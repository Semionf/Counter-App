import React, { useState } from "react";
import "./style.css";

export const Conuter = ({
  counterValue,
  counterId,
  handleIncrement,
  handleDecrement,
  handleDelete,
}) => {
  const [background, setBackground] = useState("");
  const increment = () => {
    handleIncrement(counterId);
    setBackground("Dark");
  };
  const decrement = () => {
    handleDecrement(counterId);
    setBackground("Light");
  };

  const deleteCounter = () => {
    handleDelete(counterId);
  };
  return (
    <div className={background}>
      <button className={"btn btn-success "} onClick={increment}>
        +
      </button>
      <span>{counterValue}</span>
      <button className={"btn btn-danger"} onClick={decrement}>
        -
      </button>
      <button className="btn btn-danger" onClick={deleteCounter}>
        Delete
      </button>
    </div>
  );
};
