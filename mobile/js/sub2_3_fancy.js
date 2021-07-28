


$(document).ready(function () {
    var xhr = new XMLHttpRequest();                 // XMLHttpRequest 객체를 생성한다.

    xhr.onload = function() {                       // When readystate changes
     
      //if(xhr.status === 200) {                      // If server status was ok
        responseObject = JSON.parse(xhr.responseText);  //서버로 부터 전달된 json 데이터를 responseText 속성을 통해 가져올 수 있다.
                                                         // parse() 메소드를 호출하여 자바스크립트 객체로 변환한다.
    
        var newContent = '';
        for (var i = 0; i < responseObject.events.length; i++) {  // 0 1 2
          newContent += '<div class="dialog" id="dialog'+ responseObject.events[i].number +'">';
          newContent += '<dl>';
          newContent += '<dt>' + responseObject.events[i].title + '</dt>';
          newContent += '<dd>' + responseObject.events[i].slogan + '</dd>';
          newContent += '</dl>';
          newContent += '<ul>';
          newContent += '<li><span>기 간</span>'+ responseObject.events[i].data1 + '</li>';
          newContent += '<li><span>대 상</span>'+ responseObject.events[i].data2 + '</li>';
          newContent += '<li><span>'+ responseObject.events[i].intit +'</span>'+ responseObject.events[i].data3 + '</li>';
          newContent += '</ul>';
          newContent += '<p>'+ responseObject.events[i].data4 +'</p>';
          newContent += '</div>'
        }
    
        document.getElementById('dialogs').innerHTML = newContent;
    
      //}
    };
    
    xhr.open('GET', 'data/data.json', true);        // 요청을 준비한다.
    xhr.send(null);                                 // 요청을 전송한다
});


