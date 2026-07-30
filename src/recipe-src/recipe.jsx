import React from "react";

const Recipe = (props) => {
  return (
    <div className="">
      <div className="card flex min-h-62.5 flex-col items-center rounded-xl border-[5px] border-double border-amber-300 bg-green-800/85 p-7.5 text-amber-100 duration-500 hover:scale-110">
        <div className="title text-xl"> {props.title} </div>
        <div className="description mt-auto"> {props.description}</div>
      </div>
    </div>
  );
};

export default Recipe;
