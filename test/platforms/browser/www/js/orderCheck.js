/**
 * Created by byeongkwan on 2017-01-18.
 */
checkProduct();
var loginCheck = window.localStorage.getItem("loginCheck");
var date = new Date();
var localDate_Y = date.getFullYear();
var localDate_M = date.getMonth()+1;
if(localDate_M <10){
    localDate_M = "0"+localDate_M;
}
var localDate_D = date.getDate();
var localDate = localDate_Y+"-"+localDate_M+"-"+localDate_D;
document.getElementById('order_date').value = localDate;
if(loginCheck == 1){
    document.getElementById('order_id').value = window.localStorage._id;
} else if(loginCheck == 2){
    document.getElementById('order_id').value = window.localStorage.fb_id;
    document.getElementById('order_name').value = window.localStorage.fb_name;
} else if(loginCheck == 3) {
    document.getElementById('order_id').value = window.localStorage.kakao_id;
    document.getElementById('order_name').value = window.localStorage.kakao_name;
}

$('#order_btn').click(function () {
    var check_id = document.getElementById("order_id").value;
    var check_name = document.getElementById("order_name").value;
    var check_phone = document.getElementById("order_phone").value;
    var check_addr = document.getElementById("order_addr").value;
    var check_count = 0;

    if(!check_name){
        alert("이름이 입력되지 않았습니다.");
        return false;
    } else{
        check_count++;
    }
    if(!check_id){
        alert("아이디가 입력되지 않았습니다");
        return false;
    } else {
        if (!/^[a-zA-Z0-9]{6,12}$/.test(check_id)) {
            alert("숫자와 영문 혼합 4~10자리 사용해야함");
            return false;
        }
        else {
            check_count++;
        }
    }
    if(!check_phone){
        alert("전화번호가 입력되지 않았습니다.");
        return false;
    } else{
        if(!/^[0-9]{10,15}$/.test(check_phone)){
            alert("전화번호 형식이 올바르지 않습니다.");
            return false;
        } else{
            check_count++;
        }
    }
    if(!check_addr){
        alert("주소가 입력되지 않았습니다.");
        return false;
    } else{
        check_count++;
    }
    if(check_count == 4) {
        document.getElementById('order_form').submit();
    }
});
function checkProduct(){
    var i=0;
    var string = "";
    var result = new Array;
    for(i = 0; i<4; i++){
        result[i] = window.localStorage.getItem("item"+i);
        switch (result[i]){
            case '1':
                string = " 샤넬";
                break;
            case '2':
                string+=" 루이까또즈";
                break;
            case '3':
                string +=" 버버리";
                break;
            case '4':
                string +=" 닥스";
                break;
        }
    }
    document.getElementById('order_product').value = string;
}
$('#method_btn').click(function () {
    $("#dialog").dialog("open");
});
$('#dialog').dialog({
    title:'다이얼로그',
    autoOpen:false,
    width:600,
    modal:true,
    backgroundColor: '#252525',
    buttons:[
        {
            text: "확인",
            click: function() {
                var checkRadio = document.getElementsByName('paymethod');

                for(var i=0; i<checkRadio.length;i++) {
                    if (checkRadio[i].checked == true) {
                        document.getElementById('order_payMethod').value = checkRadio[i].value;
                        $(this).dialog("close");
                    }
                }
            }
        }
    ]
});