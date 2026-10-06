const express = require('express');
const app = express();
const PORT = 3000;

function checkLogin(req, res, next) {
    const loggedIn = false; 
    if (loggedIn) {
        next(); 
    } else {
       
        res.status(401).send('Please log in to access this resource.');
    }
}


app.get("/profile", checkLogin, (req, res) => {
    res.send("Welcome to your profile!");
});


app.get("/", (req, res) => {
    res.send("ITS US GOWSHIKA AND ASMITA.");
});


app.listen(PORT, () => {
    console.log(`Server is running smoothly on http://localhost:${PORT}`);
});
