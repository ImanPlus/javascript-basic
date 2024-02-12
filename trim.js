// The first solution
const str = "   salam khoobi    chetori che khabar   ";
let firstValid = 0;
let secondeValid = 0;

for (let i = 0; i < str.length; i++) {
  if (firstValid === 0 && str[i] != " ") {
    firstValid = i;
    break;
  }
}

for (let i = str.length - 1; i >= 0; i--) {
  if (secondeValid === 0 && str[i] != " ") {
    secondeValid = i;
    break;
  }
}

const result = str.slice(firstValid, secondeValid + 1);
console.log(result);

//Output ===> salam khoobi    chetori che khabar

// The second solution
const myStr = "   salam khoobi    chetori che khabar   ";
let trimStr = myStr.replace(/^\s+|\s+$/g, "");

console.log(trimStr);

// //Output ===>salam khoobi    chetori che khabar
