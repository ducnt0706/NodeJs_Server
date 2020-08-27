const express = require("express");

// TODO: init app
const app = express();
const port = process.env.PORT || 3000;
const router = require("./routes/api");
// TODO: middleware
app.use(express.json());
// SET DEFAULT RES
app.use(express.static("public"));
// ROUTER
app.use("/api", router);

// TODO: APP RUN
app.listen(port, () => {
  console.log(`Server is listening for ${port}`);
});
