$(function (){

  $('#current-image').prepend('<div id="portfolio-tip-wrapper"></div>');
  $('#portfolio-tip-wrapper').append('<div id="portfolio-tip"><span></span></div>');
  $('#portfolio-tip-wrapper').append('<div id="portfolio-tip-arrow"></div>');
  
  /*
    $('body').prepend('<div id="email-wrapper"></div>');
    $('#email-wrapper').append('<div id="email"><span>benfattodesign@gmail.com</span></div>');
    $('#email-wrapper').append('<div id="email-arrow-border"></div>');
    $('#email-wrapper').append('<div id="email-arrow"></div>');
  */
  
  
  function hidePortfolio(){
    
    $('#page-shadow').fadeOut(1000);
    
    $('#current-image').animate({left:2500},2000);
    
    $('#portfolio-bar, #portfolio-shadow').animate({right:'-300px'},1000);
    
    $('#menu a[name="portfolio"]').css('color','#fff');
  }
  
  $('#menu a[name="contact"]').bind('click', function (){
    $('#contact').fadeIn(600);
  });
  
  $('#menu a[name="portfolio"]').bind('click',function (){
    
    $('#portfolio-bar, #portfolio-shadow').animate({right:'0px'},1000);
  
    $('#menu a[name="portfolio"]').css('color','#70b0e0');
  
    $('#portfolio-bar img').first().trigger('click');
    
    //$('#portfolio-horizontal-bar')
    
    return false;
  });
  
  $('#menu a[name="home"]').bind('click', function (){
  
    hidePortfolio();
    
    return false;
  });

  
  $('#portfolio-bar img').bind('click',function (){
    
    $('#page-shadow').fadeIn(1200);
    
    $('#current-image img').attr('src',$(this).attr('src'));
    
    $('#current-image').animate({left:50},1500);

    $('#portfolio-tip span').text($(this).attr('data-tip'));
    
  });
});