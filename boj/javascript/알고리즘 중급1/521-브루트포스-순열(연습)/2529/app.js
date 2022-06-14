const sol = (input) => {
    const N = +input[0];
    const inequality = input[1].split(' ');
    const check = new Array(10).fill(0);
    let max = String(Number.MIN_SAFE_INTEGER) // 처음 비교대상을 가장 작은 숫자로 설정해놓아 조금이라도 크면 바로 교체될 수 있게 해준다.
    let min = String(Number.MAX_SAFE_INTEGER) // 처음 비교대상을 가장 큰 숫자로 설정해놓아 조금이라도 작으면 바로 교체될 수 있게 해준다.

    let dfs = (L, prev, result) => {
        if(L == N){
            max = result > max ? result : max;
            min = result < min ? result : min;
        }
        if(inequality[L] == '<'){
            for (let i = prev + 1; i < 10; i++){
                if(check[i]) continue;
                check[i] = 1;
                dfs(L+1, i, result+i);
                check[i] = 0;
            }
        } else{
            for (let i = prev-1; i > -1; i--){
                if(check[i]) continue;
                check[i] = 1;
                dfs(L+1, i, result+i)
                check[i] = 0;
            }
        }   
    }

    for (let i=0; i < 10; i++){
        check[i] = 1;
        dfs(0, i, `${i}`)
        check[i] = 0;
    }

    return `${max}\n${min}`;
}





const input = []
require('readline')
    .createInterface(process.stdin, process.stdout)
    .on('line', (line) => {
        input.push(line);
    })
    .on('close', () => {
        console.log(sol(input));
        process.exit();
    })