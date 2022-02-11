const fs = require('fs');
let filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filepath).toString().trim().split('\n');
let cases = +input.shift();
input = input.map(x => x.split(''));
// console.log(cases);
// console.log(input);

console.log(solution(input));

function solution(arr) {
    let max = 0;
    if(max < maxRowCount(arr))
        max = maxRowCount(arr)
    if(max < maxColumCount(arr))
        max = maxColumCount(arr)
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr[i].length; j++){
            
            // if(arr[i-1] !== undefined){//위값과 스왑 
            //     let tmparr = arr.slice()
            //     let tmp = tmparr[i][j]
            //     tmparr[i][j] = tmparr[i-1][j]
            //     tmparr[i-1][j] = tmp
            //     if(max < maxRowCount(tmparr))
            //         max = maxRowCount(tmparr)
            //     if(max < maxColumCount(tmparr))
            //         max = maxColumCount(tmparr)
            // }
            // if(arr[i][j-1] !== undefined){//  왼쪽값과 스왑 
            //     let tmparr = arr.slice()
            //     let tmp = tmparr[i][j-1]
            //     tmparr[i][j-1] = tmparr[i][j]
            //     tmparr[i][j] = tmp
            //     if(max < maxRowCount(tmparr))
            //         max = maxRowCount(tmparr)
            //     if(max < maxColumCount(tmparr))
            //         max = maxColumCount(tmparr)
            // }

            if(arr[i][j+1] !== undefined){//  오른쪽값과 스왑 
                let tmparr = JSON.parse(JSON.stringify(arr))
                // let tmparr = [];
                // arrCpy(arr,tmparr)
                let tmp = tmparr[i][j+1]
                tmparr[i][j+1] = tmparr[i][j]
                tmparr[i][j] = tmp
                if(max < maxRowCount(tmparr))
                    max = maxRowCount(tmparr)
                if(max < maxColumCount(tmparr))
                    max = maxColumCount(tmparr)
            }

            if(arr[i+1] !== undefined){//  아래쪽값과 스왑 
                let tmparr = JSON.parse(JSON.stringify(arr)) // deep카피 방법
                // let tmparr = [];
                // arrCpy(arr,tmparr)
                let tmp = tmparr[i+1][j]
                tmparr[i+1][j] = tmparr[i][j]
                tmparr[i][j] = tmp
                if(max < maxRowCount(tmparr))
                    max = maxRowCount(tmparr)
                if(max < maxColumCount(tmparr))
                    max = maxColumCount(tmparr)
            }
                
        }
    }
    return max;
}

function arrCpy(arr, tmparr){
    for(i in arr){
        tmparr.push(arr[i].slice());
    }
}



function maxRowCount(arr){
    let max = 0;
    let tmpmax = 0;
    for(let i = 0; i < arr.length; i++){
        let tmpRow = []
        for(let j = 0; j < arr[i].length; j++){
           if(tmpRow[0] != arr[i][j]){
            tmpRow[0] = arr[i][j]
            tmpmax = 1;            
           } else {
            tmpmax += 1;
            if(max < tmpmax)
                max = tmpmax;
           }
        }
        
    }
    return max 
}

function maxColumCount(arr){
    let max = 0;
    let tmpmax = 0;
    for(let i = 0; i < arr[0].length; i++){
        let tmpColumn = [];
        for(let j = 0; j < arr.length; j++){
           if(tmpColumn[0] != arr[j][i]){
            tmpColumn[0] = arr[j][i]
            tmpmax = 1;            
           } else {
            tmpmax += 1;
            if(max < tmpmax)
                max = tmpmax;
           }
        }
    }
    return max 
}