const express = require ("express");
const app = express()
const logger = require("./logger")
const authorize = require("./authorize")

// req => middleware => res

// metodo in cui passi il middleware
app.use([logger, authorize])

// ora posso toglierlo dalle altre chiamate

app.get("/",  (req,res) => {
    res.send("Home")
})

app.get("/abi/products",  (req,res)=>{
    res.send("Products")
})

app.get("/abi/items",  (req,res)=>{
    console.log(req.user)
    res.send("Items")
})

app.get("/about", (req,res)=>{
    res.send("About")
})

app.listen(5000, () => {
    console.log("server il listening on port 5000...");
})

