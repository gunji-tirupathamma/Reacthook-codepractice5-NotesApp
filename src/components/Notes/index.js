// Write your code here
import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'

import NoteItem from '../NoteItem'
import {
  MainContainer,
  NoteHeading,
  FormContainer,
  InputNoteTitle,
  NoteDescription,
  AddButton,
  NoNoteContainer,
  Image,
  NoNoteText,
  NoNoteDescription,
  NoteList,
} from './styledComponents'

const Notes = () => {
  const [title, setTitle] = useState('')
  const [noteText, setNoteText] = useState('')
  const [noteList, setNoteList] = useState([])

  const renderNotes = () => (
    <NoteList>
      {noteList.map(eachNote => (
        <NoteItem key={eachNote.id} noteDetails={eachNote} />
      ))}
    </NoteList>
  )

  const renderEmptyNotesView = () => (
    <NoNoteContainer>
      <Image
        src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
        alt="notes empty"
      />
      <NoNoteText>No Notes Yet</NoNoteText>
      <NoNoteDescription>Notes you add will appear here</NoNoteDescription>
    </NoNoteContainer>
  )

  const onChangeTitle = event => {
    setTitle(event.target.value)
  }

  const onChangeNoteText = event => {
    setNoteText(event.target.value)
  }

  const onAddNote = event => {
    event.preventDefault()

    const newNote = {
      id: uuidv4(),
      title,
      noteText,
    }
    setNoteList(prevNoteList => [...prevNoteList, newNote])
    setTitle('')
    setNoteText('')
  }

  return (
    <MainContainer>
      <NoteHeading>Notes</NoteHeading>
      <FormContainer onSubmit={onAddNote}>
        <InputNoteTitle
          type="text"
          placeholder="Title"
          onChange={onChangeTitle}
          value={title}
        />
        <NoteDescription
          type="text"
          placeholder="Take a Note..."
          onChange={onChangeNoteText}
          value={noteText}
          rows="3"
        />
        <AddButton type="submit">Add</AddButton>
      </FormContainer>
      {noteList.length === 0 ? renderEmptyNotesView() : renderNotes()}
    </MainContainer>
  )
}
export default Notes
