const RESOURCE_PATH = '/playlists'

const viewController = {
  index (req, res, next) {
    res.render('playlists/Index', res.locals.data)
  },
  newView (req, res, next) {
    res.render('playlists/New')
  },
  edit (req, res, next) {
    res.render('playlists/Edit', res.locals.data)
  },
  show (req, res, next) {
    res.render('playlists/Show', res.locals.data)
  },
  redirectHome (req, res, next) {
    res.redirect(RESOURCE_PATH)
  },
  redirectShow (req, res, next) {
    const playlistId = req.params.id || res.locals.data.playlist._id
    res.redirect(`${RESOURCE_PATH}/${playlistId}`)
  }
}

module.exports = viewController
