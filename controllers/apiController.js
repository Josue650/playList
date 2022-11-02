const apiController = {
    index (req, res, next) {
      res.json(res.locals.data.fruits)
    },
    show (req, res, next) {
      res.json(res.locals.data.fruit)
    }
  }

  // We only need Index and Show because we are currently only ever showing a list of fruits
  // Or we are showing a single fruit
  // Additional Routes will be added on Tuesday once we incorporate nuanced functionality
  module.exports = apiController
