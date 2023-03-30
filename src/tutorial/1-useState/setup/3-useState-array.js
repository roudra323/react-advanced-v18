import React, { useState } from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [people, setPeople] = useState([
    { name: "John", age: 30 },
    { name: "Jane", age: 40 },
    { name: "Bob", age: 50 },
  ]);

  const handleNameChange = (index) => {
    // create a new array with the updated object
    const newPeople = [...people];
    newPeople[index] = { ...newPeople[index], name: "New Name" };
    setPeople(newPeople);
  };

  const handleAgeChange = (index) => {
    // create a new array with the updated object
    const newPeople = [...people];
    newPeople[index] = { ...newPeople[index], age: 60 };
    setPeople(newPeople);
  };

  return (
    <div>
      {people.map((person, index) => (
        <div key={index}>
          <p>Name: {person.name}</p>
          <p>Age: {person.age}</p>
          <button className="btn" onClick={() => handleNameChange(index)}>
            Change Name
          </button>
          <button className="btn" onClick={() => handleAgeChange(index)}>
            Change Age
          </button>
        </div>
      ))}
    </div>
  );
};

export default UseStateArray;
