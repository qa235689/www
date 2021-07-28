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
    var h1= $('.content_area div:eq(1)').offset().top-450;
    var h2= $('.content_area div:eq(2)').offset().top-450;
 
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
        if(scroll>=0 && scroll<h1){
            $('.mini_menu li:eq(0)').find('a').addClass('spy');
            //첫번째 서브메뉴 활성화
            
            $('.content_area div:eq(0)').addClass('boxMove');
            //첫번째 내용 콘텐츠 애니메이
        }else if(scroll>=h1 && scroll<h2){
            $('.mini_menu li:eq(1)').find('a').addClass('spy');
            //두번째 서브메뉴 활성화
            
            $('.content_area div:eq(1)').addClass('boxMove');
        }else if(scroll>=h2){
            $('.mini_menu li:eq(2)').find('a').addClass('spy');
            //세번째 서브메뉴 활성화
            
             $('.content_area div:eq(2)').addClass('boxMove');
        }


    
        
    });
   
});


$(document).ready(function () {


    var xhr = new XMLHttpRequest();                 // XMLHttpRequest 객체를 생성한다.

    xhr.onload = function() {                       // When readystate changes
     
      //if(xhr.status === 200) {                      // If server status was ok
        responseObject = JSON.parse(xhr.responseText);  //서버로 부터 전달된 json 데이터를 responseText 속성을 통해 가져올 수 있다.
                                                         // parse() 메소드를 호출하여 자바스크립트 객체로 변환한다.
    
        var newContent = '';
        for (var i = 0; i < responseObject.events.length; i++) {  // 0 1 2
          newContent += '<div class="dialog log1" id="dialog'+ responseObject.events[i].number +'">';
          newContent += '<p class="dialog_p">' + responseObject.events[i].title + '</p>';
          newContent += '<p>' + responseObject.events[i].slogan + '</p>';
          newContent += '<img src="./images/content1/att_big' + responseObject.events[i].number + '.jpg" alt="">';
          newContent += '<p>' + responseObject.events[i].date1 + '<br>';
          newContent += responseObject.events[i].date2 + '<br>';
          newContent += responseObject.events[i].date3 + '</p>';
          newContent += '<p class="tip">놀이시설 이용 Tip</p>';
          newContent += '<p>' + responseObject.events[i].tip1 + '<br>';
          newContent += responseObject.events[i].tip2 + '<br>';
          newContent += responseObject.events[i].tip3 + '</p>';
          newContent += '</div>';
        }
    
     
        document.getElementById('dialogs1').innerHTML = newContent;
    
      //}
    };
    
    xhr.open('GET', 'data/data.json', true);        // 요청을 준비한다.
    xhr.send(null);                                 // 요청을 전송한다

});

$(document).ready(function () {


    var xhr = new XMLHttpRequest();                 // XMLHttpRequest 객체를 생성한다.

    xhr.onload = function() {                       // When readystate changes
     
      //if(xhr.status === 200) {                      // If server status was ok
        responseObject = JSON.parse(xhr.responseText);  //서버로 부터 전달된 json 데이터를 responseText 속성을 통해 가져올 수 있다.
                                                         // parse() 메소드를 호출하여 자바스크립트 객체로 변환한다.
    
        var newContent = '';
        for (var i = 0; i < responseObject.events.length; i++) {  // 0 1 2
          newContent += '<div class="dialog vr" id="dialog'+ responseObject.events[i].number +'">';
          newContent += '<p class="dialog_p">' + responseObject.events[i].title + '</p>';
          newContent += '<p>' + responseObject.events[i].slogan + '</p>';
          newContent += '<img src="./images/content1/att_big' + responseObject.events[i].number + '.jpg" alt="">';
          newContent += '<p>' + responseObject.events[i].date1 + '<br>';
          newContent += responseObject.events[i].date2 + '<br>';
          newContent += responseObject.events[i].date3 + '</p>';
          newContent += '</div>';
        }
    
     
        document.getElementById('dialogs2').innerHTML = newContent;
    
      //}
    };
    
    xhr.open('GET', 'data/data2.json', true);        // 요청을 준비한다.
    xhr.send(null);                                 // 요청을 전송한다

});

$(document).ready(function () {


    var xhr = new XMLHttpRequest();                 // XMLHttpRequest 객체를 생성한다.

    xhr.onload = function() {                       // When readystate changes
     
      //if(xhr.status === 200) {                      // If server status was ok
        responseObject = JSON.parse(xhr.responseText);  //서버로 부터 전달된 json 데이터를 responseText 속성을 통해 가져올 수 있다.
                                                         // parse() 메소드를 호출하여 자바스크립트 객체로 변환한다.
    
        var newContent = '';
        for (var i = 0; i < responseObject.events.length; i++) {  // 0 1 2
          newContent += '<div class="dialog cha" id="dialog'+ responseObject.events[i].number +'">';
          newContent += '<p class="dialog_p">' + responseObject.events[i].title + '</p>';
          newContent += '<p>' + responseObject.events[i].slogan + '</p>';
          newContent += '<img src="./images/content1/att_big' + responseObject.events[i].number + '.jpg" alt="">';
          newContent += '<p>' + responseObject.events[i].date1 + '<br>';
          newContent += responseObject.events[i].date2 + '<br>';
          newContent += responseObject.events[i].date3 + '</p>';
          newContent += '</div>';
        }
    
     
        document.getElementById('dialogs3').innerHTML = newContent;
    
      //}
    };
    
    xhr.open('GET', 'data/data3.json', true);        // 요청을 준비한다.
    xhr.send(null);                                 // 요청을 전송한다

});