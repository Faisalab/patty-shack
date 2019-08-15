
window.onload = function(){
  let txt = document.getElementById('text');

  txt.classList.add('show');
}
M.AutoInit();      

$(document).ready(function() {
  
    $(window).scroll(function () { 
        // console.log($(window).scrollTop())
      if ($(window).scrollTop() > 600) {
        $('#navbar').addClass('navbar-fixed');
      }
      if ($(window).scrollTop() < 601) {
        $('#navbar').removeClass('navbar-fixed');
      }
    });
  });