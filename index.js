//importing express
let express = require('express')

let app = express();

var port = process.env.PORT || 8080;

app.get('/', (req, res) => res.send("Backend Hello World"));

app.listen(port, function () {
    console.log("running on port " + port);
})