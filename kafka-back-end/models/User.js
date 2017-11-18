var mongoose     = require('mongoose');
mongoose.Promise = require('bluebird');
var Schema       = mongoose.Schema;

mongoose.connect('mongodb://localhost:27017/cmpe273_kayak');


var UserSchema   = new Schema({
    firstname: String,
    lastname: String,
    password: Object,
    email: String
});

module.exports = mongoose.model('User', UserSchema);
