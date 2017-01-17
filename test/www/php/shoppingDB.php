<?php
        include("dbConnect.php");
            $a= $_POST['a'];
            $b= $_POST['b'];
            $c= $_POST['c'];
            $d= $_POST['d'];

            $sql = "INSERT INTO ShoppingTest (a,b,c,d) VALUES ('$a','$b','$c','$d');";

            if(mysqli_query($link,$sql)){
                echo "성공";
            } else{
                echo "실패";
            }
?>