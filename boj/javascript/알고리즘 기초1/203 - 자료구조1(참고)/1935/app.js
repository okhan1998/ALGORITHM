const fs = require('fs');
const filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filepath).toString().trim().split('\n');

let number = input.shift();
let way = input.shift().split('');
input = input.map(x => +x);
let stack = [];
let A = 0;
let B = 0;
for (let i = 0; i < way.length; i++){
    if (way[i] == 'A'){
        stack.push(input[0])    
    } else if(way[i] == 'B'){
        stack.push(input[1])    
    } else if(way[i] == 'C'){
        stack.push(input[2])    
    } else if(way[i] == 'D'){
        stack.push(input[3])    
    } else if(way[i] == 'E'){
        stack.push(input[4])    
    } else if(way[i] == 'F'){
        stack.push(input[5])  
    } else if(way[i] == 'G'){
        stack.push(input[6])    
    } else if(way[i] == 'H'){
        stack.push(input[7])    
    } else if(way[i] == 'I'){
        stack.push(input[8])    
    } else if(way[i] == 'J'){
        stack.push(input[9])    
    } else if(way[i] == 'K'){
        stack.push(input[10])
    } else if(way[i] == 'L'){
        stack.push(input[11])
    } else if(way[i] == 'M'){
        stack.push(input[12])
    } else if(way[i] == 'N'){
        stack.push(input[13])
    } else if(way[i] == 'O'){
        stack.push(input[14])
    } else if(way[i] == 'P'){
        stack.push(input[15])
    } else if(way[i] == 'Q'){
        stack.push(input[16])
    } else if(way[i] == 'R'){
        stack.push(input[17])
    } else if(way[i] == 'S'){
        stack.push(input[18])
    } else if(way[i] == 'T'){
        stack.push(input[19])
    } else if(way[i] == 'U'){
        stack.push(input[20])
    } else if(way[i] == 'V'){
        stack.push(input[21])
    } else if(way[i] == 'W'){
        stack.push(input[22])
    } else if(way[i] == 'X'){
        stack.push(input[23])
    } else if(way[i] == 'Y'){
        stack.push(input[24])
    } else if(way[i] == 'Z'){
        stack.push(input[25])
    } else if(way[i] == '+'){
        B = stack.pop();
        A = stack.pop();
        stack.push(A + B)
    } else if(way[i] == '-'){
        B = stack.pop();
        A = stack.pop();
        stack.push(A - B)
    } else if(way[i] == '/'){
        B = stack.pop();
        A = stack.pop();
        stack.push(A / B)
        
    } else if(way[i] == '*'){
        B = stack.pop();
        A = stack.pop();
        stack.push(A * B)
    }
}

console.log(stack.pop().toFixed(2))
