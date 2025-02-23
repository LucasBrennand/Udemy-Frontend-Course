import bodyParser from "body-parser";
import { render } from "ejs";
import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

app.get("/", (req, res) => {
    res.render("index.ejs", { 
        dayOfWeek: getDay() 
    });
  });

app.use(bodyParser.urlencoded({ extended: true }));


app.post("/submit", (req, res) => {
    console.log(req.body);
});

const day = new Date();
let dayOfWeek = day.getDay();
console.log(dayOfWeek);

function getDay() {
    if (dayOfWeek === 0 || dayOfWeek === 6) {
        return "Weekend";
    } else {
        return "Weekday";
    }
}