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


let a = challenge1(3,4);
console.log(a);