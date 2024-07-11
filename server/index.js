const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 5000;
const db = require("./db/connection");

// -----------middleware
app.use(cors());
app.use(express.json());

//-----------routs
const userRouter = require("./Routes/user");

app.use("/api/users", userRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
<h1>Good Morning..!!</h1>;
<h1>hii</h1>;
