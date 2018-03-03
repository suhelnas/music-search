"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http = require("http");
var express = require("express");
var bodyParser = require("body-parser");
var LastFM = require("last-fm");
var app = express();
var _clientFiles = '/app/dist/';
app.use(express.static(_clientFiles));
app.use(bodyParser.urlencoded({ extended: false, limit: 10000000 }));
app.use(bodyParser.json({ limit: '1000mb' }));
app.post('/api/get/list', function (req, res) {
    var lastfm = new LastFM('5e72f53df93bee119b3666b64d1d4161', null);
    var opts = {
        q: req.body.Query,
        limit: 20,
        page: 1
    };
    lastfm.trackSearch(opts, function (err, data) {
        res.send({ result: data.result });
    });
});
app.get('/*', function (req, res) {
    res.sendFile('/app/dist/index.html');
});
http.createServer(app).listen(process.env.PORT || 8080, function () {
    console.log('Starting server ...');
});
//# sourceMappingURL=server.js.map