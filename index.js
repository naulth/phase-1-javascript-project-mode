const characterList = document.getElementById('character-list')
const characterImage = document.getElementById('character-image')
const toggleButton = document.getElementById('toggle')
const darkSide = document.getElementsByClassName('dark')
const form = document.getElementById('character-form')   

const modeBtn = document.getElementById('mode');

fetch('http://localhost:3000/people')
    .then(r => r.json())
    .then(peopleList => {
        renderCharacters(peopleList)
    })


function renderCharacters(array){
    array.forEach(character => {
        let characterLi = document.createElement('li')
        characterLi.textContent = character.name
        characterList.append(characterLi)

        characterLi.addEventListener('click', e =>{
            characterImage.src = character.image 
            characterImage.alt = `${character.name} image`
        })
        if (character.side === "light"){
            characterLi.className = "light"
        } else{
            characterLi.className = "dark"
        }
    })
}

//What if we change this to a dropdown menu.
//We could select either Light or Dark
//An if statement would determine which characters show up, and which are display: none
// toggleButton.addEventListener('change', e =>{
//     let darkArray = Array.from(darkSide)
//     darkArray.forEach(character => {
//         character.style.display = "none"
//     })
// })   
toggleButton.addEventListener('change', e =>{
    if (toggleButton.checked === true) {
        let darkArray = Array.from(darkSide)
            darkArray.forEach(character => {
                character.style.display = "none"
            })
            } else {
            let darkArray = Array.from(darkSide)
                darkArray.forEach(character => {
                character.style.display = "block"
            })
    }
})
  

form.addEventListener('submit', e =>{
    e.preventDefault()
    let newCharacter = document.createElement('object')
    newCharacter.name = e.target.name.value
    newCharacter.img = e.target.image.value
    
    let newLi = document.createElement('li')
    newLi.textContent = newCharacter.name
    newLi.className = "listLis"

    if(e.target.side.value == "Light" || e.target.side.value == "light"){
        newLi.className = "light"
    } else if (e.target.side.value == "Dark" || e.target.side.value == "dark"){
        newLi.className = "dark"
    } 

    newLi.addEventListener('click', e=>{
        characterImage.src = newCharacter.img
                characterImage.alt = `${newCharacter.name} image`
    })
    characterList.append(newLi)
})
