import React from "react";

import Display from './components/Display'
import Numpad from './components/Numpad'
import Equal from "./components/Equal"

function App () {

  return (
    <div className="calculator">
      <Display />
      <Numpad />
      <Equal />
    </div>
  )
} 

export default App