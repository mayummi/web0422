const btn1 = document.querySelectorAll('#tabs a').item(0);
const btn2 = document.querySelectorAll('#tabs a').item(1);
const btn3 = document.querySelectorAll('#tabs a').item(2);
const btn4 = document.querySelectorAll('#tabs a').item(3);
// console.log(btn1,btn2,btn3,btn4);


const cont1 = document.querySelector('#tab1');
const cont2 = document.querySelector('#tab2');
const cont3 = document.querySelector('#tab3');
const cont4 = document.querySelector('#tab4');
// console.log(cont1)


// const cont2 = document.querySelectorAll('#tabs>div')[1];
// console.log(cont1);
// console.log(cont2);

// 이벤트 처리
btn1.onclick = function(){
    cont1.classList.add('on');
    cont2.classList.remove('on');
}
// 버튼2을 클릭하면
btn2.onclick = function(){
    cont2.classList.add('on');
    cont1.classList.remove('on');
}