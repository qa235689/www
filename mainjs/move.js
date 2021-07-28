

$(document).ready(function() {
    var timeonoff; //자동기능 구현
    var imageCount=3;  //이미지 개수 *** 
    var cnt=1;  //이미지 순서 1 2 3 4 5 4 3 2 1 2 3 4 5 ...
    var direct=1;  //1씩 증가(+1)/감소(-1)
    var position=0; //겔러리 무비의 left값 0 -1000 -2000 -3000 -4000
    var onoff=true; // true=>타이머 동작중 , false=>동작하지 않을때
      
       $('.btn1').css('background','#00c0ff'); //첫번째 불켜
      $('.btn1').css('width','30');
      
      $('.gallery_text li:eq(0)').fadeIn('slow');  
  
   function moveg(){
        cnt+=direct;  //카운트가 1 2 3 4 5 4 3 2 1 2 3 4 5 ......
           //각각의 카운트에 대한 left 좌표값을 처리
          if(cnt==1){
             position=0;  
          }else if(cnt==2){
             position=-2000;
          }else if(cnt==3){
             position=-4000;
          }
       
          $('.gallery_text li').hide(); //모든 텍스트를 안보이게...
          $('.gallery_text li:eq('+ (cnt-1) +')').fadeIn('slow'); //해당 텍스트만 보여라
                                                  
         for(var i=1;i<=imageCount;i++){
            $('.btn'+i).css('background','#fff'); //버튼불다꺼!!
           $('.btn'+i).css('width','16'); 
        }
        $('.btn'+cnt).css('background','#00c0ff');//자신만 불켜
        $('.btn'+cnt).css('width','30');   
                             
          $('.gallery').animate({left:position}, 'slow'); //겔러리 무비의 left값을 움직여라~
          if(cnt==imageCount)direct=-1;
          if(cnt==1)direct=1;
   }
  
    timeonoff= setInterval( moveg , 4000); //4초마다 자동기능 
  
    $('.mbutton').click(function(event){  //각각의 버튼을 클릭한다면...
  
      var $target=$(event.target); //$target == this =>실제 클릭한 버튼
      clearInterval(timeonoff);   //타이머를 중지!!
  
      for(var i=1;i<=imageCount;i++){
                $('.btn'+i).css('background','#fff'); //버튼 모두불꺼
                $('.btn'+i).css('width','16');
      }
  
      if($target.is('.btn1')){  //첫번째 버튼을 클릭했다면...
             $('.gallery').animate({left:0}, 'slow');
                  cnt=1;
                  direct=1;
      }else if($target.is('.btn2')){ //두번째 버튼을 클릭했다면...
             $('.gallery').animate({left:-2000}, 'slow');
                  cnt=2;
      }else if($target.is('.btn3')){ //세번째 버튼을 클릭했다면...
             $('.gallery').animate({left:-4000}, 'slow');
                  cnt=3;
                  direct=-1;
      }
        
      $('.gallery_text li').hide();
      $('.gallery_text li:eq('+ (cnt-1) +')').fadeIn('slow');  
        
        
      $('.btn'+cnt).css('background','#fff');//자신 버튼만 불켜 
      $('.btn'+cnt).css('width','30');
        
      timeonoff= setInterval( moveg , 4000);  //타이머의 재 동작
        
      if(onoff==false){
             onoff=true;
             $('.ps').css('background','url(images/stop.png)');
       }  
    });
   
       //stop/play 버튼 클릭시 타이머 동작/중지
    $('.ps').click(function(){ 
         if(onoff==true){
             clearInterval(timeonoff);   // stop버튼 클릭시
             $(this).css('background','url(images/play.png)');
             onoff=false;   
         }else{
            timeonoff= setInterval( moveg , 4000); //play버튼 클릭시
             $(this).css('background','url(images/stop.png)');
             onoff=true; 
         }
    });	
  
  
    $('.main .btn').click(function(){
  
     clearInterval(timeonoff); 
  
     if($(this).is('.btnRight')){
         if(cnt==imageCount)cnt=0;  //카운트가 마지막 번호(5)라면 초기화 0
         if(cnt==imageCount+1)cnt=1;  
         cnt++; //카운트 1씩증가
     }else if($(this).is('.btnLeft')){
         if(cnt==1)cnt=imageCount+1;
         if(cnt==0)cnt=imageCount;
         cnt--; //카운트 감소
     }
     //console.log(cnt);
     $('.gallery').animate({left:(cnt-1)*-2000}, 'slow');  // 1->0 2->-1000 3->-2000 4->-3000 5->-4000
                          
     for(var i=1;i<=imageCount;i++){
          $('.btn'+i).css('background','#fff'); //버튼 모두불꺼
           $('.btn'+i).css('width','16');
     }
      $('.btn'+cnt).css('background','#fff');//자신 버튼만 불켜 
      $('.btn'+cnt).css('width','30');  
  
     if($(this).is('.btnRight')){
        if(cnt==imageCount){cnt=0;direct=1;}
     }else if($(this).is('.btnLeft')){
        if(cnt==1){cnt=imageCount+1;direct=-1;}
     }
     
     timeonoff= setInterval( moveg , 4000);
  
     if(onoff==false){
        onoff=true;
        $('.ps').css('background','url(images/stop.png)');
     }
     });

  });
  
