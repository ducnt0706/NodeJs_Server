const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// TODO: init app
const app = express();
const port = process.env.PORT || 3000;
const router = require("./routes/api");
// TODO: middleware
//CORS
app.use(cors({ origin: true }));
// Body Parser
app.use(express.json());
// Moongoose
mongoose.connect(
  "mongodb+srv://dbFruit:duc123@mycluster.0coyu.mongodb.net/dbFruit?retryWrites=true&w=majority",
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  }
);
mongoose.connection.once("open", () => {
  console.log("MongoDB Connected");
});
mongoose.connection.on("error", (err) => {
  console.log("MongoDB connection error: ", err);
});
// SET DEFAULT RES
app.use(express.static("public"));
// ROUTER
app.use("/api", router);
//error handling
app.use((err, req, res, next) => {
  res.status(422).send({ error: err.message });
});
// TODO: APP RUN
app.listen(port, () => {
  console.log(`Server is listening for ${port}`);
});
