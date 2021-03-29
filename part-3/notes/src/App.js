import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Note from './components/Note'
import noteService from './services/notes'

const App = () => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(false)

  // fetch data from server
  useEffect(() => {
    // replace axios.get
    noteService
      .getAll()
      .then(initialNotes => {
        setNotes(initialNotes)
      })
  }, [])
  console.log('render', notes.length, 'notes')
  
  const addNote = (event) => {
    event.preventDefault()
    const noteObject = {
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() > 0.5,
      id: notes.length + 1,
    }
  
    // post on server
    // replace using module
    noteService
      .create(noteObject)
      .then(returnedNote => {
      // set new note for display
        setNotes(notes.concat(returnedNote.data))
        setNewNote('')
     })
  }

  const handleNoteChange = (event) => {
    console.log(event.target.value)
    setNewNote(event.target.value)
  }

  const notesToShow = showAll
  ? notes
  : notes.filter(note => note.important)


  const toggleImportanceOf = (id) => {
    const url = `http://localhost:3001/notes/${id}`
    // find the note object with id
    const note = notes.find(n => n.id === id)
    // this is only a shallow-copy
    // field by field  copy (if refernece, the reference is copied)
    // deep copy: new  copy objects are created for any referenced object 
    // value of new object are the same as values of old object
    const changedNote = {...note, important: !note.important }

    // replace the note
    noteService
      .update(id, changedNote)
      .then(returnedNote => {
        // if not the id looking for, just original note, otherwise change to response.data
        setNotes(notes.map(note => note.id !== id ? note : returnedNote.data))
      })
      .catch(error => {
        alert(
          'the note '+ note.content + 'was already delted from server'
        )
        setNotes(notes.filter(n => n.id !== id))
      })
    
  }
  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all' }
        </button>
      </div>   
      <ul>
        {notesToShow.map(note => 
            <Note 
            key={note.id} 
            note={note}
            toggleImportance={() => toggleImportanceOf(note.id)} />
        )}
      </ul>
      <form onSubmit={addNote}>
        <input
          value={newNote}
          onChange={handleNoteChange}
        />
        <button type="submit">save</button>
      </form>  
    </div>
  )
}

export default App