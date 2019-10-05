const express = require('express');
const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile("index.html", { root: __dirname + "/public" });
});


app.listen(8080, () => console.log('App listening on port 8080!'));
