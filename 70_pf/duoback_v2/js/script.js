window.addEventListener("DOMContentLoaded", () => {

    // 모바일 햄버거 버튼 모양 모션 처리와 헤더 등장 모션

    // 요소 찾기
    const nav = document.querySelector("nav");
    const collapsedMenuIcon = document.querySelector(".collapsedMenuIcon");

    // 이벤트 처리
    collapsedMenuIcon.onclick = () => {
        // 함수 호출
        btnMotion(event.currentTarget);
    };

    // 함수 선언
    function btnMotion(x) {
        // 햄버거 버튼: 트리플바 -> x로 바뀜
        // 또 누르면 x -> 트리플바
        x.classList.toggle("change");

        // nav 태그에 change가 추가
        nav.classList.toggle("change");
    }

});