let fs = require('fs');
let filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt' 
let input = fs.readFileSync(filepath).toString().split('\n');
let [cases, sum] = input.shift().split(' ').map(x=>+x);
let arr = input[0].split(' ').map(x => +x);
const solve = (N, S, arr) => {
    let output = 0;
    const recursion = (i, sum) => {
      if (i === N) return;
  
      sum += arr[i];
      if (sum === S) output++;
  
      recursion(i + 1, sum);
      recursion(i + 1, sum - arr[i]);
    };
  
    recursion(0, 0);
    console.log(output);
  };
  
  solve(cases, sum, arr);