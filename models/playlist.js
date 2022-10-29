const mongoose = require('mongoose')

// Make a Schema
const playlistSchema = new mongoose.Schema({
  title: { type: String, required: true },
  artist: { type: String, required: true },
  image: { type: String, required: true },
  favoriteSong: Boolean
})

// Make a model from the Schema
const Playlist = mongoose.model('Playlist', playlistSchema)

// Export the Model for the use in the App

module.exports = Playlist
