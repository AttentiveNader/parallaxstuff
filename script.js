var name = $("#name2") ;
console.log(name[0]);
var width = $(window).width();
console.log(width+'hi');
console.log('hi');
if(width> 700){
    console.log("it should work")
    $("#name2").css({
        position: 'absolute',
        top: '40%',
        left:'40%'
    });
}
$(window).scroll(function(){
    var header = $("#header");

 var wScroll = $(this).scrollTop();
    $("#name").css({
       'transform' : 'translate(0px,'+ wScroll / 5+'%)'
    });
    $("#worthlessImg").css({
       'transform' : 'translate(-'+ wScroll+'px,0px)'
    });
    $("#smallL").css({
       'transform' : 'translate(0px,'+ wScroll / 3+'%)'
    });

});
var scene = document.getElementById('scene')


var parallax = new Parallax(scene);