const express = require("express");
const path = require("path")
const app = express();

// in express per recuperare i ifle css ecc è pi easy:
// li metto in una directory

// static e middleware setup:
// static asset intendo files che il server non deve modificare
app.use(express.static("./public"))

// posso mettere html nel send o metterlo negli stati asset copiandolo nella cartella

// app.get("/", (req,res) => {
//     res.sendFile(path.resolve(__dirname, "./navbar-app/index.html"))
//     adding to static asset
//     SSR
// })

app.all("*", (req,res) => {
    res.status(404).send("resource not found")
})

app.listen(5000, () => {
    console.log("server listen to port 5000...");
})
