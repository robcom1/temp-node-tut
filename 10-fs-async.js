// async method
const {readFile, writeFile} = require("fs")
console.log("start");

// con async uso le callback
readFile("./content/first.txt","utf8",(err,result)=>{
    if(err){
        console.log(err);
        return;
    }
    const first = result;
    readFile("./content/second.txt","utf8",(err,result)=>{
        if(err){
            console.log(err);
            return;
        }
        const second = result;
        writeFile(
            "./content/result-async.txt",
            `Here is the result async: ${first}, ${second}`,
            (err,result) => {
                if(err){
                    console.log(err);
                    return;
                }
                console.log("Done whith this task");
            })
    })
})

console.log("starting the next one");

// ECCO LA CALLBACK HELL!!!
