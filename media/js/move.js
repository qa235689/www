$(document).ready(function () {
            
    $('.topMove').hide();  // 탑메뉴 보이지마
 
   $(window).on('scroll',function(){  //스크롤의 위치가 바뀌면 발생하는 이벤트
        var scroll = $(window).scrollTop();  //스크롤의 상단 부터의 거리
       
       
        //$('.text').text(scroll);  //스크롤의 거리를 출력
        if(scroll>700){    //스크롤 top의 거리가 500px 보다 커지면 
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

     var current=0;
    $(window).resize(function(){ 
       var screenSize = $(window).width();  //가로 해상도
 
       if( screenSize > 1024){ //소형 테블릿 이상이면
         $("#gnb").show();
          current=1;
       }
       if(current==1 && screenSize < 1024){ //모바일 해상도에서는 
         $("#gnb").hide();
          current=0;
       }
     }); 
     
   });

   $(document).ready(function() {
    var op = false;  //네비가 열려있으면(true) , 닫혀있으면(false)
      
    $(".menu_open").click(function() { //메뉴버튼 클릭시
        
 
       if(op==false){
         $("#gnb").slideDown('slow');
         $('#headerArea').addClass('mn_open');
         op=true;
       }else{
         $("#gnb").slideUp('fast');
         $('#headerArea').removeClass('mn_open');
         op=false;
       }
 
    });
    
   
   });
 
 
 