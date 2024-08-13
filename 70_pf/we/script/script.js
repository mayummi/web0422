$(()=>{
    // 요소 찾기
    const firstList = $("#notice a").eq(0);
    const modal = $("#modal");
    const closeBtn = $("button");
    console.log(firstList);

    // 이벤트 처리
    // 객체.이벤트(function(){})
    firstList.click(()=>{
        // css("속성", "값")
        // css({속성: 값, 속성: 값, ...})
        modal.css({display: "block"});
    });

    closeBtn.click(()=>{
        modal.css({display: "none"});
    });
});