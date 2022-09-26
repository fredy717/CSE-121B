/* Lesson 2 */

/* VARIABLES */

// Step 1: declare and instantiate a variable to hold your name

const nameSpan = document.querySelector('#name')
const yearSpan = document.querySelector('#year')
const haderImg = document.querySelector('img')
const foodSpan = document.querySelector('#food')
const printFood = (array) => {
    str = ''
    array.forEach(item => {
        if (str === '') {
            str += `${item}`
        } else {
            str += `, ${item}`
        }
    });
    console.log(str)
    return str
}

let name = 'Fredy Hernandez'
let year = new Date().getFullYear()
let hint = []

hint.push('Lechona')
hint.push('Bandeja paisa')
hint.push('Empanadas')
hint.push('Pizza')

nameSpan.innerHTML = name
yearSpan.innerHTML = year
haderImg.style.width = '240px'
haderImg.style.height = '300px'
haderImg.style.objectFit = 'cover'
haderImg.setAttribute('src', 'images/IMG_4607.JPG')

foodSpan.innerHTML = printFood(hint)
let foodAditional = 'Milanesa'
hint.push(foodAditional)
foodSpan.innerHTML = printFood(hint)
hint.shift()
foodSpan.innerHTML = printFood(hint)
hint.pop()
foodSpan.innerHTML = printFood(hint)



// Step 2: place the value of the name variable into the HTML file (hint: document.querySelector())


// Step 3: declare and instantiate a variable to hold the current year


// Step 4: place the value of the current year variable into the HTML file


// Step 5: declare and instantiate a variable to hold the name of your picture


// Step 6: copy your image into the "images" folder

// Step 7: place the value of the picture variable into the HTML file (hint: document.querySelector().setAttribute())




/* ARRAYS */

// Step 1: declare and instantiate an array variable to hold your favorite foods


// Step 2: place the values of the favorite foods variable into the HTML file


// Step 3: declare and instantiate a variable to hold another favorite food


// Step 4: add the variable holding another favorite food to the favorite food array


// Step 5: repeat Step 2


// Step 6: remove the first element in the favorite foods array


// Step 7: repeat Step 2


// Step 8: remove the last element in the favorite foods array


// Step 7: repeat Step 2