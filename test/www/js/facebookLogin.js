/**
 * Created by byeongkwan on 2017-01-10.
 */
window.fbAsyncInit = function() {
    FB.init({
        appId      : '{your-app-id}',
        cookie     : true,  // enable cookies to allow the server to access
                            // the session
        xfbml      : true,  // parse social plugins on this page
        version    : 'v2.8' // use graph api version 2.8
    });

    FB.getLoginStatus(function(response) {
        statusChangeCallback(response);
    });

};
(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/ko_KR/sdk.js#xfbml=1&version=v2.8&appId=1880283602207592";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
function statusChangeCallback(response) {
    console.log('statusChangeCallback');
    console.log(response);

    if (response.status === 'connected') {
    //    SucessAPI();
    } else if (response.status === 'not_authorized') {
        document.getElementById('status').innerHTML = 'Please log ' +
            'into this app.';
    } else {
        document.getElementById('status').innerHTML = 'Please log ' +
            'into Facebook.';
    }
}
function checkLoginState() {
    FB.getLoginStatus(function(response) {
        statusChangeCallback(response);
    });
}

function SucessAPI() {
    //alert("성공");
    FB.api('/me', function(response) {
        alert(response.name);
        alert(response.id);
        window.localStorage.fb_id = response.id;
        window.localStorage.fb_name = response.name;
        alert(window.localStorage.fb_name);

    });
};
$('#button_signup_facebook').click(function () {
    FB.login(function (response) {
        if (response.status === 'connected') {
            SucessAPI();
            alert("성공");
        } else if (response.status === 'not_authorized') {
            document.getElementById('status').innerHTML = 'Please log ' +
                'into this app.';
        } else {
            document.getElementById('status').innerHTML = 'Please log ' +
                'into Facebook.';
        }
    });
});
