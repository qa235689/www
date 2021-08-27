<? 
	session_start(); 

	@extract($_POST);
	@extract($_GET);
	@extract($_SESSION);
	
	include "../lib/dbconn.php";

	$sql = "select * from $table where num=$num";
	$result = mysql_query($sql, $connect);
    $row = mysql_fetch_array($result);       
      // 하나의 레코드 가져오기
	
	$item_num     = $row[num];
	$item_id      = $row[id];
	$item_name    = $row[name];
  	$item_nick    = $row[nick];
	$item_hit     = $row[hit];

	$image_name[0]   = $row[file_name_0];
	$image_name[1]   = $row[file_name_1];
	$image_name[2]   = $row[file_name_2];


	$image_copied[0] = $row[file_copied_0];
	$image_copied[1] = $row[file_copied_1];
	$image_copied[2] = $row[file_copied_2];

    $item_date    = $row[regist_day];
	$item_subject = str_replace(" ", "&nbsp;", $row[subject]);

	$item_content = $row[content];
	$is_html      = $row[is_html];

	if ($is_html!="y")
	{
		$item_content = str_replace(" ", "&nbsp;", $item_content);
		$item_content = str_replace("\n", "<br>", $item_content);
	}
	
	for ($i=0; $i<3; $i++)  //첨부된 이미지의 정보를 빼내는 반복문(너비/높이/타입)
	{
		if ($image_copied[$i]) //첨부된 이미지가 있냐?? 0 1 2   $image_copied[0]='2021_07_22_11_00_35_0.jpg'
		{ 
			$imageinfo = GetImageSize("./data/".$image_copied[$i]);
			        //해당 이미지의 정보(너비/높이/타입)
					//$imageinfo[0]=이미지의 너비
					//$imageinfo[1]=이미지의 높이
					//$imageinfo[2]=이미지의 타입(종류)
			$image_width[$i] = $imageinfo[0];
			$image_height[$i] = $imageinfo[1];
			$image_type[$i]  = $imageinfo[2];

			if ($image_width[$i] > 785)  // 게시판의 총 너비
				$image_width[$i] = 785;
		}
		else    //첨부된 이미지가 없냐??
		{
			$image_width[$i] = "";
			$image_height[$i] = "";
			$image_type[$i]  = "";
		}
	}

	$new_hit = $item_hit + 1;

	$sql = "update $table set hit=$new_hit where num=$num";   // 글 조회수 증가시킴
	mysql_query($sql, $connect);
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
    <link rel="stylesheet" href="./css/view.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.3/css/all.css" integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk" crossorigin="anonymous">

    <script src="../common/js/prefixfree.min.js"></script>

    
    <script>
    function check_input()  // 덧글의 필수입력 처리
	{
		if (!document.ripple_form.ripple_content.value)
		{
			alert("내용을 입력하세요!");    
			document.ripple_form.ripple_content.focus();
			return;
		}
		document.ripple_form.submit();
    }

    function del(href) 
    {
        if(confirm("한번 삭제한 자료는 복구할 방법이 없습니다.\n\n정말 삭제하시겠습니까?")) {
                document.location.href = href;
        }
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
             
                <ul class="view_title">
                    <li class="view_title1"><?= $item_subject ?></li>
                    <li class="view_title2"><?= $item_nick ?> | 조회 : <?= $item_hit ?>  | <?= $item_date ?> </li>	
                </ul>

                <div class="view_content">
                    <?
                        for ($i=0; $i<3; $i++)
                        {
                            if ($image_copied[$i])  //첨부된 이미지가 있으면
                            {
                                $img_name = $image_copied[$i];  //'2021_07_22_11_00_35_0.jpg'
                                $img_name = "./data/".$img_name;  // './data/2021_07_22_11_00_35_0.jpg'
                                $img_width = $image_width[$i];
                                
                                echo "<img src='$img_name' width='$img_width' alt=''>"."<br><br>";
                            }
                        }
                    ?>
                                <?= $item_content ?>
                </div>
                <div class="ripple">
                    <?
                    $sql = "select * from free_ripple where parent='$item_num'";
                    $ripple_result = mysql_query($sql);  //메인글의 덧글 검색  2개

                    while ($row_ripple = mysql_fetch_array($ripple_result))
                    {
                        $ripple_num     = $row_ripple[num];
                        $ripple_id      = $row_ripple[id];
                        $ripple_nick    = $row_ripple[nick];
                        $ripple_content = str_replace("\n", "<br>", $row_ripple[content]);
                        $ripple_content = str_replace(" ", "&nbsp;", $ripple_content);
                        $ripple_date    = $row_ripple[regist_day];
                    ?>
                    
                    <div class="textin">
                        <ul class="ripple_top">
                            <li class="ripple_nick"><?=$ripple_nick?></li>
                            <li><?=$ripple_date?></li>
                            <li> 
                            <? 
                            if($userid=="master" || $userid==$ripple_id)
                            echo "<a href='delete_ripple.php?table=$table&num=$item_num&ripple_num=$ripple_num'>[삭제]</a>"; 
                            ?>
                            </li>
                        </ul>
                        <div class="ripple_text"><?=$ripple_content?></div>
                        <div class="hor_line_ripple"></div>
                    </div>
                        <?
                            }
                        ?>			
                    <form  name="ripple_form" method="post" action="insert_ripple.php?table=<?=$table?>&num=<?=$item_num?>">  
                        <ul class="ripple_box">
                            <li>
                                <textarea rows="5" cols="65" name="ripple_content"></textarea>
                            </li>
                            <li><a href="#" onclick="check_input()">댓글쓰기</a></li>
                        </ul>
                    </form>
                </div> <!-- end of ripple -->
                
                <div class="view_button">
                    <div class="first"><a href="list.php?table=<?=$table?>&page=<?=$page?>">목록</a></div>
                    <ul>
                        
                    
                    <? 
                        if($userid)
                        {
                    ?>
                        <li><a href="write_form.php?table=<?=$table?>">글쓰기</a></li>
                    <?
                        }

                        if($userid==$item_id || $userid=="master" || $userlevel==1 )
                        {
                    ?>
                        <li class="modi"><a href="javascript:del('delete.php?table=<?=$table?>&num=<?=$num?>')">삭제</a></li>
                        <li class="del"><a href="write_form.php?table=<?=$table?>&mode=modify&num=<?=$num?>&page=<?=$page?>">수정</a></li>
                        
                    <?
                        }
                    ?>
                    </ul>
                </div>
            
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