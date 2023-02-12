let BTN = document.querySelector(".btn");
let box_right = document.querySelector(".box__face--right");
let box_left = document.querySelector(".box__face--left");
let box_top = document.querySelector(".box__face--top");
let box_bottom = document.querySelector(".box__face--bottom");
let box_back = document.querySelector(".box__face--back");
let box = document.querySelector(".box");
let logo = document.querySelector(".logo");





BTN.addEventListener("click" , function(){
    box_right.style.transition = "all 0.5s";
    box_right.style.transform = "rotateY(90deg)";
    box_right.style.top = "90px";
    box_right.style.transformOrigin = "100% 0%";
    box_right.style.backgroundImage = "url('pexels-pixabay-326333.jpg')";
    box_right.style.backgroundSize = "cover";

    box_left.style.transition = "all 0.5s";
    box_left.style.transform = "rotateY(-90deg)";
    box_left.style.top = "90px";
    box_left.style.transformOrigin = "0% 100%";
    box_left.style.backgroundImage = "url('pexels-pixabay-326333.jpg')";
    box_left.style.backgroundSize = "cover";

    box_top.style.transition = "all 0.5s";
    box_top.style.transform = "rotateX(-90deg)";
    box_top.style.top = "20px";
    box_top.style.left = "75px";
    box_top.style.transformOrigin = "0% 100%";
    box_top.style.backgroundImage = "url('pexels-pixabay-326333.jpg')";
    box_top.style.backgroundSize = "cover";

    box_bottom.style.transition = "all 0.5s";
    box_bottom.style.transform = "rotateX(90deg)";
    box_bottom.style.bottom = "20px";
    box_bottom.style.left = "75px";
    box_bottom.style.transformOrigin = "100% 0%";
    box_bottom.style.backgroundImage = "url('pexels-pixabay-326333.jpg')";
    box_bottom.style.backgroundSize = "cover";

    box_back.style.backgroundImage = "url('pexels-pixabay-326333.jpg')";

    box.style.animation = "rot 1s linear 1s  both";

    logo.style.animation = "logotext 1s linear 2.5s  both";
})