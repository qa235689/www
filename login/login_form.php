<? session_start(); ?>
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>로그인</title>
    <link rel="stylesheet" href="../common/css/common.css">
    <link rel="stylesheet" href="css/login.css">

    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.3/css/all.css" integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk" crossorigin="anonymous">
</head>
<body>
    <div class="wrap">
        <h1><a href="../index.html" class="logo">월미테마파크 </a></h1>
        <form  name="member_form" method="post" action="login.php"> 
        <h2>로그인</h2>
        
            <div id="id_pw_input">
                <ul>
                    <label class="hidden" for="id">아이디</label>
                    <li><input type="text" name="id" class="login_input" placeholder="아이디를 입력해주세요"></li>
        
                    <label class="hidden" for="pass">비밀번호</label> 
                    <li><input type="password" name="pass" class="login_input" placeholder="비밀번호를 입력해주세요"></li>
                </ul>						
            </div>
            
            <ul class="findbox">
                <li><i class="fas fa-lock"></i> 보안접속</li>
                <li>
                    <span><a href="id_find.php">아이디 찾기</a></span>
                    <span><a href="pw_find.php">비밀번호 찾기</a></span>
                </li>
            </ul>

            <div id="login_button">
                <button type="submit">로그인</button>
            </div>
            <div id="join_button">
                <a href="../member/member_check.html">회원가입</a>
                <a href="../index.html">취 소</a>
            </div>
        
        </form>
    </div>

</body>
</html>