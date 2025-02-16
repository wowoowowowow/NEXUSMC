const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post("/send-message", (req, res) => {
    console.log("Message received:", req.body);
    res.status(200).json({ success: true });
});

app.listen(3000, () => console.log("Server running on port 3000"));
