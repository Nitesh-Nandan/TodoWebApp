var validateLogin = () =>{
    var loginButton = document.getElementById('log-btn');
    loginButton.addEventListener('click', validatePassword);

    function validatePassword(){
        let usrname = document.getElementById('log-user').value;
        let password = document.getElementById('log-pass').value;

        let windowStorPass =  window.localStorage.getItem(usrname);

        if(windowStorPass==password){
            window.localStorage.removeItem('todotexts');
            window.localStorage.removeItem("todolists");
            // window.location.replace("/index.html");
            window.open("/index.html");

        }
        else{
            alert("Wrong Password");
        }
    }
}

var signUp = () =>{
    var signUpButton = document.getElementById('sign-btn');
    signUpButton.addEventListener('click',savepassword);

    function savepassword(){
        let usrname = document.getElementById('sign-user').value;
        let password = document.getElementById('sign-pass').value;

        window.localStorage.setItem(usrname, password);
    }
}

$('document').ready(function(){
    validateLogin();
    signUp();

});