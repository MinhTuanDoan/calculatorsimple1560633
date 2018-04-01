var express = require('express')
var fs = require('fs')
var app = express()
var http = require('http').Server(app)
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/',(req,res)=>{
    fs.readFile('./index.html', 'utf-8', (err,data)=>{
        res.send(data)
    })
})

app.get('/:operator/:a/:b',(req,res)=>{
    var op = req.params.operator
    var so1 = parseInt(req.params.a)
    var so2 = parseInt(req.params.b)
    var rs;
    switch(op){
        case 'AGCong': case 'XGCong':{
            rs = so1 + so2
        }break;
        case 'AGTru': case 'XGTru':{
            rs = so1 - so2
        }break;
        case 'AGNhan': case 'XGNhan':{
            rs = so1 * so2
        }break;
        case 'AGChia': case 'XGChia':{
            rs = 1.0 * so1 / so2
        }break;
    }
    res.send(rs.toString());
})

app.post('/:operator',(req,res)=>{
    var op = req.params.operator
    console.log(op);
    var so1 = parseInt(req.body.a)
    var so2 = parseInt(req.body.b)
    var rs;
    switch(op){
        case 'APCong': case 'XPCong':{
            rs = so1 + so2
        }break;
        case 'APTru': case 'XPTru':{
            rs = so1 - so2
        }break;
        case 'APNhan': case 'XPNhan':{
            rs = so1 * so2
        }break;
        case 'APChia': case 'XPChia':{
            rs = 1.0 * so1 / so2
        }break;
    }
    res.send(rs.toString());
})

http.listen(3000,'https://calculatorsimple1560633.herokuapp.com/', function(){
    console.log('Listening...')
})