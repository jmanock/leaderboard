var LEADERBOARD_SIZE = 100;

// Create our Firebase reference
var scoreListRef = new Firebase('https://toga.firebaseio.com/');

// Keep a mapping of firebase locations to HTML elements, so we can move/ remove elements as necessary.
var htmlForPath = {};

// Helper function that takes a new score snapshot and adds an appropriate row to our leaderboard table.
function handleScoreAdded(scoreSnapshot, prevScoreName){
  var newScoreRow = $('<tr/>');
  newScoreRow.append($('<td/>').append($('<em/>').text(scoreSnapshot.val().Name)));
  newScoreRow.append($('<td/>').text(scoreSnapshot.val().Score));
  newScoreRow.append($('<td/>').text(scoreSnapshot.val().Total));
  newScoreRow.append($('<button/>').text('Add'));

  // Store a reference to the table row so we can get it later
  htmlForPath[scoreSnapshot.key()] = newScoreRow;
  // Insert the new score in the appropriate place in the table.
  if(prevScoreName === null){
    $('#leaderboardTable').append(newScoreRow);
  }else{
    var lowerScoreRow = htmlForPath[prevScoreName];
    lowerScoreRow.after(newScoreRow);
  }
}


// Create a view to only recieve callbacks for the last LEADERBOARD_SIZE scores
var scoreListView = scoreListRef.limitToLast(LEADERBOARD_SIZE);

// Add a callback to handle when a new score is added
scoreListView.on('child_added', function(newScoreSnapshot, prevScoreName){
  handleScoreAdded(newScoreSnapshot, prevScoreName);
});

// Add a callback to handle when a score changes or moves positions
var changedCallback = function(scoreSnapshot, prevScoreName){
  handleScoreRemoved(scoreSnapshot);
  handleScoreAdded(scoreSnapshot, prevScoreName);
};
