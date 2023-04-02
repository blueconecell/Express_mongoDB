const express = require('express');
const app = express();

app.listen(8080, function(){
    console.log("this is 8080 server")
});

app.get('/pet', function(요청, 응답){
    응답.send('펫 용품 쇼핑 가능~');
});

app.get('/beauty', function(요청, 응답){
    응답.send('뷰티용품 쇼핑 페이지');
});