const mongoose = require('mongoose');

const dbarr      = require(`${__dirname}/../MiscDocs/array`).dbarr;
const ModelAnime = require(`${__dirname}/../Models/Anime.js`);

mongoose.connect('mongodb://localhost/randomAnimeTrailer', {useNewUrlParser: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    dbarr.forEach(element => {
        let newAnime = new ModelAnime({
            title : {
                romaji :element.title.romaji,
                english :element.title.english,
                native :element.title.native
            }
        });
        newAnime.save().then( doc =>{
            console.log("doc saved", doc)
        }).catch(err => {
            console.log(err);
        })
    });
});