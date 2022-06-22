const express = require ("express");
const app = express()
const logger = require("./logger")
const authorize = require("./authorize")
const morgan = require("morgan")

// req => middleware => res

// ora posso toglierlo dalle altre chiamate
// posso ancheusare il middleware solo in una singola route

// POSSIAMO USARE LE MIDDLEWARE DI EXPRESSO GIA PRONTE
// e anche ti terze parti
// PER ES MORGAN NPM (lo deoco instalalre)

app.use(morgan("tiny"))

app.get("/",  (req,res) => {
    res.send("Home")
})

app.get("/abi/products",  (req,res)=>{
    res.send("Products")
})

app.get("/abi/items", [logger, authorize],  (req,res)=>{
    console.log(req.user)
    res.send("Items")
})

app.get("/about", (req,res)=>{
    res.send("About")
})

app.listen(5000, () => {
    console.log("server il listening on port 5000...");
})

