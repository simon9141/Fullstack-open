const express = require('express')
const app = express()
const morgan =require('morgan')
const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use(morgan('tiny'))
const persons= [
    { 
      "id": 1,
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": 2,
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": 3,
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": 4,
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
]

app.get('/api/persons',(req,res)=>{
    res.send(persons)
})
app.get('/api/persons/:id',(req,res)=>{
    const id = Number(req.params.id)
    const person= persons.find(person=>person.id===id)

    if(person){
        res.json(person)
    }else{
        res.status(404).json({error: 'Entry not found'})
    }
})

app.get('/info',(req,res)=>{
    const time = new Date().toLocaleString();
    const entries = persons.length
    const html =` <p>phonebook has info for ${entries} people <br /> ${time}</p>`
    
    res.send(html)
})
app.post('/api/persons',(req,res)=>{
    const {name, number} = req.body

    if(!name || !phone){
        return res.status(400).json({error:"name and phone required"})
    }

    const id = generateId()
    const newPerson={id, name, number}
    persons.push(newPerson)

    res.status(201).json(newPerson)
})

app.delete('api/person/:id',(req, res)=>{
    const id = Number(req.params.id)
    const index = persons.find(person=>person.id !==id)

    if(index){
        res.status(204).end()
    }
    else{
        res.status(404).json({error: 'not found'})
    }
})

function generateId() {
  const min = 1;
  const max = 1000000;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const PORT = process.env.PORT || 3001
app.listen(PORT,()=>{
    console.log(`server running at port ${PORT}`)
})