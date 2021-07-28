<? 
	session_start(); 

	@extract($_POST);
	@extract($_GET);
	@extract($_SESSION);
	
	include "../lib/dbconn.php";

	if ($mode=="modify")  //수정 글쓰기면....
	{
		$sql = "select * from $table where num=$num";
		$result = mysql_query($sql, $connect);

		$row = mysql_fetch_array($result);       
	
		$item_subject     = $row[subject];
		$item_content     = $row[content];

		$item_file_0 = $row[file_name_0];
		$item_file_1 = $row[file_name_1];
		$item_file_2 = $row[file_name_2];

		$copied_file_0 = $row[file_copied_0];
		$copied_file_1 = $row[file_copied_1];
		$copied_file_2 = $row[file_copied_2];
	}
?>
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>월미테마파크-당첨자발표</title>

    <link rel="stylesheet" href="../common/css/common.css">
    <link rel="stylesheet" href="./common/css/sub5common.css">
    <link rel="stylesheet" href="./css/write_form.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.3/css/all.css" integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk" crossorigin="anonymous">

    <script src="../common/js/prefixfree.min.js"></script>

    <script>
        function check_input()
        {
            if (!document.board_form.subject.value)
            {
                alert("제목을 입력하세요!");    
                document.board_form.subject.focus();
                return;
            }

            if (!document.board_form.content.value)
            {
                alert("내용을 입력하세요!");    
                document.board_form.content.focus();
                return;
            }
            document.board_form.submit();
        }
    </script>

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
            <h3>이벤트</h3>
            <div class="backbox"></div>
            <ul>
                <li><a href="../concert/list.php">이벤트안내</a></li>
                <li class="current"><a href="list.php">당첨자발표</a></li>
            </ul>
        </div>

        <article id="content">
            <div class="title_area">
                <div class="line_map">
                    <span class="hidden">HOME</span><i class="fas fa-home"></i> &gt; 이벤트 &gt; <strong>당첨자발표</strong>
                </div>
                <h2>당첨자발표</h2>
            </div>
            <div class="content_area">
             
            
                <?
                if($mode=="modify")
                {

                ?>
                    <form  name="board_form" method="post" action="insert.php?mode=modify&num=<?=$num?>&page=<?=$page?>&table=<?=$table?>" enctype="multipart/form-data"> 
                <?
                    }
                    else
                    {
                ?>
                    <form  name="board_form" method="post" action="insert.php?table=<?=$table?>" enctype="multipart/form-data"> 
                <?
                    }
                ?>
                    <div class="write_form">
                        
                        <ul class="write_top">
                            <li>닉네임</li>
                            <li>::</li>
                            <li><?=$usernick?></li>
                        <?
                            if( $userid && ($mode != "modify") )
                            {
                        ?>
                            <li>
                                <label for="html_ok" class="hidden">HTML 쓰기 체크</label>
                                <input type="checkbox" name="html_ok" id="html_ok" value="y"> HTML 쓰기
                            </li>
                        <?
                            }
                        ?>						
                        </ul>

                        <?
                        if ($item_subject){
                        ?>
                            <div class="write_tit">
                                <label for="subject" class="hidden">제목</label>
                                <input type="text" name="subject" id="subject" value="<?=$item_subject?>" >
                            </div>
                        <?
                        }else{
                        ?>
                            <div class="write_tit">
                                <label for="subject" class="hidden">제목</label>
                                <input type="text" name="subject" id="subject" placeholder="제목을 입력하세요">
                            </div>
                        <?
                        }
                        ?>

                        <?
                        if ($item_content){
                        ?>
                            <div class="write_intext">                           
                                <textarea rows="15" cols="79" name="content"><?=$item_content?></textarea>
                            </div>
                        <?
                        }else{
                        ?>
                            <div class="write_intext">
                                <textarea rows="15" cols="79" name="content">내용을 입력하세요</textarea>
                            </div>   
                        <?
                        }
                        ?>
                        <div class="write_imgbox">
                            <ul class="write_img1">
                                <li class="first">이미지 파일 1 <i class="far fa-folder-open"></i></li>
                                <li>
                                <label for="upfile1" class="hidden">이미지파일 업로드</label>
                                <input type="file" name="upfile[]" id="upfile1">
                                </li>
                            </ul>
                            
                            <? 	
                            if ($mode=="modify" && $item_file_0)
                            {
                            ?>
                                <div class="delete_ok"><?=$item_file_0?> 파일이 등록되어 있습니다. 
                                <label for="del_file1" class="hidden">삭제</label>
                                <input type="checkbox" name="del_file[]" id="del_file1" value="0"> 삭제</div>
                            
                            <?
                            }
                            ?>
                                
                                <ul class="write_img2">
                                    <li class="first">이미지 파일 2 <i class="far fa-folder-open"></i></li>
                                    <li>
                                        <label for="upfile2" class="hidden">이미지파일 업로드</label>
                                        <input type="file" name="upfile[]" id="upfile2">
                                    </li>
                                </ul>
                            <? 	
                            if ($mode=="modify" && $item_file_1)
                            {
                            ?>
                                <div class="delete_ok"><?=$item_file_1?> 파일이 등록되어 있습니다. 
                                <label for="del_file2" class="hidden">삭제</label>
                                <input type="checkbox" name="del_file[]" id="del_file2" value="1"> 삭제</div>
                                
                            <?
                            }
                            ?>
                            
                            <ul class="write_img3">
                                <li class="first">이미지 파일 3 <i class="far fa-folder-open"></i></li>
                                <li>
                                    <label for="upfile3" class="hidden">이미지파일 업로드</label>
                                    <input type="file" name="upfile[]" id="upfile3">
                                </li>
                            </ul>
                            <? 	
                            if ($mode=="modify" && $item_file_2)
                            {
                            ?>
                            <div class="delete_ok"><?=$item_file_2?> 파일이 등록되어 있습니다. 
                            <label for="del_file3" class="hidden">삭제</label>
                            <input type="checkbox" name="del_file[]" id="del_file3" value="2"> 삭제</div>
                            
                            <?
                            }
                            ?>
                        </div>
                        

                        
                    </div>

                    <ul class="write_button">
                        <li><a href="#" onclick="check_input()">확인</a></li>
                        <li><a href="list.php?table=<?=$table?>&page=<?=$page?>">목록</a></li>
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