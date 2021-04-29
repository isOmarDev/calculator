import React, {useContext} from "react";
import {Context} from "../Context"

import Numbers from "./numpad-components/Numbers";
import Operators from "./numpad-components/Operators";

function Numpad () {
  const {handleOperation} = useContext(Context)

  return (
    <div className="numpad">
      <div className="empty-space"/>
      <div className="num-operators">
        <Numbers handleOperation={handleOperation}/>
        <Operators handleOperation={handleOperation}/>
      </div>
      <div className="empty-space"/>
    </div>
  )
} 

export default Numpad
