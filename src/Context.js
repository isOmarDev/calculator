import React, {useState, useEffect} from "react"
import  {calculation} from "./components/utilities/calculation"
const Context = React.createContext()

function ContextProvider({children}) {
  const [operands, setOperands] = useState([])
  const [operation, setOperation] = useState("")
  const [total, setTotal] = useState("0")
  const [isOperator, setIsOperator] = useState(false)
  const [isFirstNumber, setIsFirstNumber] = useState(true)
  const [isSecondOperand, setIsSecondOperand] = useState(false)

  // watch over second operand input
  useEffect(() => {
    isSecondOperand && setIsOperator(true)
  }, [isSecondOperand])

  // watch over numbers entered
  useEffect(() => {
    operands.length===2 && checkOperandsLength(2)
    operands.length===3 && checkOperandsLength(3)
  }, [operands])
  
  // watch over the total displayed
  useEffect(() => {
    if(operands.length===2) {
      setOperands([total])
      setOperation(prevOperation => total + prevOperation[prevOperation.length-1])
    } 
  }, [total])

  // check first set of number entered
  function checkNumberEntered(value, checkDecimal) {
    setTotal(prevTotal => prevTotal==="0" && value!=="." && value!=="00" ? value 
                        : checkDecimal && value==="." ? prevTotal
                        : value.length > prevTotal.length && prevTotal[0]==="0" ? prevTotal
                        : prevTotal + value)
  }
  // check decimal entered one time only and check for double zeros
  function checkDecimalAndDoubleZeros(value) {
    setTotal( value!=="." && value!=="00" ? value
            : value==="." ? "0" + "."
            : "0")
  }
  // check the operator entered
  function inputOperator(isOperator, total, sign) {
    if(isOperator===false){
      setOperands([total])
      setOperation(total[total.length-1]==="." ? total.slice(0,-1) + sign : total + sign)
    } else {
      setOperands(prevOperands => [...prevOperands, total])
      setIsOperator(false)
    }  
  }
  // check operands array length , if it is 2 , it should make the calculation 
  function checkOperandsLength(length) {
    setTotal(calculation(operands, operation[operation.length-1]))
    length===2 ? setOperation(prevOperation => total + prevOperation[prevOperation.length-1]) : setOperation(prevOperation => operands[0] + prevOperation[prevOperation.length-1] + operands[1] + operands[2])
    setIsFirstNumber(true)
    setIsSecondOperand(false)
  }
  // handles reset button
  function reset(value) {
    value==="clear" ? setTotal("0") : checkDecimalAndDoubleZeros(value)
    setOperands([])
    setOperation("")
    setIsFirstNumber(true)
    setIsOperator(false)
    setIsSecondOperand(false)
  }

  // handle the operator button clicked
  function handleOperation(e, sign) {
    const {value} = e.target
    const operationLength = operation.length
    const checkDecimal = total.includes(".") 
    const isSign = /[+-\/x]$/g.test(operation) 
     
    switch(value) {
      case "divide":
        inputOperator(isOperator, total, sign)
        break;
      case "multiply":
        inputOperator(isOperator, total, sign)
        break;
      case "substract":
        inputOperator(isOperator, total, sign)
        break;
      case "add":
        inputOperator(isOperator, total, sign)
        break;   
      case "equal":
        if(isOperator) {
          setOperands(prevOperands => prevOperands.length===1 ? [...prevOperands, total, "="] : prevOperands)
          setIsOperator(false)
        }
        break;   
      case "clear":
        reset(value)
        break;  
      default: //handles numbers clicked
        if(operationLength===0) {
          checkNumberEntered(value, checkDecimal)     
        } else if(operationLength>0 && isSign && operands.length===1 ) {
          if(isFirstNumber) {
            checkDecimalAndDoubleZeros(value)
            setIsFirstNumber(false)
            setIsSecondOperand(true)
          } else {
            checkNumberEntered(value, checkDecimal) 
          }
        } else {
          reset(value)
        }
        break;  
    }
  }   
  
  return (
    <Context.Provider 
      value={{operation,
              total,
              handleOperation}}
    >
      {children}
    </Context.Provider>
  )
}

export {ContextProvider, Context}