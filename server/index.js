const express = require('express');
const app = express();

// Dynamic route with id and slug
app.get("/:id-:slug", (req, res) => {
    res.send(`Hello from Express! ID: ${req.params.id}, Slug: ${req.params.slug}`);
});

// Query params route
app.get("/search", (req, res) => {
    res.send(req.query)
    // res.send(`Hello from Express! Query: ${JSON.stringify(req.query)}`);
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
