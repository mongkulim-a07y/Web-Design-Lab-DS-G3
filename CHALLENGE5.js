function challenge5(text) {
  const trimmed = text.trim();
  if (trimmed === '') {
    return 0;
  }
  return trimmed.split(/\s+/).length;
}

const test1 = "Hello World";
const test2 = "this is the best day";
const test3 = "a bb ccc ddddddd e";

console.log(challenge5(test1));
console.log(challenge5(test2));
console.log(challenge5(test3));