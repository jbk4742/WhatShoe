<?php
        include("dbConnect.php");
        $id= $_POST['order_id'];
        $name= $_POST['order_name'];
        $product= $_POST['order_product'];
        $addr= $_POST['order_addr'];
        $phone= $_POST['order_phone'];
        $payMethod= $_POST['order_payMethod'];
        $content= $_POST['order_content'];
        $date= $_POST['order_date'];

        $i=0;
        $index_sql = "select _index from Shopping;";
        $result=mysqli_query($link,$index_sql);

        while($index_result = mysqli_fetch_array($result)){
            $i+=1;
        }

           $sql = "INSERT INTO Shopping(_index, _id, _name, _product, _deliver_addr, _phone, _content, _pay_method, _order_state, _order_date) VALUES ('$i', '$id', '$name', '$product', '$addr', '$phone', '$content', '$payMethod', '주문완료', '$date');";
           if(mysqli_query($link,$sql)){
                echo "성공";
           } else{
                echo "실패";
           }

?>