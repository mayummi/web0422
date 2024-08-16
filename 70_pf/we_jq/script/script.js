$(()=>{

    // 슬라이드 이미지
    let idx = 0;
            setInterval(autoSlide, 2000);
            
            function autoSlide() {
                (idx === 2) ? idx = 0 : idx++;
                // fatd- 
                // $("#slide li").eq(idx).animate({opacity: 1 },1000,function(){
                //     if (idx === 0) idx = 3;
                //     $("#slide li").eq(idx-1).animate({opacity: 0}, 1000);
                //     if (idx === 3) idx = 0;
                // });

                // 1in, 0out -> 2in, 1out -> 0in, 2out
                $("#slide li").eq(idx).fadeIn(1000,function(){
                    if (idx === 0) idx = 3;
                    $("#slide li").eq(idx-1).fadeOut(1000);
                    if (idx === 3) idx = 0;
                });
            };




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