/**
 * Created by byeongkwan on 2017-01-06.
 */
function checkEndInput() {
    var check_id = document.getElementById("input_id").value;
    var check_pwd = document.getElementById("input_pwd").value;
    var check_confirm = document.getElementById("input_confirm").value;
    var check_email = document.getElementById('input_email').value;
    var check_name = document.getElementById('input_name').value;
    var check_phone = document.getElementById('input_phone').value;
    var check_addr = document.getElementById('input_addr').value;


}
function filterNumber(event) {
    var code = event.keyCode;
    if (code > 47 && code < 58) {
        return;
    }
    event.preventDefault();
}

$('#button_join').click(function () {
    var check_id = document.getElementById("input_id").value;
    var check_pwd = document.getElementById("input_pwd").value;
    var check_confirm = document.getElementById("input_confirm").value;
    var check_email = document.getElementById('input_email').value;
    var check_name = document.getElementById('input_name').value;
    var check_phone = document.getElementById('input_phone').value;
    var check_addr = document.getElementById('input_addr').value;

    if(!check_id){
        alert("아이디가 입력되지 않았습니다");
        return false;
    } else{
        if(!/^[a-zA-Z0-9]{4,10}$/.test(check_pwd)){
            alert("숫자와 영문 혼합 4~10자리 사용해야함");
        }
        else{

        }

    }//아이디 유효성 검사
    if(!check_pwd && !check_confirm){
        alert("비밀번호가 입력되지 않았습니다")
        return false;
    } else if(check_pwd != check_confirm){
        alert("비밀번호 확인이 일치하지 않습니다");
        return false;
    } else{
        if(!/^[a-zA-Z0-9]{6,12}$/.test(check_pwd)){
            alert("숫자와 영문 혼합 6~12자리 사용해야함");
        }
        else{

        }
    }//비밀번호 유효성 검사
    if(!check_email){
        alert("이메일이 입력되지 않았습니다");
    } else{

    }
    if(!check_name){
        alert("이름이 입력되지 않았습니다.");
        return false;
    } else{

    }
    if(!check_phone){
        alert("전화번호가 입력되지 않았습니다.");
        return false;
    } else{
        alert(typeof check_phone);
    }
    if(!check_addr){
        alert("주소가 입력되지 않았습니다.");
        return false;
    } else{

    }
    //document.getElementById('login_form').submit();
});