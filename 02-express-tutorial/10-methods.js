const { json } = require("express");
const express = require ("express");
const app = express()
let { people } = require("./data")

// static assets:
app.use(express.static("./methods-public"))
// parse form data
app.use(express.urlencoded({ extended: false}))
// parse json:
app.use(express.json())

// here read the data
app.get('/api/people', (req, res) => {
    res.status(200).json({success: true, data: people })
})
// here i add datas
app.post('/api/people',(req, res) => {
    const { name } = req.body
    if(!name){
        return res.status(400).json({success:false,msg:"Please provide name value"})
    }
    res.status(201).json({success:true,person:name})
})


app.post('/api/postman/people',(req, res) => {
    const { name } = req.body
    if(!name){
        return res.status(400)
        .json({success:false,msg:"Please provide name value"})
    }
    res.status(201).json({success: true, data: [...people,name]})
})

// put: update data

app.put("/api/people/:id", (req, res) => {
    const { id } = req.params
    const { name } = req.body
    
    const person = people.find((person) => person.id === Number(id))
    if(!person) {
        return res
         .status(400)
         .json({success: false, msg: `no person with id ${id}`})
    }
    const newPeople = people.map((person) => {
        if(person.id === Number(id)){
            person.name = name
        }
        return person
    })
    res.status(200).json({success: true, data: newPeople})
})

// posso usare stesso path se metdo è diverso, no provlema

app.delete("/api/people/:id", (req, res) => {

    const person = people.find((person) => person.id === Number(req.params.id))

    if(!person) {
        return res
         .status(400)
         .json({success: false, msg: `no person with id ${req.params.id}`})
    }

    const newPeople = people.filter((person) => person.id !== Number(req.params.id))
    return res.status(200).json({success:true, data: newPeople})
})

app.post("/login", (req,res) => {
    const { name } = req.body;
    if(name){
        return res.status(200).send(`Welcome ${name}`)
    }
    res.status(401).send("Please Provide Credentials");
})
app.listen(5000, () => {
    console.log("server is listening on port 5000...");
})

