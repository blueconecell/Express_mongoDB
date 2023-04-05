var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

// api url : https://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=9148931c52ee4bc9093160abcc3daadc&format=json

mongoose.connect('mongodb+srv://blueconecell:melon123@melon.spvf5th.mongodb.net/Melon')
mongoose.connection.on('open', function(){
    console.log('Mongoose connected.')
})

var Account = new Schema({
    username:{type:String,require:true},
    data_created:{type: Date, default:Date.now},
    visits:{type:Number, default:0},
    age:{type:Number,min:13, max:120 ,require:true},
    active:{type:Boolean, default:false}
})

Account.statics.findByAgeRange = function(min, max, callback){
    this.find({age:{$gt:min, $lt:max}},callback)
}

var AccountModel = mongoose.model('Account_1.1', Account)

var p = AccountModel.findByAgeRange(18, 30)
console.log(p)
var newUser = new AccountModel({ username:'testuser1.1', visits:1, age:31});

console.log(newUser.username)
console.log(newUser.data_created)
console.log(newUser.visits)
console.log(newUser.active)


newUser.save();

AccountModel.find({ age:{ $gt : 18, $lt : 30}})