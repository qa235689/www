<? 
	session_start();
    
      @extract($_POST);
      @extract($_GET);
      @extract($_SESSION);
?>

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>회원가입</title>
    <link rel="apple-touch-icon-precomposed" href="app_icon.png">
    <link rel="apple-touch-startup-image" href="startup.png">
    <link rel="stylesheet" href="../css/common.css">    
	<link rel="stylesheet" href="css/member_form.css">
	
	
	<script src="../js/jquery-1.12.4.min.js"></script>
    <script src="../js/jquery-migrate-1.4.1.min.js"></script>
	
	<script>
	 $(document).ready(function() {
  
   
 
 //id 중복검사
 $("#id").keyup(function() {    // id입력 상자에 id값 입력시
    var id = $('#id').val(); //a

    $.ajax({
        type: "POST",
        url: "check_id.php",
        data: "id="+ id,  
        cache: false, 
        success: function(data)
        {
            //data => echo "<span style='color:green'>사용가능한 아이디입니다.</span>";
             $("#loadtext").html(data);
        }
    });
});
		 
//nick 중복검사		 
$("#nick").keyup(function() {    // nick입력 상자에 nick값 입력시
    var nick = $('#nick').val();

    $.ajax({
        type: "POST",
        url: "check_nick.php",
        data: "nick="+ nick,  
        cache: false, 
        success: function(data)
        {
             $("#loadtext2").html(data);
        }
    });
});		 


});
	
	
	
	</script>
	<script>
   

  
   function check_input()
   {
      if (!document.member_form.id.value)
      {
          alert("아이디를 입력하세요");    
          document.member_form.id.focus();
          return;
      }

      if (!document.member_form.pass.value)
      {
          alert("비밀번호를 입력하세요");    
          document.member_form.pass.focus();
          return;
      }

      if (!document.member_form.pass_confirm.value)
      {
          alert("비밀번호확인을 입력하세요");    
          document.member_form.pass_confirm.focus();
          return;
      }

      if (!document.member_form.name.value)
      {
          alert("이름을 입력하세요");    
          document.member_form.name.focus();
          return;
      }

      if (!document.member_form.nick.value)
      {
          alert("닉네임을 입력하세요");    
          document.member_form.nick.focus();
          return;
      }


      if (!document.member_form.hp2.value || !document.member_form.hp3.value )
      {
          alert("휴대폰 번호를 입력하세요");    
          document.member_form.nick.focus();
          return;
      }

      if (document.member_form.pass.value != 
            document.member_form.pass_confirm.value)
      {
          alert("비밀번호가 일치하지 않습니다.\n다시 입력해주세요.");    
          document.member_form.pass.focus();
          document.member_form.pass.select();
          return;
      }

      document.member_form.submit(); 
		   // insert.php 로 변수 전송
   }

   function reset_form()
   {
      document.member_form.id.value = "";
      document.member_form.pass.value = "";
      document.member_form.pass_confirm.value = "";
      document.member_form.name.value = "";
      document.member_form.nick.value = "";
      document.member_form.hp1.value = "010";
      document.member_form.hp2.value = "";
      document.member_form.hp3.value = "";
      document.member_form.email1.value = "";
      document.member_form.email2.value = "";
	  
      document.member_form.id.focus();

      return;
   }
</script>
</head>
<body>

    <header>
        <h1><a class="logo" href="../index.html">WOLMI THEME PARK</a></h1>
        <h2>회원가입</h2>
    </header>

	<article id="content">  

	  <div class="conline">
          
          <form  name="member_form" method="post" action="insert.php"> 
          
            
            <ul class="list_wrap">
                <li class="form_row">
                    <ul>
                        <li class="tit">
                            <label for="id">아이디</label>
                        </li>
                        <li>
                            <input type="text" name="id" id="id" required><br>
                             <span id="loadtext"></span>
                        </li>
                    </ul>
                </li>
                <li class="form_row pw">
                    <ul>
                        <li class="tit">
                            <label for="pass">비밀번호</label>
                        </li>
                        <li>
                            <input type="password" name="pass" id="pass" required>
                        </li>
                    </ul>
                </li>
                <li class="form_row pw_check">
                    <ul>
                        <li class="tit">
                            <label for="pass_confirm">비밀번호 확인</label>
                        </li>
                        <li>
                            <input type="password" name="pass_confirm" id="pass_confirm"  required>
                        </li>
                    </ul>
                </li>
                <li class="form_row">
                    <ul>
                        <li class="tit">
                            <label for="name">이름</label>
                        </li>
                        <li>
                            <input type="text" name="name" id="name"  required>
                        </li>
                    </ul>
                </li>
                <li class="form_row">
                    <ul>
                        <li class="tit">
                            <label for="nick">닉네임</label>
                        </li>
                        <li>
                             <input type="text" name="nick" id="nick"  required><br>
                         <span id="loadtext2"></span>

                        </li>
                    </ul>
                </li>
            </ul>
            <ul class="form_row tel push_15_t">
                    <li class="tit">
                        <span>휴대폰 번호</span>
                    </li>
                    <li class="in_li">
                       <ul>
                            <li class="h1">
                                <label class="hidden" for="hp1">전화번호앞3자리</label>
                                <select class="hp" name="hp1" id="hp1"> 
                                    <option value='010'>010</option>
                                    <option value='011'>011</option>
                                    <option value='016'>016</option>
                                    <option value='017'>017</option>
                                    <option value='018'>018</option>
                                    <option value='019'>019</option>
                                </select> 
                            </li>
                            <li class="h2">
                                <label class="hidden" for="hp2">전화번호중간4자리</label><input type="text" class="hp" name="hp2" id="hp2"  required>
                            </li>
                            <li class="h3">
                                <label class="hidden" for="hp3">전화번호끝4자리</label><input type="text" class="hp" name="hp3" id="hp3"  required>
                            </li>
                       </ul>
                    </li>
            </ul>
            <ul class="form_row email push_15_t">
                
                <li class="tit">
                    <span>이메일</span>
                </li>
                <li class="in_li">
                    <label class="hidden" for="email1">이메일아이디</label>
                    <input type="text" id="email1" name="email1"  required><span>@</span>
                    <label class="hidden" for="email2">이메일주소</label>
                    <input type="text" name="email2" id="email2"  required>
                </li>
            </ul>
            <ul class="button">
                <li class="join_btn"><a href="#" onclick="check_input()">회원가입</a></li>
                <li class="cancel_btn"><a href="#" onclick="reset_form()">취소</a></li>
            </ul>
        </form>
          
      </div>
	</article>

</body>
</html>


