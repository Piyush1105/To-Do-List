/* eslint-disable no-undef */
import { useState } from "react";
import React from "react";
import ToDoList from "./todolist";

import "./App.css";

function App() {
  const [inputList, setInputList] = useState("");
  const [inputItems, setInputItems] = useState([]);

  const items = (event) => {
    setInputList(event.target.value);
  };

  const addItem = () => {
    setInputItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList("");
  };

  const deleteItem = (id) => {
    setInputItems((oldItems) => {
      return oldItems.filter((arrElem, index) => {
        return index !== id;
      });
    });
  };

  return (
    <>
      <div className="main_div">
        <div className="inside_div">
          <br />
          <h1>To Do List</h1>
          <br />
          <input
            type="text"
            placeholder="Add a item"
            value={inputList}
            onChange={items}
          />
          <button type="button" onClick={addItem} />

          <ol>
            {inputItems.map((itemValue, index) => {
              return (
                <ToDoList
                  key={index}
                  id={index}
                  text={itemValue}
                  onSelect={deleteItem}
                />
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
}

export default App;
