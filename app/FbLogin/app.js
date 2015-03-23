 var ref = new Firebase('https://reditclone.firebaseio.com');

$('button').click(function(){
  ref.authWithOAuthPopup('facebook', function(error, authData){
    if(error){
      console.log('Login Failed you son of a bitch', error);
    }else{
      var usersRef = ref.child('users').child(authData.uid);
      var name = authData.facebook.displayName;
      var id = authData.uid;
      console.log(authData);
      $('.fb').append(name);
      $('<img>').attr('src', authData.facebook.cachedUserProfile.picture.data.url).appendTo('.fb');
      usersRef.set({

          facebook: authData.facebook,
          fullName: authData.facebook.displayName,
          avatarUrl: authData.facebook.cachedUserProfile.picture.data.url

      });
    }
  });
});
// 1430766218022
