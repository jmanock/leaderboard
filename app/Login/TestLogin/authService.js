var app = angular.module('Leaderboard');

app.service('authService', function(){
  var firebaseUrl = 'https://reditclone.firebaseio.com/';
  var firebaseLogin = new Firebase(firebaseUrl);

  this.login = function(user, cb){
    firebaseLogin.authWithPassword({
      email: user.email,
      password: user.password
    }, function(err, authData){
      if(err){
        switch (err.code){
          case 'Invalid_Email':
            case 'Invalid_Password':
              default:
        }
      } else if(authData){
        console.log('Logged In! User ID: ' + authData.uid);
        cb(authData);
      }
    });
  };
  this.register = function(user, cb){
    firebaseLogin.createUser({
      email: user.email,
      password: user.password
    }, function(error){
      if(error === null){
        console.log('User created successsfuly:');
        firebaseLogin.authWithPassword({
          email: user.email,
          password: user.password
        }, function(err, authData){
          if(authData){
            authData.name = user.name;
            firebaseLogin.child('users').child(authData.ui.replace('simplelogin:', '').set(authData));
            cb(authData);
          }else{
            console.log('something went wrong');
          }
        });
      }else{
        console.log('Error creating user:', error);
        return false;
      }
    });
  };
});
