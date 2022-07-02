const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().trim().split('\n');

  const table = {};
  for (let i = 0; i < 9; i++) {
    table[i + 1] = i;
    table[String.fromCharCode(i + 65)] = i;
  }

  let head = 0;
  let puzzleIdx = 0;
  while (input.length > head) {
    puzzleIdx++;
    const n = +input[head++];
    if (!n) break;
    const puzzle = Array.from(Array(9), () => new Array(9));
    input.slice(head, n + head).forEach((domino) => {
      head++;
      const [u, lu, v, lv] = domino.split(' ');
      puzzle[table[lu[0]]][table[lu[1]]] = +u;
      puzzle[table[lv[0]]][table[lv[1]]] = +v;
    });
    input
      .slice(head, head++ + 1)[0]
      .split(' ')
      .forEach((value, idx) => {
        puzzle[table[value[0]]][table[value[1]]] = idx + 1;
      })
    console.log(puzzle)
    }

