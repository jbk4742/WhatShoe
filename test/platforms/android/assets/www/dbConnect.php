<?php
    $link = mysqli_connect("localhost","byeongkwan","sjdprp1904!","byeongkwan");
    @mysqli_query("set names utf8");
     if($link){
        echo "성공";
        }else{
                 echo "실패";
                 echo "실패";
             }
        $email= $_POST['email'];
        $name= $_POST['name'];
        $id= $_POST['id'];
        $pwd= $_POST['pwd'];
        $phone= $_POST['phone'];
        $addr= $_POST['addr'];

        $sql = "INSERT INTO LoginInfo (_id,_name,_pwd,_addr,_mail,_phone) VALUES ('$id','$name','$pwd','$addr','$email','$phone');";


        if(mysqli_query($link,$sql) ){
         echo '성공';
         mysqli_close($link);
        }else{
         echo  mysqli_error($link);
        }

?>