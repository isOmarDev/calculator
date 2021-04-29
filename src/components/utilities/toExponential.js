function toExponentialTotal(total) {
  if(total.toString().length > 9) {
    const expTotal = total.toExponential() //string
    const index = expTotal.indexOf("e")
    const firstExpTotalStr =  parseFloat(expTotal.substring(0, index)).toFixed(4).toString() // handle decimal
    const secondExpTotalStr = expTotal.substring(index) // the value after the decimal e.g: e+17
    return firstExpTotalStr + secondExpTotalStr
  } else {
    return total.toString()
  }
}

export {toExponentialTotal}