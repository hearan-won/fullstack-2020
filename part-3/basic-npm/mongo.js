const mongoose = require('mongoose')

if (process.argv.length < 3) {
  console.log('Please provide the password as an argument: node mongo.js <password>')
  process.exit(1)
}

// establish connection with the database
const password = process.argv[2]

const url =
  `mongodb+srv://fullstack:${password}@cluster0.5pj6o.mongodb.net/note-app?retryWrites=true&w=majority`

  
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })

// define the schema for a note and matching model 
const noteSchema = new mongoose.Schema({
  content: String,
  date: Date,
  important: Boolean,
})

const Note = mongoose.model('Note', noteSchema)

// create new note object
// const note = new Note({
//   content: 'Callback functions suck',
//   date: new Date(),
//   important: false,
// })

// //saving object in database
// note.save().then(result => {
//     console.log('note saved!')
//     mongoose.connection.close()
// })

// {} - search condition, empty means all notes
// Note.find({important: true}).then(...) to find important ones
Note.find({important: true}).then(result => {
    result.forEach(note => {
      console.log(note)
    })
    mongoose.connection.close()
})

