const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname + '/dist/newsApp'));

app.get('/*', function (req, res) {
    res.sendFile('index.html', { root: 'dist/newsApp/' }
    );
});

app.listen(process.env.PORT || 8000);