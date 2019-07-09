var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var animeSchema = new Schema({
    title : {
        romaji : String,
        english: String,
        native : String
    }
});

module.exports = mongoose.model("Anime", animeSchema)