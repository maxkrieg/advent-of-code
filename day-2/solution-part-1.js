const fs = require('fs')

function getBoxIdCharsDict(boxId) {
  const charsDict = {}
  for (let i = 0; i < boxId.length; i++) {
    const currentChar = boxId.charAt(i)
    if (!charsDict[currentChar]) {
      charsDict[currentChar] = 1
    } else {
      charsDict[currentChar] += 1
    }
  }
  return charsDict
}

function getLetterCounts(boxId) {
  const charsDict = getBoxIdCharsDict(boxId)
  const counts = {
    hasExactlyTwoOfAnyLetter: false,
    hasExactlyThreeOfAnyLetter: false
  }
  for (let char in charsDict) {
    if (charsDict[char] === 2) {
      counts.hasExactlyTwoOfAnyLetter = true
    }
    if (charsDict[char] === 3) {
      counts.hasExactlyThreeOfAnyLetter = true
    }
  }

  return counts
}

function getCheckSum(data) {
  let boxIdsWithTwoOfAnyLetter = 0
  let boxIdsWithThreeOfAnyLetter = 0
  const boxIdsList = data.split('\n')
  boxIdsList.forEach(boxId => {
    counts = getLetterCounts(boxId)
    if (counts.hasExactlyTwoOfAnyLetter) {
      boxIdsWithTwoOfAnyLetter += 1
    }
    if (counts.hasExactlyThreeOfAnyLetter) {
      boxIdsWithThreeOfAnyLetter += 1
    }
  })
  return boxIdsWithTwoOfAnyLetter * boxIdsWithThreeOfAnyLetter
}

const checkSum = getCheckSum(fs.readFileSync('input.txt', 'utf-8'))
console.log('Check Sum: ', checkSum)
