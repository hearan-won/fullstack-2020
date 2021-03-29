const express = require('express')
const app = express()

let persons = [
    {
        id: 1,
        name: "Arto Hellas",
        number: "040-123456"
    },
    {
        id: 2,
        name: "Ada Lovelace",
        number: "39-44-5323523"
    },
    {
        id: 3, 
        name: "Dan Abramov",
        number: "39-23-6423122"
    },

    {
        id: 4,
        name: "Mary Poppendick",
        number: "39-23-6423122"
    }

]

app.get('/info', (request, response) => {
    const count = persons.length
    const time = new Date()
    const message = '<br>Phonebook has info for ' + count + ' people</br>' + time 

    response.send(message)
})


app.get('/api/persons', (request, response) => {
    response.json(persons)
})

app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const person = persons.find(person => person.id === id)
    
    if (person) {
        response.json(person)
    } else {
        response.status(404).end()
    }
    
})

app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    persons = persons.filter(person => person.id !== id)

    response.status(204).end()
})

// in order to access data easily, we need help of express json-parser
app.use(express.json())

const generateId = () => {
    return Math.floor(Math.random() * Math.floor(1000000000000))
}

app.post('/api/persons', (request, response) => {
    const body = request.body
    console.log(body)
    
    const existingName = persons.find(person => person.name == body.name)
    const duplicate = typeof existingName === "undefined" ? false : true;

    if (!body.name || !body.number) {
        return response.status(400).json({
            
            error: 'content missing'
        }) 
    
    } else if (duplicate) {
        return response.status(200).json({
            error: 'name already exists'
        })

    } else {
        const person = {
            id: generateId(),
            name: body.name,
            number: body.number,

        }

        persons = persons.concat(person)
    
        response.json(persons)
    }

})


const requestLogger = (request, response, next) => {
    console.log('Method:', request.method)
    console.log('Path:  ', request.path)
    console.log('Body:  ', request.body)
    console.log('---')
    next()
}


app.use(requestLogger)
const PORT = 3001
app.listen(PORT, () => {
    console.log('Server running on port ${PORT}')
})
