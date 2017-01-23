<?php
        include("dbConnect.php");
        $id= $_POST['admin_id'];
        $product= $_POST['admin_pro'];
        $i = 8;
        $sql="select _order_date, _id, _name, _product, _deliver_addr, _phone, _content, _pay_method, _order_state from Shopping WHERE _id='$id'AND _product='$product';";
        $result=mysqli_query($link,$sql);
        $row = array();
        $row=mysqli_fetch_array($result);

        for($j = 0 ; $j < $i ; $j+=1){
            echo("<br>$row[$j]");
        }

        echo "성공";
?>