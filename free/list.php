<? 
	session_start(); 
	$table = "free";
	$ripple = "free_ripple";
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
    <link rel="stylesheet" href="./css/list.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.3/css/all.css" integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk" crossorigin="anonymous">

    <script src="../common/js/prefixfree.min.js"></script>

    <!--[if IE 9]>  
          <script src="http://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.js"></script>
    <![endif]-->

    <?
    @extract($_POST);
	@extract($_GET);
	@extract($_SESSION);

	include "../lib/dbconn.php";

	if (!$scale){
       $scale=10; 			// 한 화면에 표시되는 글 수
	}

    if ($mode=="search")
	{
		if(!$search)
		{
			echo("
				<script>
				 window.alert('검색할 단어를 입력해 주세요!');
			     history.go(-1);
				</script>
			");
			exit;
		}

		$sql = "select * from $table where $find like '%$search%' order by num desc";
	}
	else
	{
		$sql = "select * from $table order by num desc";
	}

	$result = mysql_query($sql, $connect);

	$total_record = mysql_num_rows($result); // 전체 글 수

	// 전체 페이지 수($total_page) 계산 
	if ($total_record % $scale == 0)     
		$total_page = floor($total_record/$scale);      
	else
		$total_page = floor($total_record/$scale) + 1; 
 
	if (!$page)                 // 페이지번호($page)가 0 일 때
		$page = 1;              // 페이지 번호를 1로 초기화
 
	// 표시할 페이지($page)에 따라 $start 계산  
	$start = ($page - 1) * $scale;      
	$number = $total_record - $start;
    ?>
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
             
                

                <form  name="board_form" method="post" action="list.php?table=<?=$table?>&mode=search"> 
                   <div class="list_search">
                        <ul>
                            <li>
                                <select name="find">
                                    <option value='subject'>제목</option>
                                    <option value='content'>내용</option>
                                    <option value='nick'>별명</option>
                                    <option value='name'>이름</option>
                                </select></li>
                            <li>
                                <label for="search" class="hidden">검색창</label>
                                <input type="text" name="search" id="search">
                            </li>
                            <li class="last">
                                <label for="submit" class="hidden">검색</label>
                                <input type="submit" name="submit" id="submit" value="검색">
                            </li>
                        </ul>
                        <p>▷ 총 <?= $total_record ?> 개의 게시물이 있습니다.  </p>
                   </div>
                </form>

                <div class="scale_count">
                    <select name="scale" onchange="location.href='list.php?scale='+this.value">
                                <option value=''>보기</option>
                                <option value='5'>5</option>
                                <option value='10'>10</option>
                                <option value='15'>15</option>
                                <option value='10'>20</option>
                    </select>
                </div>
            
                <div class="list_content">
                <?		
                for ($i=$start; $i<$start+$scale && $i < $total_record; $i++)                    
                {
                    mysql_data_seek($result, $i);     // 포인터 이동        
                    $row = mysql_fetch_array($result); // 하나의 레코드 가져오기	      
                    
                    $item_num     = $row[num];  //메인글의 번호
                    $item_id      = $row[id];
                    $item_name    = $row[name];
                    $item_nick    = $row[nick];
                    $item_hit     = $row[hit];
                    $item_date    = $row[regist_day];
                    $item_date = substr($item_date, 0, 10);  
                    $item_subject = str_replace(" ", "&nbsp;", $row[subject]);
                    
                    //해당 메인글의 덧글의 개수
                    $sql = "select * from $ripple where parent=$item_num";  //메인글의 해당 덧글을 검색
                    $result2 = mysql_query($sql, $connect);
                    $num_ripple = mysql_num_rows($result2);  //메인 글에대한 덧글의 개수

                    if(!$row[file_copied_0]){
                        $thum_img = './data/default.jpg'; 
                    }else{
                        $thum_img =$row[file_copied_0];  //첫번째 업로드된 이미지 파일  2021_07_22_11_00_35_0.jpg
                        $thum_img = './data/'.$thum_img;  //   ./data/2021_07_22_11_00_35_0.jpg
                    }

                ?>
                            <ul class="list_item">
                                <li class="list_num"><?= $number ?></li>
                                <li class="list_img">
                                    <a href="view.php?table=<?=$table?>&num=<?=$item_num?>&page=<?=$page?>">
                                    <img src="<?=$thum_img?>" alt="">
                                    </a>
                                </li>
                                <li class="list_tit">
                                <a href="view.php?table=<?=$table?>&num=<?=$item_num?>&page=<?=$page?>">
                                    <?= $item_subject ?>
                                
                                <?
                                if ($num_ripple){  // 해당글의 덧글이 있으면
                                        echo " <span>[$num_ripple]</span>";
                                }
                                ?>
                                </a>
                                </li>
                                <li class="list_text1"><?= $item_nick ?></li>
                                <li class="list_text2"><?= $item_date ?></li>
                                <li class="list_text3"><?= $item_hit ?></li>
                                
                            </ul>
                        <?
                            $number--;
                        }
                        ?>
                            <ul class="page_button">
                                <li class="page_num"> ◀ 이전 &nbsp;&nbsp;&nbsp;&nbsp; 
                        <?
                        // 게시판 목록 하단에 페이지 링크 번호 출력
                        for ($i=1; $i<=$total_page; $i++)
                        {
                                if ($page == $i)     // 현재 페이지 번호 링크 안함
                                {
                                    echo "<b> $i </b>";
                                }
                                else
                                { 
                                    echo "<a href='list.php?table=$table&page=$i&scale=$scale'> $i </a>";
                                }      
                        }
                        ?>			
                            &nbsp;&nbsp;&nbsp;&nbsp;다음 ▶
                                </li>
                                <li class="button">
                                        
                            <? 
                                if($userid)
                                {
                            ?>
                                        <a href="write_form.php?table=<?=$table?>">글쓰기</a>
                            <?
                                }
                            ?>
                                        <a href="list.php?table=<?=$table?>&page=<?=$page?>">목록</a>
                                </li>
                        </ul> <!-- end of page_button -->		
                </div> <!-- end of list content -->




            
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