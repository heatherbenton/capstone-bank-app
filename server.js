// install express
const express = require("express");

const app = express();

// get request
app.get("/", (req, res) => res.send("API running"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server stared on port ${PORT}`));
