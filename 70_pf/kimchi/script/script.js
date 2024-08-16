$(function () {
    let idx = 0;
    setInterval(autoSlide, 2000);
    
    function autoSlide() {
        console.log("idx",idx);
        (idx === 2) ? idx = 0 : idx++;
        // fatd- 
        $("#slide li").eq(idx).animate({opacity: 1 },1000,function(){
            if (idx === 0) idx = 3;
            $("#slide li").eq(idx-1).animate({opacity: 0}, 1000);
            if (idx === 3) idx = 0;
        });
    };
});