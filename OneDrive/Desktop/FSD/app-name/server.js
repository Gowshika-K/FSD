const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));


app.get("/", (req, res) => {
    res.sendFile("hello from server");
});
// handle the form submission
app.post("/user", (req, res) => {
    const { userName, userEmail } = req.body;
    
    res.send(`Thanks for submitting, ${userName}! We received your email: ${userEmail}`);
});

app.listen(3000, () => console.log("Server running on port 3000"));
