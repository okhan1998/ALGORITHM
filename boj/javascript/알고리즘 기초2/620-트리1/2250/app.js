let fs = require("fs");
let filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filepath).toString().trim().split("\n");

const N = Number(input.shift());
let result = []
let depth = Array.from(new Array(500),() => new Array()) // 2차원배열 [깊이][각 깊이에 해당되는 노드]
let maxdepth = [] 
let tmp = {};
const findRoot = Array.from({ length: N + 1 }, () => 0); // 루트찾는 배열

const tree = {}
for(let i =0; i < N; i++){
    const [node, left, right] = input[i].split(' ');
    tree[node] = [left, right];
    findRoot[node]++;
    findRoot[left]++;
    findRoot[right]++;
}

function inorder(node, cnt) { // 중위 순회
    if(node=='-1') return;
    const [left, right] = tree[node];
    inorder(left, cnt+1);
    result.push(node);
    depth[cnt].push(node);
    maxdepth.push(cnt);
    inorder(right, cnt+1);
}
let root = (findRoot.indexOf(1)) + '';


inorder(root, 1);
let max = Math.max(...maxdepth);
for(let i=0; i < result.length; i++){//각 노드의 너비구하기
    tmp[result[i]] = i+1 // 노드를 키값으로 너비를 벨류로 넣어준다
}
let answer = [] // 인덱스=깊이, 값은 각깊이의 최대 넓이가 들어감

for(let i =1; i <= max; i++){
    answer.push(tmp[depth[i][depth[i].length-1]] - tmp[depth[i][0]] + 1); // 각 깊이의 제일처음값과 마지막값의 너비차이를 구하는 식 
}

let answermax = Math.max(...answer);
let answerindex = answer.indexOf(answermax)+1;
console.log(answerindex, answermax);



