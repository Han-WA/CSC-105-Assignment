const express = require("express");
const app = express();
const port = 3000;
const userRouter = require("./routers/users.js");
const bankRouter = require("./routers/banks.js");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use("/user", userRouter);
app.use("/bank", bankRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});