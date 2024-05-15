const express = require("express");
const app = express();
const port = 3000;


function middleware1 (req, res, next) {
  console.log('I am a middleware');
  
  const errObj = new Error('Sorry, Try Again!'); 
  
  next(errObj);
}

function errorHandler (err, req, res, next) {
  if (err) {
    res.send('<h2> OOPS, there is an error. Please try again')
  }
}

function middleware2 (req, res, next){
  console.log('Middleware #2');
  next();
}
function standardExpressCB (req, res, next) {
  console.log('I am the standard express function ');
  res.send('<h1> Hello and Welcome to PetSpace!</h1>');
}

app.get('/', (req, res, next) =>{ console.log('I am the standard Express function');
res.send('<h2> We are getting some where!</h2>')

});
app.use(middleware1);
app.use(middleware2);

app.use(errorHandler);

app.listen(port, ()=>{
  console.log(`Server listening on port: ${port}`);
})