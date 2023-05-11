const displayInput = document.getElementById("display-input")
const keys = document.querySelectorAll(".calculator__key")

let currentInput = ""
let firstOperand = null
let operator = null

const clear = () => {
  currentInput = ""
  firstOperand = null
  operator = null
  updateDisplay()
}

const deleteLastChar= () => {
  currentInput = currentInput.slice(0, -1)
  updateDisplay()
}

const handleDigit = (digit) => {
  currentInput += digit
  updateDisplay()
}

const handleOperator = (op) => {
  if (operator !== null) {
    evaluate()
  }
  firstOperand = parseFloat(currentInput)
  operator = op
  currentInput = ""
}

const evaluate = () => {
  const secondOperand = parseFloat(currentInput)
  let result = null
  switch (operator) {
    case "+":
      result = firstOperand + secondOperand
      break
    case "-":
      result = firstOperand - secondOperand
      break
    case "*":
      result = firstOperand * secondOperand
      break
    case "/":
      result = firstOperand / secondOperand
      break
    default:
      return
  }
  currentInput = result.toString()
  firstOperand = null
  operator = null
  updateDisplay()
}

const updateDisplay = () => {
  displayInput.value = currentInput
}

keys.forEach((key) => {
  key.addEventListener("click", () => {
    if (key.classList.contains("operator")) {
      handleOperator(key.innerText)
    } else if (key.classList.contains("clear")) {
      clear()
    } else if (key.classList.contains("equal")) {
      evaluate()
    } else if (key.innerText === "D") {
      deleteLastChar()
    } else {
      handleDigit(key.innerText)
    }
  })
})
