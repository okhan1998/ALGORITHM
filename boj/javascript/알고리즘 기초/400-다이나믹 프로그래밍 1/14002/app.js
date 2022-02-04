// const fs = require('fs');
// const filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
// let numbers = fs.readFileSync(filepath).toString().split("\n");
// const N = Number(numbers[0]);
// numbers.shift();
// numbers = numbers[0].split(" ").map((element) => Number(element));

// const dp = new Array(N).fill(1);
// const dp2 = new Array(N).fill([]);
// for (let i = 1; i < N; i++) {
//   const values = [1];
  
//   for (let j = 0; j < i; j++) {
//     if (numbers[i] > numbers[j]) {
//       values.push(dp[j] + 1);
//       dp2[i].push(dp2[j] + numbers[i])
//     }
//   }
//   dp[i] = Math.max(...values);
// }
// console.log(dp2);
// console.log(Math.max(...dp));
