const express = require("express");

var civRouter = require("./api/routes/civs");

const app = express();
const cors = require("cors");
app.use(cors());

app.get("/", (req, res) => {
  res.send("<h1>Hello World!</h1>");
});

app.use("/api/civs", civRouter);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
