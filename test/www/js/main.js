/**
 * Created by byeongkwan on 2017-01-16.
 */
var loginCheck = window.localStorage.getItem("loginCheck");
alert(loginCheck);
$('#logout_btn').click(function() {
    if(loginCheck == 1){
        alert("로그아웃 되었습니다!");
        window.localStorage.loginCheck = 0;
        location.href="login.html";
    } else if(loginCheck == 2){

        FB.logout(function(data){
            alert("페이스북로그아웃?");
            if(data){
                window.localStorage.loginCheck = 0;
                location.href="login.html";
            }
        });

    } else if(loginCheck == 3){

                Kakao.Auth.logout(function(data){
                    alert("카카오로그아웃?");
                    if(data){
                        window.localStorage.loginCheck = 0;
                        location.href="login.html";
                    }
                });

    }else if(loginCheck === null){
        alert("Error!! again login");
        window.localStorage.loginCheck == 0;
        location.href="login.html";
    }
});
$('#main_bag').click(function() {

});
$('#main_etc').click(function() {

});
$('#main_Mshoe').click(function() {

});
$('#main_Sshoe').click(function() {

});