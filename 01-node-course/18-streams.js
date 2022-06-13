// ORA VEDIAMO GLI STREAMS

const {createReadStream} = require("fs");


// leggiamo spezzoni di file

// default 64kb
// last buffer - remainder
// highWaterMark - control size
// const stream = createReadStream('./content/big.txt', { highWaterMark: 90000 })
// const stream = createReadStream('../content/big.txt', { encoding: 'utf8' })

const stream = createReadStream("./content/big.txt");

stream.on("data", (result) => {
    console.log(result)
})

stream.on("error", (err) => console.log(err))
