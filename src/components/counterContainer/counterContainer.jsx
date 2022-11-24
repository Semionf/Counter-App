import React, { useState } from "react";
import { Conuter } from "../counter/conuter";
import { NavBar as NavBarContainer } from "../navBar/navBar";

export const CounterContainer = (props) => {
  const [total, setTotal] = useState(0);
  const [countArr, setCountArr] = useState([]);

  const handleAdd = () => {
    let newCounter = { id: countArr.length, value: 0 };

    setCountArr((prev) => [...prev, newCounter]);
  };

  const handleDelete = (id) => {
    let deleted = countArr.find((c) => c.id === id);
    setTotal((prev) => prev - deleted.value);
    setCountArr(
      countArr.filter((c) => {
        return c.id !== id;
      })
    );
  };
  const handleReset = () => {
    countArr.map((c) => {
      c.value = 0;
      setTotal(0);
      return null;
    });
  };
  const handleIncrement = (id) => {
    let counter = countArr.find((c) => c.id === id);
    counter.value = counter.value + 1;
    setTotal((prev) => prev + 1);
    setCountArr([...countArr]);
  };
  const handleDecrement = (id) => {
    let counter = countArr.find((c) => c.id === id);

    if (counter.value > 0) {
      counter.value = counter.value - 1;
      setTotal((prev) => prev - 1);
    }

    setCountArr([...countArr]);
  };
  return (
    <div>
      <NavBarContainer
        handleReset={handleReset}
        total={total}
      ></NavBarContainer>
      <button className="btn btn-primary" onClick={handleAdd}>
        Add
      </button>
      {countArr &&
        countArr
          .sort((a, b) => (a.id > b.id ? 1 : -1))
          .map((c) => {
            return (
              <Conuter
                key={c.id}
                counterValue={c.value}
                counterId={c.id}
                handleIncrement={handleIncrement}
                handleDecrement={handleDecrement}
                handleDelete={handleDelete}
              ></Conuter>
            );
          })}
    </div>
  );
};
