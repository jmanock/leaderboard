function leaderboard(){
  var request = require('request');
  var cheerio = require('cheerio');
  var Firebase = require('firebase');
  var golfers = [];

  var myFirebaseRef = new Firebase('https://toga.firebaseio.com');
  request('http://sports.yahoo.com/golf/pga/leaderboard', function(error, response, body){
    if(!error && response.statusCode === 200){
      var $ = cheerio.load(body);
      $('td.player').each(function(i,element){
        var name = $(this).text().trim();
        var score = $(this).next().text().trim();
        var total = $(this).next().next().next().next().next().next().next().text().trim();

        if(name.length > 29){
          name = (' ');
        }
        var data = {
          Name: name,
          Score: score,
          Total: total
        };
        golfers.push(data);
        myFirebaseRef.set(golfers);
        console.log(name);
      });
    }
  });
}
leaderboard();
setInterval(leaderboard, 30000);
