window.addEventListener("DOMContentLoaded", () => {

    // 스크롤 방향 감지, 스크롤 방향 아래 = 헤더 사라짐 / 스크롤 방향 위 = 헤더 나타남
    var idheader = document.querySelector("#header");
    var header = document.querySelector(".header");

    var headerMoving = function (direction) {
        if (direction === "up") {
            idheader.className = "";
            header.className = "";
        } else if (direction === "down") {
            idheader.className = "scrollDown";
            header.className = "scrollDown";
        }
    };
    var prevScrollTop = 0;

    window.addEventListener("scroll", function () {
        var nextScrollTop = window.pageYOffset || 0;
        let value = this.scrollY;

        if (nextScrollTop > prevScrollTop && value > 0) {
            headerMoving("down");
        } else if (nextScrollTop < prevScrollTop || value <= 1) {
            headerMoving("up");
        }
        prevScrollTop = nextScrollTop;
    });

    // 헤더 메뉴펼침 마우스무브 이벤트
    var Header = document.querySelector(".header");
    var Hidden_header = document.querySelector(".header-hidden");
    var menulist = document.querySelectorAll(".menulist");
    var foundlink = document.querySelector(".link__found");
    var mouseOut = document.querySelector(".for-mouseOut");
    var listLink = document.querySelectorAll(".list-link");

    for (let menu of menulist) {
        menu.addEventListener("mousemove", function () {
            Hidden_header.classList.add("active");
            foundlink.classList.add("active");
            Header.classList.add("active");
            menu.classList.add("active");

            Hidden_header.classList.add("active");
            foundlink.classList.add("active");
            Header.classList.add("active");
            menu.classList.add("active");
        });

        Header.addEventListener("mouseleave", function () {
            Hidden_header.classList.remove("active");
            foundlink.classList.remove("active");
            Header.classList.remove("active");
            menu.classList.remove("active");
        });

        for (let link of listLink) {
            link.addEventListener("click", function () {
                Hidden_header.classList.remove("active");
                foundlink.classList.remove("active");
                Header.classList.remove("active");
                menu.classList.remove("active");
            });
        }
    }


    // 모바일 버거 메뉴 클릭할 때 액티브
    let mobileburger = document.querySelector(".mobile-menu");
    let mobileburgerOpen = document.querySelector(".mobile-menu__open");
    let closeBtn = document.querySelector(".mobile-menu-closeBtn");
    let wrapBlur = document.querySelector("#wrap");

    mobileburger.addEventListener("click", function () {
        mobileburgerOpen.classList.toggle("active");
        wrapBlur.classList.toggle("blur");
    });

    closeBtn.addEventListener("click", function () {
        mobileburgerOpen.classList.remove("active");
        wrapBlur.classList.remove("blur");
    });

    // 모바일 버거 메뉴 하위메뉴 드랍다운
    let hiddenMenuList = document.querySelectorAll(".hidden-menuList");

    for (let i = 0; i < hiddenMenuList.length; i++) {
        hiddenMenuList[i].addEventListener("click", function () {
            this.classList.toggle("active");
            this.nextElementSibling.classList.toggle("active");
        });
    }

    // 마우스가 스크롤 밖으로 나가면 히든 메뉴 인액티브
    document.addEventListener("mouseleave", (event) => {
        if (
            event.clientY <= 0 ||
            event.clientX <= 0 ||
            event.clientX >= window.innerWidth ||
            event.clientY >= window.innerHeight
        ) {
            Hidden_header.classList.remove("active");
            foundlink.classList.remove("active");
        }
    });

});