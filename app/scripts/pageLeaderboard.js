var scoreList = new Firebase('https://toga.firebaseio.com');
var htmlForPath = {};
var scoreRow;

function newScore(score, prev){
  scoreRow = $('<ul/>');
  scoreRow.append($('<li/>').append($('<em>').text(score.val().Name)));
  scoreRow.append($('<li/>').text(score.val().Total));
  scoreRow.append($('<button class="add" type="button">Add</button>'));

  htmlForPath[score.key()]= scoreRow;
  if(prev === null){
    $('#leaderboardTable').append(scoreRow);
  }else{
    var lowerScoreRow = htmlForPath[prev];
    lowerScoreRow.after(scoreRow);
  }
  $('.add').click(function(){
    console.log('Helllo');
  });
}
var scoreListView = scoreList.limitToLast(200);
scoreListView.on('child_added', function(score, prev){
  newScore(score,prev);

});
