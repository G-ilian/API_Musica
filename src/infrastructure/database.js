const mongoose = require('mongoose');

const uri = `mongodb+srv://root:root@musicas.0t574.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const { Schema } = mongoose;

const musicSchema = new Schema({
    nome: {
        type: String,
        unique: true,
    },
    banda: String,
    compositor: String,
    album:String,
    anoLancamento:Number,
});

const MusicModel = mongoose.model('MusicModel', musicSchema);

module.exports = {
    MusicModel,
};