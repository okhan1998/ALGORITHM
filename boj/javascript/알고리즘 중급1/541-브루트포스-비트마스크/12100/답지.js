const fs = require('fs');
const stdin = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

function moveUp(n, board) {
  const result = Array.from({ length: n }, () => Array(n).fill(0));

  for (let c = 0; c < n; c++) {
    let insertRow = 0;
    for (let r = 0; r < n; r++) {
      if (board[r][c] === 0) continue;
      if (result[insertRow][c] === 0) result[insertRow][c] = board[r][c];
      else if (result[insertRow][c] === board[r][c]) result[insertRow++][c] *= 2;
      else result[++insertRow][c] = board[r][c];
    }
  }
  return result;
}

function moveDown(n, board) {
  const result = Array.from({ length: n }, () => Array(n).fill(0));

  for (let c = 0; c < n; c++) {
    let insertRow = n - 1;
    for (let r = n - 1; r >= 0; r--) {
      if (board[r][c] === 0) continue;
      if (result[insertRow][c] === 0) result[insertRow][c] = board[r][c];
      else if (result[insertRow][c] === board[r][c]) result[insertRow--][c] *= 2;
      else result[--insertRow][c] = board[r][c];
    }
  }
  return result;
}

function moveLeft(n, board) {
  const result = Array.from({ length: n }, () => Array(n).fill(0));

  for (let r = 0; r < n; r++) {
    let insertCol = 0;
    for (let c = 0; c < n; c++) {
      if (board[r][c] === 0) continue;
      if (result[r][insertCol] === 0) result[r][insertCol] = board[r][c];
      else if (result[r][insertCol] === board[r][c]) result[r][insertCol++] *= 2;
      else result[r][++insertCol] = board[r][c];
    }
  }
  return result;
}

function moveRight(n, board) {
  const result = Array.from({ length: n }, () => Array(n).fill(0));

  for (let r = 0; r < n; r++) {
    let insertCol = n - 1;
    for (let c = n - 1; c >= 0; c--) {
      if (board[r][c] === 0) continue;
      if (result[r][insertCol] === 0) result[r][insertCol] = board[r][c];
      else if (result[r][insertCol] === board[r][c]) result[r][insertCol--] *= 2;
      else result[r][--insertCol] = board[r][c];
    }
  }
  return result;
}

function dfs(moveCnt, n, board) {
  if (moveCnt === 5) {
    ans = Math.max(
      ans,
      Math.max(...board.map(row => Math.max(...row)))
    );
    return;
  }

  const movedUp = moveUp(n, board);
  const movedDown = moveDown(n, board);
  const movedLeft = moveLeft(n, board);
  const movedRight = moveRight(n, board);
  dfs(moveCnt + 1, n, movedUp);
  dfs(moveCnt + 1, n, movedDown);
  dfs(moveCnt + 1, n, movedLeft);
  dfs(moveCnt + 1, n, movedRight);
}

const n = Number(stdin[0]);
const board = stdin.slice(1).map(el => el.split(' ').map(Number));
let ans = 0;
dfs(0, n, board);
console.log(ans);