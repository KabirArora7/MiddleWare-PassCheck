//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import bodyParser from "body-parser";
import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express()
const port = 3000

app.use(bodyParser.urlencoded({extended: true}));

const setPass = "ILoveProgramming"

function checkPass(req, res, next) {
    const pass = req.body.password
    if (pass == setPass) {
        res.sendFile(__dirname + "/public/secret.html")
    }
    else {
        res.redirect("/")
    }
}

app.get("/" , (req, res)=> {
    res.sendFile(__dirname + "/public/index.html")
})

// Handle password check here
app.post("/check", checkPass);

app.listen(port , ()=> {
    console.log(`Listening on port ${port}`)
})