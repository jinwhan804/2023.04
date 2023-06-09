// 모듈이란? 
// 하나의 파일에 기능을 모두 작성하게 되면 협업, 수정, 유지보수가 힘들다.
// 파일을 규칙에 맞게 나눌 수 있으면 나누는 것이 좋다.
// 모듈은 하나의 큰 프로그램의 작은 단위를 의미
// 모듈은 파일 단위로 구분되어 있고 파일 내용은 필요한 기능들의 함수나 변수들이 포함되어 있는 것.

const BlockClass = [
    {
        name : "안녕",
        age : 1,
        comment : function(){
            console.log(this.name + "이야.")
        }
    }, {
        name : "안녕2",
        age : 1,
        comment : function(){
            console.log(this.name + "이야.")
        }
    }
];

// 단순히 작성하고 다른 파일에서 실행하면 오류가 발생하는데
// 이 내용을 모듈로 내보내서 다른 파일에서 가져가서 모듈화 하여 사용.
// 해당 파일의 리턴 값을 내보내 줄 수 있다.
module.exports = BlockClass;
