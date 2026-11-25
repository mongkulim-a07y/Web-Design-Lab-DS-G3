function challenge2(array) {
  const reversed = [];
  for (let i = array.length -1; i >= 0; i--) {
    reversed.push(array[i]);
  }
  return reversed;
}


let test1= [14,15,16,20];
let test2= [5,4,3,2,1];
let test3= [];

console.log(challenge2(test1));
console.log(challenge2(test2));
console.log(challenge2(test3));