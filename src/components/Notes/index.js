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
    setTitle('')
    setNoteText('')
    setNoteList(prevNoteList => [...prevNoteList, newNote])
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
        />
        <AddButton type="submit">Add</AddButton>
      </FormContainer>
      <NoNoteContainer>
        <Image
          src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
          alt="notes empty"
        />
        <NoNoteText>No Notes yet</NoNoteText>
        <NoNoteDescription>Notes you add will appear here</NoNoteDescription>
      </NoNoteContainer>
      <NoteList>
        {noteList.map(eachNote => (
          <NoteItem noteDetails={eachNote} key={eachNote.id} />
        ))}
      </NoteList>
    </MainContainer>
  )
}
export default Notes
