<? 
	session_start(); 

	@extract($_POST);
	@extract($_GET);
	@extract($_SESSION);
?>
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>월미테마파크-공지사항</title>

    <link rel="stylesheet" href="../common/css/common.css">
    <link rel="stylesheet" href="./common/css/sub6common.css">
    <link rel="stylesheet" href="./css/write_form.css">

    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.3/css/all.css" integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk" crossorigin="anonymous">

    <script src="../common/js/prefixfree.min.js"></script>

    <!--[if IE 9]>  
          <script src="http://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.js"></script>
    <![endif]-->

    
</head>

<body>
    <div class="wrap">
        <!-- 서브헤더영역 -->
        <? include "../common/sub_head.html" ?>

        <div class="visual">
            <img src="./common/images/visual.jpg" alt="">
        </div>
        
        <div class="sub_menu">
            <h3>고객센터</h3>
            <div class="backbox"></div>
            <ul>
                <li class="current"><a href="list.php">공지사항</a></li>
                <li><a href="../sub6/sub6_2.html">FAQ</a></li>
            </ul>
        </div>

        <article id="content">
            <div class="title_area">
                <div class="line_map">
                    <span class="hidden">HOME</span><i class="fas fa-home"></i> &gt; 고객센터 &gt; <strong>공지사항</strong>
                </div>
                <h2>공지사항</h2>
            </div>
            
            <div class="content_area">

            <form  name="board_form" method="post" action="insert.php"> 
                <div class="write_form">
                    
                    <ul class="write_top">
                        <li>닉네임</li>
                        <li>::</li>
                        <li><?=$usernick?></li>
                        <li>
                            <label for="html_ok" class="hidden">HTML 쓰기 체크</label>
                            <input type="checkbox" name="html_ok" id="html_ok" value="y"> HTML 쓰기
                        </li>
                    </ul>
                    
                    <div class="write_tit">
                        <label for="subject" class="hidden">제목</label>
                        <input type="text" name="subject" id="subject" placeholder="제목을 입력하세요">
                    </div>
                    
                    
                    <div class="write_intext">
                        <textarea rows="15" cols="79" name="content">내용을 입력하세요</textarea>
                    </div>
                    
                </div>

                <ul class="write_button">
                    <li>
                        <label for="ok_btn" class="hidden">확인</label>
                        <input type="submit" name="ok_btn" id="ok_btn" value="확인">
                    </li>
                    <li>
                        <a href="list.php?page=<?=$page?>">목록</a>
                    </li>
                </ul>
		    </form>

             
            </div>
        </article>

        <!-- 서브푸터영역 -->
        <? include "../common/sub_foot.html" ?>
    </div>
    
          <!-- JQuery -->
          <script src="../common/js/jquery-1.12.4.min.js"></script>
          <script src="../common/js/jquery-migrate-1.4.1.min.js"></script>
          <script src="../common/js/fullnav.js"></script>
</body>
</html>