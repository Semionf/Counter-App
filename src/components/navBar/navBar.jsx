import React from "react";

export const NavBar = ({ total, handleReset }) => {
  return (
    <div>
      <div>{total}</div>
      <button className="btn btn-danger" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
};
