window.addEventListener("DOMContentLoaded", () => {
    const sel = document.querySelector("select");
    const logo = document.querySelector(".logo img");
    const gnb = document.querySelectorAll(".gnb a");
    const tit = document.querySelectorAll(".tit span");
    const flogo = document.querySelector(".flogo img");
    const fmenu = document.querySelectorAll(".fmenu a");
    const addr = document.querySelector(".addr");

    //console.log(sel,logo,gnb,tit,flogo,fmenu,addr);

    /* 
        이벤트 종류
        onClick ~ 클릭
        onMouseEnter -> 마우스를 요소 위에 올렸을 때
        onmouseleave -> 마우스가 요소를 벗어났을때
        onchange  selet 에서 option이 바뀔때
    */

    // select의 값이 바뀔 때
    sel.onchange = () => {
        // value 속성은 select의 option 값을 가져온다.
        // evnt.currentTarget은 현재 선택된 option을 가리킨다.
        let opt = event.currentTarget.value;
        console.log("opt?",opt);
        let data = main_data[opt];

        //로고 변경
        // 객체.setAttribute("HTML속성", "값"); ->  HTML의 속성 값을 변경
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