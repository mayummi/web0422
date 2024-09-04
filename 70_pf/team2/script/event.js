window.addEventListener("DOMContentLoaded", () => {
    
        $(".tab-menu > ul > li").click(function(){
                
            //this = 내가 선택할 무언의 것

            // removeclass addclass .표시 금지
            // eq(index)
            // $(선택자/아이디인지 클래스인지 명확히 쓰기)
            // return false;
            
            let index = $(this).index();
            
            $(".tab-menu > ul > li").removeClass("active");
            $(".tab-cont > div").hide();
            
            $(this).addClass("active");
            $(".tab-cont > div").eq(index).show();
            
    });

});