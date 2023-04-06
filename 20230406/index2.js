// 배열 메소드 추가

// Array.of(); : 전달된 인자를 요소로 가지는 배열을 만들어준다.
const arr = Array.of(1,2,3,4,5,6);
// console.log(arr);

// // 원본 배열을 수정하는 메소드
// arr.push(2);
// console.log(arr);

// // concat : 원본 배열을 수정하는게 아닌 새로운 배열이 생기고 반환된다.
// const result = arr.concat(5);
// console.log(arr);
// console.log(result);

// console.log(arr == result);

let c = 5;
let d = 5;
// console.log(c == d);
// // 레퍼런스 타입은 값을 비교하는게 아니고 주소를 비교한다.
// let a = [1,2,3];
// let b = [...a];  // 스프레드 연산자를 사용해 새로운 배열을 생성
// console.log(a == b);
// console.log(a);
// console.log(b);

const foods = ["apple", "orange"];

// 배열에서 banana가 있는지 확인
// if(foods.indexOf("banana") === -1){
//     // 없으면 추가
//     foods.push("banana");
// }

// console.log(foods);

// ES7에 도입 includes 요소가 있으면 true, 없으면 false 반환
// 배열 내 위치와 상관 없이 존재 유무 확인할 때 사용 가능
// console.log(foods.includes("banana"));
if(!foods.includes("banana")){
    // 없으면 추가
    foods.push("banana");
}

// 자바스크립트에서는 정해진 사이즈가 없기 때문에 index 에러가 발생하진 않는다.
const arr2 = [1,2,3];

arr2[arr2.length + 1] = 4;
// 배열의 끝에 추가하지 않고 더 이후의 인덱스에 값을 추가하면 중간 인덱스의 값은 빈 상태로 생성된다.
// console.log(arr2);

// pop : 배열의 마지막 요소를 제거하는 메소드, 원본이 수정되는 메소드
const arr3 = [1,2,3,4,5];
// arr3.pop();
// console.log(arr3);

// // shift : 첫 번째 요소 제거 시 사용하는 메소드, 원본이 수정되는 메소드
// arr3.shift();
// console.log(arr3);

// // concat : 배열을 이어붙일 때도 사용 가능
// const arr4 = [1,2];
// const arr5 = [3,4];
// const arr6 = arr4.concat(arr5);
// console.log(arr6);

// // splice : 원본 배열의 중간 값 제거, 추가 하는 메소드
// const arr7 = [1,2,3,4];
// const result2 = arr7.splice(1,2,20,30);
// // 1,2 인덱스를 제거하고 20,30을 추가
// console.log(arr7);
// // 함수의 반환은 제거한 요소들이 반환된다.
// console.log(result2);

const arr8 = [1,2,3,4];
const result3 = arr8.splice(1,2);
// console.log(arr8);
// console.log(result3);

// // 배열에서 특정 요소 제거 함수
// const arr9 = [1,20,3,1,50,6];
// function remove(arr, item){
//     // 제거할 item의 인덱스
//     const index = arr.indexOf(item);
//     if(index != -1){
//         arr.splice(index,1); // 해당 인덱스에서 1개 제거
//         return arr;
//     }
// }

// console.log(remove(arr9,20));

// // slice : 매개변수로 전달받은 범위의 아이템을 복사해서 배열을 반환해주는 함수
// // 원본 배열이 변경되지 않는다.
// const arr10 = [1,2,3];
// console.log(arr10.slice(0,2));

// // join : 원본 배열의 모든 요소를 문자열로 변환
const arr11 = [1,2,3,4];
// const result4 = arr11.join();
// console.log(result4);

// reverse : 배열을 뒤집어 주는 메소드
console.log(arr11.reverse());

// fill : ES6 도입. 인자로 전달받은 값을 배열의 처음부터 끝까지 채워준다.
// 배열의 갯수를 유지하면서 값을 초기화해야 할 때 유용
const arr12 = [1,2,3,4,5];
console.log(arr12.fill(1));

// flat : ES10 도입. 배열 내에서 존재하는 배열을 모두 하나의 배열로 풀어주는 메소드
// ex) [1,2,3,4,5,[4,4]] => [1,2,3,4,5,4,4]
const arr13 = [1,[2,3,4],[3,4]].flat();
console.log(arr13);
// 3중 배열 이상일 경우 매개 변수가 없으면 한 단계씩만 풀어주지만
// 매개변수에 값을 넣어주면 그에 맞춰서 풀어준다.
const arr14 = [1,[2,[3]],[4,[5]]].flat(2);
console.log(arr14);
// infinity를 넣어주면 몇중 배열이라도 1개의 배열로 변환해준다.
const arr15 = [1,[11,[12,[[1],1],1]]].flat();
console.log(arr15);
const arr16 = [1,[11,[12,[[1],1],1]]].flat(Infinity);
console.log(arr16);