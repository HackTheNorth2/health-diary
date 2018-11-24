const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line
router.get('/past-entries', function (req, res) {
  res.render('past-entries')
})

router.get('/new-diary-entry', function (req, res) {
  res.render('new-diary-entry')
})

router.get('/help-guide', function (req, res) {
  res.render('help-guide')
})

module.exports = router
