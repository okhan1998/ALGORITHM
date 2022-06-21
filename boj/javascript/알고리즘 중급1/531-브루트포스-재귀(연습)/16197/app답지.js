// 어려웠던 점. 일단 dfs로 할지 bfs할지 구별하는게 어려웠다.
// 나는 벽 동전 칸으로 구분했지만, 다른 사람들은 벽만 신경썼다. => dfs다음 깊이로 넘어갈떄 벽이있으면 그 동전 그대로있고 없으면 위치를 변경하였다 > checkWall함수
// 나는 중복을 피하기위해 check이라는 변수를 생성했지만 문제에서 10번만 이동할 수 있다는 조건이 있었고 check이 따로 불필요했다
// 이 문제 답안으로서 아래에 있는 코드는 깔끔하게 잘 짜여진 거 같아 나중에 밑에와 비슷한 식으로 다시 풀어볼만하다.
const sol = (input) => {
    const [N, M] = input[0].split(" ").map(Number);
    const board = input.slice(1).map((str) => str.split(""));
    const coin = [];
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < M; j++) {
        if (board[i][j] === "o") coin.push([i, j]);
      }
    }
  
    const dx = [-1, 0, 1, 0];
    const dy = [0, 1, 0, -1];
    let min = Number.MAX_SAFE_INTEGER;
  
    function checkDrop(x, y) { // 떨어지면 참, 떨어지지 않았으면 거짓
      if (x < 0 || y < 0 || x >= N || y >= M) return true;
      return false;
    }
  
    function checkWall(x, y, idx) {
      const [nx, ny] = [x + dx[idx], y + dy[idx]];
      if (board[nx]) { 
        if (board[nx][ny] === "#") return [x, y];
      }
      return [nx, ny];
    } // 중요한 부분. 먼저 행이 존재하는지를 검사한다.(board[-1][2]는 undefined의 2번 인덱스를 참조하려 하기 때문에 에러가 발생한다.)
  
    function dfs(cnt, x1, y1, x2, y2) {
      if (cnt >= min) return; // 없어도 정답은 나온다. 하지만 10이하의 min값이 나왔다면 더 빠르게 돌아간다. 
      if (cnt > 10) return;
      if (checkDrop(x1, y1) && checkDrop(x2, y2)) return;
      if (checkDrop(x1, y1) || checkDrop(x2, y2)) { // 둘 중 하나만 참일 때만이 최솟값을 갱신할 수 있다.
        min = Math.min(min, cnt);
        return;
      }
      for (let i = 0; i < 4; i++) {
        const [nx1, ny1] = checkWall(x1, y1, i); // 벽이 있으면 (x,y), 벽이 없다면 이동 가능하므로 (nx,ny)
        const [nx2, ny2] = checkWall(x2, y2, i); // 단, (nx,ny)가 보드 바깥일 수도 있지만, 다음 재귀에서 판별할 것이기 때문에 상관x
        dfs(cnt + 1, nx1, ny1, nx2, ny2);
      }
    }
  
    dfs(0, coin[0][0], coin[0][1], coin[1][0], coin[1][1]);
    if (min === Number.MAX_SAFE_INTEGER) return -1; // 최솟값이 갱신되지 않았다면!
    return min;
  };
  
  // 백준에서 입력을 받는 코드
  const input = [];
  require("readline")
    .createInterface(process.stdin, process.stdout)
    .on("line", (line) => {
      input.push(line);
    })
    .on("close", () => {
      console.log(sol(input));
      process.exit();
    });