










// 탭
const tabItem = document.querySelectorAll(".tab__item");
const tabContent = document.querySelectorAll(".tab__content");

tabItem.forEach((item, index) => {
    // 3. 탭 버튼에 클릭 이벤트를 준다.
    item.addEventListener("click", (e) => {
        e.preventDefault(); // a 

        tabContent.forEach((content) => {
            content.classList.remove("active");
        });

        tabItem.forEach((content) => {
            content.classList.remove("active");
        });

        tabItem[index].classList.add("active");
        tabContent[index].classList.add("active");
    });
});