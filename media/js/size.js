
$(document).ready(function(){
        
    var screenSize = $(window).width(); //해당 디바이스의 해상도

   function screenW(){     
    if(screenSize>1024){
        //LOGO
        $('.mainlogo').attr('src','./images/mainlogo.png');

        // STORY
        $('.story_img').attr('src','./images/media_main(1600px)_11.jpg');

        //RACES
        $('.fix_img1').attr('src','./images/fix1.png');

        //JOBS
        $('.whbox1').attr('src','./images/jobjback1.png');
        $('.whbox2').attr('src','./images/jobjback2.png');
        // $('.bjob').html('<p class="jobs_stit stit1">BATTLE<br>JOB</p>');
        // $('.1job').html('<p class="jobs_stit stit2">LIFE<br>JOB</p>');

 

        //GALLEY
        $('.galley_img1').attr('src','./images/media_main(1600px)_57.jpg');
        $('.galley_img2').attr('src','./images/media_main(1600px)_59.jpg');
        $('.galley_img3').attr('src','./images/media_main(1600px)_62.jpg');
        $('.galley_img4').attr('src','./images/media_main(1600px)_67.jpg');
        $('.fix_img2').attr('src','./images/fix2.png');

        //CON
        $('.conimg1').attr('src','./images/media_main(1600px)_74.jpg');
        $('.conimg2').attr('src','./images/media_main(1600px)_76.jpg');
        $('.conimg3').attr('src','./images/media_main(1600px)_79.jpg');
        $('.conimg4').attr('src','./images/media_main(1600px)_83.jpg');
        $('.conimg5').attr('src','./images/media_main(1600px)_84.jpg');

    }else if(screenSize>768){ //일반테블릿
        //LOGO
        $('.mainlogo').attr('src','./images/mainlogo_1024px.png');

        // STORY
        $('.story_img').attr('src','./images/media_main(1024px)_06.jpg');

        //RACES
        $('.fix_img1').attr('src','./images/fix1_1024px.png');

        //JOBS
        $('.whbox1').attr('src','./images/jobjback1_1024px.png');
        $('.whbox2').attr('src','./images/jobjback2_1024px.png');

 

        //GALLEY
        $('.galley_img1').attr('src','./images/media_main(1024px)_09.jpg');
        $('.galley_img2').attr('src','./images/media_main(1024px)_11.jpg');
        $('.galley_img3').attr('src','./images/media_main(1024px)_15.jpg');
        $('.galley_img4').attr('src','./images/media_main(1024px)_17.jpg');
        $('.fix_img2').attr('src','./images/fix2_1024px.png');

        //CON
        $('.conimg1').attr('src','./images/media_main(1600px)_74.jpg');
        $('.conimg2').attr('src','./images/media_main(1600px)_76.jpg');
        $('.conimg3').attr('src','./images/media_main(1600px)_79.jpg');
        $('.conimg4').attr('src','./images/media_main(1600px)_83.jpg');
        $('.conimg5').attr('src','./images/media_main(1600px)_84.jpg');


    }else if(screenSize>640){ //소형테블릿
        //LOGO
        $('.mainlogo').attr('src','./images/mainlogo_768px.png');

        // STORY
        $('.story_img').attr('src','./images/media_main(768px)_06.jpg');

        //RACES
        $('.fix_img1').attr('src','./images/fix1_1024px.png');

        //JOBS
        $('.whbox1').attr('src','./images/jobjback1_768px.png');
        $('.whbox2').attr('src','./images/jobjback2_768px.png');



        //GALLEY
        $('.galley_img1').attr('src','./images/media_main(1024px)_09.jpg');
        $('.galley_img2').attr('src','./images/media_main(1024px)_11.jpg');
        $('.galley_img3').attr('src','./images/media_main(1024px)_15.jpg');
        $('.galley_img4').attr('src','./images/media_main(1024px)_17.jpg');
        $('.fix_img2').attr('src','./images/fix2_1024px.png');
        

        //CON
        $('.conimg1').attr('src','./images/media_main(1600px)_74.jpg');
        $('.conimg2').attr('src','./images/media_main(1600px)_76.jpg');
        $('.conimg3').attr('src','./images/media_main(1600px)_79.jpg');


    }else{ //모바일
        //LOGO
        $('.mainlogo').attr('src','./images/mainlogo_640px.png');

        // STORY
        $('.story_img').attr('src','./images/media_main(640px)_02.jpg');

        //RACES
        $('.fix_img1').attr('src','./images/fix1_1024px.png');

        //JOBS
        $('.whbox1').attr('src','./images/jobjback1_768px.png');
        $('.whbox2').attr('src','./images/jobjback2_768px.png');
     
        $('.stit1').text('BATTLE JOB');
        $('.stit2').text('LIFE JOB');


        //GALLEY
        $('.galley_img1').attr('src','./images/media_main(640px)_13.jpg');
        $('.galley_img2').attr('src','./images/media_main(640px)_16.jpg');
        $('.galley_img3').attr('src','./images/media_main(640px)_18.jpg');
        $('.fix_img2').attr('src','./images/fix2_1024px.png');

        //CON
        $('.conimg1').attr('src','./images/media_main(640px)_21.jpg');
        $('.conimg2').attr('src','./images/media_main(640px)_24.jpg');


       

    }
   }
    
   screenW();  //함수호출    
       
   $(window).resize(function(){ 
     screenSize = $(window).width(); 
       
     screenW();//함수호출
   });     

});