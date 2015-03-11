var scoreList = new Firebase('https://toga.firebaseio.com');
var htmlForPath = {};

function newScore(score, prev){
  var scoreRow = $('<tr/>');
  scoreRow.append($('<td/>').append($('<em>').text(score.val().Name)));
  scoreRow.append($('<td/>').text(score.val().Total));

  htmlForPath[score.key()]= scoreRow;
  if(prev === null){
    $('#leaderboardTable').append(scoreRow);
  }else{
    var lowerScoreRow = htmlForPath[prev];
    lowerScoreRow.after(scoreRow);
  }
}
var scoreListView = scoreList.limitToLast(200);
scoreListView.on('child_added', function(score, prev){
  newScore(score,prev);
});
