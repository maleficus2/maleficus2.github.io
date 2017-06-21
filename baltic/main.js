$(window).load(function(){
  $(window).scroll(function(){
  if($(window).width() > 991) {
    if($(document).scrollTop() > 0){
        $(".logo").css({"width":"130px", "padding-top":"2px"});
        $(".order-a-call").css({"display":"none"})
        $(".footer-contacts").css({"display":"inline-block"})
        $(".main-button").css({"display":"none"})
        $("#id-main").addClass("fixed-head")
        $(".first").addClass("padder")

        }else{
           $(".logo").css({"width":"auto", "padding-top":"18px"});
        $(".order-a-call").css({"display":"inline-block"})
        $(".main-button").css({"display":"inline-block"})
        $("#id-main").addClass("fixed-head")
      $("#id-main").removeClass("fixed-head")
      $(".first").removeClass("padder")
    }
  } else {
     if($(document).scrollTop() > 0){
        $("#id-main").addClass("fixed-head")
        $(".first").addClass("padder")

        }else{
      $("#id-main").removeClass("fixed-head")
      $(".first").removeClass("padder")
    }
  }
    
});
});
$(document).ready(function(){
  $(".main-button, .small-screen").click(function(e) {
    e.preventDefault();
    $(".modals .contact-form-title").text("ЗАКАЗАТЬ ЗВОНОК");
    $(".modals").addClass("is-visible");

  });
  $("#phone input").mask("+38(099)999-99-99");
 
  $(".price-btn").click(function(e) {
    e.preventDefault();
    $(".modals .contact-form-title").text("ЗАКАЗАТЬ ПРОСЧЕТ СТОИМОСТИ");
    $(".modals").addClass("is-visible");

  });

  $(".close").click(function() {
    $(".modals").removeClass("is-visible");
  });


  $(".menu li").click(function(){
    $(".menu li").removeClass("active");
    $(this).addClass("active");
  });


  $(".menu-btn").click(function(){
    $(".menu").slideToggle(400);
  });

  modal = $('.modal');

  $('.news_old').click(function(){
    modal.addClass('is-visible');
  });

  modal.click(function(e){
    if( $(e.target).is($(this)) || $(e.target).is('.close') ) {
      $(this).removeClass('is-visible');
    } 
  });

$("#scroller").simplyScroll({
                    orientation: 'horizontal',
                    auto: true,
                    manualMode: 'loop',
                    frameRate: 200,
                    speed: 1,
                });

 $(document).keyup(function(e){
    if(e.which=='27'){
      $('.modals').removeClass('is-visible');
    }
  });

$(".fancybox").fancybox();
}); //end docready

$(document).ready(function() {
  $(".logo").css({"position":"relative", "left": "-600px"}).animate({"left":"0"},2000, "easeInOutCubic")
});

$(document).ready(function(){
  $(" #menu-item-5, #menu-item-6, #menu-item-7, #menu-item-20, #menu-item-8").on("click","a", function (event) {
    
    if($(window).width() < 991) {
      //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();

    //забираем идентификатор бока с атрибута href
    var id  = $(this).attr('href'),

    //узнаем высоту от начала страницы до блока на который ссылается якорь
      top = $(id).offset().top - 90;
    $(".menu").css({"display": "none"});
    //анимируем переход на расстояние - top за 1500 мс
    $('body,html').stop().animate({scrollTop: top}, 1500);
  } else {
      //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();

    //забираем идентификатор бока с атрибута href
    var id  = $(this).attr('href'),

    //узнаем высоту от начала страницы до блока на который ссылается якорь
      top = $(id).offset().top - 64;
    
    //анимируем переход на расстояние - top за 1500 мс
    $('body,html').stop().animate({scrollTop: top}, 1500);
  }
    
  });
  
});
$(document).ready(function(){
  $(" #menu-item-11").on("click","a", function (event) {
    
    if($(window).width() < 991) {
      //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();

    //забираем идентификатор бока с атрибута href
    var id  = $(this).attr('href'),

    //узнаем высоту от начала страницы до блока на который ссылается якорь
      top = $(id).offset().top ;
    $(".menu").css({"display": "none"});
    //анимируем переход на расстояние - top за 1500 мс
    $('body,html').stop().animate({scrollTop: 0}, 1500);
  } else {
      //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();

    //забираем идентификатор бока с атрибута href
    var id  = $(this).attr('href'),

    //узнаем высоту от начала страницы до блока на который ссылается якорь
      top = $(id).offset().top;
    
    //анимируем переход на расстояние - top за 1500 мс
    $('body,html').stop().animate({scrollTop: 0}, 1500);
  }
    
  });
  
});
