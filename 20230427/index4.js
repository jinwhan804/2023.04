// nodejs의 내장 모듈
// nodejs에서 미리 만들어 놓은 모듈들
// require에서 모듈 경로와 파일 명을 적지 않고 모듈의 이름만 사용

// 운영 체제의 정보가 들어있는 모듈
// const os = require("os");

// console.log(os);

// nodejs의 내장 객체
// global : node의 전역 객체. 개념만 이해하고 넘어가도 된다. 
// nodejs 모듈의 실행 컨텍스트와 전역 컨텍스트가 다르기 때문에
// nodejs에서는 모듈이 각각의 파일 스코프를 가져서 this는 모듈 자체를 가르킨다.

// 레포모드 켜고
// console
// global.console.log()
// global.console.time() : 코드 시작 시간. 매개변수로 해당 테스트 이름을 문자열로 작성
// global.console.timeEnd() : 코드 종료 후 시간 출력. 매개변수로 해당 테스트 이름을 문자열로 작성

// 전달된 객체를 표 형태로 보여주는 메소드
// global.console.table({a : {name : "안녕"},b : {name : "안녕2"},c : {name : "안녕3"}})

// 실행시키면 실행 파일의 이름까지 보여주는 메소드
// console.log(__filename);
// 실행한 파일의 디렉토리까지 보여주는 메소드
// console.log(__dirname);

// process 객체
// console.log(process.env);
console.log(process.version); // 노드의 설치 버전
console.log(process.execPath); // 노드의 경로
console.log(process.cpuUsage()); // Cpu 사용량
