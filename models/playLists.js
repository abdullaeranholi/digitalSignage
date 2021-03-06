var mongoose = require('mongoose');

// User Schema


var PlayListSchema = mongoose.Schema({
    playListName: {
        type: String,
        default: null
    },
    count: {
        type: String,
        default: "0"
    },
    list: [
        {
            type: String,
            default: null
        }]

});

var PlayLists = module.exports = mongoose.model('playLists', PlayListSchema);

module.exports.createPlayList = function (newField, callback) {
    newField.save(callback);
}
