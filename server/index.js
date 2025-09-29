const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, 'public')));
// Dynamic route with id and slug
// app.get("/:id-:slug", (req, res) => {
//     res.send(`Hello from Express! ID: ${req.params.id}, Slug: ${req.params.slug}`);
// });

// Query params route
// app.get("/search", (req, res) => {
//     res.send(req.query)
//     // res.send(`Hello from Express! Query: ${JSON.stringify(req.query)}`);
// });

app.get("/about", (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'about.html'));
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
