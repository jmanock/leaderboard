var ref = new Firebase('https://reditclonde.firebaseio.com');
var authClient = new FirebaseAuthClient(ref, function(error, user){
  if(error){
    alert(error);
  }else{
    showLoginBox();
  }
});
function showLoginBox(){
  $('#registerButton').on('click', function(){
    var email = $('#email').val();
    var password = $('password').val();
    authClient.createUser(email, password, function(error, user){
      if(!error){
        doLogin(user);
      }else{
        alert(error);
      }
    });
  });
}
function showLoginBox(){
  $('#loginButton').on('click', function(){
    authClient.login('password', {
      email: $('#email').val(),
      password: $('#password').val(),
      rememberMe: $('#rememberCheckbox').val()
    });
  });
}
