const input = require("fs").readFileSync("example.txt").toString().split("\n"); // 문제풀이

const num = parseInt(input[0]); // 단어의 개수 N
let answer = 0;

for (let i = 1; i <= num; i++) {
  let isTrue = true;
  let checker = [];
  const word = input[i];

  if (word.length <= 2) {
    answer++;
  } else {
    for (str of word) {
      // console.log(checker, checker.at(-1), str, checker.at(-1) !== str)
      if (checker.at(-1) !== str) {
        if (checker.includes(str)) {
          isTrue = false;
        }
        checker.push(str); // 이전에 안나왔으면 push
      }
    }

    if (isTrue) {
      answer++;
    }
  }
}

console.log(answer);
