$(document).ready(function(){
   $('#btn1').on('click', change_bck);
   $('#btn2').on('click', change_bck2);
});
 
function change_bck() {
    $('.main-screen').css('background','url(img/main-screen-background.png) center center no-repeat');
}


function change_bck2() {
    $('.main-screen').css('background','url(img/dark-forest-foggy-trees-fence-nature.jpeg) center center no-repeat');
}
