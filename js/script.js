$(function () { 
  $('[data-toggle="tooltip"]').tooltip({trigger: 'manual'}).tooltip('show');
}); 

 $( window ).scroll(function() {   
  if($( window ).scrollTop() > 400){
      // scroll down abit and get the action   
    $(".progress-bar").each(function(){
      each_bar_width = $(this).attr('aria-valuenow');
      $(this).width(each_bar_width + '%');
    });      
  }  
});

// init Isotope
var $grid = $('.grid').isotope({
  itemSelector: '.grid-item',
  layoutMode: 'masonry'
});