import React from "react";

function Operators ({handleOperation}) {
  
  return (
    <>
      <button value="clear" onClick={handleOperation}>C</button>
      <button value="divide" onClick={(e)=>handleOperation(e, "/")}>/</button>
      <button value="multiply" onClick={(e)=>handleOperation(e, "x")}>x</button>
      <button value="substract" onClick={(e)=>handleOperation(e, "-")}>-</button>
      <button value="add" onClick={(e)=>handleOperation(e, "+")}>+</button>
    </>
  )
} 

export default Operators

