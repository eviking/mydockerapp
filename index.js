var express = require('express');
var os = require('os');

var app = express();
app.set('counter',0);
app.get('/', function(req, res){
    app.set('counter',app.get('counter')+1);
    res.send('{ "requestCounter":' + app.get('counter') + ', "hostname":' + os.hostname() + ' ,"dockerContainerName":' + process.env["HOSTNAME"] +  ' ,"mesos-port":' + process.env["PORT0"] + '}');
});

app.listen(8089);
