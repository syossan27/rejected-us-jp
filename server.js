var fs = require('fs');
var express = require('express');
var app = express();

// Public directory for all static assets
app.use(express.static('public'));

// Set views and jsx for view engine
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.set('port', (process.env.PORT || 5000));

app.get('/', function(req, res) {
  const data = JSON.parse(fs.readFileSync('data/data.json', 'utf8'));
  res.render('index', { title: "They Rejected Us.", stories: data.stories.reverse() });
});


var server = app.listen(app.get('port'), function () {
  console.log('Node app is running on port', app.get('port'));
});
