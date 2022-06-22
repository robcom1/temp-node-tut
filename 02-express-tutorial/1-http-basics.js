console.log('Express Tutorial')
// http è built in
const http = require("http");

// req request e res response objects (convenzione chiamarle cosi)
const server = http.createServer((req,res)=>{
    console.log("user hit the server")
    // oggetto req è un oggetto gigante che posso interrogare come voglio
    // qua mi da url richiesto dall'user
    console.log(req.url)
    // cosi il metodo che usa
    console.log(req.method)

    const url = req.url
    // home page
    if(url === '/') {
        // metodo scrittura (se per es mettessi text/plain non riconosce  html)
        // il numro è lo status code
        res.writeHead(200,{"content-type":"text/html"})
        res.write("<h1>home page</h1>")
        // il metodo response.end va chimato su tutte le risposte!
        // come segnale che la comunicazione è conclusa
        res.end()
    }
    // about page
    else if(url === "/about") {
        res.writeHead(200,{"content-type":"text/html"})
        res.write("<h1>about page</h1>")
        res.end()
    }
    //404
    else {
        res.writeHead(404,{"content-type":"text/html"})
        res.write("<h1> page not found </h1>")
        res.end()
    }
})

// durante lo sviluppo usiamo una porta con numero molto alto che è libera
server.listen(5000)

