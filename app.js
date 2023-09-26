var express = require("express");
var bodyParser = require("body-parser");

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static(__dirname + "/public/"));

let listItems = ["Buy cold drinks", "Buy popcorn"];


app.get("/", (req, res) => {
    var today = new Date();

    var options = {
        weekday: "long",
        month: "long",
        day: "numeric",
        // year: "numeric"
    };

    var currentDay = today.toLocaleDateString("en-US", options);
    res.render("list", {kindOfDay: currentDay, listItems:listItems});
});

app.post("/", (req, res) => {
    let item = req.body.newItem;
    listItems.push(item);
    res.redirect("/");
});


app.listen(3000, () => {
    console.log("server started on port:3000");
});