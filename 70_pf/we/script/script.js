$(()=>{
    //////////////////////////// 모달 팝업 ///////////////////
    // 요소 찾기
    // const firstList = $("#notice a").eq(0);
    // const modal = $("#modal");
    // const closeBtn = $("button");
    // console.log(firstList);

    // 이벤트 처리
    // 객체.이벤트(function(){})
    // 요소 찾기 및 이벤트 처리
    $(".notice a").eq(0).click(()=>{
        // css("속성", "값")
        // css({속성: 값, 속성: 값, ...})
        event.preventDefault();
        $("#modal").css({display: "block"});
    });

    $("button").click(()=>{
        $("#modal").css({display: "none"});
    });// 모달 팝업 끝

});