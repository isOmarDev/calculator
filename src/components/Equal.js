import React, {useContext} from "react";
import {Context} from "../Context"

function Equal () {
  const {handleOperation} = useContext(Context)

  return (
    <div className="equal">
      <button value="equal" onClick={handleOperation}>=</button>
    </div>
  )
} 

export default Equal
