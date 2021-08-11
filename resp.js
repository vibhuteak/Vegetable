burger = document.querySelector('.burger');
bar = document.querySelector('.bar');
topnav = document.querySelector('.topnav');
rt = document.querySelector('.rt');

burger.addEventListener('click', ()=>{
    bar.classList.toggle('v-class');
    rt.classList.toggle('v-class');
    topnav.classList.toggle('h-nav');
    
})