// Hamburger menu:
// mostrare / nascondere il menu principale
// (ricordate che per vedere l’hamburger in alto a destra dovete scendere a risoluzioni tipo tablet o mobile).

$(document).ready(function(){

  $('.header-right a i').click(function (){
    $('.hamburger-menu').show();
  });


  $(".header-right a i").click(function(){
    alert("The paragraph was clicked.");
  });

  $('.header-right a i').click(function (){
    $('.hamburger-menu').hide();
  });

});
