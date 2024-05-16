import express from "express"
const router = express.Router()
// const app = express();
// const port = 3000;
import posts from "../data/post.js";
// import users from "../data/post.js"
// import router from "./user";

router
  .route("/")
  .get((req, res) => {
res.json(posts)
  })

  .post((req, res) =>{
    if(req.body.title && req.body.content && req.body.userId){

      const post ={
        id: posts[posts.length - 1].id + 1,
        userId: req.body.name,
        title: req.body.title,
        content: req.body.content
      }
      posts.push(post)
      res.json(posts[posts.length -1])
    } else res.json({error: "Not Enough Data!"})
  })
export default router