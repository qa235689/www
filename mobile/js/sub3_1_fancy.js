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
          newContent += '<div class="danbox">'
          newContent += '<img src="./images/sub3_1_att' + responseObject.events[i].number + '.jpg" alt="">';
          newContent += '<p>' + responseObject.events[i].date1 + '</p>';
          newContent += '</div>';
          newContent += '</div>';
        }
    
     
        document.getElementById('dialogs').innerHTML = newContent;
    
      //}
    };
    
    xhr.open('GET', 'data/data2.json', true);        // 요청을 준비한다.
    xhr.send(null);                                 // 요청을 전송한다

});

// $(document).ready(function () {


//     var xhr = new XMLHttpRequest();                 // XMLHttpRequest 객체를 생성한다.

//     xhr.onload = function() {                       // When readystate changes
     
//       //if(xhr.status === 200) {                      // If server status was ok
//         responseObject = JSON.parse(xhr.responseText);  //서버로 부터 전달된 json 데이터를 responseText 속성을 통해 가져올 수 있다.
//                                                          // parse() 메소드를 호출하여 자바스크립트 객체로 변환한다.
    
//         var newContent = '';
//         for (var i = 0; i < responseObject.events.length; i++) {  // 0 1 2
//           newContent += '<div class="dialog vr" id="dialog'+ responseObject.events[i].number +'">';
//           newContent += '<p class="dialog_p">' + responseObject.events[i].title + '</p>';
//           newContent += '<p>' + responseObject.events[i].slogan + '</p>';
//           newContent += '<img src="./images/content1/att_big' + responseObject.events[i].number + '.jpg" alt="">';
//           newContent += '<p>' + responseObject.events[i].date1 + '<br>';
//           newContent += responseObject.events[i].date2 + '<br>';
//           newContent += responseObject.events[i].date3 + '</p>';
//           newContent += '</div>';
//         }
    
     
//         document.getElementById('dialogs2').innerHTML = newContent;
    
//       //}
//     };
    
//     xhr.open('GET', 'data/data2.json', true);        // 요청을 준비한다.
//     xhr.send(null);                                 // 요청을 전송한다

// });

// $(document).ready(function () {


//     var xhr = new XMLHttpRequest();                 // XMLHttpRequest 객체를 생성한다.

//     xhr.onload = function() {                       // When readystate changes
     
//       //if(xhr.status === 200) {                      // If server status was ok
//         responseObject = JSON.parse(xhr.responseText);  //서버로 부터 전달된 json 데이터를 responseText 속성을 통해 가져올 수 있다.
//                                                          // parse() 메소드를 호출하여 자바스크립트 객체로 변환한다.
    
//         var newContent = '';
//         for (var i = 0; i < responseObject.events.length; i++) {  // 0 1 2
//           newContent += '<div class="dialog cha" id="dialog'+ responseObject.events[i].number +'">';
//           newContent += '<p class="dialog_p">' + responseObject.events[i].title + '</p>';
//           newContent += '<p>' + responseObject.events[i].slogan + '</p>';
//           newContent += '<img src="./images/content1/att_big' + responseObject.events[i].number + '.jpg" alt="">';
//           newContent += '<p>' + responseObject.events[i].date1 + '<br>';
//           newContent += responseObject.events[i].date2 + '<br>';
//           newContent += responseObject.events[i].date3 + '</p>';
//           newContent += '</div>';
//         }
    
     
//         document.getElementById('dialogs3').innerHTML = newContent;
    
//       //}
//     };
    
//     xhr.open('GET', 'data/data2.json', true);        // 요청을 준비한다.
//     xhr.send(null);                                 // 요청을 전송한다

// });