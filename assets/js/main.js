$( document ).ready(function() {
// start here    
$('.menu-link').click(function() {
  $('.menu').addClass('left');
});

$('.close-link').click(function() {
  $('.menu').removeClass('left');
});	

// popup link

$('.popup-link').click(function() {
  $('.popup').addClass('active');
});

$('.popup').click(function() {
  $('.popup').removeClass('active');
});	














// end here
});



$("#slideshow > div:gt(0)").hide();

setInterval(function() { 
  $('#slideshow > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow');
},  1000); 



