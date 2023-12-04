var hamburger_menu;
var big_wrapper;
function declare(){
    big_wrapper = document.querySelector(".big-wrapper");
    hamburger_menu = document.querySelector(".hamburger-menu");
}

const main = document.querySelector("main");
declare();
event();
function event(){
    hamburger_menu.addEventListener("click",()=>{
        big_wrapper.classList.toggle("active");
    });
}
