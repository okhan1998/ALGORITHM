const sol = (input) => {
    const N = +input[0];
    let idx = 1; // 입력 처리를 위해 input의 인덱스를 조회하는 변수.
    let result = "";
  
    function bfs(knight, target, I) {
      const queue = [];
      queue.push(knight);
      const visit = Array.from({ length: I }, () => Array(I).fill(0));
      visit[knight[0]][knight[1]]=1;
      const dx = [-2, -1, 1, 2, 2, 1, -1, -2]; // dx, dy는 나이트가 이동 가능한 좌표.
      const dy = [1, 2, 2, 1, -1, -2, -2, -1];
      while (queue.length) {
        const [x, y] = queue.shift();
        if (x === target[0] && y === target[1]) { // (x,y) 좌표 값이 target에 도달했으면 즉시 종료.
          result += `${visit[x][y] - 1}\n`; // 시작 위치 값을 0이 아닌 1로 설정했으므로, 최종 도착 값에서 1을 빼준다.
          break;
        }
        for (let i = 0; i < 8; i++) {
          const [nx, ny] = [x + dx[i], y + dy[i]];
          if (nx < 0 || ny < 0 || nx >= I || ny >= I) continue;
          if (!visit[nx][ny]) { // 만약 이미 방문을 한 위치라면 조회하지 않는다.
            visit[nx][ny] = visit[x][y] + 1; // visit[x][y]는 (x,y)까지의 최단경로이므로, 1을 더해주면 (nx,ny)까지의 최단경로.
            queue.push([nx, ny]);
          }
        }
      }
    }
  
    for (let i = 0; i < N; i++) { // N개 테스트 케이스를 순차적으로 테스트한다.
      const I = +input[idx++];
      const knight = input[idx++].split(" ").map((v) => +v);
      const target = input[idx++].split(" ").map((v) => +v);
      bfs(knight, target, I);
    }
    return result;
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