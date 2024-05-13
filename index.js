const express = require("express");
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Server listening on port: ${port}.`);
});

const userRoutes = require("./routes/user");
app.use("/user", userRoutes);

app.get("/", (req, res) => {
  res.send("Keeping it simple.");
});
