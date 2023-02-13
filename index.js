fetch('https://swapi.dev/api/people')
    .then(r => r.json)
    .then((json) => {
        console.log(json)
    })