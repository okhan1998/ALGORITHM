const inputs = require('fs').readFileSync('./input.txt').toString().trim().split('\n');
const [n, m] = inputs[0].split(' ').map(Number);
inputs.shift();
const visited = inputs.map(line => line.split(''));
console.log(visited)
let queue = [{x:0, y:0}];

const dx = [-1, 1, 0, 0];
const dy = [0, 0, 1, -1];

while(queue.length > 0) {
    const element = queue.shift();
    
    for(let i = 0; i< 4; i++) {
        const nx = element.x + dx[i];
        const ny = element.y + dy[i];
        
        if (0 <= nx && nx < n && 0 <= ny && ny < m && visited[nx][ny] == 1) {
            visited[nx][ny] = Number(visited[element.x][element.y]) + 1;
            console.log(visited)
            queue.push({x: nx, y: ny});
        }
    }
}

const answer = visited[n-1][m-1];
console.log(answer);
