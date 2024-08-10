$(function(){
    // 슬라이드: 페이드 효과
    let currentIndex = 0; // 현재 이미지 설정
    $(".slider").hide().first().show(); //모든 이미지 숨기고 첫번째 이미지 나타남
    setInterval(function(){
        let nextIndex = (currentIndex + 1) % 3; //다음이미지 설정

        $(".slider").eq(currentIndex).fadeOut(1200); //첫번쩨 이미지 안보이게함
        $(".slider").eq(nextIndex).fadeIn(1200); //두번째 이미지 보이게 함

        currentIndex = nextIndex; //두번째 값을 현재 인덱스에 저장
    }, 3000);

    // 메뉴: 하나씩 나오기
    $(".nav > ul > li").mouseover(function(){
        $(this).find(".submenu").stop().slideDown(200);
    });
    $(".nav > ul > li").mouseout(function(){
        $(this).find(".submenu").stop().slideUp(200);
    });
    
    // 탭 메뉴
    const tabBtn = $(".info-menu > a"); //탭 버튼 설정
    const tabCont =$(".info-cont > div"); //탭 콘텐츠 설정
    tabCont.hide().eq(0).show();

    tabBtn.on("click", function(){
        const index = $(this).index(); //클릭한 버튼의 번호를 저장

        $(this).addClass("active").siblings().removeClass("active"); //클릭한 버튼에 클래스를 추가하고 나머지는 제거함
        tabCont.eq(index).show().siblings().hide(); // 클릭한 버튼 순서에 맞는 콘텐츠를 추가하고 나머지는 숨김
    });

    // 팝업
    $(".popup-btn").click(function(){ //팝업 버튼 클릭
        $(".popup-view").show(); //팝업 나타나기
    });
    $(".popup-close").click(function(){ //팝업 닫기 버튼 클릭
        $(".popup-view").hide(); // 팝업 숨기기
    });
});