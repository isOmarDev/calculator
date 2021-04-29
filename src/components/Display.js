import React, {useContext} from "react";
import {Context} from "../Context"

function Display () {
  const {operation, total} = useContext(Context)
  return (
    <div className="display">
      <p className="display-operation">{operation}</p>
      <p className="display-total">{total.includes("e") ? total : total.slice(0,9)}</p>
    </div>
  )
} 

export default Display
