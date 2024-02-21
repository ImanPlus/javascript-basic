const text = "this is a test";
const letters = [];
const letterCount = {};

// Initial letters array and remove white space
for (let key in text) {
  if (text[key] !== " ") {
    letters.push(text[key]);
  }
}

// Number of repetitions of each letter --- { t: 3, h: 1, i: 2, s: 3, a: 1, e: 1 }
for (let key in letters) {
  const letter = letters[key];
  if (letterCount[letter]) {
    letterCount[letter] += 1;
  } else {
    letterCount[letter] = 1;
  }
}

// Find the most repeated letter
let max = -1;
let letterMax = "";
for (let letter in letterCount) {
  if (max < letterCount[letter]) {
    max = letterCount[letter];
    letterMax = letter;
  }
}

console.log("letterMax =", letterMax, "max =", max); //Output 'letterMax = t max = 3'
