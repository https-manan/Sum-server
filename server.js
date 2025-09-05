const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
    const { a, b } = req.query;
    const c = Number(a) + Number(b);
    res.json({ result: c });
});

app.listen(port,()=>{
    console.log(`listening on port 8080);
});
