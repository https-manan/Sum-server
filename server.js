const express = require('express');
const app = express();
const host = 8080;

app.get('/', (req, res) => {
    const { a, b } = req.query;
    const c = Number(a) + Number(b);
    res.json({ result: c });
});

app.listen(8080);