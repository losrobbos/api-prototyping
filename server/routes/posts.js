const express = require("express")
const router = express.Router();

// array of hardcoded posts
const posts = [

  // POST 1
  {
    _id: "p1",
    title: "How do you setup an API?", 
    text: "To be honest: I hate APIs! I always did! Can somebody help me, how to get this sh** started?", 
    author: { _id: "r123", name: "losrobbos" }, // "POPULATED" post author
    likes: [ { _id: "v123", name: "wasabis" } ], // array of liking users...
    comments: [
      { 
        _id: "c1",
        text:  "Yeah, they suck. What helped me out was meditation", 
        author: { _id: "v123", name: "wasabis" }, // "POPULATED" comment author
        likes: [ { _id: "r123", name: "losrobbos" } ], // array of liking users...
      }, 
      { 
        _id: "c2",
        text:  "Oh really? Need to try that...", 
        author: { _id: "r123", name: "losrobbos" }, // "POPULATED" comment author
      },
    ]
  },

  // POST 2
  {
    _id: "p2",
    title: "I want to start with React. What to do?", 
    text: "See title, buddy. Nothing more to say here...", 
    author: { _id: "v123", name: "wasabis" }, // "POPULATED" post author
    likes: [ { _id: "r123", name: "losrobbos" }, { _id: "v123", name: "wasabis" } ], // array of liking users...
    comments: [] // no comments so far
  },

]

router.get("/", (req, res, next) => {
  res.json(posts) // return hardcoded posts
})

router.get(":/id", (req, res, next) => {
  let post = posts.find(post => post._id == req.params.id)
  res.json( post )
})

router.post('/', (req, res, next) => {
  let postNew = { ...req.body, _id: Date.now().toString( )}
  posts.push( postNew )
  res.json(postNew)
})

router.patch("/:id", (req, res, next) => {
  res.json( req.body )
})

router.delete("/:id", (req, res, next) => {
  posts = posts.filter(post => post._id != req.params.id)
  res.json({ message: `Deleted post with ID ${req.params.id}`})
})


module.exports = router
