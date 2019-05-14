$('nav').hide();
$('.x-btn').hide();
$('.follow').hide();




$('.menu-btn').on('click',function(){
  $('.menu-btn').hide();
  $('.x-btn').show();
  $('nav').slideDown();
  $('.follow').slideDown();
});

$('.x-btn').on('click',function(){
  $('.follow').slideUp();
  $('nav').slideUp();
  $('.x-btn').hide();
  $('.menu-btn').show();
});
