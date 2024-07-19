// section1 - carousel
// jQuery bxSlider.js Plug-in

/* 
    프레임워크는 애플리케이션의 구조 또는 틀을 제공하며, 개발을 위한 기본적인 형태와 필수 요소를 포함하고 있습니다. 프레임워크가 정한 규칙과 구조 내에서 개발을 진행해야 합니다.
    예) 부트스트랩 프레임워크

    라이브러리는 특정 기능을 수행하는 코드의 집합으로, 개발자가 필요에 따라 선택적으로 사용할 수 있습니다. 예) 제이쿼리

    플러그인은 어떤 특정한 하나의 문제를 해결하기 위한 컴포넌트(component)이다. 예) bx슬라이더
*/


// 바닐라 스크립트
// window.addEventListener("DOMContentLoaded", function(){
//     // 문서가 준비되면 실행할 코드;
// });


// 제이쿼리
// $(document).click(function(){});
// $(document).mouseenter(function(){});
// $(document).mouseleave(function(){});
$(function () {
    // 문서가 준비되면 실행할 코드;


    $('.slider').bxSlider({

        ///////////////////////////////////////////////////////////////////


        // mode: "horizontal"(기본값), "fade", "vertical"
        //mode: "fade",
        // speed: 500(기본값), 밀리초
        //speed: 1000,
        // slideMargin: 0,
        // slideMargin: 0
        // https://gsgd.co.uk/sandbox/jquery/easing/ 
        // easing: null

        ///////////////////////////////////////////////////////////////


        // pager: true(기본값) - pagination, indicator라고 부른다.
        // pager: true,
        // pagerType: 'full'(기본값), 'short'
        // pagerType: 'short',
        // pagerShortSeparator: '/'(기본값)
        // pagerShortSeparator: ' | ',

        //////////////////////////////////////////////////
        // controls: true (기본값) -> next/prev 버튼
        //controls: false, 
        // play/stop 버튼 표시
        autoControls: false,

        //****************************************************/

        // auto: true(기본값) -> 자동 전환
        auto: true,
        // 클릭시 자동 슬라이드 정지
        stopAutoOnClick: true,
        // pause: 4000 (기본값) -> 일시정지 시간
        //pause: 1000,
        // autoStart: true(기본값) -> 자동 슬라이드
        autoStart: true,
        // autoDirection: 'next'(기본값) -> 슬라이드 방향
        // next이면 오른쪽에서 왼쪽 방향
        // prev이면 왼쪽에서 오른쪽 방향
        // autoDirection: 'prev',
        // autoHover: false(기본값), true이면 슬라이드에 호버시 멈춤
        autoHover: true,
        // 슬라이드 크기(단, px 단위 생략)
        // autoDelay: 0(기본값) -> 자동 슬라이드 시작 시 지연 시간
        //autoDelay: 4000
        // slideWidth: 1903
    });

}); // document.ready()