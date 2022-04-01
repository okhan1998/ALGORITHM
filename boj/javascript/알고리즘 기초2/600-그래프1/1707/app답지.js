const fs = require("fs");
const stdin = (
   process.platform === "linux"
      ? fs.readFileSync("/dev/stdin").toString()
      : `2
3 2 
1 3 
2 3 
4 4 
1 2 
2 3 
3 4 
4 2`
).split("\n");

const getLine = (() => {
   let line = 0;
   return () => stdin[line++];
})();

// 변별 알고리즘
// 각 꼭짓점들을 이웃 꼭짓점들과 다른 색으로 계속해서 칠해 나가면서,
// 같은 색깔의 꼭짓점이 서로 연결되어 있는 모순이 발생하는지 여부를 확인하면 된다.

let T;
let graph = [];
let visited = [];

const input = () => {
   T = Number(getLine());
};

function bfs(v) {
   const q = [];
   
   visited[v] = 1;
   q.push(v);

   while (q.length !== 0) {
      const cur = q.shift();

      for (let i = 0; i < graph[cur].length; ++i) {
         const next = graph[cur][i];
            if (visited[next]) {
                if (visited[cur] == visited[next])
                    return false;
            
            continue;
            }
            
            visited[next] = visited[cur] == 1 ? 2  : 1;
            q.push(next);
        }
    }

    return true;
}


function test(){
    [v, e] = getLine().split(" ").map(Number);
      
    graph = [...Array(v + 1)].map(() => []);
    visited = [...Array(v + 1).fill(0)];

    for (let i = 0; i < e; ++i) {
       [a, b] = (getLine().split(" ").map(Number));

       graph[a].push(b);
       graph[b].push(a);
    }

    for (let i = 1; i <= v; ++i) {
       if (visited[i]) 
          continue;

          if (!bfs(i)){
            console.log("NO");     
            return;
          };
    }

    console.log("YES");
}


const solve = () => {
   for (let t = 0; t < T; ++t) {
        test();
   }
};

const main = () => {
   input();
   solve();
};

main();