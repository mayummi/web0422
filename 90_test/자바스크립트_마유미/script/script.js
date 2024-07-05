const btn1 = document.querySelectorAll('.tabs a').item(0);
const btn2 = document.querySelectorAll('.tabs a').item(1);
const btn3 = document.querySelectorAll('.tabs a').item(2);



const cont1 = document.querySelector('.tab1');
const cont2 = document.querySelector('.tab2');
const cont3 = document.querySelector('.tab3');

// 이벤트 처리
btn1.onclick = function(){
    resetF();
    cont1.classList.add('on');
}
btn2.onclick = function(){
    resetF();
    cont2.classList.add('on');
}
btn3.onclick = function(){
    resetF();
    cont3.classList.add('on');
}

function resetF(){
    cont1.classList.remove('on');
    cont2.classList.remove('on');
    cont3.classList.remove('on');
}