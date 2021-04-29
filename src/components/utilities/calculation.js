import {toExponentialTotal} from "./toExponential"

function calculation(operands, sign) {
  const firstNum = Number(operands[0])
  const secondNum = Number(operands[1])
  let total;

  if(sign==="+"){
    total = firstNum + secondNum
  } else if(sign==="-") {
    total = firstNum - secondNum
  } else if(sign==="x") {
    total = firstNum * secondNum
  } else {
    total = firstNum / secondNum
  }
  return toExponentialTotal(total)
}

export {calculation}