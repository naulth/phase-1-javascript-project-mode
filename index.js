const characterList = document.getElementById('character-list')
const characterImage = document.getElementById('character-image')
const toggleButton = document.getElementById('toggle')
const darkSide = document.getElementsByClassName('dark')
const liArray = Array.from(characterList)
//const characters = peopleList   

fetch('http://localhost:3000/people')
    .then(r => r.json())
    .then(peopleList => {
        renderCharacters(peopleList)
    })

    console.log(darkSide)

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


        toggleButton.addEventListener('change', e =>{
        //     //darkSide.style.display = "none"
        //     // let darkList = peopleList.filter (character => {
        //     //     if(character.side != "light"){
        //     //         return true
        //     //     }
        //     // })
        //     // darkList.forEach(character =>{
        //     //     character.style.display = "none"
        //     // })
        //     console.log(liArray)
        let darkArray = Array.from(darkSide)
        darkArray.forEach(character => {
        
        character.style.display = "none"
        })

        })   
    