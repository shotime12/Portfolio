var express = require('express');
var path = require('path');
var bp = require('body-parser');
var root = __dirname;
var app = express();

app.use(bp.json());

app.use(express.static(path.join(root, 'client')));
app.use(express.static(path.join(root, 'node_modules')))
// app.use(express.static(path.join(root, 'bower_components')))

//require('./server/config/routes.js')(app)

//set port
var port = process.env.PORT || 8000;

app.listen(port, function(){
	console.log('listening in port 8000')
})