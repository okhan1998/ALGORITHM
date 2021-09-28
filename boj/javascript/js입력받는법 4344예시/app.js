const fs = require('fs'); 
// fs모듈은 node.js 에서 제공하면 기본 모듈이다 fs로 쓸 수 있는 기능은 많지만 write와 read가 대표적이다.   
let input = fs.readFileSync('./input.txt').toString(); 
/* 읽어온 파일을 인풋에 저장한다. 
여기서 toString()은 붙여준 이유는 readFileSync의 반환 값은 문자열이 아닌 buffer 객체이기 때문이다. 
readFileSyn의 인수로 인코딩을 지정해주지 않으면 Buffer 객체를 반환한다. 
따라서 문자열로 바꾸어주지 않으면 예기치 못한 오류가 날 수 있다.
##추가설명: https://tesseractjh.tistory.com/39  */
console.log(input);
input = input.split('\n');
// split은 문자열을 자르고, 배열에 담아 리턴한다. 배열로 데이터를 정제해야 사용하기 용이하다. 
console.log(input);

const testCaseNum = Number(input[0]);
/* Number로 input을 감싸주는 이유는 현재 input[0]
문자여서 숫자로 바꿔주기 위함이다. 
+input[0]을 써도 유효하다 
*/
console.log('testCaseNum: ', testCaseNum);
/* 개인적으로 궁금했던 부분은 
1.console.log('testCaseNum: ', testCaseNum)
2.console.log('testCaseNum: '+ testCaseNum)
3.console.log('testCaseNum: %d', testCaseNum)
의 차이점이다. 결론을 말하자면 1번은 console.log에게 인수를 2개 전달하지만, 2번과 3번은 1개의 인수를 전달한다.
##추가설명: https://stackoverflow.com/questions/44608964/what-is-the-difference-between-and-in-the-console-log */

for (let i = 1; i <= testCaseNum; ++i) {
    const arr = input[i].split(' ')//.map((item) => +item);
    let newArr = [];
    for(let i = 0; i < arr.length; ++i){
        newArr.push(Number(arr[i]));
    }
    
    console.log('arr : ', arr);
    console.log('newArr : ', newArr);ci
}

function solution(C, testCase) {

}
