let fs = require('fs');
let filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt' 
let input = fs.readFileSync(filepath).toString().split('\n');
let [L, C] = input[0].split(' ').map(x => +x);
let arr = input[1].split(' ').sort();
let list = [];
let ret = [];
let vo = 0;
let con = 0;
let ac = (char) => {
    if(char == 'a' || char == 'e'|| char == 'i' || char == 'o' || char == 'u')
        vo += 1;
    else
        con += 1;
}

let dfs = (cnt, C, L) => {
    if(cnt == L){
        for(let i =0; i < L; i++){
            ac(list[i])
        }
        if(vo > 0 && con > 1)
            ret.push(JSON.parse(JSON.stringify(list)).join(''))
        vo = 0;
        con = 0;
        return;
    }
    for(let i=0; i < C; i++){
        if(cnt == 0){
            list[cnt] = arr[i];
            
            dfs(cnt+1, C, L)
        } else {
            list[cnt] = arr[i];
            if(list[cnt] > list[cnt-1])
                dfs(cnt+1, C, L)
        }
    }
    return;
}
dfs(0, C, L);

console.log(ret.join('\n'));