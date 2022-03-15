const fs = require('fs')
const filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filepath).toString().split('\n')
let N = +input.shift();
let M = N/2;
let arr = input.map(x => x.split(' ').map(y => +y));
// console.log(N, M, arr);
let list = [];
let ret = [];
let combi = [];
for(let i = 1; i <= N; i++){
    combi.push(i)
}

let findDifference = (arr1,arr2, M) => { // 팀 점수 차이 찾기 
    let arr1score = 0;
    let arr2score = 0;
    for(let i =0; i < M; i++){
        for(let j =0; j < M; j++){
            if(i != j)
                arr1score += arr[arr1[i]-1][arr1[j]-1]
        }
    }
    for(let i =0; i < N-M; i++){
        for(let j =0; j < N-M; j++){
            if(i != j)
                arr2score += arr[arr2[i]-1][arr2[j]-1]
        }
    }
    return arr1score-arr2score >= 0 ? arr1score-arr2score : arr2score-arr1score
}

let makeOtherTeam = (arr1) => { // 상대편 팀 만들기
    let arr2 = JSON.parse(JSON.stringify(combi))
    
    for(let i = 0; i < arr1.length; i++){
        arr2.splice(arr2.indexOf(arr1[i]), 1)
        
    }
    return arr2    
}

// console.log(makeOtherTeam([3,4]))

let dfs = (cnt, N, M) => { // 우리팀 조합 만들기
    if(cnt == M){
        let arr1 = JSON.parse(JSON.stringify(list)) //우리팀조합
        let arr2 = makeOtherTeam(arr1) //상대팀조합
        ret.push(findDifference(arr1, arr2, M)); //점수차이 
        return;
    }
    for(let i = 1; i <= N; i++){
        if (cnt == 0){
            list[cnt] = i;
            dfs(cnt+1, N, M)
        } else {
            list[cnt] = i;
            if(list[cnt] > list[cnt-1])
                dfs(cnt+1, N, M)
        }
    }
    return;
}
for(let i = 2; i <= N-2; i++){
    dfs(0, N, i)
}

console.log(Math.min(...ret)); //최소 점수차 구하기