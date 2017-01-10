<?php
    include("dbConnect.php");
    $id= $_POST['login_id'];
    $pwd= $_POST['login_pw'];
    echo "id: ".$id."이다";
    echo $pwd;

    $sql = "SELECT * FROM LoginInfo WHERE _id='$id'AND _pwd='$pwd';";
    $sql = mysqli_query($link,$sql);
    $sql = mysqli_num_rows($sql);
    if($sql){
        echo "성공";
    } else{
        echo "실패";
    }
?>