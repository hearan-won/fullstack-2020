import React from 'react'

const Note = ({ note, toggleImportance }) => {
  // if note.important -> true, the button will say make not important
  const label = note.important
  ? 'make not important' : 'make important'

  return (
    <li>
      {note.content}
      <button onClick={toggleImportance}> {label} </button>
    </li>
  )
}

export default Note