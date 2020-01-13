const express = require('express')
const User = require('../models/User.js')
const Whiskey = require('../models/Whiskey.js')
const router = express.Router()

// HTTP Requests and Setting up routes
// GET
router.get('/', (req, res) => {
  User.find()
    .then(users => {
      res.json(users)
    })
    .catch(err => console.log(err))
})

// POST
router.post('/', (req, res) => {
  const newUser = new User(req.body.user)
  newUser
    .save()
    .then((user) => {
      res.json(user)
    })
    .catch((err) => console.log(err))
})

// GET USER ID
router.get('/:userId', (req, res) => {
  User.findById(req.params.userId)
    .then(user => {
      user.whiskeys = user.whiskeys.reverse()
      res.json(user)
    })
    .catch((err) => console.log(err))
})

// DELETE USER
router.delete("/:userId", (req, res) => {
    User.findByIdAndRemove(req.params.userId).then(user => {
      user.save()
        res.json('200 status');  
    });
  });

// UPDATE WHISKEY
router.post('/:userId/whiskeys', (req, res) => {
  User.findById(req.params.userId).then(user => {
    const newWhiskey = new Whiskey({})
    user.whiskeys.push(newWhiskey)
    user.save().then(user => {
      res.json(newWhiskey)
    })
  })
})

// DELETE WHISKEY
router.delete('/:userId/whiskeys/:whiskeyId', (req, res) => {
  User.findById(req.params.userId).then(user => {
    const filteredWhiskeys = user.whiskeys.filter(
      whiskey => whiskey._id.toString() !== req.params.whiskeyId
    )

    user.whiskeys = filteredWhiskeys

    user.save().then(user => {
      user.whiskeys = user.whiskeys.reverse()
      res.json(user.whiskeys)
    })
  })
})

// UPDATE WHISKEY ID
router.patch('/:userId/whiskey/:whiskeyId', (req, res) => {
  User.findById(req.params.userId).then(user => {
    const update = req.body.whiskey
    const whiskey = user.whiskeys.id(req.params.whiskeyId)
    if (update.name) {
      whiskey.name = update.name
    }
    if (update.description) {
      whiskey.description = update.description
    }

    user.save().then(user => {
      user.whiskeys = user.whiskeys.reverse()
      res.json(user)
    })
  })
});

module.exports = router;