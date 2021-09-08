const express = require("express");
const app = express();

// add support to parsing json in the body
app.use(express.json());


app.use(express.static("./public"));

const comments = require('./routes/comments');
app.use(comments);

const port = process.env.PORT || 4001;

app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});
