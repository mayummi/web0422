window.addEventListener("DOMContentLoaded", () => {

    // 모바일 햄벅 버튼 모양 모션 처리와 헤더 등장 모션

    // 요소 찾기
    const nav = document.querySelector("nav")
    const collapsedMenuIcon = document.querySelector(".collapsedMenuIcon");

    // 이벤트 처리
    collapsedMenuIcon.onclick = () => {
        // event.currentTarget는 이벤트 함수내에서 객체 자신을 가리킨다.
        // 함수 호출
        btnMotion(event.currentTarget);
    };

    // 호이스팅
    // 함수 선언(정의)
    function btnMotion(x) {
        // 햄버서 버튼: x에서 트릴플 바로 바꿈
        // toggle()은 x객체가 change를 가지고 있으면 제거, 아니면 추가
        x.classList.toggle("change");

        // nav 태그의 change 추가
        nav.classList.add("change")
    }

});