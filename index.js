import express from "express"
import bodyParser from "body-parser";
import users from "./routes/user.js";
import posts from "./routes/post.js";
import comments from "./routes/comments.js"
const app = express();
const port = 3000;



app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));
app.use(express.json());
app.use(express.static('public'))

function middleware1 (req, res, next) {
  console.log('Connection Successful');
  
  const errObj = new Error('Sorry, Try Again!'); 
  
  next(errObj);
}

// Middleware to validate post data
function validatePostdata(req, res, next){
  const { username, postTitle, postContent} = req.body;
  
  if (!username || !postTitle, !postContent){
    return res.status(400).json({ error: "Missing required fields"})
  }
}
// Express Calback
function standardExpressCB (req, res, next) {
  console.log('I am the standard express function ');
  res.send('<h1> Hello and Welcome to PetSpace!</h1>');
}
//Standard express fuction 
app.get('/', (req, res, next) =>{ console.log('I am the standard Express function');
res.send('<h2> We are getting some where!</h2>')

});
app.use("/users", users)
app.use("/posts", posts)
app.use("/comments", comments)

function errorHandler (err, req, res, next) {
  if (err) {
    res.send('<h2> OOPS, there is an error. Please try again</h2>')
  }
}

app.use(middleware1);
app.use(validatePostdata);

app.use(errorHandler);

app.listen(port, ()=>{
  console.log(`Server listening on port: ${port}`);
})

