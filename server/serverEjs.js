const express = require("express");
const path = require("path");

const app = express();
// Express example
app.use(express.static('public'));


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// ✅ Route ek dafa hi likhna hai
app.get("/", (req, res) => {
    res.render("index", { 
        title: "EJS Loop Example",
        message: "My Skills List",
        skills: ["HTML", "CSS", "JavaScript", "Node.js", "React"]
    });
});

app.listen(3000, () => {
    console.log("server is running on http://localhost:3000");
});
