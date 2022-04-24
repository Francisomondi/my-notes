
import NotesList from './components/NotesList';
import { useState } from 'react'
import { nanoid } from 'nanoid';
import Search from './components/Search';

const App = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: 'this is the first note',
      date: '18th feb 2020'
    },
    {
      id: nanoid(),
      text: 'this is the second note',
      date: '11th feb 2020'
    },
    {
      id: nanoid(),
      text: 'this is the third note',
      date: '15th feb 2020'
    },
    {
      id: nanoid(),
      text: 'this is the fourth note',
      date: '17th feb 2020'
    },
    {
      id: nanoid(),
      text: 'this is the fifth note',
      date: '13th feb 2020'
    },
    {
      id: nanoid(),
      text: 'this is the odd note',
      date: '03th feb 2020'
    },

  ]);
  const [searchText, setSearchText] = useState('');

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      text: text,
      date: date.toLocaleDateString()
    }
    const newNotes = [...notes, newNote]
    setNotes(newNotes)
  }

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id)
    setNotes(newNotes)
  }

  return (
    <div className="container">
      <Search handleSearchNote={setSearchText} />
      <NotesList
        notes={notes.filter((note) => note.text.toLowerCase().includes(searchText))}
        handleAddNote={addNote}
        handleDeleteNote={deleteNote}
      />
    </div>
  )

}

export default App;