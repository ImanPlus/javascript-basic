let randomNumber = [53, 16, 65, 100, 64, 83, 41, 98, 16, 93];
let start = 0;
let end = randomNumber.length - 1;

while (start < end) {
  randomNumber[start] = randomNumber[start] + randomNumber[end];
  randomNumber[end] = randomNumber[start] - randomNumber[end];
  randomNumber[start] = randomNumber[start] - randomNumber[end];
  start++;
  end--;
}

console.log(randomNumber);

//Output => [ 93, 16, 98, 41, 83, 64, 100, 65, 16, 53 ]
