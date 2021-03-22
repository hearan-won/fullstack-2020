const http = require('http')

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


// create new server using http module function
const app = http.createServer((request, response) => {
  // content type - inform receiver that data is in JSON Format 
  response.writeHead(200, { 'Content-Type': 'application/json' })
  // notes array gets transformed into JSON
  response.end(JSON.stringify(notes))
})

const PORT = 3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)