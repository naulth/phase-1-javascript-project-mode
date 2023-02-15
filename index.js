const characterList = document.getElementById('character-list')
const characterImage = document.getElementById('character-image')
const toggleButton = document.getElementById('toggle')
const darkSide = document.getElementsByClassName('dark')
const form = document.getElementById('character-form')   
const cardContainer = document.getElementById('card')
const lightSide = document.getElementsByClassName('light')
const resetBtn = document.getElementById('reset')
const allChars = document.getElementsByClassName('char')
const audioElement= document.getElementById("music")
audioElement.muted = true
const newForm = document.getElementById('edit-form')
const scrollBtn = document.getElementById('scrollBtn')
const babyYoda = document.getElementById('baby-yoda')
const logo = document.getElementById('logo-image')
const formTitle = document.getElementById('form-title')
const submitBtn = document.getElementById('submit')
const footer = document.getElementById('footer')


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
        characterLi.setAttribute("id", `${character.id}`)

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
        if (character.side === "light" || character.side === "Light"){
            characterLi.className = "light"
        } else{
            characterLi.className = "dark"
        }
    })
}

toggleButton.addEventListener('change', e =>{
    // if (toggleButton.checked === true) {
    //     let darkArray = Array.from(darkSide)
    //         darkArray.forEach(character => {
    //             character.style.display = "none"
    //         })
    //         } else {
    //         let darkArray = Array.from(darkSide)
    //             darkArray.forEach(character => {
    //             character.style.display = "block"
    //         })
    // }
    // if (toggleButton.checked === false) {
    //     let lightArray = Array.from(lightSide)
    //         lightArray.forEach(character => {
    //             character.style.display = "none"
    //         })
    //         } else {
    //         let lightArray = Array.from(lightSide)
    //             lightArray.forEach(character => {
    //             character.style.display = "block"
    //         })
    // }
    if (toggleButton.checked === true){
        audioElement.play()
        audioElement.muted = false

        scrollBtn.style.backgroundColor =  "red"
        logo.src = "https://static.wikia.nocookie.net/logopedia/images/a/a6/Star_Wars_%28Red%29.svg/revision/latest/scale-to-width-down/250?cb=20191125162454"
        formTitle.style.color = "red"
        submitBtn.style.backgroundColor = "red"
        submitBtn.style.color = "white"
        dropdown.style.border = "solid 2px red"
        //characterLis.style.border = "#red solid 1px"
        cardContainer.style.border ="red solid 1px"
        cardContainer.style.boxShadow = " 3px 4px red"
        footer.style.color = "red"

        babyYoda.src = "https://www.pngkey.com/png/full/124-1240061_death-star-2-png-graphic-death-star-star.png"

        Array.from(characterLis).forEach(li => {
            li.style.border = "red solid 1px"
        })

    } else {
        audioElement.pause()
        audioElement.muted = true

        scrollBtn.style.backgroundColor =  "#FFE81F"
        logo.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Star_Wars_Logo..png/640px-Star_Wars_Logo..png"
        formTitle.style.color = "#FFE81F"
        submitBtn.style.backgroundColor = "#FFE81F"
        submitBtn.style.color = "black"
        dropdown.style.border = "solid 2px #FFE81F"
        //characterLis.style.border = "#FFE81F solid 1px"
        cardContainer.style.border ="#FFE81F solid 1px"
        cardContainer.style.boxShadow = " 3px 4px #FFE81F"
        footer.style.color = "#FFE81F"

        babyYoda.src = "https://www.pngmart.com/files/11/Baby-Yoda-PNG-Transparent.png"


        Array.from(characterLis).forEach(li => {
            li.style.border = "#FFE81F solid 1px"
        })

    }
})

const dropdown = document.getElementById('character-dropdown')
const characterLis = characterList.children

//console.log(characterLis)


// charArray = Array.from(characterLis)
// console.log(charArray)
//let characterLi = document.getElementById('character-list').children

dropdown.addEventListener('change', function characters(e) {
    Array.from(characterLis).forEach(li => {
        console.log(li)
        if (li.className === e.target.value){
            li.style.display = "block"
        } else{
            li.style.display = "none"
        } 
        
        if (e.target.value === "all") {
            li.style.display = "block"
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
scrollBtn.addEventListener('click', e => {
    window.scrollBy(0,600)

})

babyYoda.addEventListener("mouseover", e => {
    e.target.style.opacity = 1
})

babyYoda.addEventListener("mouseout", e => {
    e.target.style.opacity = 0
})


//hidden baby yoda
//lightsaber on class select
//toggle switch opacity
//toggle switch to hide everything?
