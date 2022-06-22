const express = require ("express");
const app = express()
const {products} = require("./data")


// gestiamo i prodotti dal file precompilato:
const {products} = require("./data.js")


// API: come back end siamo reponsabili delle risposte del server!

app.get("/", (req,res) => {
    // manda una riposta in json , converitto con stringify
    // res.json([{name: "john"},{name:"susan"}])
    // qua per i dati dal file
    res.json(products)
})

app.listen(5000, () => {
    console.log("server il listening on port 5000...");
})