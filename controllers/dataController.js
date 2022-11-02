const Playlist = require('../models/playlist')

const dataController = {
  // Index,
  index (req, res, next) {
    Playlist.find({username: req.session.username}, (err, foundPlaylists) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.playlists = foundPlaylists
        next()
      }
    })
  },
  // Destroy
  destroy (req, res, next) {
    Playlist.findByIdAndDelete(req.params.id, (err, deletePlaylist) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.playlist = deletePlaylist
        next()
      }
    })
  },
  // Update
  update (req, res, next) {
    req.body.favoriteSong = req.body.favoriteSong === 'on'
    Playlist.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedPlaylist) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.playlist = updatedPlaylist
        next()
      }
    })
  },
  // Create
  create (req, res, next) {
    req.body.favoriteSong = req.body.favoriteSong === 'on'
    req.body.username = req.session.username
    Playlist.create(req.body, (err, createdPlaylist) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.playlist = createdPlaylist
        next()
      }
    })
  },
  // Show
  show (req, res, next) {
    Playlist.findById(req.params.id, (err, foundPlaylist) => {
      if (err) {
        res.status(404).send({
          msg: err.message,
          output: 'Could not find a Song with that ID'
        })
      } else {
        res.locals.data.playlist = foundPlaylist
        next()
      }
    })
  }
}

module.exports = dataController
