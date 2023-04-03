const express = require('express');
const app = express();

app.listen(3000, function(){
    console.log("this is 3000 server")
});


app.get('/', function(요청, 응답){
    응답.sendFile(__dirname+'/index.html');
});

app.get('/pet', function(요청, 응답){
    응답.sendFile(__dirname+'/pet.html');
});

app.get('/beauty', function(요청, 응답){
    응답.send('뷰티용품 쇼핑 페이지');
});