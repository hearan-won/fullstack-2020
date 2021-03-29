// change from http to express (library of node.js)
const express = require('express')
const nodemon = require('nodemon')
const app = express() 

// list of notes in JSON format
let notes = [
    {
      id: 1,
      content: "HTML is easy",
      date: "2019-05-30T17:30:31.098Z",
      important: true
    },
    {
      id: 2,
      content: "Browser can execute only Javascript",
      date: "2019-05-30T18:39:34.091Z",
      important: false
    },
    {
      id: 3,
      content: "GET and POST are the most important methods of HTTP protocol",
      date: "2019-05-30T19:20:14.298Z",
      important: true
    }
]

// define event handler, used to handle http get request
app.get('/', (request, response) => {
    response.send('<h1>Hello World!</h1>')
})
  
app.get('/api/notes', (request, response) => {
    response.json(notes)
})

// route with parameter as id 
app.get('/api/notes/:id', (request, response) => {
  const id = Number(request.params.id)
  const note = notes.find(note =>
    //console.log(note.id, typeof note.id, id, typeof id, note.id === id)
    note.id === id)

  if (note) {
    response.json(note)
  } else {
    // throw not found error
    response.status(404).end()
  }
})

// route for deleting 
app.delete('/api/notes/:id', (request, response) => {
  const id = Number(Request.params.id)
  notes = notes.filter(note => note.id !== id)

  // if deleting is successful, respond with status code 204 no content
  // for simplicity, both cases return 204 error
  response.status(204).end()
})

app.use(express.json())

const generateId = () => {
  const maxId = notes.length > 0
    // map returns array, the ... spread syntax changes it into individual nums
    ? Math.max(...notes.map(n => n.id))
    : 0 
  return maxId + 1
}

app.post('/api/notes', (request, response) => {
  const body = request.body

  if (!body.content) {
    return response.status(400).json({
      error: 'content missing'
    })
  }

  const note = {
    content: body.content,
    
    // if the important property is missing, default is false
    important: body.important || false,
    date : new Date(),
    id: generateId(),
  }
  
  notes = notes.concat(note)

  response.json(note)
})


// middleware that prints info about every request sent to server 
const requestLogger = (request, response, next) => {
  console.log('Method:', request.method)
  console.log('Path:  ', request.path)
  console.log('Body:  ', request.body)
  console.log('---')
  // next function yields control to the next middleware
  next()
}

app.use(requestLogger)

// another middleware that catches requests made to non-existent routes
const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}

app.use(unknownEndpoint)

const PORT = 3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)