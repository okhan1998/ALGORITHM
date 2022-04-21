let fs = require('fs');
let filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
let input = fs.readFileSync(filepath).toString().trim().split('\n');
let cases = +input.shift();
// console.log(cases);
// console.log(input);

let dfs = (V, check, adjArr, D, cnt) => {
    check[V] = true;
    if(check[D]){
        console.log(cnt);
        return ;
    }
    for(let i =0; i < adjArr[V].length; i++){
        let next = adjArr[V][i]
        if(!check[next]){
            dfs(next, check, adjArr, D, cnt+1)
        }

    }
    return ;
}


let sol = (l, c, d) => {
    let adjArr = Array.from(Array(l*l+1), () => Array(0))
    let check = new Array(l*l+1).fill(false)
    for(let i = 1; i < l*l; i++){
        if((i%l>2 || i%l ==0) && i <= l*(l-1)){
            adjArr[i].push(i+l-2)
            adjArr[i+l-2].push(i)
        }
        if((i%l>1 || i%l ==0) && i <= l*(l-2)){
            adjArr[i].push(i+(2*l)-1)
            adjArr[i+(2*l)-1].push(i)
        }
        if(i%l > 0 && i <= l*(l-2)){
            adjArr[i].push(i+(l*2)+1)
            adjArr[i+(l*2)+1].push(i)
        }
        if(i%l > 0 && i%l < l-1 && i <= l*(l-1)){
            adjArr[i].push(i+l+2)
            adjArr[i+l+2].push(i)
        }
    }
    let V = (l*c[0])+c[1]+1;
    let D = (l*d[0])+d[1]+1;
    // let tmp = []
    // console.log(V, check, adjArr, D, cnt);
    dfs( V, check, adjArr, D, 0);
    // console.log(check)
}

sol(8,[0,0],[7,0])
