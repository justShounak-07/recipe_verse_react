import React from "react";

const Recipe = (props) => {
  return (
    <>
      <div className="menu-card">
        <div className="card">
          <div className="title"> {props.title} </div>
          <div className="description"> {props.description}</div>
        </div>
      </div>
    </>
  );
};

export default Recipe;
