const fs = require('fs')

function run(fileData) {
  const boxIdsList = getBoxIdsList(fileData)
  const allIdMatches = []
  boxIdsList.forEach(currentId => {
    if (!allIdMatches.includes(currentId)) {
      const currentIdMatches = getIdsOffByOne(currentId, boxIdsList)
      if (currentIdMatches.length > 0) {
        allIdMatches.push(...currentIdMatches, currentId)
      }
    }
  })
  console.log(allIdMatches)
  return allIdMatches
}

function getIdsOffByOne(currentId, boxIdsList) {
  const matches = []
  boxIdsList.forEach(id => {
    const idsDifferByOne = isOffByOne(currentId, id)
    if (idsDifferByOne) {
      matches.push(id)
    }
  })
  return matches
}

function isOffByOne(idOne, idTwo) {
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
  return fileData.split('\n')
}

run(fs.readFileSync('input.txt', 'utf-8'))
