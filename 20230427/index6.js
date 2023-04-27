const BlockClass = require("./index5.js");

console.log(BlockClass.obj);
console.log(BlockClass.add());
BlockClass.add2();

// nodejs 역사
// ES6 때 nodejs가 자체적으로 모듈의 문법을 만든 것.
// require : 파일을 가져와서 실행 시켜주는 메소드
const require = (path) => {
    // 1. 해당 파일의 path를 가져오고
    // 2. 해당 소스코드를 실행시킨다.
    // 3. return module.exports
}
