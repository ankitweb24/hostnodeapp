const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
app.get("/", (req, res) => {
    res.send("hellow this is the welcome page");
})
app.listen(port, () => {
    console.log(`listing to the port at ${port}`);
})