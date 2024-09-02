$(() => {
    // $(".slider")와 <div class="slider"> 이름이 같아야 한다.
    $('.slider').bxSlider({
        // auto는 자동슬라이드 기능으로 true이면 자동슬라이드 처리하고, false(기본값)이면 자동슬라이드되지 않는다.
        auto: true,
        stopAutoOnClick: true,

        // autoControls은 play(실행)/pasue(일지정지) 버튼을 true이면 보이고, false(기본값) 이면 숨긴다.
        // autoControls: true,

        // pager는 하단 중앙의 인디케이터로 true(기본값)이면 보이고, false이면 숨겨진다.
        // pager: false,

        // slideWidth는 슬라이드 크기 지정, 단위는 px로 숫자만 기록한다.
        // slideWidth: 1200,

        // controls는 다음(next)/이전(prev) 버튼으로 true(기본값)이면 보이고, false이면 숨겨진다.
        // constrols: false
    });
}); // 로드 이벤트