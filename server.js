// server.js
const express = require('express');
const app = express();
var path = require("path");
// Run the app by serving the static files
// in the dist directory
app.use(express.static(__dirname + '/dist/private-app'));
// Start the app by listening on the default
// Heroku port
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname + '/dist/private-app/index.html'));
});
app.listen(process.env.PORT || 8080);