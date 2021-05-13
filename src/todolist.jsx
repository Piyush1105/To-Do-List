import React from "react";

const ToDoList = (props) => {
  return (
    <>
      <div style={{ display: "flex" }}>
        <i
          className="fa fa-times"
          aria-hidden="true"
          onClick={() => {
            props.onSelect(props.id);
          }}
        >
          ⚔️
        </i>
        <li style={{ listStyle: "none" }}>{props.text}</li>
      </div>
    </>
  );
};

export default ToDoList;
