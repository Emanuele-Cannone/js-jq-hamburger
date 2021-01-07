// Hamburger menu:
// mostrare / nascondere il menu principale
// (ricordate che per vedere l’hamburger in alto a destra dovete scendere a risoluzioni tipo tablet o mobile).

$(document).ready(function(){

  $('.header-right a').click(function (){
    $('.hamburger-menu').show();
  });

  $('.hamburger-menu a').click(function (){
    $('.hamburger-menu').hide();
  });

});
