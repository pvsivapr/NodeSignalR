var express = require('express');// Importing Express
var SignalRJS = require('signalrjs');// Importing SignalR


var app = express();//Getting App From Express
var signalR = SignalRJS();

const port = process.env.PORT || 3000;//8080;//Creating A Constant For Providing The Port
const timeInterval = 1000;

app.use(signalR.createListener());
// app.use(express.static(__dirname));
app.use(express.static(__dirname + '/ProjFiles/HtmlFiles'));
app.listen(port);


signalR.on('CONNECTED', function(){
    console.log('connected to signalR');
    setInterval(function(){
        signalR.send(
            {
                time: new Date()
            }
        );
    }, timeInterval)
});
console.log("Server Running At:localhost:"+port);