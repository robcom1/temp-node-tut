const express = require ("express");
const app = express()

// req => middleware => res
// il middleware sta nel mezzo tra la request e la risposta

// express la applica per noi
// importante il next: QUANDO FAI UN MIDDLEWARE
// DEVI PASSARE AD UN ALTRO MIDDLEWARE
// a meno che metto un send alla fine
// O PASSI AD UN ALTRO MIDDLEWARE O FAI IL SEND

const logger = (req, res, next) => {
    const method = req.method;
    const url = req.url;
    const time = new Date().getFullYear();
    console.log(method, url, time);
    // qua come sopra o send o next...
    //res.send("Testing")
    next()
}

// metto la middleware dentro la get:
app.get("/", logger, (req,res) => {

    // // esempio di log con vari richiami a metodi di req
    // // PROBLEMA : SE HO TANTE ROUTES, DEVO COPIARE ED INCOLLARE STA ROBA
    // // TUTTE LE VOLTE CHE MI SERVE
    // const method = req.method;
    // const url = req.url;
    // const time = new Date().getFullYear();
    // console.log(method, url, time);


    res.send("Home")
})

app.get("/about", logger, (req,res)=>{
    res.send("About")
})

app.listen(5000, () => {
    console.log("server il listening on port 5000...");
})

