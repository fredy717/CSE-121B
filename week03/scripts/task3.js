/* Lesson 3 */

/* FUNCTIONS */

// Step 1: Using function declaration, define a function named add that takes two arguments, number1 and number2

// Step 2: In the function, return the sum of the parameters number1 and number2

// Step 3: Step 3: Using function declaration, define another function named addNumbers that gets the values of two HTML form controls with IDs of addend1 and addend2. Pass them to the add function

// Step 4: Assign the return value to an HTML form element with an ID of sum

// Step 5: Add a "click" event listener to the HTML button with an ID of addNumbers that calls the addNumbers function

const addend1 = document.querySelector('#addend1')
const addend2 = document.querySelector('#addend2')
const sum = document.querySelector('#sum')
const addNumbersButton = document.querySelector('#addNumbers')

const add = (number1, number2) => {
    return number1 + number2
}

const addNumbers = () => {
    return add(parseInt(addend1.value), parseInt(addend2.value))
}

addNumbersButton.addEventListener('click', () => {
    sum.value = addNumbers()
})

// Step 6: Using function expressions, repeat Steps 1-5 with new functions named subtract and subtractNumbers and HTML form controls with IDs of minuend, subtrahend, difference and subtractNumbers

const minuend = document.querySelector('#minuend')
const subtrahend = document.querySelector('#subtrahend')
const difference = document.querySelector('#difference')
const subtractNumbersButton = document.querySelector('#subtractNumbers')

const subtractNumbers = () => {
    return parseFloat(minuend.value) - parseFloat(subtrahend.value)
}

subtractNumbersButton.addEventListener('click', () => {
    difference.value = subtractNumbers()
})

// Step 7: Using arrow functions, repeat Steps 1-5 with new functions named multiply and mulitplyNumbers and HTML form controls with IDs of factor1, factor2, product and multiplyNumbers

const factor1 = document.querySelector('#factor1')
const factor2 = document.querySelector('#factor2')
const product = document.querySelector('#product')
const multiplyNumbersButton = document.querySelector('#multiplyNumbers')

const multiplyNumbers = () => {
    return parseInt(factor1.value) * parseInt(factor2.value)
}

multiplyNumbersButton.addEventListener('click', () => {
    product.value = multiplyNumbers()
})

// Step 8: Using any of the three function declaration types, repeat Steps 1-5 with new functions named divide and divideNumbers and HTML form controls with IDs of dividend, divisor, quotient and divideNumbers

const dividend = document.querySelector('#dividend')
const divisor = document.querySelector('#divisor')
const quotient = document.querySelector('#quotient')
const divideNumbersButton = document.querySelector('#divideNumbers')

const divideNumbers = () => {
    return parseFloat(dividend.value) / parseFloat(divisor.value)
}

divideNumbersButton.addEventListener('click', () => {
    quotient.value = divideNumbers()
})

// Step 9: Test all of the mathematical functionality of the task3.html page.


/* BUILT-IN METHODS */
// Step 1: Declare and instantiate a variable of type Date to hold the current date

let date = new Date()

// Step 2: Declare a variable to hold the current year

let year = date.getFullYear()

// Step 3: Using the variable declared in Step 1, call the built-in getFullYear() method/function and assign it to the variable declared in Step 2

const yearElement = document.querySelector('#year')

// Step 4: Assign the current year variable to an HTML form element with an ID of year

yearElement.innerHTML = year


/* ARRAY METHODS */

// Step 1: Declare and instantiate an array variable to hold the numbers 1 through 25

let myArray = Array.from({ length: 25 }, (_, i) => i + 1)

// Step 2: Assign the value of the array variable to the HTML element with an ID of "array"

const arrayElement = document.querySelector('#array')

arrayElement.innerHTML = myArray


// Step 3: Use the filter array method to find all of the odd numbers of the array variable and assign the reult to the HTML element with an ID of "odds" ( hint: % (modulus operartor) )

let odds = myArray.filter(number => number % 2 != 0)
const oddsElement = document.querySelector('#odds')
oddsElement.innerHTML = odds

// Step 4: Use the filter array method to find all of the even numbers of the array variable and assign the result to the HTML element with an ID of "evens"

let evens = myArray.filter(number => number % 2 == 0)
const evensElement = document.querySelector('#evens')
evensElement.innerHTML = evens

// Step 5: Use the reduce array method to sum the array variable elements and assign the result to the HTML element with an ID of "sumOfArray"

let sumOfArray = myArray.reduce((sum, number) => { return sum + number }, 0)
const sumOfArrayElement = document.querySelector('#sumOfArray')
sumOfArrayElement.innerHTML = sumOfArray

// Step 6: Use the map array method to multiple each element in the array variable by 2 and assign the result to the HTML element with an ID of "multiplied"

let multiplied = myArray.map((element) => { return element * 2 })
const multipliedElement = document.querySelector('#multiplied')
multipliedElement.innerHTML = multiplied

// Step 7: Use the map and reduce array methods to sum the array elements after multiplying each element by two.  Assign the result to the HTML element with an ID of "sumOfMultiplied"

let sumOfMultiplied = myArray.map((element) => { return element * 2 }).reduce((sum, number) => { return sum + number }, 0)
const sumOfMultipliedElement = document.querySelector('#sumOfMultiplied')
sumOfMultipliedElement.innerHTML = sumOfMultiplied