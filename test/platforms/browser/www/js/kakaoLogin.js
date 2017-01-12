/**
 * Created by byeongkwan on 2017-01-10.
 */
$(document).ready(function() {
    Kakao.init("1354531609e350fbd024b14f61d98d54");
    function getKakaotalkUserProfile() {
        Kakao.API.request({
            url: '/v1/user/me',
            success: function (res) {
                alert("success");
                $("#kakao_name").append(res.properties.nickname);
                $("#kakao_id").append(res.id);
                window.localStorage.kakao_id = res.id;
                window.localStorage.kakao_name = res.properties.nickname;
                location.href='join_Kakao.html';
            },
            fail: function (error) {
                alert("error");
                console.log(error+"=============================================================");
            }
        });
    }
    function createKakaotalkLogin() {
        $('#button_signup_kakao').click(function () {
            Kakao.Auth.login({
                persistAccessToken: true,
                persistRefreshToken: true,
                success: function (authObj) {
                    alert("success1");
                    getKakaotalkUserProfile();
                    createKakaotalkLogout();

                },
                fail: function (err) {
                    console.log(err+"==============================================================");
                    alert("error1");
                }
            });
        });
      //  $("#kakao-logged-group").prependChild($("#button_signup_kakao"));
    }
    if(Kakao.Auth.getRefreshToken()!=undefined&&Kakao.Auth.getRefreshToken().replace(/ /g,"")!=""){
        getKakaotalkUserProfile();
    }else{
        createKakaotalkLogin();
    }
});