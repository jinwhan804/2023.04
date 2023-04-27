// 우리가 window를 생략해서 작성하는 것처럼 global과 모듈을 생략하여 사용할 수 있다.
// console.log(module.exports === exports);  // true

exports.obj = {a : 1};
exports.add = (a) =>{
    return 2;
}
function add2(){
    console.log("나는 함수");
}
exports.add2 = add2;