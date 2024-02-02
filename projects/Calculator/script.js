let prevNumber = ''
let calcOperator = ''
let currentNumber = '0'

// check if number key pressed
const inputNumber = (number) => {
    if(currentNumber === '0'){
        currentNumber = number
    }else{
        currentNumber += number
    }
}

// check if operator key pressed
const inputOperator = (operator) => {
    if(calcOperator === ''){
        prevNumber = currentNumber
    }
    calcOperator = operator
    currentNumber = '0'
}

// check if decimal pressed
const inputDecimal = (dot) => {
    if(currentNumber.includes(dot)){
        return
    }else{
        currentNumber += dot
    }
}

// perform calculations
const calculate = () => {
    let result = ''
    switch(calcOperator){
        case '+':
            result = parseFloat(prevNumber) + parseFloat(currentNumber)
            break
        case '-':
            result = prevNumber - currentNumber
            break
        case '*':
            result = prevNumber * currentNumber
            break
        case '/':
            result = prevNumber / currentNumber
            break
        default:
            break
    }
    currentNumber = result.toString()
    calcOperator = ''
}

// AC trigger
const clearALL = () => {
    prevNumber = ''
    calcOperator = ''
    currentNumber = '0'
}

const numbers = document.querySelectorAll(".number")

// update the screen for each number pressed
numbers.forEach((number) => {
    number.addEventListener("click", (e) => {
        inputNumber(e.target.value)
        updateScreen(currentNumber)
    })
})

const operators = document.querySelectorAll(".operator")

// update the operator in expression for each operator pressed
operators.forEach((operator) => {
    operator.addEventListener("click", (e) => {
        inputOperator(e.target.value)
    })
})

const equalSign = document.querySelector(".equal-sign")

// calculate when the equals button is pressed
equalSign.addEventListener("click", () => {
    calculate()
    updateScreen(currentNumber)
})

const clearBtn = document.querySelector(".all-clear")

// clear all inputs
clearBtn.addEventListener("click", () => {
    clearALL()
    updateScreen(currentNumber)
})

const decimal = document.querySelector(".decimal")

// update the screen for decimal key pressed
decimal.addEventListener("click", (e) => {
    inputDecimal(e.target.value)
    updateScreen(currentNumber)
})

const calculatorScreen = document.querySelector(".calculator-screen")

// update the screen for number key pressed
const updateScreen = (number) => {
    calculatorScreen.value = number
}
