// nodejs 설치 후 버전 확인 
// 터미널 열고 node -v 입력

// nodejs의 REPL
// 읽기 - 해석(실행) - 출력 - 반복
// REPL (Read - Eval - Print - Loop)은 콘솔 환경에서 
// 코드를 입력하면 즉시 실행해서 결과를 반환해주는 인터페이스
// nodejs의 코드를 test하고 실행할 수 있도록 해주는 대화형 콘솔.

// 레포라는 모드에 들어가는 방법 : 터미널 열고 node를 쓰면 된다.
// 레포 모드에서 test코드를 작성.
const str = "hello nodejs";
console.log(str);
// 출력된 값은 "hello nodejs", 이 함수의 반환값이 그 다음 출력되지만 
// 현재 반환값이 없기 때문에 undefined가 출력된다.
// 자바스크립트로 브라우저 창을 만들고 볼 때는 런타임 환경
// node의 런타임 환경
// 실행되는 환경이 다르다.
// 브라우저에서 실행하는 console.log와 nodejs에서 실행하는 console.log는 
// 내용이 비슷하지만 동일하지 않다.
// 브라우저에서는 this의 전역객체가 window이고
// node 런타임 환경에서는 this의 전역객체가 global

// 레포 모드를 사용하다가 종료하고 싶으면 컨트롤 + C

// node로 파일을 실행해서 응용프로그램 제작
// 파일 실행 모드
// node로 파일을 실행할 때 node 구문 뒤에 파일의 경로를 작성해주면 된다.
// ex) node index.js
