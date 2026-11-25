function challenge2(array) {
  const reversed = [];
  for (let i = array.length -1; i >= 0; i--) {
    reversed.push(array[i]);
  }
  return reversed;
}


let arr = [1,2,3,4,5,6];
let result = challenge2(arr);
console.log(result);