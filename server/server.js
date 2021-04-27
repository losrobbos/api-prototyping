const express = require('express');
const app = express();
const cors = require("cors")
const usersRouter = require("./routes/users")
const postsRouter = require("./routes/posts")

// MIDDLEWARE
app.use( cors() ) // allow sending data to us in general...
app.use( express.json() ) // allow sending JSON data to us...



/** API PROTOTYPE
 * 
 * In an API prototype all routes return hardcoded data
 * 
 * A prototype is a simplified API which serves the data needed to the frontend, 
 * but with a very slim, minimal structure: No database, no controllers, no JWT, no middleware
 * 
 * The prototype has ONE central goal: 
 * Clarify the DATA EXCHANGE between frontend and backend
 * And therefore allow EARLY INTEGRATION of frontend & backend to test if the flow of information
 * works as expected. That is the most critical hump in realizing a fullstack app.
 * 
 * Once the data structure to exchange is clarified,we can setup schemas & models 
 * and replace our hardcoded data in all our routes with actual database calls 
 * 
 * HAPPY PROTOTYPING!
*/

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