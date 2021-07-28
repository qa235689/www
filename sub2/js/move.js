

$(document).ready(function() {
    var position=0;  //최초위치 목적지 left값
    var movesize=370; //이미지 하나의 너비
    var timeonoff;

    function lrslide() {
        position-=movesize;  // 150씩 감소
        $('.slide_gallery').stop().animate({left:position}, 'fast',
             function(){							
            if(position==-1850){
               $('.slide_gallery').css('left',0);
               position=0;
            }
     });
     }

    timeonoff= setInterval(lrslide, 3000);


    
      $('.slide_gallery ul').after($('.slide_gallery ul').clone());
        //슬라이드 겔러리를 한번 복제
 
    $('.button').click(function(event){
     var $target=$(event.target);
     clearInterval(timeonoff);
     
     if($target.is('.m1')){   //왼쪽버튼 클릭했냐??
          
          if(position==-1850){
              $('.slide_gallery').css('left',0);
               position=0;
           }
           
         
          position-=movesize;  // 150씩 감소
              $('.slide_gallery').stop().animate({left:position}, 'fast',
             function(){							
             if(position==-1850){
                $('.slide_gallery').css('left',0);
                position=0;
             }
           });
           
     }else if($target.is('.m2')){  // 오른쪽 버튼 클릭했냐??
      
           if(position==0){
                $('.slide_gallery').css('left',-1850);
                position=-1850;
            }
     
            position+=movesize; // 150씩 증가
            $('.slide_gallery').stop().animate({left:position}, 'fast',
             function(){							
             if(position==0){
                $('.slide_gallery').css('left',-1850);
                position=-1850;
             }
            });
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
          newContent += '<div>'
          newContent += '<img src="' + responseObject.events[i].payimg + '" alt="">';
          newContent += '<ul>'
          newContent += '<li><span>기 간</span>'+ responseObject.events[i].data1 + '</li>'
          newContent += '<li><span>대 상</span>'+ responseObject.events[i].data2 + '</li>'
          newContent += '<li><span>'+ responseObject.events[i].intit +'</span>'+ responseObject.events[i].data3 + '</li>'
          newContent += '<li class="last">'+ responseObject.events[i].data4 + '</li>'
          newContent += '</ul>'
          newContent += '</div>'
          newContent += '<p class="t_tit">1일권</p>';
          newContent += '<table>';
          newContent += '<thead>';
          newContent += '<tr>';
          newContent += '<th scope="col">구분</th>';
          newContent += '<th scope="col">정상가</th>';
          newContent += '<th scope="col">우대가 (평일)</th>';
          newContent += '<th scope="col">우대가 (주말 및 공휴일)</th>';
          newContent += '</tr>';
          newContent += '</thead>';
          newContent += '<tbody>';
          newContent += '<tr>';
          newContent += '<td>어른</td>';
          newContent += '<td>'+ responseObject.events[i].daypay_ad1 +'</td>';
          newContent += '<td>'+ responseObject.events[i].daypay_ad2 +'</td>';
          newContent += '<td>'+ responseObject.events[i].daypay_ad3 +'</td>';
          newContent += '</tr>';
          newContent += '<tr>';
          newContent += '<td>청소년</td>';
          newContent += '<td>'+ responseObject.events[i].daypay_st1 +'</td>';
          newContent += '<td>'+ responseObject.events[i].daypay_st2 +'</td>';
          newContent += '<td>'+ responseObject.events[i].daypay_st3 +'</td>';
          newContent += '</tr>';
          newContent += '<td>어린이</td>';
          newContent += '<td>'+ responseObject.events[i].daypay_ch1 +'</td>';
          newContent += '<td>'+ responseObject.events[i].daypay_ch2 +'</td>';
          newContent += '<td>'+ responseObject.events[i].daypay_ch3 +'</td>';
          newContent += '</tr>';
          newContent += '</tbody>';
          newContent += '</table>';
          newContent += '<p class="t_tit">야간권(16:00)</p>';
          newContent += '<table>';
          newContent += '<thead>';
          newContent += '<tr>';
          newContent += '<th scope="col">구분</th>';
          newContent += '<th scope="col">정상가</th>';
          newContent += '<th scope="col">우대가 (평일)</th>';
          newContent += '<th scope="col">우대가 (주말 및 공휴일)</th>';
          newContent += '</tr>';
          newContent += '</thead>';
          newContent += '<tbody>';
          newContent += '<tr>';
          newContent += '<td>어른</td>';
          newContent += '<td>'+ responseObject.events[i].nigpay_ad1 +'</td>';
          newContent += '<td>'+ responseObject.events[i].nigpay_ad2 +'</td>';
          newContent += '<td>'+ responseObject.events[i].nigpay_ad3 +'</td>';
          newContent += '</tr>';
          newContent += '<tr>';
          newContent += '<td>청소년</td>';
          newContent += '<td>'+ responseObject.events[i].nigpay_st1 +'</td>';
          newContent += '<td>'+ responseObject.events[i].nigpay_st2 +'</td>';
          newContent += '<td>'+ responseObject.events[i].nigpay_st3 +'</td>';
          newContent += '</tr>';
          newContent += '<td>어린이</td>';
          newContent += '<td>'+ responseObject.events[i].nigpay_ch1 +'</td>';
          newContent += '<td>'+ responseObject.events[i].nigpay_ch2 +'</td>';
          newContent += '<td>'+ responseObject.events[i].nigpay_ch3 +'</td>';
          newContent += '</tr>';
          newContent += '</tbody>';
          newContent += '</table>';
          newContent += '<dl>';
          newContent += '<dt>꼭 알아두세요</dt>';
          newContent += '<dd>◎ 티켓 구매 당일에 한하여 이용 가능합니다.</dd>';
          newContent += '<dd>◎ 기타우대 및 카드 할인과 중복 적용되지 않습니다.</dd>';
          newContent += '<dd>◎ 단체 행사, 베이비권, 외국인은 적용되지 않습니다.</dd>';
          newContent += '<dd>◎ (단, 유효기간 내 외국인등록증 소지시 이용 가능합니다.)</dd>';
          newContent += '<dd>◎ 기타 이용관련 문의 : 롯데월드 고객센터 1661-2000</dd>';
          newContent += '</dl>';
          newContent += '</div>';
        }
    
        document.getElementById('dialogs').innerHTML = newContent;
    
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

      for (var i = 0; i < responseObject.card.length; i++) {  // 0 1 2
        newContent += '<div class="cardlog log1" id="dialog'+ responseObject.card[i].number +'">';
        newContent += '<img src="'+ responseObject.card[i].cardimg + '" alt="">';
        newContent += '<div>';
        newContent += '<p>'+ responseObject.card[i].title +'</p>';
        newContent += '<ul>';
        newContent += '<li>-종합이용권 50% 우대 카드</li>';
        newContent += '<li><strong>홈페이지</strong><a href="' + responseObject.card[i].home + '">'+ responseObject.card[i].home +'</a></li>';
        newContent += '<li><strong>전화번호</strong>'+ responseObject.card[i].hp +'</li>';
        newContent += '</ul>';
        newContent += '</div>';
        newContent += '</div>';
      }

      document.getElementById('dialogs2').innerHTML = newContent;
    
      //}
    };
    
    xhr.open('GET', 'data/data.json', true);        // 요청을 준비한다.
    xhr.send(null);                                 // 요청을 전송한다
});