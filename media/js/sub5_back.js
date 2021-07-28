$(document).ready(function() {
    var screenSize = $(window).width();
    var screenHeight = $(window).height();

    $("#content").css('margin-top',screenHeight);
      
    if( screenSize > 768){
       $('.videoBox .back_img').attr('src','images/sub4/subback1.jpg');
  }
  if(screenSize <= 768){
       $('.videoBox .back_img').attr('src','images/sub4/subback2.jpg');
  }
    
 $(window).resize(function(){    //웹브라우저 크기 조절시 반응하는 이벤트 메소드()
    screenSize = $(window).width(); 
    screenHeight = $(window).height();
        
    $("#content").css('margin-top',screenHeight);
       
    if( screenSize > 768){
       $('.videoBox .back_img').attr('src','images/sub4/subback1.jpg');
    }
    if(screenSize <= 768){
       $('.videoBox .back_img').attr('src','images/sub4/subback2.jpg');
    }
  }); 
      
      
      $('.down').click(function(){
            screenHeight = $(window).height();
            $('html,body').animate({'scrollTop':screenHeight}, 1000);
      });
      
      
});

$(document).ready(function() {

     $('.conin .in:eq(0)').show(); // 첫번째 탭 내용만 열어라
     $('.conbox .btn1').css('color','#fff').css('text-shadow','#fff 0 0 10px'); //첫번째 탭메뉴 활성화

     $('.conbox .stit').click(function(e){
          e.preventDefault();   
                    
          var ind = $(this).index('.btn .stit');
               
          $(".conin .in").hide();
          $(".conin .in:eq("+ind+")").fadeIn('fast'); 
          $('.stit').css('color','#ccc').css('text-shadow','none'); //모든 탭메뉴를 비활성화
          $(this).css('color','#fff').css('text-shadow','#fff 0 0 10px');  //클릭한 해당 탭메뉴만 활성화
          
     });
});