//혜택 탭---------------------------
$(document).ready(function() {


var cnt=4; //탭메뉴 개수 ***
$('.con_discount .dis_leftbox:eq(0)').show(); // 첫번째 탭 내용만 열어라
$('.con_discount .tab1').css('background','#fffcd7').css('color','#e1cd43'); //첫번째 탭메뉴 활성화
                 
  
$('.con_discount .tab').click(function(e){
  e.preventDefault(); // <a> hraf="#" 값을 강제로 막는다    
           
  var ind = $(this).index('.dis_rightbox .tab'); // 클릭시 해당 index를 뽑아준다
     
  $(".dis_disbox .dis_leftbox").hide(); // 모든 탭내용을 안보이게...
  $(".dis_disbox .dis_leftbox:eq("+ind+")").fadeIn('fast'); //클릭한 해당 탭내용만 보여라
  $('.tab').css('background','none').css('color','#fff'); //모든 탭메뉴를 비활성화
  $(this).css('background','#ebbaff').css('color','#a434d2');  //클릭한 해당 탭메뉴만 활성화



  $(".dis_disbox .dis_leftbox:eq(0)").css('background','#fffcd7')
  $(".dis_disbox .dis_leftbox:eq(1)").css('background','#ebbaff')
  $(".dis_disbox .dis_leftbox:eq(2)").css('background','#a4c9eb')
  $(".dis_disbox .dis_leftbox:eq(3)").css('background','#f7a5a5')

   if($(this).is('.tab1')){
      $('.tab1').css('background','#fffcd7').css('color','#e1cd43')
   }else if($(this).is('.tab2')){
      $('.tab2').css('background','#ebbaff').css('color','#a434d2')
   }else if($(this).is('.tab3')){
      $('.tab3').css('background','#a4c9eb').css('color','#3f709d')
   }else if($(this).is('.tab4')){
      $('.tab4').css('background','#f7a5a5').css('color','#d22d2d')
   }

});

});

$(document).ready(function() {
    //$('article .con:eq(0)').addClass('boxMove');
    //첫번째 내용글 애니메이션 처리
    
    var h1= $('.con:eq(1)').offset().top-900;
    var h2= $('.con:eq(2)').offset().top-900;
    var h3= $('.con:eq(3)').offset().top-900;
 
     //스크롤의 좌표가 변하면.. 스크롤 이벤트
    $(window).on('scroll',function(){
      var scroll = $(window).scrollTop();
     //$('.text').text(scroll);
        //스크롤 좌표의 값을 찍는다.
      

         //스크롤의 거리의 범위를 처리(스크롤스파이)
        if(scroll>=0 && scroll<h1){
            $('.con:eq(0)').addClass('boxmove');
            //첫번째 내용 콘텐츠 애니메이
        }else if(scroll>=h1 && scroll<h2){
            $('.con:eq(1)').addClass('boxmove');
        }else if(scroll>=h2 && scroll<h3){
            $('.con:eq(2)').addClass('boxmove');
        }else if(scroll>=h3){
            $('.con:eq(3)').addClass('boxmove');
      }


    
        
    });
});
