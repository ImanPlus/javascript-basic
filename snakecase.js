const str = "This Is a Snake CASE";
let lowerStr = str.toLowerCase(); //Converts the string to lowercase
let result = "";

for (let i = 0; i < lowerStr.length; i++) {
  if (lowerStr[i] !== " ") {
    result += lowerStr[i];
  } else {
    result += "_";
  }
}

console.log(result);

// Output ===>this_is_a_snake_case
