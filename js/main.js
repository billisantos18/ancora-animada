$(function() {  
	$('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 1500);
    return false;
  });  
});

$(function() {
	$('ul li a').click(function(){ $('li a').removeClass("active"); $(this).addClass("active"); });
});