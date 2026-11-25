function challenge1(width, height) {
  let rectangleString = '';
  if (width <= 0 || height <= 0) {
    return rectangleString;
  }
  for (let row = 0; row < height; row++) {
    rectangleString += '*'.repeat(width);
    rectangleString += "\n";
    }
    
  return rectangleString;
}


let test1 = challenge1(3,4);
let test2 = challenge1(5,2);
let test3 = challenge1(5,-2);
console.log(test1);
console.log(test2);
console.log(test3);