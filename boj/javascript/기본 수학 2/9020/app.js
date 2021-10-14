const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().split('\n').map(item => +item);

var N = 2
var M = 10001;
var isPrimeNumber = Array(M + 1).fill(true);
isPrimeNumber[0] = isPrimeNumber[1] = false;
const results = [];  

for (let i = 2; i <= Math.ceil(Math.sqrt(M)); i++) {
    if(isPrimeNumber[i]) {
      let m = 2; 
      while(i * m <= M) { 
        isPrimeNumber[i * m] = false; 
        m++; 
      }
    }
  }
  
  
  for(let i = N; i <= M; i++) { 
    if(isPrimeNumber[i]) {
        // results가 소수들 넣어둔 배열  
		results.push(i); 
    }
  }

for (let i = 1; i <= input[0]; i++) {
    // 골드바흐 파티션 구하기
    const num = input[i];
    // 가능한 골드바흐 파티션을 저장할 배열
    let answer = [];
    // 주어진 수의 절반보다 작은 소수만 탐색하면 됨
    for (let j = 0; results[j] < num / 2 + 1; j++) {
      // (주어진 수 - 소수)가 소수인지
      const index = results.indexOf(num - results[j]);
      // 소수라면
      if (index !== -1) {
        // 골드바흐 파티션이므로 배열에 저장
        answer.push([results[j], results[index]]);
      }
    }
    // 골드바흐 파티션이 존재했다면
    if (answer.length !== 0) {
      // 가장 마지막 파티션을 가져옴 (두 소수의 차이가 가장 작음)
      const a = answer.pop();
      // 출력
      console.log(a[0], a[1]);
    }
  }




  


