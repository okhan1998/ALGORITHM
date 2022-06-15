const [ _, ...words ] = require('fs').readFileSync('input.txt').toString().trim().split('\n');
const solve = words => {
  const count = {};
  words.forEach(word => { 
    [...word].forEach((alphabet, i) => { 
      if (!count[alphabet]) count[alphabet] = 0; // 객체안에 키값으로 알파벳을 넣어줌
      count[alphabet] += 10 ** (word.length - i - 1); // 알파벳을 넣어줄떄, 자리수가 높은 알파벳은 높은 벨류값을 줌 && 많이 나온 알파벳은 높은 벨류값을 줌 ABC 와 CD가 있을때 B:10 C:11 
    });
  });
  console.log(
    Object.values(count) // 벨류값으로 배열을 만듬 
      .sort((a, b) => b - a) // 내림차순으로 나열 벨류값 순서대로 나열 되었음
      .reduce((acc, v, i) => acc + v * (9 - i), 0) // 벨류값이 높을수록 큰 값을 할당, 벨류값 * 할당값을 하면 합산할 값으로 바로 치환가능, 왜냐하면 벨류값자체가 자릿수를 계산하여 넣은 값이기 때문.
  );
};
solve(words);