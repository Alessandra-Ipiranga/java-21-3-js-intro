import { add, multiply, factorial } from './math'
import { students, renameMutable, renameImmutable } from './students'
import charactersResponse from './characters-response.json'

/*
console.log('2 and 40 is', add(2, 40))
console.log('3 times 4 is', multiply(3, 4))
console.log('factorial of 3 is', factorial(3))

console.log('before mutation', JSON.parse(JSON.stringify(students)))
renameMutable(students, 'Paul', 'Päule')
console.log('after mutation', JSON.parse(JSON.stringify(students)))

console.log('before immutable', JSON.parse(JSON.stringify(students)))
const newStudents = renameImmutable(students, 'Lucy', 'Ludmilla')
console.log('after immutable', JSON.parse(JSON.stringify(students)))
console.log('copied students', newStudents)
*/

console.log(charactersResponse)

const characters = charactersResponse.results
console.log(characters.length)

export const aliveCharacters = (characters) => characters.filter(
  character => character.status === 'Alive' && character.species === "Human",
)
console.log(aliveCharacters)

console.clear()

export const allCharacterNames =(characters) => characters.map(
  characters => characters.name,
)
console.log(allCharacterNames)


export const charactersNamesAndOrigin = (characters) => characters.map(
  character => {
      return {name : character.name, origin : character.origin.name}
  }
)

console.log(charactersNamesAndOrigin)

console.clear()
