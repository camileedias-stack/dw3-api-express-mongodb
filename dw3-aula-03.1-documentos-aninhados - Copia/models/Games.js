// MODEL DE GAMES
// Importando o mongoose
import mongoose from "mongoose";

const descriptionSchema = new mongoose.Schema({
    genre: String,
    platform: String,
    rating: String
})

const gameSchema = new mongoose.Schema({
    title: String,
    year: Number,
    price: Number,
    descriptions: String
});

const Game = mongoose.model('Game', gameSchema)

export default Game;