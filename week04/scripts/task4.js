/* Lesson 4 */

/* DATA */

// Step 1: Declare a new variable to hold information about yourself

const myInfo = {}

// Step 2: Inside of the object, add a property named name with a value of your name as a string
myInfo.name = 'Fredy Hernandez'

// Step 3: Add another property named photo with a value of the image path and name (used in Task 2) as a string

myInfo.photo = 'images/IMG_4607.JPG'

// Step 4: Add another property named favoriteFoods with a value of an array of your favorite foods as strings ( hint: [] )

myInfo.favoriteFoods = ['Lechona', 'Bandeja paisa', 'Empanadas', 'Pizza', 'Milanesa']

// Step 5: Add another property named hobbies with a value of an array of your hobbies as strings

myInfo.hobbies = ['Listen to music', 'read comics', 'play with my children', 'watch series']

// Step 6: Add another property named placesLived with a value of an empty array

myInfo.placesLived = []

// Step 7: Inside of the empty array above, add a new object with two properties: place and length and values of an empty string
// Step 8: For each property, add appropriate values as strings
// Step 9: Add additional objects with the same properties for each place you've lived
myInfo.placesLived.push({ place: 'Bogota', length: '32' })
myInfo.placesLived.push({ place: 'Argentina', length: '2' })
myInfo.placesLived.push({ place: 'Cajica', length: '1' })

/* OUTPUT */

const name = document.querySelector('#name')
const photo = document.querySelector('#photo')
const favoriteFoods = document.querySelector('#favorite-foods')
const hobbies = document.querySelector('#hobbies')
const placesLived = document.querySelector('#places-lived')

photo.style.width = '240px'
photo.style.height = '300px'
photo.style.objectFit = 'cover'

// Step 1: Assign the value of the name property (of the object declared above) to the HTML <span> element with an ID of name
name.innerHTML = myInfo.name
    // Step 2: Assign the value of the photo property as the src attribute of the HTML <img> element with an ID of photo
photo.setAttribute('src', myInfo.photo)
    // Step 3: Assign the value of the name property as the alt attribute of the HTML <img> element with an ID of photo
photo.setAttribute('alt', myInfo.name)
    // Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element
myInfo.favoriteFoods.forEach(item => {
    let liItem = document.createElement('li')
    liItem.innerHTML = item
    favoriteFoods.appendChild(liItem)
})

// Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods
// Step 6: Repeat Step 4 for each hobby in the hobbies property
// Step 7: Repeat Step 5 using the HTML <ul> element with an ID of hobbies
myInfo.hobbies.forEach(item => {
    let liItem = document.createElement('li')
    liItem.innerHTML = item
    hobbies.appendChild(liItem)
})

// Step 8: For each object in the <em>placesLived</em> property:
// - Create an HTML <dt> element and put its place property in the <dt> element
// - Create an HTML <dd> element and put its length property in the <dd> element
// Step 9: Append the HTML <dt> and <dd> elements created above to the HTML <dl> element with an ID of places-lived
console.log(myInfo.placesLived)
myInfo.placesLived.forEach(item => {
    let dtItem = document.createElement('dt')
    let ddItem = document.createElement('dd')
    dtItem.innerHTML = item.place
    ddItem.innerHTML = item.length
    placesLived.appendChild(dtItem)
    placesLived.appendChild(ddItem)
})