import {aliveCharacters, allCharacterNames, charactersNamesAndOrigin} from "./script";

fetch('https://rickandmortyapi.com/api/character')
    .then(response =>  response.json())
    .then(json => console.log("Alive Characters: ", aliveCharacters(json.results)))

fetch('https://rickandmortyapi.com/api/character')
    .then(response =>  response.json())
    .then(json => console.log("All character names: ", allCharacterNames(json.results)))

fetch('https://rickandmortyapi.com/api/character')
    .then(response =>  response.json())
    .then(json => console.log("Character names and origin: ", charactersNamesAndOrigin(json.results)))