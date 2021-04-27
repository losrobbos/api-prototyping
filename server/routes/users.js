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

router.patch("/:id", (req, res, next) => {
  res.json( req.body )
})

router.delete("/:id", (req, res, next) => {
  users = users.filter(user => user._id != req.params.id)
  res.json({ message: `Deleted user with ID ${req.params.id}`})
})

module.exports = router