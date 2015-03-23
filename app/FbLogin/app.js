 var ref = new Firebase('https://reditclone.firebaseio.com');
// ref.authWithOAuthPopup('facebook', function(error, authData){
//   if(error){
//     console.log('Login Failed!', error);
//   }else{
//     console.log('Authenticated successfully with payload:', authData);
//   }
// });
$('button').click(function(){
  ref.authWithOAuthPopup('facebook', function(error, authData){
    if(error){
      console.log('Login Failed you son of a bitch', error);
    }else{
      var name = authData.facebook.displayName;
      console.log(authData.facebook.cachedUserProfile.picture.data.url);
      $('.fb').append(name);

      $('<img>').attr('src', authData.facebook.cachedUserProfile.picture.data.url).appendTo('.fb');
    }
  });
});
