module.exports = function(app){

    // 모든 노래 데이터 조회
    app.get('/api/songs', function(req, res){
        res.end();
    });

    // 모든 재생목록 조회
    app.get('/api/playlist', function(req,res){
        res.end();
    })

    // _id값으로 재생목록 조회
    app.get('/api/playlist/:playlist_id', function(req,res){
        res.end();
    })
}