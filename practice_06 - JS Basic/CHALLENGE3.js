function challenge3(array) {
  if (!array || array.length === 0) {
    return 0;
  }
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum / array.length;
}


let test1 = [85, 90, 78, 92];
let test2 = [10,20,30];
let test3 = [];
console.log(challenge3(test1));
console.log(challenge3(test2));
console.log(challenge3(test3));