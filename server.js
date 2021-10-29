// install express
const express = require("express");

// connect to mongo config file
const connectDB = require("./config/db");

const app = express();

// connect database
connectDB();

// init middleware
app.use(express.json({ extended: false }));

// get request
app.get("/", (req, res) => res.send("API running"));

// define routes, connects to slash from router.get
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/posts", require("./routes/api/posts"));
app.use("/api/profile", require("./routes/api/profile"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server stared on port ${PORT}`));
