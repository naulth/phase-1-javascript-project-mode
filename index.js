const characterList = document.getElementById('character-list')
const characterImage = document.getElementById('character-image')
const toggleButton = document.getElementById('toggle')
const darkSide = document.getElementsByClassName('dark')
const form = document.getElementById('character-form')   
const cardContainer = document.getElementById('card')
const lightSide = document.getElementsByClassName('light')
const resetBtn = document.getElementById('reset')
const allChars = document.getElementsByClassName('char')



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
        //characterLi.className = "char"

        characterLi.addEventListener('click', e =>{
            // const div = document.createElement('div')
            // div.className = 'card'
            // div.innerHTML = `
            // <h2> </h2>
            // <img />
            // <p> </p>
            // `
            cardContainer.querySelector('h2').innerText = character.name
            cardContainer.querySelector('img').src = character.image
            cardContainer.querySelector('img').alt = `${character.name} image`
            cardContainer.querySelector('p').innerText = `On the ${character.side} Side - Born in: ${character.birth_year} - Stands: ${character.height} cm tall`
            
            //cardContainer.append(div)
            
           // characterImage.src = character.image 
            //characterImage.alt = `${character.name} image`
        })
        if (character.side === "light"){
            characterLi.className = "light"
        } else{
            characterLi.className = "dark"
        }
    })
}

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
    if (toggleButton.checked === false) {
        let lightArray = Array.from(lightSide)
            lightArray.forEach(character => {
                character.style.display = "none"
            })
            } else {
            let lightArray = Array.from(lightSide)
                lightArray.forEach(character => {
                character.style.display = "block"
            })
    }

})

const dropdown = document.getElementById('character-dropdown')
const characterLis = characterList.children

//console.log(characterLis)


// charArray = Array.from(characterLis)
// console.log(charArray)
//let characterLi = document.getElementById('character-list').children

dropdown.addEventListener('change', function sortBreeds(e) {
    Array.from(characterLis).forEach(li => {
        console.log(li)
        if (li.className === e.target.value){
            li.style.display = "block"
        } else{
            li.style.display = "none"
        }
    })
    
})


// resetBtn.addEventListener('click', e =>{
//     lightArray.forEach(character => {
//         character.style.display = "block"
//     })
//     darkArray.forEach(character => {
//         character.style.display = "block"
//     })
// })

form.addEventListener('submit', e =>{
    e.preventDefault()
    let newCharacter = document.createElement('object')
    newCharacter.name = e.target.name.value
    newCharacter.img = e.target.image.value
    newCharacter.side = e.target.side.value
    newCharacter.birth_year = e.target.birthYear.value
    newCharacter.height = e.target.height.value

    let newLi = document.createElement('li')
    newLi.textContent = newCharacter.name
    newLi.className = "listLis"
    


    if(e.target.side.value == "Light" || e.target.side.value == "light"){
        newLi.className = "light"
    } else if (e.target.side.value == "Dark" || e.target.side.value == "dark"){
        newLi.className = "dark"
    } 

    newLi.addEventListener('click', e=>{
    //     characterImage.src = newCharacter.img
    //             characterImage.alt = `${newCharacter.name} image`
    cardContainer.querySelector('h2').innerText = newCharacter.name
            cardContainer.querySelector('img').src = newCharacter.img
            cardContainer.querySelector('img').alt = `${newCharacter.name} image`
            cardContainer.querySelector('p').innerText = `On the ${newCharacter.side} Side - Born in: ${newCharacter.birth_year} - Stands: ${newCharacter.height} cm tall`
     })
    characterList.append(newLi)
    
    fetch(`http://localhost:3000/people`, {
        method: 'POST',
        headers: {"Content-type": "application/json"},
        body: JSON.stringify({
            name: `${newCharacter.name}`,
            side: `${newCharacter.side}`,
            image: `${newCharacter.img}`, 
            height: `${newCharacter.height}`,
            birth_year: `${newCharacter.birthYear}`
        })
    })
})