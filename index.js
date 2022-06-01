
for (i=0;i<6;i++){
    document.querySelectorAll('.nav-link')[i].addEventListener("click",function(){
        var  a = new Audio('sounds/tom-3.mp3');
        a.play();
    });
};
