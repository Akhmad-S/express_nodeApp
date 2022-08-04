const { response } = require("express");
const express = require("express");
const { request } = require("http");
const app = express();
const path = require("path")

app.use(express.urlencoded({ extended: false }))

let list = []

app.use("/", express.static("pages/html_project"))
app.use("/projects", express.static("pages/projects"))
app.use("/contact", express.static("pages/contact"))

app.get("/main", (req, res) => {
    let filePath = path.join(__dirname, "pages", "html_project", "index.html")
    res.sendFile(filePath)
})

app.get("/projects", (req, res) => {
    let filePath = path.join(__dirname, "pages", "projects", "index.html")
    res.sendFile(filePath)
})

app.get("/contact", (req, res) => {
    let filePath = path.join(__dirname, "pages", "contact", "contact.html")
    res.sendFile(filePath)
})

app.get("/list", (req, res) => {
    res.send(list)
})
app.post("/register", (req, res) => {
    list.push(req.body)
    res.redirect("/list")

})

app.listen(8000, () => {
    console.log(`Server is listening on port 8000...`)
})
