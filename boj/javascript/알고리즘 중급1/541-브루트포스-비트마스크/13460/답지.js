let fs = require("fs")

// 문자 하나만 입력받을 경우
input = fs.readFileSync("./input.txt").toString()

// 줄바꿈으로 구분
input = fs
  .readFileSync("./input.txt")
  .toString()
  .split("\n")

const solution = (N, M, board) => {
  let redPos;
  let bluePos;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (board[i][j] === 'R') redPos = [i, j];
      if (board[i][j] === 'B') bluePos = [i, j];
    }
  }

  const move = (x, y, dx, dy) => {
    let count = 0;
    while (board[x + dx][y + dy] !== '#' && board[x][y] !== 'O') {
      x += dx;
      y += dy;
      count++;
    }
    return [x, y, count];
  };

  const direction = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  const cache = {};
  const queue = [[...redPos, ...bluePos, 1]];
  cache[`${redPos[0]},${redPos[1]},${bluePos[0]},${bluePos[1]}`] = true;
  while (queue.length) {
    const [rx, ry, bx, by, depth] = queue.shift();
    if (depth > 10) break;

    let nextRx, nextRy, rCount, nextBx, nextBy, bCount;
    for (let i = 0; i < 4; i++) {
      const [dx, dy] = direction[i];
      [nextRx, nextRy, rCount] = move(rx, ry, dx, dy);
      [nextBx, nextBy, bCount] = move(bx, by, dx, dy);

      if (board[nextBx][nextBy] === 'O') continue; // Blue 구슬이 구멍에 빠진 경우
      if (board[nextRx][nextRy] === 'O') return depth;
      if (nextRx === nextBx && nextRy === nextBy) {
        if (rCount > bCount) {
          nextRx -= dx;
          nextRy -= dy;
        } else {
          nextBx -= dx;
          nextBy -= dy;
        }
      }

      if (cache[`${nextRx},${nextRy},${nextBx},${nextBy}`]) continue; // 이미 방문한 경로인 경우
      cache[`${nextRx},${nextRy},${nextBx},${nextBy}`] = true;
      queue.push([nextRx, nextRy, nextBx, nextBy, depth + 1]);
    }
  }
  return -1;
};

const [N, M] = input[0].split(' ');
console.log(solution(N, M, input.slice(1)));