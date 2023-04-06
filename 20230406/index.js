// 이터러블과 이터레이터 계속
// Set, Map
// Set은 배열에 중복되지 않는 값을 저장할 수 있다.
// 배열은 요소의 순서에 의미가 있지만 Set은 의미가 없다.
// 배열은 인덱스로 접근 가능, Set은 인덱스로 접근 불가
// Set은 ES6 값으로만 이루어져 있다.

const s = new Set();
console.log(s);
// 요소를 추가하는 방법 : add 메소드를 사용
s.add("one");
s.add("one");
// 중복값은 허용하지 않는다.
s.add("two");
s.add("two");
s.add("two");
s.add("three");
console.log(s);

const arr = [1,2,3,4,5];
// 생성 단계에서 생성자 함수에 배열 전달 가능
const ss = new Set(arr);
console.log(ss);
// has : 값을 가지고 있는지 확인하는 메소드
console.log(ss.has(2));

// delete : 제거하고자 하는 요소를 지우는 메소드
ss.delete(2);
console.log(ss);

// clear : 모든 값을 제거하는 메소드
ss.clear();
console.log(ss);

ss.forEach(function(i){
    console.log(i);
})

// SetIterator 객체로 반환
// 이터러블에 이터레이터를 반환시켜준다.
const temp = ss.entries();
console.log(temp.next().value);

// Map : 키와 벨류를 저장하는데 키 값을 객체로도 저장할 수 있다.
// ES6부터 추가 
// 키와 벨류를 한 쌍으로 저장하는데 Set과 같이 중복된 키값을 허용하지 않는다.
// iterator를 통해 Map 객체 내부를 순회할 수 있다.

const map = new Map();
// Map에 값을 추가할 때 키와 값을 같이 추가해줘야 한다.
// set 메소드를 통해 키와 값을 저장 
// 동일한 키를 통해 값을 저장하게되면 가장 마지막에 저장한 값으로 호출된다.
map.set("one",1)
map.set("one",2)
map.set("one",3)
map.set("two",2)
console.log(map);

// 일반적인 객체들이 키를 가지고 저장된 값을 호출하듯 map도 키를 통해 저장된 값을 호출
// 호출할 때는 get 메소드 사용
console.log(map.get("one"));
console.log(map.get("two"));

// delete : 원하는 키와 해당 키의 저장값을 제거하는 메소드
// map.delete("one");
console.log(map);

// size : map에 저장된 요소가 몇개인지 확인할 수 있는 메소드
console.log(map.size);

// keys : map에 저장된 키를 모두 반환해 주는 메소드
const keys = map.keys();
console.log(keys);

// values : map에 저장된 값을 모두 반환해 주는 메소드
const values = map.values();
console.log(values);

// entries : [키, 값]형태의 정보들을 모아서 MapIterator 객체로 변환하여 반환해주는 메소드
const iter = map.entries();
console.log(iter);

console.log(iter.next().value);

// 키 정보만 출력시키게 for of 문으로 작성
for (const iterator of keys) {
    // 이터레이터 요소가 끝날 때까지 반복하면서 요소를 보여준다.
    console.log(iterator);
}

// 값 정보만 출력
for (const iterator of values) {
    console.log(iterator);
}

// 키와 값 모두 출력
for (const [key, value] of iter) {
    console.log(`키는 ${key}, 값은 ${value}`);
}

map.forEach(function(value, key){
    console.log(`키는 ${key}, 값은 ${value}`);
})