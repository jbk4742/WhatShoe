<?php
    $link = mysqli_connect("localhost","byeongkwan","sjdprp1904!","byeongkwan");
    mysqli_query($link,"set names utf8");
     if($link){
        echo "성공";
        }else{
                 echo "실패";
                 echo "실패";
             }

?>