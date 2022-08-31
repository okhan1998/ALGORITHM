const input = require('fs').readFileSync('./input.txt').toString().trim().split(" ");

const sol = (input) => {
  const numArr = input.map((e) => +e);
  const visited = Array.from(Array(1501), () => Array(1501));
  const sum = numArr.reduce((a, c) => a + c, 0);
  if (sum % 3) {
    return 0;
  }

  const queue = [];
  visited[numArr[0]][numArr[1]] = 1;
  queue.push([numArr[0], numArr[1], numArr[2]]);

  while (queue.length) {
    let cur = queue.pop();
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (cur[i] < cur[j]) {
          const nx = cur[i] + cur[i];
          const ny = cur[j] - cur[i];

          if (visited[nx][ny]) continue;

          visited[nx][ny] = 1;
          queue.push([nx, ny, sum - nx - ny]);
        }
      }
    }
  }
  return visited[sum / 3][sum / 3] ? 1 : 0;
};

console.log(sol(input));