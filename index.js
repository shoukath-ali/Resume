
for (i=0;i<6;i++){
    document.querySelectorAll('.nav-link')[i].addEventListener("click",function(){
        var  a = new Audio('sounds/f1.mp3');
        a.play();
    });
};


// function openLinkAsCover(link) {
//     var win = window.open(link, '_blank', 'width=1000%, height=1000%, top=10, left=10');
//     win.focus();
// }
