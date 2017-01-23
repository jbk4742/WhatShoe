<meta http-equiv="content-type" content="text/html" charset="utf-8">
<?php
        include("dbConnect.php");

                $sql="select _id, _product from Shopping";
                $result=mysqli_query($link,$sql);
                $row = array();
                echo '주문고객' ;
                $i = 0;
            	while($row=mysqli_fetch_array($result)){
                    $id[$i] = $row[_id];
                    $product[$i] = $row[_product];
                    $i += 1;
            	}
?>
