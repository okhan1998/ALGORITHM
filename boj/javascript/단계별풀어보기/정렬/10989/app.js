// node.js 로 메모리초과때문에 풀 수 없다. 


const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(num => +num);

const result = quickSortStarter(input).join('\n');

function quickSortStarter(arr) {
  if (!arr.length) {
    return arr;
  }
  return quickSort(arr, 0, arr.length - 1);
}

function quickSort(array, l, r) {
  const pivot = array[Math.floor((l + r) / 2)];
  let left = l;
  let right = r;

  while (left <= right) {
    while (array[left] < pivot) left++;
    while (array[right] > pivot) right--;

    if (left <= right) {
      const temp = array[left];
      array[left] = array[right];
      array[right] = temp;
      left++;
      right--;
    }
  }

  if (l < right) quickSort(array, l, right);
  if (r > left) quickSort(array, left, r);

  return array;
}

console.log(result);
