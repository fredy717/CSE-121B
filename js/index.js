const footer = document.querySelector('#footer')
const lastModified = document.createElement('h5')
let date = `Last Update: ${document.lastModified}`
lastModified.innerHTML = date
footer.appendChild(lastModified)