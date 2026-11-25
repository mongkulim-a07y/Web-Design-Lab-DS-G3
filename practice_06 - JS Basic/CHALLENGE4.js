function challenge4(text, char) {
  let count = 0;
  for (let i = 0; i < text.length; i++) {
    if (text[i] === char) {
      count++;
    }
  }
  return count;
}

const text1  = "hello world";
const char1 = 'o'

const text2  = "aaa bbb a";
const char2 = 'a'

const text3  = "abc";
const char3 = 'd'

console.log(challenge4(text1, char1));
console.log(challenge4(text2, char2));
console.log(challenge4(text3, char3));