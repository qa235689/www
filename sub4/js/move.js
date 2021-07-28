$(document).ready(function () {
            



    //한페이지에서 메뉴 클릭시 원하는 위치로 스무스하게 이동시키는 코드
    $('.mini_menu a').click(function(e){
        e.preventDefault();
        var value=0;
        if($(this).hasClass('first')){  //첫번째 메뉴 버튼을 클릭하면
           value= $('.slide_con:eq(0)').offset().top + -210; //해당 요소의 상단(top)까지의 거리
        }else if($(this).hasClass('mid')){  //두번째 메뉴 버튼을 클릭하면
           value= $('.slide_con:eq(1)').offset().top + -210; // top + 헤더 높이
        }else if($(this).hasClass('last')){
           value= $('.slide_con:eq(2)').offset().top + -210;
        }
        
        console.log(value)

      $("html,body").stop().animate({"scrollTop":value},1000);
    });

    


    $('.mini_menu li:eq(0)').find('a').addClass('spy');
      //첫번째 서브메뉴 활성화
      
      //$('.content_area div:eq(0)').addClass('boxMove');
      //첫번째 내용글 애니메이션 처리
      var smh= $('.title_area').offset().top+220 ;
      var h0= $('.content_area .slide_con:eq(0)').offset().top-800;
      var h1= $('.content_area .slide_con:eq(1)').offset().top-700;
      var h2= $('.content_area .slide_con:eq(2)').offset().top-700;
   
       //스크롤의 좌표가 변하면.. 스크롤 이벤트
      $(window).on('scroll',function(){
          var scroll = $(window).scrollTop();
          //스크롤top의 좌표를 담는다
         
          //$('.text').text(scroll);
          //스크롤 좌표의 값을 찍는다.
          
          //sticky menu 처리
          if(scroll>smh){ 
              $('.mini_menu').addClass('navon');
              //스크롤의 거리가 350px 이상이면 서브메뉴 고정
              $('header').hide();
          }else{
              $('.mini_menu').removeClass('navon');
              //스크롤의 거리가 350px 보다 작으면 서브메뉴 원래 상태로
              $('header').show();
          }
          
          
          
          $('.mini_menu').find('a').removeClass('spy');
          //모든 서브메뉴 비활성화~ 불꺼!!!
          
          
           //스크롤의 거리의 범위를 처리(스크롤스파이)
          if(scroll>=h0 && scroll<h1){
              $('.mini_menu li:eq(0)').find('a').addClass('spy');
              //첫번째 서브메뉴 활성화
              
              $('.content_area .slide_con:eq(0)').addClass('boxMove');
              //첫번째 내용 콘텐츠 애니메이
          }else if(scroll>=h1 && scroll<h2){
              $('.mini_menu li:eq(1)').find('a').addClass('spy');
              //두번째 서브메뉴 활성화
              
              $('.content_area .slide_con:eq(1)').addClass('boxMove');
          }else if(scroll>=h2){
              $('.mini_menu li:eq(2)').find('a').addClass('spy');
              //세번째 서브메뉴 활성화
              
               $('.content_area .slide_con:eq(2)').addClass('boxMove');
          }
          
      });


});