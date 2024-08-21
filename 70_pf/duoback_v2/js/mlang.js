// import는 최상단에 기록
// import 변수명 from "./경로/파일명"
import main_data from "./mdata.js";

window.addEventListener("DOMContentLoaded", () => {
    // 요소 찾기
    const sel = document.querySelector("header select");
    const logoB = document.querySelector(".logo b");
    const logoSpan = document.querySelector(".logo span");
    const gnbA = document.querySelectorAll(".gnb a");
    const s1B = document.querySelector("#sec1 b");
    const s1Span = document.querySelector("#sec1 span");
    const sTit = document.querySelectorAll("section h2");
    const section2ItemTitle = document.querySelectorAll("#sec2 h3");
    const section2ItemImg = document.querySelectorAll("#sec2 img");

    // 이벤트
    sel.onchange = (e) => {
        let opt = e.currentTarget.value;
        // console.log("opt?",opt);
        let data = main_data[opt];

        //로고 변경
        logoB.innerText = data["mtit"][0];
        logoSpan.innerText = data["mtit"][1];
        // console.log(data["logo"]);

        // 글로벌 네비게이션 변경
        gnbA.forEach((ele, idx) =>
            ele.innerText = data["gnb"][idx]);

        // 섹션1 메인 타이틀 변경
        s1B.innerText = data["mtit"][0];
        s1Span.innerText = data["mtit"][1];


        // 섹션의 제목 h2 변경
        sTit.forEach((ele, idx) => {
            if (sTit[0]) return;
            ele.innerText = data["stit"][idx]});
        
        // 섹션2의 아이템 제목 변경
        section2ItemTitle.forEach((ele, idx) =>
        ele.innerText = data["s2"]["tit"][idx]);
        // console.log(data["flogo"]);
        
        // 섹션2의 아이템 이미지 변경
        section2ItemImg.forEach((ele, idx) =>
            ele.setAttribute("src", `${data["s2"]["img"][idx]}`));
        console.log(data["s2"]["img"][idx]);
    };
});