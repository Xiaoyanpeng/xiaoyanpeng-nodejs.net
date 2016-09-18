var express = require('express')
var path = require('path')
var bodyParser = require('body-parser')
var app = express()
// var fs = require('fs')

var template=require('art-template')
template.config('base','')
template.config('extname','.html')//模板后缀
app.engine('.html',template.__express)
app.set('view engine','html')//设置模板引擎
app.set('views','./views')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(express.static(path.join(__dirname, 'public')))

// app.use(require('./routes/list'))
// app.use(require('./routes/addRevice'))

var server = app.listen('3000',function(){
    var address = server.address().address
    var port = server.address().port
    console.log('server is running on'+address+',port:'+port)
})

