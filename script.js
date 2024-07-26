const numberInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");

const numeralValues = {
  1: 'I',
  4: 'IV',
  5: 'V',
  9: 'IX',
  10: 'X',
  40: 'XL',
  50: 'L',
  90: 'XC',
  100: 'C',
  400: 'CD',
  500: 'D',
  900: 'CM',
  1000: 'M'
}

const numValues = [
  [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000],
  ["I", "IV", "V", "IX", "X", "XL", "L", "XC", "C", "CD", "D", "CM", "M"]
];


function handleInputButton() {

  const numberValue = numberInput.value;

  if(!numberValue) {
    output.innerHTML = `
  <p>Please enter a valid number</p>
  `;
  }
  else if(parseInt(numberValue) > 0 && parseInt(numberValue) < 4000 ) {
    output.innerHTML = "<p>" + recursiveConversion( parseInt(numberValue), 12) + "</p>";
  }
  else if(parseInt(numberValue) < 1) {
    output.innerHTML = `
    <p>Please enter a number greater than or equal to 1</p>`
  }
  else if(parseInt(numberValue) > 3999) {
    output.innerHTML = `
    <p>Please enter a number less than or equal to 3999</p>`
  }

  
}

function recursiveConversion(value, currentIndex) {

  if(currentIndex >= 0) {

    if(value >= numValues[0][currentIndex]) {

      console.log("here0");
      
      let newValue = value - numValues[0][currentIndex];

      //Checks if value is still greater than the current index with whatever roman numeral
      //If value is still greater, newIndex is the same as the currentIndex
      let newIndex = value > numValues[0][currentIndex] ? currentIndex: currentIndex - 1;
      
      return `${numValues[1][currentIndex]}` + recursiveConversion(newValue, newIndex);
    }

    else {
      return recursiveConversion(value, currentIndex - 1) + "";
    }

  }

  return "";

}

convertBtn.addEventListener("click", handleInputButton);

numberInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    handleInputButton();
  }
});
