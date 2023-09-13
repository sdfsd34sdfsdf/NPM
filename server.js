const express = require("express");

const app = express();

app.get("/", (req, res) => {
    const developers = [
        { id: 1, name: "Danilo" },
        { id: 1, name: "Ivan" },
        { id: 1, name: "Milos" },
    ];

    res.json(developers);
})

app.listen(5000, function () {
    console.log("Lisening to port 5000")
})