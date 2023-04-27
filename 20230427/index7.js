// 웹 서버 제작
// 내장 모듈 사용
const http = require("http");

// createServer : 서버 객체를 만들어주는 메소드
// 클라이언트의 요청을 받으면 호출된다.
// 전달된 콜백함수는 클라이언트의 요청을 받아서 처리 후 
// 클라이언트에 응답해준다.

const server = http.createServer((req, res) => {
    // 위에서 처리하고 end 메소드로 해당 내용을 응답한 후에 종료.
    // 문자열이 깨지는 이유
    // res.setHeader()
    res.end("server on");
});

// 포트
// 포트를 지정하는 이유 : 네트워크 프로세스를 나눠주기 위해
// http 80 포트 사용, https 433 포트 사용
// 시스템 예약 포트 이 외의 사용하지 않을 것 같은 포트들을 사용하면 된다.
// 1025 ~ 65535까지 안에서 정해주면 된다
// 개발할 때 자주 사용되는 포트는 8000 8080 3000 정도.

const PORT = 4000;

// 서버 객체의 listen 메소드를 호출해서 
// 클라이언트의 요청을 대기 상태로 만들어줄 수 있다.
// 이벤트 루프를 돌면서 요청이 오기까지 대기를 하다가 요청이 오면 응답해준다.
// listen의 첫 번째 매개변수로 port를 전달
server.listen(PORT,() => {
    // 콜백함수를 등록해서 성공적으로 서버가 열렸는지 확인 가능하다.
    // 나중에 헤더 내용으로 인코딩을 utf-8을 추가해서 한글 폰트 적용 가능하게 할 수 있다.
    console.log("서버가 정상적으로 열림. " + PORT + "에");
});