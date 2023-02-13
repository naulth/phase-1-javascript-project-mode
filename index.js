const characterList = document.getElementById('character-list')
const characterImage = document.getElementById('character-image')

fetch('http://localhost:3000/people')
    .then(r => r.json())
    .then(peopleList => { 
        peopleList.forEach(character => {
            let characterLi = document.createElement('li')
            characterLi.textContent = character.name
            characterList.append(characterLi)

            characterLi.addEventListener('click', e =>{
                characterImage.src = character.image 
                characterImage.alt = `${character.name} image`
            })
        })
    })


