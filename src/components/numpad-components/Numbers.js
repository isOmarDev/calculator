import React from "react";

function Numbers ({handleOperation}) {

  // Loop over numbers to easy display them 
  const numbers = []
  for(let i=1; i<13; i++) {
    if(i==10) {
      numbers.push(<button key={i} value={"0"} onClick={handleOperation}>0</button>)
    } else if(i==11) {
      numbers.push(<button key={i} value={"00"} onClick={handleOperation}>00</button>)
    } else if(i==12) {
      numbers.push(<button key={i} value={"."} onClick={handleOperation}>.</button>)
    } else {
      numbers.push(<button key={i} value={i} onClick={handleOperation}>{i}</button>)
    }
  }

  return (  
    <>
      {numbers}
    </>
  )
} 

export default Numbers
