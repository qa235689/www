
$(document).ready(function() {
  
    //2depth 열기/닫기
    $('ul.dropdownmenu').hover(
       function() { 
          $('ul.dropdownmenu li.menu ul').fadeIn('normal',function(){$(this).stop();}); //모든 서브를 다 열어라
          $('#headerArea').animate({height:306},'fast').clearQueue();
       },function() {
          $('ul.dropdownmenu li.menu ul').hide(); //모든 서브를 다 닫아라
          $('#headerArea').animate({height:186},'fast').clearQueue();
     });
     
     //1depth 효과
     $('ul.dropdownmenu li.menu').hover(
       function() {
          $('.depth1',this).css('color','#09c')
       },function() {
         $('.depth1',this).css('color','#333')
     });

     //tab 처리
     $('ul.dropdownmenu li.menu .depth1').on('focus', function () {        
        $('ul.dropdownmenu li.menu ul').fadeIn('normal');
        $('#headerArea').animate({height:306},'fast').clearQueue();
     });

    $('ul.dropdownmenu li.m6 li:last').find('a').on('blur', function () {        
        $('ul.dropdownmenu li.menu ul').hide();
        $('#headerArea').animate({height:186},'fast').clearQueue();
    });
    
});


//상단이동 코드

$(document).ready(function () {
            
   $('.topMove').hide();  // 탑메뉴 보이지마

  $(window).on('scroll',function(){  //스크롤의 위치가 바뀌면 발생하는 이벤트
       var scroll = $(window).scrollTop();  //스크롤의 상단 부터의 거리
      
      
       //$('.text').text(scroll);  //스크롤의 거리를 출력
       if(scroll>500){    //스크롤 top의 거리가 500px 보다 커지면 
           $('.topMove').fadeIn('slow');   //top메뉴가 보인다
       }else{
           $('.topMove').fadeOut('fast');   //top메뉴가 안보인다
       }
  });

   // 상단 top메뉴를 클릭하면 상단으로 이동시킨다
   $('.topMove').click(function(e){
      e.preventDefault();
       //상단으로 스르륵 이동합니다.
      $("html,body").stop().animate({"scrollTop":0},1000); //스크롤의 위치를 이동시킨다
   });


   //패밀리사이트

   // 	$('footer_family .arrow').click(function(e){
   //       e.preventDefault();
	// 	$('footer_family .aList').show();			  
	// });
	// $('footer_family .aList').mouseleave(function(){
	// 	$(this).hide();			  
	// });
	$('.footer_family .arrow').toggle(function(){
		$('.footer_family .aList').show();
      $('.footer_family .arrow span').html('<i class="fas fa-chevron-up"></i>');	
	}, function(){
		$('.footer_family .aList').hide();	
      $('.footer_family .arrow span').html('<i class="fas fa-chevron-down"></i>');
	});



	//tab키 처리
	  $('.footer_family .arrow').bind('focus', function () {        
              $('.footer_family .aList').show();	
       });
       $('.footer_family .aList li:last').find('a').bind('blur', function () {        
              $('.footer_family .aList').hide();
       });  

});

// a태그 가만히
$(document).ready(function() {
   $('.footer_sns a, .footer_menu').click(function(e){
      e.preventDefault();
   });
});
