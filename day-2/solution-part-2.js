const fs = require('fs')

function run(fileData) {
  const boxIdsList = getBoxIdsList(fileData)
  const matches = []

  boxIdsList.forEach(currentId => {
    const idMatches = getIdMatches(currentId, boxIdsList)
    matches.push(...idMatches, currentId)
  })
}

function getIdMatches(currentId, boxIdsList) {
  const matches = []
  boxIdsList.forEach(comparisonId => {
    const idsDifferByOne = isIdMatch(currentId, comparisonId)
    if (idsDifferByOne) {
      matches.push(comparisonId)
    }
  })
  return matches
}

function isIdMatch(idOne, idTwo) {
  let characterDifferences = 0
  for (let i = 0; i < idOne.length; i++) {
    const isMatch = idOne.charAt(i) === idTwo.charAt(i)
    if (!isMatch) {
      characterDifferences++
    }
    if (characterDifferences > 1) {
      return false
    }
  }
  return true
}

function getBoxIdsList(fileData) {
  return data.split('\n')
}

run(fs.readFileSync('input.txt', 'utf-8'))
