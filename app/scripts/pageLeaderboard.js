var scoreList = new Firebase('https://toga.firebaseio.com');
var htmlForPath = {};

function newScore(score, prev){
  var scoreRow = $('<tr/>');
  scoreRow.append($('<td/>').append($('<em>').text(score.val().Name)));
  scoreRow.append($('<td/>').text(score.val().Total));
  scoreRow.append($('<button>Add</button>'));

  htmlForPath[score.key()]= scoreRow;
  if(prev === null){
    $('#leaderboardTable').append(scoreRow);
  }else{
    var lowerScoreRow = htmlForPath[prev];
    lowerScoreRow.after(scoreRow);
  }
  $('button').one('click', function(){
    var index = $('button').index(this);
    //$(this).html(scoreRow);
    $(scoreRow).appendTo('#playerLeaderboard');
  });
}
var scoreListView = scoreList.limitToLast(200);
scoreListView.on('child_added', function(score, prev){
  newScore(score,prev);
});
