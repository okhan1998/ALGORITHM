let arr = [ '5 4', '1 0 1 0 0', '1 0 0 0 0', '1 0 1 0 1', '1 0 0 1 0' ]
arr.shift();
arr = arr.map(x => x.split(' ').map(y => +y));
console.log(arr)