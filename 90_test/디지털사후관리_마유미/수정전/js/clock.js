// ready 이벤트
$(() => {
    const ye = $("#clock span").eq(0);
    const mo = $("#clock span").eq(1);
    const da = $("#clock span").eq(2);
    const we = $("#clock span").eq(3);
    const ho = $("#clock span").eq(4);
    const mi = $("#clock span").eq(5);
    const se = $("#clock span").eq(6);

    // 1초마다 clock 호출
    setInterval(clock, 1000);

    function clock() {
        // d라는 날짜 인스턴스 생성
        const d = new Date();

        // 날짜/시간 값 가져오기
        let yea = d.getFullYear();
        let mon = d.getMonth() + 1; //0~11
        let dat = d.getDate(); //0~11
        let wee = d.getDay(); // 0(일)~6(토)
        let hou = d.getHours();
        let min = d.getMinutes();
        let sec = d.getSeconds();

        const weeks = ["일", "월", "화", "수", "목", "금", "토"];

        // 출력
        ye.text(yea + "년");
        mo.text(zeroAdd(mon) + "월");
        da.text(zeroAdd(dat) + "일");
        we.text("(" + weeks[wee] + ")");
        ho.text(zeroAdd(hou));
        mi.text(zeroAdd(min));
        se.text(zeroAdd(sec));

        // 한 자리 번호를 2자로 표시
        // 예) 0~9는 00~09로 표기
        function zeroAdd(num) {
            // 삼항 연산자
            // 조건 ? 참 : 거짓
            return num < 10 ? (num = "0" + num) : (num = num);
        }
    } // clock_fn
}); // ready
