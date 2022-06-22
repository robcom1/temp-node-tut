const express = require ("express");
const app = express()
const {products} = require("./data")

app.get("/", (req,res) => {
    res.send("<h1>Home Page</h1><a href='/api/products'>products</a>")
})

app.get("/api/products", (req,res) => {
    //scelgo di ritornare solo una parte del prodotto
    const newProducts = products.map((product) => {
        const {id,name,image} = product;
        return {id,name,image};
    })
    res.json(newProducts);
})

// // tiro fuori 1 prodotto, ma se ne ho tanti non funziona, è scomodissimo
// app.get("/api/products/1", (req,res) => {
//     const singleProduct = products.find( (product) => 
//     product.id === 1);

//     res.json(singleProduct);
// })

// cosi metodo per tirare fuori tutti gli oggetti per ID in un colpo solo :

app.get("/api/products/:productID", (req,res) => {
    // questo è il mega oggetto
    // console.log(req);
    // console.log(req.params);

    const {productID} = req.params;
    // ricorda di trasformare la stringa in numero
    const singleProduct = products.find((product) => product.id === Number(productID))
    // però uno potrebbe mettere un id che non ha senso, un valore o una stringa che non è nei prodotti:
    if(!singleProduct){
        return res.status(404).send("Product Does Not Exist")
    }
    
    return res.json(singleProduct)
})

// se fosse piu complesso

app.get("/api/products/:productID/reviews/:reviewID" , (req,res) => {
    console.log(req.params);
    res.send("hello world") 
})

// usare le query

app.get("/api/v1/query" , (req,res) => {
    // la req.query ti fa accedere ai parametri richiesti nella query
    // in base cosa viene richiesto, per es /query?name=jhon&id=3
    // console.log(req.query)

    // poi dodbbiamo noi fare si che la risposta sia corretta:
    const {search,limit} = req.query
    let sortedProducts = [...products]

    // se la search è nella query filtro i prodotti
    if(search){
        sortedProducts = sortedProducts.filter((product) => {
            return product.name.startsWith(search)
        })
    }
    if(limit){
        sortedProducts = sortedProducts.slice(0, Number(limit))
    }
    if(sortedProducts.length < 1){
        // un apporccio comune se non trovo nulla con la query corretta
        return res.status(200).json({success:true,data: []})
    }
    // se non trova il query string parameter che ho impostato (query string "sbagliata")
    // butto fuori tutti i prodotti
    // se invece metto per es : /query?limit=3 butto fuori 3 items come da filtro
    res.status(200).json(sortedProducts)
})

// ATTENZIONE SOPRA A METTERE I RETURN, se non LO METTO LUI CONTINUA E 
// SI INCHIODA PERCHE SCORRE IL CODE E ARRIVA ALLA RESPONSE SUCCESSIVA
// MA LUI NON GLI VA BENE AVERE PIU RISOPOSTE CON UNA SOLA REQUEST

app.listen(5000, () => {
    console.log("server il listening on port 5000...");
})

