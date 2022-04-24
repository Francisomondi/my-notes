
import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import NotesList from './components/NotesList';
import Search from './components/Search';
import Header from './components/Header';


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
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    localStorage.setItem('react-notes-app-data', JSON.stringify(notes))

  }, [notes])

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

    <div className={`${darkMode && 'dark-mode'}`}>
      <div className="container">
        <Header handleToggleDarkMode={setDarkMode} />
        <Search handleSearchNote={setSearchText} />
        <NotesList
          notes={notes.filter((note) => note.text.toLowerCase().includes(searchText))}
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
        />
      </div>
    </div>

  )

}

export default App;