<?php
        include("dbConnect.php");
        $id= $_POST['admin_id'];
        $product= $_POST['admin_pro'];
        $index = $_POST['admin_index'];
        $i = 9;
        $sql="select _order_date, _id, _name, _product, _deliver_addr, _phone, _content, _pay_method, _order_state from Shopping WHERE _index='$index';";
        $result=mysqli_query($link,$sql);
        $row = array();
        $row=mysqli_fetch_array($result);

        echo "<h3>주문자 정보</h3><br>";
        echo("<style>
                    table{
                        width: 100%;
                        height: 500px;
                    }
                    th, td {
                        border: 1px solid #bcbcbc;
                        text-align: center;
                    }
        </style>");
        $coment = array('날짜', '아이디','이름', '상품', '주소', '폰번호', '택배기사님에게', '결제방법', '주문상태');
        echo("<table> <tr><th>list</th><th>data</th></tr>");
        for($j = 0 ; $j < $i ; $j+=1){
            echo("<tr><td>$coment[$j]</td><td>$row[$j]</td></tr>");
        }
        echo("</table");
?>