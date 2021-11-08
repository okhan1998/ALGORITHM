const fs = require('fs');
const filepath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
let input = fs.readFileSync(filepath).toString().split('\n');
let sample = input.shift();
let number = input.shift();
let inputarr = [];
let index = sample.length;
sample = sample.split('');



input.forEach(x => {
    inputarr.push(x.split(' '));
})


for(let i = 0; i < inputarr.length; i++){
    if(inputarr[i][0] == 'P'){
        if(sample[index] == null){
            sample[index] = inputarr[i][1];
            index++;
        }else{
            for(let j = sample.length; j > index; j--){
                sample[j] = sample[j-1];
            }
            sample[index] = inputarr[i][1];
        }
    } else if(inputarr[i][0] == 'L'){
        if(index == 0){}
        else
            index--;
    } else if(inputarr[i][0] == 'D'){
        if(index == sample.length){}
        else
            index++;
    } else if(inputarr[i][0] == 'B'){
        if(index == 0){}
        else{
            sample[index-1] = null;
            for(let j = index-1; j < sample.length; j++){
                sample[j] = sample[j+1];
            }
            index--;
        }
    }
}
console.log(sample.join(''));
