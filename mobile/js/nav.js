$(document).ready(function() {
   
 	
    $(".menu_ham").click(function() { //메뉴버튼 클릭시
        
        var documentHeight =  $(document).height();
        //실제 페이지의 높이 = $(document).height();
        $(".box").css('height',documentHeight);
        $("#gnb").css('height',documentHeight);
        //반투명박스와 네비의 높이를 실제 페이지의 높이로 바꾸어라   
 
        $("#gnb").animate({right:0,opacity:1}, 'slow');
        $(".box").show();
    });
    
    $(".box,.mclose").click(function() { //닫기버튼 클릭시
      $("#gnb").animate({right:'-100%',opacity:0}, 'fast');
      $(".box").hide();
    });
      
     //2depth 메뉴 교대로 열기 처리 
     var onoff=[false,false,false,false]; //각 1depth 메뉴의 서브메뉴가 열린상태(true), 닫인상태(false)
     var arrcount=onoff.length; //6개
     
     //console.log(arrcount);
     // 첫번째가 클릭 되었다 ... onoff[0]=false, ind=0
     $('#gnb .depth1 h3 a').click(function(){  //각각의 1depht 메뉴를 클릭하면
         var ind=$(this).parents('.depth1').index();
         
         console.log(ind);
         
        if(onoff[ind]==false){ //클릭한 메뉴의 서브메뉴가 닫혀있나?(false)
         //$('#gnb .depth1 ul').hide();
         $(this).parents('.depth1').find('ul').slideDown('slow'); //클릭한 메뉴의 서브를 열어라
         $(this).parents('.depth1').siblings('li').find('ul').slideUp('fast'); //열여있는 나머지 서브메뉴를 닫아라
 
          for(var i=0; i<arrcount; i++){onoff[i]=false;}//모든 메뉴 상태를 false로..
          onoff[ind]=true;//자신의 상태만 true
          //$('.depth1 span').text('+');  //모든 메뉴의 텍스트를 +로 바꿔라
          //$(this).find('span').text('-');   //자신의 메뉴의 테스트를 -로 바꿔라
             
        }else{ //클릭한 메뉴의 서브메뉴가 열려있나?(true)
          $(this).parents('.depth1').find('ul').slideUp('fast'); //클릭한 자신의 서브메뉴만 닫아라
          onoff[ind]=false;   //자신의 상태를 false
            
          //$(this).find('span').text('+');   //자신의 메뉴의 텍스트를 +바꿔라  
        }
     });    
    
   });
 
$(document).ready(function() {
   $('.footer_family .arrow').toggle(function(){
		$('.footer_family .aList').show();
      $('.footer_family .arrow span').html('<i class="fas fa-chevron-up"></i>');	
	}, function(){
		$('.footer_family .aList').hide();	
      $('.footer_family .arrow span').html('<i class="fas fa-chevron-down"></i>');
	});

});

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
});

$(document).ready(function() {
  $('.footer_sns a, .footer_menu a, .pc, .menu_ham, .depth1_a, .gpro_a a').click(function(e){
    e.preventDefault();
 });
 
});
$(document).ready(function() {
  $('.slide_con a, .a_line a').click(function(e){
    e.preventDefault();
 });
 
});

