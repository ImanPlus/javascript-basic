function generateBaseString(carMap = [true, true, true, true]) {
  const maps = [
    "abcdefghijklmnopqrstuvwxyz",
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    "0123456789",
    "!@*#$%^&",
  ];
  let baseString = "";
  for (let i = 0; i < maps.length; i += 1) {
    if (carMap[i]) {
      baseString += maps[i];
    }
  }
  return baseString;
}

function generatePassword(count = 0, carMap) {
  const baseString = generateBaseString(carMap);
  let password = "";
  for (let i = 0; i < count; i += 1) {
    const randIndex = Math.floor(Math.random() * baseString.length);
    password += baseString[randIndex];
  }
  return password;
}

const form = document.getElementById("optionsForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const countInput = document.querySelector("#count");
  const count = parseInt(countInput.value);

  const lowerCaseCheckbox = document.getElementById("lowerCase").checked;
  const upperCaseCheckbox = document.getElementById("uppercase").checked;
  const numbersCheckbox = document.getElementById("numbers").checked;
  const signsCheckbox = document.getElementById("signs").checked;
  const carMap = [
    lowerCaseCheckbox,
    upperCaseCheckbox,
    numbersCheckbox,
    signsCheckbox,
  ];
 
  const div = document.querySelector("#output");
  div.innerHTML = generatePassword(count, carMap);
});

const button = document.querySelector("#gen-button");
button.addEventListener("click", () => form.dispatchEvent(new Event("submit")));
