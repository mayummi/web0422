// import는 최상단에 기록
// import 변수명 from "./경로/파일명"
import main_data from "./mdata.js";

window.addEventListener("DOMContentLoaded", () => {
    // 요소 찾기
    const sel = document.querySelector("header select");
    const logoB = document.querySelector(".logo b");
    const logoSpan = document.querySelector(".logo span");
    const gnb = document.querySelectorAll(".gnb a");
    const titB = document.querySelector("#sec1 b");
    const titSpan = document.querySelector("#sec1 span");
    
    const flogo = document.querySelector(".flogo img");
    const fmenu = document.querySelectorAll(".fmenu a");
    const addr = document.querySelector(".addr");

    // select의 값이 바뀔 때
    sel.onchange = (e) => {
        let opt = e.currentTarget.value;
        console.log("opt?",opt);
        let data = main_data[opt];

        //로고 변경
        logo.setAttribute("src", `${data["logo"]}`);
        console.log(data["logo"]);

        // 메인 타이틀 변경
        tit.forEach((ele, idx) =>
            ele.innerText = data["tit"][idx]);

        // 메뉴 변경
        gnb.forEach((ele, idx) =>
            ele.innerText = data["gnb"][idx]);

        // 푸터 메뉴 변경
        fmenu.forEach((ele, idx) =>
            ele.innerText = data["fmenu"][idx]);

        //푸터 로고 변경
        flogo.setAttribute("src", `${data["flogo"]}`);
        console.log(data["flogo"]);

        // 주소 변경
        addr.innerText = data["addr"];
    };
});