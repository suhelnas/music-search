import * as http from 'http';
import * as express from 'express'
import * as bodyParser from 'body-parser'
import * as LastFM from 'last-fm'

let app = express();
let _clientFiles = '/app/dist/';
app.use(express.static(_clientFiles));
app.use(bodyParser.urlencoded({ extended: false, limit: 10000000 }));
app.use(bodyParser.json({ limit: '1000mb' }));
app.get('/api/get/list',function (req,res){
let lastfm = new LastFM('5e72f53df93bee119b3666b64d1d4161',null)
  let opts = {
  limit:20,
  page:1
  }
  lastfm.chartTopTracks(opts,function (err,data) {
    res.send({result:data.result});
  })
});
app.get('/*',function (req,res) {
  res.sendFile('/app/dist/index.html')
})
http.createServer(app).listen(process.env.PORT||8080,() =>{
  console.log('Starting server ...');

});
