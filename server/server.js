const express = require('express');
const app = express();
const cors = require("cors")
const usersRouter = require("./routes/users")
const postsRouter = require("./routes/posts")

// MIDDLEWARE
app.use( cors() ) // allow sending data to us in general...
app.use( express.json() ) // allow sending JSON data to us...



// HOME ROUTE
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// ROUTES
app.use( "/users", usersRouter )
app.use( "/posts", postsRouter )


// SERVER STARTUP
let PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`API listening on port ${PORT}!`);
});

//Run app, then load http://localhost:5000 in a browser to see the output.
