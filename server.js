var express = require('express');
var bodyParser = require('body-parser');
var http = require('http')
var path = require('path')
var reload = require('reload')

var app = express();

var publicDir = path.join(__dirname, 'public')

app.set('port', process.env.PORT || 3000)
app.use(express.logger('dev'))
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json()); //parses json, multi-part (file), url-encoded 
app.use(app.router) //need to be explicit, (automatically adds it if you forget) 
app.use(express.static(publicDir)) //should cache static assets 

app.get('/', function(req, res) {
  res.sendfile(path.join(publicDir, 'index.html'))
})
 
var server = http.createServer(app)
 
//reload code here 
//optional reload delay and wait argument can be given to reload, refer to [API](https://github.com/jprichardson/reload#api) below 
reload(server, app, 700, true)
 
server.listen(app.get('port'), function(){
  console.log("Web server listening on port " + app.get('port'));
});