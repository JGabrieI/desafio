const express = require('express');
const port = 3000;
const app = express();
const path = require('path')

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res, next) => {
    res.render({
        title: "Meu primeiro servidor Express",
        version: "0.0.0"
    });
});

app.listen(port, err => {
    console.log(`Server is listening on ${port}`);
});