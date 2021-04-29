const express = require("express")
const router = express.Router();

// array of hardcoded users
const users = [
  {
    _id: "r123",
    name: 'losrobbos'
  },
  {
    _id: "v123",
    name: "wasabis"
  }
]

router.get("/", (req, res, next) => {
  res.json(users) // return hardcoded users
})

router.get(":/id", (req, res, next) => {
  let user = users.find(user => user._id == req.params.id)
  res.json( user )
})

router.post('/', (req, res, next) => {
  let userNew = { ...req.body, _id: Date.now().toString( )}
  users.push( userNew )
  res.json( userNew )
})

module.exports = router
