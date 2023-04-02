const express = require("express");
const path = require("path");
const app = express();


app.use(express.static("./public"));
app.use("*", (req, res) => {
    res.sendFile(path.join(__dirname, "public/index.html"))
})
const PORT = 9087;
app.listen(PORT, () => console.log(`server start on port ${PORT}`));