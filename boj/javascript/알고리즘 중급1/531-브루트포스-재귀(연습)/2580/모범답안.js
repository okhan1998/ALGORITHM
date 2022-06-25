const fs = require('fs');
const filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
let input = fs.readFileSync(filepath).toString().split('\n').map(x => x.split(' '));


let isPossible = (x, y, val) => {
    //가로
    for(let i =0; i < input.length; i++){
        if(input[x][i] == val) return false;
    }
    //세로
    for(let i =0; i < input.length; i++){
        if(input[i][y] == val) return false;
    }
    //3*3
    let threeX = Math.floor(x/3)*3;
    let threeY = Math.floor(y/3)*3;
    for(let i = threeX; i < threeX + 3; i++){
        for(let j = threeY; j < threeY + 3; j++){
            if(input[i][j] == val) return false
        }
    }
    return true
}

let findZeroBoard = () => {
    const zeros = [];
    for(let i=0; i<input.length; i++){
        for(let j =0; j <input[0].length; j++){
            if(input[i][j] == 0) zeros.push([i,j])
        }
    }
    return zeros
}

let sudoku = (count) => {
    if(count == n){
        for(let i =0; i < 9; i++){
            for(let j=0; j< 9; j++){
                answer.push(input[i][j])
            }
            console.log(answer.join(' '))
            answer = [];
        }
        process.exit(0)
    }
    let zeroX = zero[count][0];
    let zeroY = zero[count][1];

    for (let i =1; i <= input.length; i++){
        if(isPossible(zeroX,zeroY, i)){
            input[zeroX][zeroY] = i
            sudoku(count +1);
            input[zeroX][zeroY] = 0;
        }
    }
}

const zero = findZeroBoard();
const n = zero.length
let answer = [];
sudoku(0);

console.log(input)