const express = require('express');

const app = express();

app.get("/:id",(req, res, ) => {
    res.send(`Hello from Express! ${req.params.id}`);
})

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});